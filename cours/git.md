<div class="lesson-hero">
  <span class="eyebrow">NSI · OUTILS DE DÉVELOPPEMENT · TRAVAIL EN ÉQUIPE</span>
  <h1>🌿 TD — Découvrir Git et GitHub</h1>
  <p>Suivre ses modifications, travailler sur une branche, récupérer les changements des autres et résoudre un conflit.</p>
</div>

:::note 🎯 Objectifs du TD

À la fin de ce TD, tu dois être capable de :

- installer et configurer **Git** sur ton ordinateur ;
- récupérer un projet distant avec `git clone` ;
- créer une **branche** pour travailler sans modifier directement `main` ;
- mettre temporairement ton travail de côté avec `git stash` ;
- récupérer les nouveautés de `main` et restaurer ton travail ;
- comprendre et **résoudre un conflit** ;
- enregistrer tes modifications avec `add` et `commit`, puis les envoyer avec `push` ;
- comprendre comment **fusionner une branche** dans `main`.

**Matériel :** un ordinateur, un terminal, un éditeur de texte au choix et, pour publier sur GitHub, un compte avec l'autorisation de contribuer au dépôt.

:::

:::reminder 🧭 Avant de commencer

**Git** est un logiciel qui suit les versions de tes fichiers sur ton ordinateur. **GitHub** est un service permettant notamment de stocker un dépôt Git en ligne et de collaborer.

Pendant ce TD, tu utiliseras principalement un **terminal** : Git ne nécessite ni Python ni Visual Studio Code.

**Dépôt utilisé :** [TheoWillem/TD-git](https://github.com/TheoWillem/TD-git). Sa branche principale s’appelle `main`.
:::

## 1. Installer Git

### 🪟 Sous Windows

1. Ouvre le site officiel : [git-scm.com/install/win](https://git-scm.com/install/win).
2. Télécharge **Git for Windows**, puis lance l'installation. Les options proposées par défaut conviennent pour ce TD.
3. Ouvre **Git Bash** depuis le menu Démarrer. C'est le terminal que nous utiliserons dans les exemples.
4. Vérifie l'installation avec la commande `git --version`.

Il est aussi possible d'installer Git depuis PowerShell avec `winget install --id Git.Git -e --source winget` si `winget` est disponible.

### 🐧 Sous Linux

Ouvre un terminal et utilise la commande correspondant à ta distribution :

| Distribution | Commande |
|---|---|
| Debian / Ubuntu / Linux Mint | `sudo apt update && sudo apt install git` |
| Fedora | `sudo dnf install git` |
| Arch Linux / CachyOS / Manjaro | `sudo pacman -S git` |

Vérifie ensuite l'installation avec `git --version`.

:::info 💡 À quoi sert le terminal ?

Le **terminal** permet de demander à l'ordinateur d'exécuter des commandes. Sous Windows, tu peux utiliser Git Bash ; sous Linux, le terminal habituel de ton système suffit.

Pour te déplacer dans les dossiers : `pwd` affiche le dossier courant, `ls` affiche son contenu et `cd nom_du_dossier` permet d'entrer dans un dossier. Dans Git Bash, ces commandes fonctionnent aussi sous Windows.

:::

### 🧪 Vérification 1

**Question :** quelle version de Git est installée sur ton ordinateur ? Recopie le résultat de `git --version`.

```reponse:question-redigee-01
Écris ta réponse ici…
```

## 2. Configurer son identité

Git doit savoir quel nom et quelle adresse associer à tes commits. Les deux commandes suivantes ne sont normalement à exécuter qu'une fois sur ton ordinateur :

- `git config --global user.name "Prenom Nom"`
- `git config --global user.email "prenom.nom@exemple.fr"`

Remplace les exemples par tes informations. Si tu souhaites que GitHub reconnaisse tes commits, utilise une adresse associée à ton compte GitHub (tu peux choisir une adresse privée `noreply` fournie par GitHub).

Pour vérifier la configuration : `git config --global --list`.

:::warning ⚠️ Nom Git et identifiant GitHub

Ces paramètres servent à **identifier l'auteur d'un commit**. Ils ne te connectent pas à GitHub et ne te donnent pas le droit de publier dans un dépôt. L'authentification et l'autorisation d'écriture sont deux sujets différents.

:::

## 3. Comprendre les éléments d'un dépôt

| Mot | Signification |
|---|---|
| **Dépôt** (*repository*) | Dossier suivi par Git, avec l'historique des modifications. |
| **Commit** | Enregistrement d'un état des fichiers suivis à un instant donné. |
| **Branche** | Ligne de développement permettant de travailler séparément. |
| **`main`** | Nom de la branche principale dans ce TD. |
| **`origin`** | Nom habituellement donné au dépôt distant lors du clonage. |
| **Fichier modifié** | Fichier dont le contenu a changé depuis le dernier enregistrement. |
| **Zone d'index** (*staging area*) | Ensemble des changements sélectionnés pour le prochain commit. |

:s[Une modification dans un fichier ne devient pas immédiatement un commit.] Nous allons apprendre à distinguer les différentes étapes.

## 4. Récupérer le dépôt du TD

Ouvre un terminal dans le dossier où tu souhaites travailler, puis exécute :

`git clone https://github.com/TheoWillem/TD-git.git`

Git crée normalement un dossier `TD-git`. Entre dedans : `cd TD-git`.

Pour observer ton dépôt, utilise :

| Commande | Ce qu'elle montre |
|---|---|
| `git status` | L'état des fichiers et de la branche courante. |
| `git branch --show-current` | Le nom de ta branche actuelle. |
| `git remote -v` | L'adresse du dépôt distant `origin`. |
| `git log --oneline -5` | Les cinq derniers commits (s'il y en a autant). |

### 🧪 Vérification 2

1. Quel est le nom de ta branche actuelle ?
2. Que signifie `origin` ?
3. Retrouves-tu un fichier `message.txt` dans le dossier ?

:::collapsible 💡 Indice — Lire l'état du dépôt

La commande `git status` est ton meilleur réflexe lorsque tu hésites. Elle indique souvent la branche, les fichiers modifiés et les opérations en cours.

:::

## 5. Créer une branche pour développer une fonctionnalité

Dans un projet collaboratif, on évite de développer directement sur `main`, qui représente généralement la version principale du projet.

Une :b[**branche**] permet de travailler sur une :g[fonctionnalité précise] (ou une correction de bug), sans perturber immédiatement le reste du projet.

Par exemple, dans un projet de jeu vidéo, nous pourrions créer :

| Branche | Travail réalisé |
|---|---|
| `feature/menu-principal` | Ajouter un menu principal. |
| `feature/sauvegarde` | Développer la sauvegarde des parties. |
| `fix/collision-joueur` | Corriger un problème de collision. |

Une même personne peut créer plusieurs branches au cours du projet. Plusieurs personnes peuvent également contribuer à une même fonctionnalité : la branche décrit :b[ce qui est développé], pas à qui elle appartient.

**Pour ce TD**, nous allons développer une petite fonctionnalité : ajouter une présentation au projet. Comme toute la classe effectue le même travail dans un dépôt partagé, chaque branche doit néanmoins avoir un **nom distinct**. Nous ajoutons donc un identifiant à la fin du nom de la fonctionnalité.

**Commande :** `git switch -c feature/ajout-presentation-prenom-nom`

Remplace `prenom-nom` par ton identifiant (sans espace). Par exemple : `feature/ajout-presentation-alex-martin`.

La commande **crée** la branche et **bascule** dessus. Vérifie avec `git branch --show-current` puis `git status`.

:::reminder À retenir

- `git switch -c nom` : crée une nouvelle branche et s'y place ;
- `git switch nom` : passe sur une branche qui existe déjà ;
- `git branch` : affiche les branches locales (un `*` repère la branche actuelle) ;
- :s[une branche correspond à une modification précise du projet]. Une fois cette modification intégrée à `main`, on peut supprimer la branche devenue inutile.

:::

### 🧪 Vérification 3

1. Pourquoi est-il préférable de développer une fonctionnalité sur une branche plutôt que directement sur `main` ?
2. Si tu dois ensuite ajouter un système de sauvegarde, conserverais-tu la branche de présentation ou en créerais-tu une autre ? Pourquoi ?

```reponse:question-redigee-01
Écris ta réponse ici…
```

## 6. Créer un fichier et modifier un fichier existant

Nous allons effectuer **deux modifications**, sans encore les enregistrer avec un commit.

**A. Créer un fichier personnel.** Dans le dossier `TD-git`, crée un fichier `prenom-nom.txt` portant ton identifiant. Écris-y ton prénom, ton nom, puis une phrase que tu souhaites partager au monde.

**B. Modifier le fichier commun.** Ouvre `message.txt` et ajoute à la fin du message : `Bonjour, je suis Prenom Nom.`

Enregistre les fichiers, puis lance `git status`.

**Observe :** le fichier personnel apparaît comme **non suivi** (*untracked*) ; `message.txt` apparaît comme **modifié**.

:::info 💡 Si tu utilises Visual Studio Code

Tu peux ouvrir le dossier avec **Fichier → Ouvrir un dossier**, ou depuis le terminal avec `code .` si la commande est disponible. La section **Contrôle de code source** permet de visualiser les fichiers modifiés, mais toutes les opérations de ce TD peuvent aussi se faire dans le terminal intégré.

:::

## 7. Mettre son travail de côté avec `stash`

Imaginons que quelqu'un ait modifié `main` pendant que tu travaillais. Nous voulons récupérer ses nouveautés **sans perdre nos modifications non terminées**.

La commande `git stash` permet de conserver temporairement nos changements et de retrouver un espace de travail propre.

**Commande à exécuter :** `git stash`

Exécute ensuite `git status` et `git stash list`.

### 🧪 Vérification 4

1. Que sont devenues les modifications du fichier `message.txt` ?
2. Ton fichier personnel est-il encore visible dans le dossier ?
3. Quel est l'intérêt de `git stash list` ?

:::warning ⚠️ Une sauvegarde temporaire, pas un commit

Un stash est **local et temporaire**. Il n'est pas envoyé sur GitHub par `git push`. Il ne remplace pas un commit et ne doit pas être considéré comme une sauvegarde permanente.

:::

## 8. Récupérer les modifications de `main`

Vérifie que tu te trouves toujours sur ta branche de fonctionnalité : `git branch --show-current`.

Puis exécute :

`git pull origin main`

Cette commande récupère les nouveautés de la branche distante `main` et les **intègre à ta branche actuelle**. :s[Elle ne te déplace pas automatiquement sur `main`.]

Observe `git log --oneline --graph --all --decorate -8`.

### 🧪 Vérification 5

Que contient maintenant `message.txt` ? Pourquoi ta propre phrase n'y apparaît-elle plus pour le moment ?

:::collapsible 💡 Indice — Où est ton travail ?

Tu as utilisé `git stash` : tes modifications sont toujours conservées localement, mais temporairement retirées de ton dossier. Tu vas les réappliquer à l'étape suivante.

:::

## 9. Restaurer son travail avec `stash pop`

Exécute : `git stash pop`.

Git tente de réappliquer les changements conservés. Cette fois, **deux versions de la même ligne** existent : celle de l'enseignant récupérée sur `main` et celle que tu avais mise de côté.

Un :r[conflit] peut alors apparaître. C'est normal : Git ne peut pas choisir à ta place la bonne phrase.

Exécute `git status` et ouvre `message.txt`.

:::warning ⚠️ Si `git stash pop` signale un conflit

Ne supprime pas le dépôt et ne relance pas la commande en boucle. Ton travail n'est pas nécessairement perdu. Lis les messages de Git, puis ouvre le fichier concerné.

Lorsqu'un `stash pop` provoque un conflit, Git **conserve généralement le stash** au lieu de le supprimer. Tu pourras l'effacer après avoir enregistré une version correcte.

:::

## 10. Résoudre un conflit

Dans `message.txt`, tu peux voir quelque chose de ce type (les intitulés exacts peuvent varier) :

```text
<<<<<<< Updated upstream
Message : Mise à jour de ???.
=======
Message : Bonjour, je suis Alex Martin.
>>>>>>> Stashed changes
```

Ce que signifient ces marqueurs :

- `<<<<<<<` : début de la première version ;
- `=======` : séparation entre les deux propositions ;
- `>>>>>>>` : fin de la seconde version.

:s[Tu dois décider du contenu final du fichier.] Une résolution possible consiste à conserver les deux idées dans une même ligne :

`Message : Mise à jour du professeur ; contribution de Alex Martin.`

**À faire :** supprime tous les marqueurs `<<<<<<<`, `=======` et `>>>>>>>`, puis enregistre `message.txt`.

### 🧪 Vérification 6

1. Les marqueurs de conflit ont-ils tous disparu ?
2. Le contenu final du fichier est-il cohérent ?
3. Le fichier personnel `prenom-nom.txt` a-t-il été restauré ?

:::info 💡 Résolution de conflit dans VS Code (facultatif)

VS Code peut proposer **Accepter la modification actuelle**, **Accepter la modification entrante** ou **Accepter les deux**. Tu peux également modifier manuellement le texte. Dans tous les cas, relis le résultat avant de poursuivre.

:::

## 11. Enregistrer son travail : `add` puis `commit`

Une fois les fichiers corrigés, nous allons créer un commit.

**1. Sélectionner les fichiers :**

`git add message.txt prenom-nom.txt`

**2. Vérifier :** `git status`.

**3. Enregistrer un commit :**

`git commit -m "Ajoute ma présentation et résout le conflit"`

**4. Vérifier à nouveau :** `git status` et `git log --oneline -3`.

| Commande | Rôle |
|---|---|
| `git add fichier.txt` | Prépare ce fichier pour le prochain commit. |
| `git add .` | Prépare les modifications du dossier courant et de ses sous-dossiers : à utiliser avec précaution. |
| `git commit -m "message"` | Crée un commit à partir des changements préparés. |
| `git status` | Permet de vérifier ce qui reste à enregistrer. |

:::reminder La différence essentielle

:s[`add` prépare ; `commit` enregistre localement ; `push` publie sur le dépôt distant.] Ces trois actions ne font pas la même chose.

:::

**Après le commit :** exécute `git stash list`. Si le stash du TD est encore présent après le conflit et que ton travail est bien enregistré dans le commit, tu peux le supprimer avec `git stash drop` (si c'est le stash le plus récent). Ne le supprime pas avant d'avoir vérifié les fichiers.

## 12. Publier sa branche avec `push`

Ton commit se trouve pour le moment sur ton ordinateur. Pour publier **ta branche de fonctionnalité** sur GitHub :

`git push -u origin feature/ajout-presentation-prenom-nom`

Remplace `feature/ajout-presentation-prenom-nom` par le nom exact de ta branche.

L'option `-u` associe ta branche locale à sa branche distante ; par la suite, un simple `git push` peut suffire pour l'actualiser.

Ouvre le dépôt [sur GitHub](https://github.com/TheoWillem/TD-git) et vérifie que ta branche apparaît dans le sélecteur de branches.

:::warning ⚠️ Publication et autorisations

Un dépôt **public** peut être cloné sans posséder le droit d'y écrire. Pour publier ta branche dans ce dépôt, tu dois être autorisé par son propriétaire et t'authentifier auprès de GitHub. Si un message indique `Permission denied` ou `403`, demande à l'enseignant de vérifier tes droits.

GitHub n'accepte pas le mot de passe du compte comme mot de passe Git pour les opérations HTTPS : suis la méthode d'authentification proposée (navigateur, gestionnaire d'identifiants ou jeton adapté). Ne communique jamais ton jeton à un camarade.

:::

## 13. Fusionner sa branche dans `main`

Jusqu'ici, ton travail se trouve sur `feature/ajout-presentation-prenom-nom`. Lorsque la fonctionnalité est terminée et vérifiée, on peut l'intégrer à la branche principale par une **fusion** (*merge*).

### A. Comprendre la fusion en local

Dans **ton dépôt local**, tu peux tester cette opération :

1. Revenir sur `main` avec `git switch main`.
2. La mettre à jour avec `git pull origin main`.
3. Fusionner ta branche de fonctionnalité avec `git merge feature/ajout-presentation-prenom-nom`.
4. Observer l'historique avec `git log --oneline --graph --all --decorate -8`.


:::warning ⚠️ Ne publie pas directement `main` sans autorisation

Pour le TD, la fusion ci-dessus est **locale**. Dans un dépôt partagé par toute la classe, l'enseignant doit contrôler l'intégration des contributions : ne lance pas `git push origin main` sans sa consigne.

:::

### B. La méthode habituelle sur GitHub : la *pull request*

Dans un travail collaboratif, la méthode recommandée est généralement de **proposer** la fusion :

1. Sur GitHub, ouvre la branche `feature/ajout-presentation-prenom-nom` que tu as publiée.
2. Clique sur **Compare & pull request** (ou crée une *pull request* vers `main`).
3. Décris tes modifications et demande une vérification.
4. Après validation, le responsable peut cliquer sur **Merge pull request**.

Une *pull request* est donc une **demande d'intégration** de ta branche à `main`, pas une nouvelle commande Git obligatoire.

:::info 💡 Et pour la fonctionnalité suivante ?

Une fois ta présentation intégrée, tu ne réutilises pas sa branche pour coder une autre fonctionnalité. Tu repars de `main` à jour et tu crées une **nouvelle branche** avec un nom adapté à la nouvelle tâche (par exemple `feature/ajout-menu`).

:::

## 14. Bilan — Les commandes à connaître

| Commande | Utilité |
|---|---|
| `git --version` | Vérifier que Git est installé. |
| `git clone URL` | Copier un dépôt distant sur son ordinateur. |
| `git status` | Voir l'état du travail en cours. |
| `git switch -c nom` | Créer une branche et s'y placer. |
| `git switch nom` | Changer de branche. |
| `git branch` | Lister les branches locales. |
| `git stash` | Mettre temporairement de côté les modifications. |
| `git stash list` | Lister les sauvegardes temporaires. |
| `git pull origin main` | Récupérer et fusionner `main` dans la branche actuelle. |
| `git stash pop` | Réappliquer la dernière sauvegarde temporaire. |
| `git add fichier` | Préparer un fichier pour le commit. |
| `git commit -m "..."` | Enregistrer un commit local. |
| `git push -u origin branche` | Publier une branche sur GitHub. |
| `git merge branche` | Intégrer les commits d'une branche à la branche actuelle. |
| `git log --oneline --graph --all` | Visualiser l'historique et les branches. |

:::success ✅ Je sais faire

- J'ai installé Git et renseigné mon identité.
- J'ai cloné le dépôt du TD.
- J'ai créé une branche dédiée à une fonctionnalité, avec un nom explicite.
- J'ai ajouté un fichier et modifié un fichier existant.
- J'ai sauvegardé temporairement mon travail avec `stash`.
- J'ai récupéré les changements de `main` et restauré mon travail.
- J'ai résolu un conflit en comprenant les deux versions.
- J'ai effectué `add`, `commit` et `push`.
- Je sais expliquer la fusion d'une branche et le rôle d'une *pull request*.

:::
