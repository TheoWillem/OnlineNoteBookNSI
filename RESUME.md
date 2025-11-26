# 📚 Site Web de Cours NSI - Résumé du Projet

## 🎉 Félicitations !

Votre site web de cours NSI est maintenant prêt ! Voici un récapitulatif complet.

## 📁 Structure du Projet

```
testSiteWebCour2/
├── 📄 index.html              # Page principale du site
├── 🎨 styles.css              # Feuille de style (personnalisable)
├── ⚙️ app.js                  # Logique JavaScript
├── 🚀 start.html              # Page d'accueil avec présentation
├── 📝 README.md               # Documentation principale
├── 🔧 config.json             # Configuration du site
├── 📋 TODO.md                 # Liste des améliorations futures
├── 🎨 GUIDE_CSS.md            # Guide de personnalisation CSS
├── 📖 GUIDE_AJOUT_COURS.md    # Guide pour ajouter des cours
├── 🚀 start.sh                # Script de lancement rapide
├── 🙈 .gitignore              # Fichiers à ignorer par Git
└── 📚 cours/                  # Dossier des cours
    ├── introduction.md        # Cours : Introduction à Python
    ├── variables.md           # Cours : Variables et Types
    ├── structures.md          # Cours : Structures de Contrôle
    ├── fonctions.md           # Cours : Fonctions
    ├── matplotlib.md          # Cours : Visualisation de Données
    └── TEMPLATE.md            # Template pour nouveaux cours
```

## 🚀 Démarrage Rapide

### Méthode 1 : Script automatique (Recommandé)
```bash
./start.sh
```

### Méthode 2 : Python
```bash
python3 -m http.server 8000
```

### Méthode 3 : Node.js
```bash
npx serve
```

Puis ouvrez : **http://localhost:8000/start.html**

## ✨ Fonctionnalités Principales

### ✅ Implémenté

- **🐍 Exécution Python** : Code Python exécutable dans le navigateur (Pyodide)
- **💻 Éditeur Monaco** : Éditeur professionnel avec coloration syntaxique
- **📊 Matplotlib** : Graphiques et visualisations de données
- **📝 Markdown Étendu** : Notes, avertissements, sections déroulantes
- **🎨 CSS Personnalisable** : Variables CSS pour changer facilement les couleurs
- **📱 Responsive** : Fonctionne sur tous les écrans
- **📦 5 Cours Inclus** : Introduction, Variables, Structures, Fonctions, Matplotlib

### 📦 Bibliothèques Python Disponibles

- **NumPy** : Calcul scientifique
- **Matplotlib** : Graphiques et visualisations
- Et toutes les bibliothèques supportées par Pyodide

## 📝 Syntaxe Markdown Spéciale

### Encadrés d'Information

```markdown
:::note Titre
Contenu de la note
:::

:::warning Avertissement
Message d'avertissement
:::

:::attention Danger
Message important
:::

:::success Félicitations
Message de succès
:::

:::info Information
Information utile
:::

:::reminder Rappel
Point à se rappeler
:::
```

### Sections Déroulantes

```markdown
:::collapsible Titre de la section
Contenu masqué par défaut
:::
```

### Code Python Exécutable

````markdown
```python
# Tout code Python devient automatiquement exécutable
print("Hello, World!")
```
````

## 🎨 Personnalisation

### Changer les Couleurs

Éditez `styles.css` au début du fichier :

```css
:root {
    --primary-color: #2563eb;      /* Bleu principal */
    --secondary-color: #475569;     /* Gris foncé */
    --accent-color: #0ea5e9;        /* Bleu clair */
    /* ... modifiez selon vos goûts */
}
```

Voir **GUIDE_CSS.md** pour plus de détails.

### Ajouter un Cours

1. Créez `cours/mon-cours.md`
2. Écrivez le contenu (utilisez TEMPLATE.md)
3. Ajoutez-le dans `app.js` :

```javascript
const courses = [
    // ... cours existants
    { id: 'mon-cours', title: '🆕 Mon Cours', file: 'mon-cours.md' },
];
```

Voir **GUIDE_AJOUT_COURS.md** pour le guide complet.

## 🎓 Cours Disponibles

1. **📌 Introduction à Python** (30 min)
   - Premier programme
   - Variables de base
   - Opérations mathématiques

2. **🔢 Variables et Types** (45 min)
   - Types de données
   - Chaînes de caractères
   - Listes
   - Conversions

3. **🔄 Structures de Contrôle** (60 min)
   - Conditions (if/elif/else)
   - Boucles (for/while)
   - Break et continue

4. **⚡ Fonctions** (60 min)
   - Définir des fonctions
   - Paramètres et return
   - Récursivité
   - Bonnes pratiques

5. **📊 Matplotlib & Visualisation** (75 min)
   - Graphiques en ligne
   - Barres et camemberts
   - Nuages de points
   - Histogrammes
   - Subplots

## 🛠️ Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Éditeur** : Monaco Editor (VS Code)
- **Python** : Pyodide (WebAssembly)
- **Markdown** : Marked.js
- **Graphiques** : Matplotlib

## 💡 Cas d'Usage

### Pour les Enseignants

- ✅ Créer des cours interactifs rapidement
- ✅ Permettre aux élèves d'expérimenter avec le code
- ✅ Pas besoin d'installer Python sur les machines
- ✅ Fonctionne sur n'importe quel appareil
- ✅ Personnalisable selon vos besoins

### Pour les Étudiants

- ✅ Apprendre Python de manière interactive
- ✅ Expérimenter avec le code en temps réel
- ✅ Voir immédiatement les résultats
- ✅ Graphiques et visualisations
- ✅ Cours structurés et progressifs

## 📊 Exemple d'Utilisation

### En Classe

1. Projetez le site sur le tableau
2. Montrez les exemples de code
3. Modifiez le code en direct
4. Les élèves suivent sur leurs ordinateurs
5. Ils expérimentent et modifient le code

### À la Maison

1. Les élèves ouvrent le site
2. Suivent les cours à leur rythme
3. Modifient et testent le code
4. Résolvent les exercices
5. Consultent les explications déroulantes

## 🔧 Personnalisations Avancées

### Ajouter des Bibliothèques Python

Dans `app.js`, modifiez la fonction `loadPyodide` :

```javascript
await pyodide.loadPackage(['numpy', 'matplotlib', 'pandas', 'scipy']);
```

### Changer le Thème Complet

Créez un nouveau fichier `themes/dark.css` :

```css
:root {
    --primary-color: #60a5fa;
    --background-color: #111827;
    --content-bg: #1f2937;
    /* ... */
}
```

Puis liez-le dans `index.html`.

## 🐛 Dépannage

### Pyodide ne se charge pas
- Vérifiez votre connexion internet
- Attendez quelques secondes au premier chargement
- Consultez la console du navigateur (F12)

### Les graphiques ne s'affichent pas
- Assurez-vous d'appeler `plt.show()`
- Attendez que matplotlib soit initialisé
- Rechargez la page

### Un cours ne se charge pas
- Vérifiez le nom du fichier dans `app.js`
- Vérifiez que le fichier existe dans `cours/`
- Consultez la console pour les erreurs

### Le code ne s'exécute pas
- Attendez que Pyodide soit chargé (quelques secondes)
- Vérifiez qu'il n'y a pas d'erreurs de syntaxe
- Regardez la sortie d'erreur en rouge

## 📈 Prochaines Étapes

1. **Testez le site** : Ouvrez-le et explorez les cours
2. **Personnalisez le style** : Modifiez les couleurs dans `styles.css`
3. **Ajoutez vos cours** : Créez des cours spécifiques à votre programme
4. **Partagez** : Déployez sur GitHub Pages, Netlify, ou Vercel
5. **Recueillez des retours** : Demandez l'avis de vos élèves

## 🌐 Déploiement

### GitHub Pages (Gratuit)

```bash
# Initialisez un dépôt Git
git init
git add .
git commit -m "Initial commit"

# Créez un repo sur GitHub puis :
git remote add origin https://github.com/votre-nom/cours-nsi.git
git push -u origin main

# Dans les paramètres du repo GitHub :
# Settings > Pages > Source : main branch
```

Votre site sera accessible sur : `https://votre-nom.github.io/cours-nsi/`

### Netlify (Gratuit)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Drag & drop le dossier du projet
3. Site déployé en quelques secondes !

### Vercel (Gratuit)

```bash
npm install -g vercel
vercel
```

## 📚 Ressources Additionnelles

- **Pyodide** : https://pyodide.org/
- **Monaco Editor** : https://microsoft.github.io/monaco-editor/
- **Matplotlib** : https://matplotlib.org/
- **Marked.js** : https://marked.js.org/
- **Markdown** : https://www.markdownguide.org/

## 🤝 Contribution

Pour contribuer au projet :

1. Forkez le projet
2. Créez une branche : `git checkout -b feature/ma-fonctionnalite`
3. Committez : `git commit -m 'Ajout de ma fonctionnalité'`
4. Pushez : `git push origin feature/ma-fonctionnalite`
5. Ouvrez une Pull Request

## 📞 Support

- Consultez **README.md** pour la documentation complète
- Lisez **GUIDE_CSS.md** pour la personnalisation
- Suivez **GUIDE_AJOUT_COURS.md** pour ajouter des cours
- Consultez **TODO.md** pour les améliorations futures

## 📄 Licence

Ce projet est libre d'utilisation pour l'éducation. Vous pouvez le modifier, le distribuer et l'adapter à vos besoins.

## 🎯 Objectifs Atteints

✅ Cours en Markdown dans un dossier dédié
✅ Exécution de code Python depuis l'interface web
✅ Monaco Editor pour l'édition de code
✅ Support des bibliothèques (Matplotlib, NumPy, etc.)
✅ Affichage des fenêtres graphiques
✅ CSS facilement personnalisable
✅ Sections déroulantes
✅ Encadrés spéciaux (attention, note, rappel, etc.)

## 🚀 Prêt à Commencer !

Votre site est maintenant **100% fonctionnel** !

### Lancez-le maintenant :

```bash
./start.sh
```

Puis ouvrez votre navigateur sur **http://localhost:8000/start.html**

---

**Bon enseignement et bon apprentissage ! 🎓📚**
