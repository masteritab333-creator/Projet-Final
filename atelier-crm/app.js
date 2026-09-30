// Logique de l'application : chargement/sauvegarde, validation, affichage.

const CLE_STOCKAGE = "crm_contacts";
const CLE_STOCKAGE_THEME = "crm_theme";

const STATUT_LABELS = {
  a_contacter: "À contacter",
  en_discussion: "En discussion",
  gagne: "Gagné",
  perdu: "Perdu",
};

function sauvegarderContacts(contacts) {
  localStorage.setItem(CLE_STOCKAGE, JSON.stringify(contacts));
}

function chargerContacts() {
  const donneesBrutes = localStorage.getItem(CLE_STOCKAGE);
  if (donneesBrutes) {
    try {
      return JSON.parse(donneesBrutes);
    } catch (erreur) {
      // Données corrompues dans le navigateur : on repart des données de démo.
      return [...contactsInitiaux];
    }
  }
  const initiaux = [...contactsInitiaux];
  sauvegarderContacts(initiaux);
  return initiaux;
}

let contacts = chargerContacts();

const formulaire = document.getElementById("formulaire-contact");
const champNom = document.getElementById("champ-nom");
const champEntreprise = document.getElementById("champ-entreprise");
const champStatut = document.getElementById("champ-statut");
const champDate = document.getElementById("champ-date");
const zoneErreur = document.getElementById("zone-erreur");
const listeContacts = document.getElementById("liste-contacts");
const boutonTheme = document.getElementById("bouton-theme");
const filtreStatut = document.getElementById("filtre-statut");

function normaliser(texte) {
  return texte.trim().toLowerCase();
}

function estDoublon(nom, entreprise) {
  return contacts.some(
    (c) => normaliser(c.nom) === normaliser(nom) && normaliser(c.entreprise) === normaliser(entreprise)
  );
}

function afficherErreur(message) {
  zoneErreur.textContent = message;
  zoneErreur.hidden = !message;
}

function genererId() {
  return `c${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

function echapper(texte) {
  const div = document.createElement("div");
  div.textContent = texte;
  return div.innerHTML;
}

// Convertit une date ISO (YYYY-MM-DD) en libellé relatif lisible.
function libelleRelance(dateISO) {
  const [annee, mois, jour] = dateISO.split("-").map(Number);
  const date = new Date(annee, mois - 1, jour);
  const aujourdHui = new Date();
  aujourdHui.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  const diffJours = Math.round((aujourdHui - date) / (1000 * 60 * 60 * 24));

  if (diffJours === 0) return "Aujourd'hui";
  if (diffJours === 1) return "Hier";
  if (diffJours > 1) return `Il y a ${diffJours} jours`;
  return date.toLocaleDateString("fr-FR");
}

function afficherContacts() {
  const statutChoisi = filtreStatut.value;
  const contactsFiltres =
    statutChoisi === "tous" ? contacts : contacts.filter((c) => c.statut === statutChoisi);

  const contactsTries = [...contactsFiltres].sort((a, b) =>
    a.derniereRelance < b.derniereRelance ? 1 : a.derniereRelance > b.derniereRelance ? -1 : 0
  );

  listeContacts.innerHTML = "";

  if (contactsTries.length === 0) {
    listeContacts.innerHTML = "<p class='liste-vide'>Aucun contact pour ce filtre.</p>";
    return;
  }

  for (const contact of contactsTries) {
    const carte = document.createElement("article");
    carte.className = "carte-contact";
    carte.innerHTML = `
      <div class="carte-en-tete">
        <h3>${echapper(contact.nom)}</h3>
        <span class="badge badge-${contact.statut}">${STATUT_LABELS[contact.statut]}</span>
      </div>
      <p class="carte-entreprise">${echapper(contact.entreprise)}</p>
      <p class="carte-date">Dernière relance : ${libelleRelance(contact.derniereRelance)}</p>
      <div class="carte-actions">
        <button type="button" class="bouton-supprimer" data-id="${contact.id}">Supprimer</button>
      </div>
    `;
    listeContacts.appendChild(carte);
  }
}

filtreStatut.addEventListener("change", () => {
  afficherContacts();
});

listeContacts.addEventListener("click", (evenement) => {
  const bouton = evenement.target.closest(".bouton-supprimer");
  if (!bouton) return;

  const id = bouton.dataset.id;
  const contact = contacts.find((c) => c.id === id);
  if (!contact) return;

  const confirmation = confirm(`Supprimer ${contact.nom} (${contact.entreprise}) ?`);
  if (!confirmation) return;

  contacts = contacts.filter((c) => c.id !== id);
  sauvegarderContacts(contacts);
  afficherContacts();
});

function appliquerTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  boutonTheme.textContent = theme === "sombre" ? "☀️" : "🌙";
}

boutonTheme.addEventListener("click", () => {
  const themeActuel = document.documentElement.getAttribute("data-theme");
  const nouveauTheme = themeActuel === "sombre" ? "clair" : "sombre";
  appliquerTheme(nouveauTheme);
  localStorage.setItem(CLE_STOCKAGE_THEME, nouveauTheme);
});

formulaire.addEventListener("submit", (evenement) => {
  evenement.preventDefault();
  afficherErreur("");

  const nom = champNom.value.trim();
  const entreprise = champEntreprise.value.trim();
  const statut = champStatut.value;
  const derniereRelance = champDate.value;

  if (!nom || !entreprise || !derniereRelance) {
    afficherErreur("Merci de remplir tous les champs.");
    return;
  }

  const aujourdHuiISO = formatDateISO(new Date());
  if (derniereRelance > aujourdHuiISO) {
    afficherErreur("La date de dernière relance ne peut pas être dans le futur.");
    return;
  }

  if (estDoublon(nom, entreprise)) {
    afficherErreur(`${nom} (${entreprise}) existe déjà.`);
    return;
  }

  contacts.push({ id: genererId(), nom, entreprise, statut, derniereRelance });
  sauvegarderContacts(contacts);
  afficherContacts();

  formulaire.reset();
  champDate.value = aujourdHuiISO;
  champNom.focus();
});

// Initialisation de la page
const aujourdHuiISO = formatDateISO(new Date());
champDate.max = aujourdHuiISO;
champDate.value = aujourdHuiISO;
appliquerTheme(localStorage.getItem(CLE_STOCKAGE_THEME) || "clair");
afficherContacts();
