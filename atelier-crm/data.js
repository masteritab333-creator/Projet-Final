// Données fictives de démonstration.
// Les dates sont calculées par rapport à aujourd'hui, donc "hier",
// "il y a 3 jours", etc. restent justes quel que soit le jour d'exécution.

function formatDateISO(date) {
  const annee = date.getFullYear();
  const mois = String(date.getMonth() + 1).padStart(2, "0");
  const jour = String(date.getDate()).padStart(2, "0");
  return `${annee}-${mois}-${jour}`;
}

function ilYaJours(nombreJours) {
  const date = new Date();
  date.setDate(date.getDate() - nombreJours);
  return formatDateISO(date);
}

const contactsInitiaux = [
  { id: "c1", nom: "Awa Koffi", entreprise: "Nova SARL", statut: "en_discussion", derniereRelance: ilYaJours(0) },
  { id: "c2", nom: "Marc Sodji", entreprise: "TechBenin", statut: "a_contacter", derniereRelance: ilYaJours(1) },
  { id: "c3", nom: "Sofia Almeida", entreprise: "BéninAgro", statut: "gagne", derniereRelance: ilYaJours(3) },
  { id: "c4", nom: "Karim Traoré", entreprise: "Cotonou Digital", statut: "perdu", derniereRelance: ilYaJours(7) },
  { id: "c5", nom: "Julie Mensah", entreprise: "TechBenin", statut: "en_discussion", derniereRelance: ilYaJours(1) },
  { id: "c6", nom: "Paul Dossou", entreprise: "Olympe Conseil", statut: "a_contacter", derniereRelance: ilYaJours(0) },
];
