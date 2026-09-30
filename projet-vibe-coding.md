# Projet vibe coding : un mini-CRM de suivi de contacts

> **Objectif du projet —** Un prompt cadré, un plan validé avant le moindre code, une petite application de suivi de contacts avec des données fictives, des tests sur les cas limites, puis un lien public sur Vercel.

| ⏱️ Durée | 📂 Session ouverte sur |
|:---:|:---:|
| 60 min | `atelier-crm` (dossier vide) |

> [!IMPORTANT]
> **🧰 À préparer avant la séance**
> - Un compte **Vercel** gratuit (créé et connecté une fois dans le navigateur).
> - **Node.js** installé : dans un terminal, `node --version` doit répondre un numéro de version.
> - Un dossier **vide** nommé `atelier-crm` (par exemple dans Documents).

## 🎯 À la fin de ce projet
- Vous avez donné un prompt cadré et obtenu un **plan avant tout code**.
- Votre application affiche **6 contacts** fictifs, accepte **3** des 6 tests d'ajout et en refuse **3**.
- Elle est en ligne sur Vercel, avec un lien public que vous avez ouvert sur un autre appareil.

---

## Étape 1 · Ouvrir une session sur un dossier vide · ⏱️ 3 min

Un projet qui démarre de zéro : aucun fichier, aucun code, seulement votre prompt.

1. Vérifiez que le dossier `atelier-crm` existe et qu'il est **vide**.
2. Ouvrez une **Nouvelle session** sur ce dossier, réglée comme dans l'encadré violet, en choisissant `atelier-crm`.
3. Dans la barre latérale, section **Récents**, faites un clic droit sur la session surlignée, tout en haut.
4. Choisissez **Renommer**, tapez `Mini CRM`, puis appuyez sur **Entrée**.

> [!IMPORTANT]
> **🎛️ Réglage de la session**
>
> | Session | Modèle | Effort | Mode |
> |:---:|:---:|:---:|:---:|
> | 🆕 Nouvelle session | **Sonnet 5** | **Élevée** | **Manuel** |
>
> **Pourquoi :** Manuel vous montre chaque fichier écrit et chaque commande, et vous laisse refuser ce qui sort du cadre.

> [!TIP]
> **✅ Vous devez voir**
> - Une session nommée **Mini CRM**, ouverte sur `atelier-crm`.
> - Aucun fichier dans le dossier.

---

## Étape 2 · Donner le prompt cadré et obtenir un plan · ⏱️ 8 min

Le prompt décrit la situation, les données, les règles et la méthode. Sa dernière partie interdit d'écrire du code avant votre accord.

1. Collez le prompt ci-dessous, sans rien ajouter, puis appuyez sur **Entrée**.
2. Si une carte d'autorisation apparaît, répondez avec le tableau sous le prompt.
3. Claude vous pose une question ? Répondez : `Fais comme tu veux, en respectant les contraintes du prompt.`
4. Claude commence à écrire un fichier ? Cliquez sur **Refuser**, puis collez : `Stop : propose d'abord un plan, sans écrire de fichier.`
5. Lisez le plan **sans le valider tout de suite** : vous le validerez à l'étape 3.

> [!IMPORTANT]
> **🎛️ Réglage de la session**
>
> | Session | Modèle | Effort | Mode |
> |:---:|:---:|:---:|:---:|
> | ↪️ Même session | **Sonnet 5** | **Élevée** | **Manuel** |
>
> **Pourquoi :** on garde le réglage de l'étape 1 : c'est le prompt, et non le réglage, qui empêche d'écrire trop tôt.

📋 **Prompt à coller**

```text
<role>
Tu es un développeur front-end expérimenté qui accompagne un débutant.
Tu écris du code simple, lisible et commenté en français.
</role>

<contexte>
Une petite équipe commerciale suit ses prospects sur un tableur partagé,
ce qui provoque des doublons de contacts et des relances oubliées.

L'équipe veut un outil très simple pour suivre ses contacts, leur statut
et la date de leur dernière relance, utilisable par n'importe quel
commercial depuis son téléphone ou son ordinateur, sans créer de compte.

C'est un prototype : les données sont fictives, il n'y a pas de vraie
base de données, et l'application sera déployée rapidement sur Vercel
pour être testée par l'équipe.
</contexte>

<objectif>
Créer une application web de suivi de contacts (mini-CRM), en français, sans backend.
</objectif>

<donnees_fictives>
Écris-les dans data.js. Génère les dates à partir de la date du jour
(« aujourd'hui », « hier », etc. doivent rester justes quel que soit le jour).

Contacts d'exemple (6) :
- Awa Koffi, Nova SARL, en discussion, dernière relance aujourd'hui
- Marc Sodji, TechBenin, à contacter, dernière relance hier
- Sofia Almeida, BéninAgro, gagné, dernière relance il y a 3 jours
- Karim Traoré, Cotonou Digital, perdu, dernière relance il y a 7 jours
- Julie Mensah, TechBenin, en discussion, dernière relance hier
- Paul Dossou, Olympe Conseil, à contacter, dernière relance aujourd'hui

Ces données s'affichent au premier chargement. Les nouveaux contacts sont
conservés dans le navigateur (localStorage) et rechargés au démarrage.
</donnees_fictives>

<fonctionnalites>
1. Afficher la liste des contacts avec entreprise, statut et date de
   dernière relance.
2. Afficher les contacts triés par date de dernière relance, la plus
   récente en premier.
3. Ajouter un contact : nom, entreprise, statut initial (à contacter,
   en discussion, gagné ou perdu), date de dernière relance.
4. Refuser l'ajout d'un contact dont le nom et l'entreprise
   correspondent déjà à un contact existant (comparaison insensible à
   la casse et aux espaces superflus), avec un message clair (ex.
   « Awa Koffi (Nova SARL) existe déjà »).
5. Refuser toute date de dernière relance postérieure à aujourd'hui.
</fonctionnalites>

<contraintes>
- Pas de backend, pas de base de données, pas de compte à créer.
- 4 fichiers au maximum : index.html, style.css, app.js, data.js.
  Ne crée aucun autre fichier.
- Pas de framework, pas de dépendance, aucune installation.
- Interface simple et propre, lisible sur téléphone.
- Tous les textes affichés sont en français.
- Site statique : index.html à la racine du dossier, chemins relatifs,
  déployable sur Vercel sans aucune configuration.
</contraintes>

<criteres_de_reussite>
- Un nouveau contact valide apparaît dans la liste.
- Un contact dont le nom et l'entreprise correspondent à un contact
  existant est refusé, même avec une casse différente.
- Deux contacts de la même entreprise mais de noms différents sont acceptés.
- Une date de dernière relance postérieure à aujourd'hui est refusée.
- Les contacts restent visibles après rechargement de la page.
</criteres_de_reussite>

<methode>
1. Propose d'abord un plan court : structure des fichiers, modèle de
   données, logique de détection des doublons.
   N'écris AUCUN fichier avant que j'aie validé ce plan.
2. Après ma validation, construis l'application en une seule passe.
3. Termine par 5 lignes maximum pour l'ouvrir en local.
</methode>
```

**Quand Claude demande l'autorisation :**

| Claude veut… | Vous cliquez |
|---|---|
| lire ou lister le dossier `atelier-crm` (`Get-ChildItem`, `dir`, `ls`) | ✅ **Autoriser une fois** |
| écrire ou modifier un fichier (carte « Autoriser Claude à écrire … ? »), ou toute commande | ❌ **Refuser** |

> [!NOTE]
> 💬 Le prompt a huit parties : **Rôle**, **Contexte**, **Objectif**, **Données**, **Fonctionnalités**, **Contraintes**, **Critères de réussite** et **Méthode**. Le contexte décrit le problème réel (qui, quoi, pourquoi), pas le projet.

> [!TIP]
> **✅ Vous devez voir**
> - Un **plan** et non du code : 4 fichiers au plus (`index.html`, `style.css`, `app.js`, `data.js`), un modèle de données (contact : nom, entreprise, statut, dernière relance) et la logique de détection des doublons.
> - Une règle de doublon fondée sur **nom + entreprise**, insensible à la casse. Le plan compare-t-il seulement l'entreprise, ou seulement le nom ? Vous le corrigerez à l'étape 3.
> - Aucune carte « A modifié N fichiers » et aucun fichier dans le dossier.
> - La mise en forme du plan varie d'un participant à l'autre. Le modèle de données et la règle de doublon, non.

---

## Étape 3 · Valider le plan et construire l'application · ⏱️ 10 min

Vous validez le plan, en le corrigeant sur le point qui compte, puis Claude construit.

1. Collez le prompt ci-dessous, puis appuyez sur **Entrée**.
2. À chaque carte d'autorisation, **dépliez-la** pour lire le fichier concerné, puis répondez avec le tableau sous le prompt.
3. Quand Claude a terminé, ouvrez l'Explorateur de fichiers, dans `atelier-crm`, et **double-cliquez** sur `index.html` : la page s'ouvre dans votre navigateur.

> [!IMPORTANT]
> **🎛️ Réglage de la session**
>
> | Session | Modèle | Effort | Mode |
> |:---:|:---:|:---:|:---:|
> | ↪️ Même session | **Sonnet 5** | **Élevée** | **Manuel** |
>
> **Pourquoi :** le plan et ses choix sont déjà dans la conversation : changer de session ou de réglage les ferait perdre.

📋 **Prompt à coller**

```text
Plan validé. Point d'attention : la détection de doublon doit comparer le
nom ET l'entreprise (pas l'un des deux seul), en ignorant la casse et les
espaces en trop (« awa koffi » doit être reconnu comme « Awa Koffi »).
Construis maintenant l'application en une seule passe, en respectant les
contraintes du prompt initial, puis donne-moi en 5 lignes maximum comment
l'ouvrir en local.
```

**Quand Claude demande l'autorisation :**

| Claude veut… | Vous cliquez |
|---|---|
| écrire ou modifier `index.html`, `style.css`, `app.js` ou `data.js` dans `atelier-crm` (carte « Autoriser Claude à écrire … ? » ou « Autoriser Claude à modifier … ? ») | ✅ **Autoriser une fois** |
| lire ou lister le dossier `atelier-crm` | ✅ **Autoriser une fois** |
| ouvrir la page ou lancer un petit serveur local (`start index.html`, `python -m http.server`) | ✅ **Autoriser une fois** |
| écrire un fichier hors du dossier, ou créer `package.json`, `node_modules`, un `README.md` ou un dossier de framework | ❌ **Refuser** |
| installer quoi que ce soit (`npm install`, `pip install`) ou toute autre commande | ❌ **Refuser** |

> [!NOTE]
> 💬 Un refus n'est pas un échec : après un **Refuser**, rappelez la contrainte (`Uniquement index.html, style.css, app.js et data.js, sans installation.`) et Claude reprend sans le fichier en trop.

> [!TIP]
> **✅ Vous devez voir**
> - Exactement **4 fichiers** dans `atelier-crm` : `index.html`, `style.css`, `app.js`, `data.js`. Ni `package.json`, ni `node_modules`.
> - Dans le navigateur, une page **en français** avec **6 contacts** fictifs (Awa Koffi, Marc Sodji, Sofia Almeida, Karim Traoré, Julie Mensah, Paul Dossou) triés par date de dernière relance.
> - Un formulaire d'ajout avec nom, entreprise, statut et date de dernière relance.

---

## Étape 4 · Tester la règle de doublon · ⏱️ 8 min

Une application qui « marche » ne suffit pas : on vérifie les cas limites, à la main, avec des valeurs connues.

1. Dans la page ouverte au navigateur, faites les 6 tests du tableau, **un par un, dans l'ordre**.
2. Pour chacun, notez de tête si le résultat est celui de la colonne **Attendu**.
3. Après le test 6, rechargez la page (touche **F5**).
4. Un écart avec la colonne **Attendu** ? Trouvez la ligne correspondante dans **🆘 Si ça coince**, en bas du projet.

**Test 1** — Ajouter *Fatou Zinsou*, *Olympe Conseil*, à contacter, relance aujourd'hui → ✅ **accepté** (nouveau contact, même entreprise que Paul Dossou mais nom différent)

**Test 2** — Ajouter *Awa Koffi*, *Nova SARL* → ❌ **refusé**, message citant le doublon avec le contact existant

**Test 3** — Ajouter *Idriss Bello*, *Nova SARL*, en discussion → ✅ **accepté** (même entreprise qu'Awa Koffi, nom différent : pas un doublon)

**Test 4** — Ajouter *awa koffi*, *nova sarl* (casse différente) → ❌ **refusé** (même doublon qu'au test 2, détecté malgré la casse)

**Test 5** — Ajouter *Chantal Aho*, *BéninAgro*, avec une date de dernière relance fixée à **demain** → ❌ **refusé**, message différent de celui du doublon

**Test 6** — Ajouter *Yves Akpovi*, *TechBenin*, à contacter, relance aujourd'hui → ✅ **accepté**

> [!NOTE]
> 💬 **La leçon.** Les tests 1 et 3 protègent contre l'erreur la plus fréquente : refuser deux contacts de la même entreprise alors que seul le nom fait la différence. Le test 4 vérifie une règle que la plupart des prompts oublient : la casse. Sans ces cas limites, l'application semblerait juste alors qu'elle ne l'est pas.

> [!TIP]
> **✅ Vous devez voir**
> - **3 acceptés** (tests 1, 3 et 6) et **3 refusés** (tests 2, 4 et 5).
> - Après **F5** : **9 contacts** dans la liste (les 6 d'exemple et vos 3 acceptés).
> - Deux messages d'erreur distincts : un pour le doublon, un pour la date de relance dans le futur.

---

## Étape 5 · Faire évoluer l'application par petites demandes · ⏱️ 10 min

Le vibe coding, c'est des demandes courtes et précises, suivies d'un contrôle. Vous en faites trois, une à la fois.

1. Collez le **prompt 5a**, puis appuyez sur **Entrée**.
2. À chaque carte d'autorisation, dépliez-la, lisez les lignes changées, puis répondez avec le tableau ci-dessous.
3. Rechargez la page (**F5**) et vérifiez que la suppression fonctionne.
4. **Refaites le test 2** de l'étape 4 : il doit toujours être refusé.
5. Refaites les points 1 à 4 avec le **prompt 5b**, puis avec le **prompt 5c**.

> [!IMPORTANT]
> **🎛️ Réglage de la session**
>
> | Session | Modèle | Effort | Mode |
> |:---:|:---:|:---:|:---:|
> | ↪️ Même session | **Sonnet 5** | **Élevée** | **Manuel** |
>
> **Pourquoi :** Claude garde en tête les fichiers déjà écrits et modifie seulement ce qui est demandé.

📋 **Prompt 5a** (suppression)

```text
Ajoute un bouton « Supprimer » sur chaque contact, avec une confirmation
avant la suppression. La suppression doit aussi être enregistrée dans
localStorage. Ne touche à rien d'autre.
```

📋 **Prompt 5b** (mode sombre)

```text
Ajoute un bouton pour passer en mode sombre, avec le choix mémorisé dans
localStorage. Ne touche pas à la logique de détection des doublons.
```

📋 **Prompt 5c** (filtre)

```text
Ajoute un filtre « statut » au-dessus de la liste des contacts.
Ne touche pas à la logique de détection des doublons.
```

**Quand Claude demande l'autorisation :**

| Claude veut… | Vous cliquez |
|---|---|
| modifier `index.html`, `style.css`, `app.js` ou `data.js` pour la demande en cours | ✅ **Autoriser une fois** |
| lire ou lister le dossier `atelier-crm` | ✅ **Autoriser une fois** |
| modifier la fonction qui détecte les doublons alors que la demande n'en parle pas | ❌ **Refuser**, puis collez : `Ne touche pas à la détection des doublons. Modifie seulement ce que j'ai demandé.` |
| créer un nouveau fichier, installer quoi que ce soit, ou toute autre commande | ❌ **Refuser** |

> [!NOTE]
> 💬 C'est la compétence clé du vibe coding : **lire avant d'accepter**. Une petite demande peut modifier ce qu'elle ne devait pas toucher, et le test 2 refait après chaque ajout le détecte tout de suite.

> [!TIP]
> **✅ Vous devez voir**
> - Après 5a : un bouton **Supprimer** par contact, une confirmation, et un contact supprimé qui **ne revient pas** après **F5**.
> - Après 5b : un bouton de thème, et le mode sombre toujours actif après **F5**.
> - Après 5c : un filtre par statut (par exemple avec « à contacter », quatre contacts restent affichés).
> - Après chaque ajout : le **test 2 est toujours refusé**.

---

## Étape 6 · Préparer et déployer sur Vercel · ⏱️ 12 min

Claude vérifie que le projet est prêt, puis c'est vous qui lancez le déploiement dans un terminal : la connexion à Vercel se fait dans votre navigateur.

1. Collez le prompt ci-dessous, puis appuyez sur **Entrée**.
2. Si une carte d'autorisation apparaît, répondez avec le tableau sous le prompt.
3. Ouvrez l'Explorateur de fichiers dans `atelier-crm`, cliquez dans la **barre d'adresse**, tapez `powershell`, puis appuyez sur **Entrée** (sur Mac : ouvrez Terminal puis `cd` vers le dossier).
4. Tapez `npx vercel`, puis **Entrée**. Première utilisation : la connexion s'ouvre dans le navigateur, validez-la puis revenez au terminal.
5. Répondez aux questions (elles peuvent varier légèrement) : `Set up and deploy` → `y` ; votre compte comme scope ; `Link to existing project` → `n` ; nom du projet → `mini-crm` suivi de vos initiales ; répertoire du code → **Entrée** ; modifier les réglages → `n`.
6. Quand le déploiement de prévisualisation est terminé, tapez `npx vercel --prod`, puis **Entrée**.
7. Copiez l'adresse de production affichée (de la forme `nom-du-projet.vercel.app`) et ouvrez-la **sur votre téléphone**.
8. Refaites le **test 2** sur cette adresse.

> [!IMPORTANT]
> **🎛️ Réglage de la session**
>
> | Session | Modèle | Effort | Mode |
> |:---:|:---:|:---:|:---:|
> | ↪️ Même session | **Sonnet 5** | **Élevée** | **Manuel** |
>
> **Pourquoi :** la vérification est une simple lecture des fichiers déjà connus de la session.

📋 **Prompt à coller**

```text
Vérifie que le projet est prêt à être déployé sur Vercel comme site statique,
sans configuration : index.html à la racine, aucun fichier inutile, chemins
relatifs. Ne modifie rien sans me le dire. Donne-moi ensuite, en 5 lignes
maximum, les commandes de déploiement avec la CLI Vercel.
```

**Quand Claude demande l'autorisation :**

| Claude veut… | Vous cliquez |
|---|---|
| lire ou lister le dossier `atelier-crm` | ✅ **Autoriser une fois** |
| corriger un chemin absolu dans `index.html`, si Claude l'a signalé dans sa réponse | ✅ **Autoriser une fois** |
| lancer `vercel`, `npx vercel`, `git push` ou toute autre commande | ❌ **Refuser** : le déploiement se lance vous-même, au terminal |
| écrire ou modifier un autre fichier | ❌ **Refuser** |

> [!NOTE]
> 💬 Sur Vercel, le site est **statique** : aucun serveur à configurer. Comme la base est fictive et vit dans `localStorage`, le site en ligne repart avec les **6 contacts d'exemple** : les données du navigateur appartiennent à un seul site, ce n'est pas un défaut du déploiement.

> [!TIP]
> **✅ Vous devez voir**
> - La réponse de Claude : projet prêt, `index.html` à la racine, aucun fichier inutile, chemins relatifs.
> - Dans le terminal, une ligne **Production** avec une adresse en `.vercel.app`.
> - Sur votre téléphone : la même application, avec ses **6 contacts d'exemple**.
> - Le **test 2 refusé** en ligne, comme en local.

---

## Étape 7 · Demander à Claude les limites de son travail · ⏱️ 4 min

Une application de démonstration a des limites. Les connaître, c'est savoir ce qu'il faut faire relire avant de l'utiliser pour de vrai.

1. Collez le prompt ci-dessous, puis appuyez sur **Entrée**.
2. Si une carte d'autorisation apparaît, répondez avec le tableau sous le prompt.
3. Comparez la liste de Claude avec celle de votre voisin.

> [!IMPORTANT]
> **🎛️ Réglage de la session**
>
> | Session | Modèle | Effort | Mode |
> |:---:|:---:|:---:|:---:|
> | ↪️ Même session | **Sonnet 5** | **Élevée** | **Manuel** |
>
> **Pourquoi :** une simple question de bilan, et changer de réglage ferait relire toute la conversation.

📋 **Prompt à coller**

```text
Fais-moi une revue courte de ce que tu as construit : donne 5 limites de cette
application (ce qu'elle ne fait pas ou fait mal), de la plus importante à la
moins importante. Distingue ce que tu constates dans le code de ce que tu
supposes. Ne modifie rien.
```

**Quand Claude demande l'autorisation :**

| Claude veut… | Vous cliquez |
|---|---|
| lire ou lister le dossier `atelier-crm` | ✅ **Autoriser une fois** |
| écrire ou modifier un fichier, ou toute commande | ❌ **Refuser** |

> [!TIP]
> **✅ Vous devez voir**
> - Cinq limites, dont en principe : les contacts restent **dans un seul navigateur** (ils ne sont pas partagés entre commerciaux), **aucune authentification**, **l'historique des relances** n'est pas conservé (seule la dernière date est gardée), pas de **recherche** ni de tri par entreprise, et pas de **rappel** avant une relance à venir.
> - Une séparation nette entre les constats et les suppositions.
> - Aucune carte « A modifié N fichiers ».

---

## ✅ Point de contrôle
- [ ] Le dossier contient **4 fichiers** : `index.html`, `style.css`, `app.js`, `data.js`.
- [ ] La page affiche **6 contacts** d'exemple, en français.
- [ ] À l'étape 4 : tests **1, 3 et 6 acceptés**, tests **2, 4 et 5 refusés**, **9 contacts** après **F5**.
- [ ] La suppression, le mode sombre et le filtre par statut fonctionnent, et le **test 2 est toujours refusé**.
- [ ] L'application est en ligne sur une adresse `.vercel.app` que vous avez ouverte sur votre téléphone.
- [ ] Claude a listé les **limites** de l'application, sans rien modifier.

## 🧠 À retenir
- **Un prompt cadré se vérifie** : rôle, contexte réel, données, règles, contraintes, critères de réussite et méthode.
- **Plan avant code** : on corrige une règle dans un plan en 30 secondes, dans du code en 10 minutes.
- **Petites demandes, puis test** : refaire un test connu après chaque ajout détecte ce qui a été cassé.
- **Lire avant d'autoriser** : le mode Manuel n'a de valeur que si vous dépliez les cartes.
- **Une base fictive suffit pour un prototype**, mais on connaît ses limites avant de la montrer comme un vrai outil.

<details>
<summary>🆘 Si ça coince</summary>

Les prompts « Dans la session : … » se collent dans la session **Mini CRM** (↪️ Même session), sans changer de réglage. Copiez seulement le texte sur fond gris.

| Ce que vous voyez | Ce que vous faites |
|---|---|
| Claude écrit des fichiers à l'étape 2 | **Refuser**, puis dans la session : `Stop : propose d'abord un plan, sans écrire de fichier.` |
| Claude veut créer `package.json`, `node_modules` ou installer un paquet | **Refuser**, puis dans la session : `Aucune installation : uniquement index.html, style.css, app.js et data.js dans ce dossier.` |
| Claude pose des questions avant de proposer un plan | Dans la session : `Fais comme tu veux, en respectant les contraintes du prompt.` |
| Plus de 4 fichiers dans le dossier | Dans la session : `Fusionne le contenu des fichiers en trop dans app.js ou style.css, puis liste les fichiers restants.` |
| La page est blanche | Dans la session : `La page s'affiche blanche. Cherche l'erreur dans app.js et data.js, corrige-la et explique-la en une phrase.` |
| Test 2 accepté (doublon exact non détecté) | Dans la session : `Le contact Awa Koffi / Nova SARL a été accepté une deuxième fois alors qu'il existe déjà. Corrige la détection pour qu'elle compare le nom ET l'entreprise à chaque contact existant, sans toucher à rien d'autre.` |
| Test 1 ou test 3 refusé | Dans la session : `Deux contacts de la même entreprise mais avec des noms différents ne sont pas un doublon. Corrige la comparaison pour qu'elle porte sur le nom ET l'entreprise ensemble, pas sur l'entreprise seule.` |
| Test 5 accepté | Dans la session : `Refuse toute date de dernière relance strictement postérieure à aujourd'hui, avec le message « La date de dernière relance ne peut pas être dans le futur ».` |
| Test 4 accepté (doublon avec une casse différente non détecté) | Dans la session : `« awa koffi » et « Awa Koffi » doivent être reconnus comme le même contact. Compare le nom et l'entreprise en minuscules et sans espaces superflus avant de détecter un doublon.` |
| Les contacts disparaissent au rechargement | Dans la session : `Enregistre les contacts dans localStorage et recharge-les au démarrage. Les données fictives ne servent que si le stockage est vide.` |
| Les contacts d'exemple sont à la mauvaise date | Dans la session : `Génère les dates de dernière relance des contacts d'exemple à partir de la date du jour (aujourd'hui, hier, il y a 3 jours, il y a 7 jours), dans data.js.` |
| Un ajout de l'étape 5 casse le test 2 | Cliquez sur **Annuler** dans la carte « A modifié N fichiers », puis dans la session : `Refais cet ajout sans toucher à la détection des doublons.` |
| `npx` ou `node` n'est pas reconnu | Node.js n'est pas installé : installez la version **LTS** depuis nodejs.org, **rouvrez** le terminal, puis relancez `npx vercel`. |
| Vercel demande de se connecter | Validez la connexion dans le navigateur, puis relancez `npx vercel` au terminal. |
| L'adresse ouverte demande une connexion Vercel | C'est l'adresse de prévisualisation, protégée. Lancez `npx vercel --prod` et utilisez l'adresse de production `nom-du-projet.vercel.app`. |
| Une page **404** s'affiche sur Vercel | `index.html` n'est pas à la racine du dossier déployé. Relancez `npx vercel --prod` depuis `atelier-crm`, pas depuis un sous-dossier. |
| Pas de Node.js et pas de possibilité d'en installer | Créez un dépôt GitHub avec les 4 fichiers, puis dans Vercel : **Add New** › **Project** › importez le dépôt, préréglage **Other**, puis **Deploy**. |
| Deux corrections n'ont pas suffi | Ouvrez une **Nouvelle session** sur le même dossier, au même réglage, et collez : `Lis le projet, décris son état en 5 lignes, puis corrige uniquement le problème suivant : …` |

</details>

<details>
<summary>➕ Pour aller plus loin (facultatif)</summary>

**Comparer avec un prompt vague**

1. Créez un second dossier vide `atelier-crm-vague`.
2. Ouvrez une **Nouvelle session** sur ce dossier, au même réglage que l'étape 1, et renommez-la `Session vague`.
3. Collez le prompt ci-dessous, puis appuyez sur **Entrée**.
4. Comparez avec votre projet : nombre de fichiers, langue, règle de doublon, données fictives, questions posées par Claude.

> **🎛️ Réglage de la session**
>
> | Session | Modèle | Effort | Mode |
> |:---:|:---:|:---:|:---:|
> | 🆕 Nouvelle session | **Sonnet 5** | **Élevée** | **Manuel** |
>
> **Pourquoi :** réglage identique à l'étape 1 : un écart viendra du prompt, pas du modèle.

📋 **Prompt à coller**

```text
Fais-moi un mini-CRM pour suivre des contacts commerciaux.
```

> **✅ Vous devez voir**
> - Des choix que vous n'avez pas faits : framework, dépendances, base de données, langue, nombre de fichiers.
> - Une règle de doublon absente, ou fausse (sur l'entreprise seule, ou sensible à la casse).
> - Une application difficile à déployer telle quelle sur Vercel.

**Faire écrire des tests automatiques**

Dans la session **Mini CRM** (↪️ Même session), collez :

```text
Écris un fichier tests.html, sans dépendance, qui vérifie automatiquement
les 6 cas de l'étape 4 (doublon exact, doublon insensible à la casse,
même entreprise mais nom différent, date de relance dans le futur) et
affiche « OK » ou « ÉCHEC » pour chacun. N'utilise pas mes données
enregistrées dans localStorage. Ne modifie pas les autres fichiers.
```

> **✅ Vous devez voir**
> - Un fichier `tests.html` qui s'ouvre au navigateur et affiche **6 lignes**, toutes en « OK ».
> - Autorisez l'écriture de `tests.html` : c'est le seul fichier en plus attendu ici.

**Autres sujets, même méthode**

Remplacez le sujet du prompt de l'étape 2 par une **réservation de salles** (salles, horaires, chevauchement de créneaux) ou un **suivi de stock** (produits, quantités, seuil d'alerte, stock négatif), avec ses propres données fictives et ses propres cas limites.

</details>
