# 📚 Site Web de Cours NSI - Notebook Interactif

Un site web interactif pour apprendre la programmation Python avec des fonctionnalités de notebook avancées.

## 🎯 Fonctionnalités

### ✨ Ce qui est inclus :

- **📝 Cours en Markdown** : Ajoutez facilement des cours au format Markdown dans le dossier `cours/`
- **💻 Éditeur de Code Intégré** : Monaco Editor pour modifier et exécuter du code Python
- **🐍 Exécution Python dans le Navigateur** : Pyodide permet d'exécuter du code Python sans serveur
- **📊 Support des Bibliothèques** : Matplotlib, NumPy et autres bibliothèques Python
- **📦 Fenêtres de Sortie** : Affichage des graphiques dans des fenêtres modales
- **🎨 CSS Personnalisable** : Modifiez facilement `styles.css` pour changer l'apparence
- **📂 Sections Déroulantes** : Organisez votre contenu avec des sections collapsibles
- **💡 Encadrés Spéciaux** : Note, Warning, Attention, Success, Info, Reminder

## 🚀 Démarrage Rapide

### 1. Ouvrir le site

Ouvrez simplement `index.html` dans votre navigateur :

```bash
# Avec Python
python3 -m http.server 8000

# Avec Node.js (si installé)
npx serve

# Avec l'extension Live Server de VS Code
# Clic droit sur index.html > Open with Live Server
```

Puis naviguez vers `http://localhost:8000`

### 2. Ajouter un cours

Créez un fichier Markdown dans le dossier `cours/` :

```markdown
# Mon Nouveau Cours

:::note Objectifs
Ce que vous allez apprendre dans ce cours.
:::

## Section 1

Votre contenu ici...

```python
# Code Python exécutable
print("Hello, World!")
```
```

### 3. Enregistrer le cours dans l'application

Modifiez `app.js` pour ajouter votre cours à la liste :

```javascript
const courses = [
    // Cours existants...
    { id: 'nouveau', title: '🆕 Mon Nouveau Cours', file: 'nouveau.md' },
];
```

## 📖 Syntaxe Markdown Étendue

### Encadrés d'Information

```markdown
:::note Titre de la note
Contenu de la note
:::

:::warning Attention
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
Contenu caché par défaut.
Cliquez sur le titre pour l'afficher.
:::
```

### Code Python Exécutable

Tout bloc de code Python devient automatiquement exécutable :

````markdown
```python
# Votre code ici
print("Ce code peut être exécuté !")
```
````

## 🎨 Personnalisation du Style

Modifiez `styles.css` pour personnaliser l'apparence :

```css
:root {
    /* Couleurs principales */
    --primary-color: #2563eb;      /* Couleur principale */
    --secondary-color: #475569;     /* Couleur secondaire */
    --accent-color: #0ea5e9;        /* Couleur d'accent */
    
    /* Couleurs des boîtes */
    --note-color: #3b82f6;          /* Bleu pour les notes */
    --warning-color: #f59e0b;       /* Orange pour les avertissements */
    --danger-color: #ef4444;        /* Rouge pour les dangers */
    --success-color: #10b981;       /* Vert pour les succès */
    
    /* Espacements */
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    
    /* Polices */
    --font-main: 'Segoe UI', sans-serif;
    --font-code: 'Consolas', monospace;
}
```

## 📊 Utiliser des Bibliothèques Python

### Matplotlib (graphiques)

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(8, 6))
plt.plot(x, y)
plt.title('Fonction Sinus')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.show()
```

Le graphique s'affichera dans une fenêtre modale.

### NumPy (calculs scientifiques)

```python
import numpy as np

# Créer un tableau
arr = np.array([1, 2, 3, 4, 5])
print("Tableau:", arr)
print("Moyenne:", np.mean(arr))
print("Écart-type:", np.std(arr))

# Opérations matricielles
matrix = np.array([[1, 2], [3, 4]])
print("Matrice:\n", matrix)
print("Déterminant:", np.linalg.det(matrix))
```

## 🛠️ Structure du Projet

```
testSiteWebCour2/
├── index.html          # Page principale
├── styles.css          # Feuille de style (personnalisable)
├── app.js              # Logique JavaScript
├── cours/              # Dossier des cours
│   ├── introduction.md
│   ├── variables.md
│   ├── structures.md
│   └── fonctions.md
└── README.md           # Ce fichier
```

## 💡 Conseils d'Utilisation

### Pour les Enseignants

1. **Créez des cours progressifs** : Commencez simple, augmentez la complexité
2. **Utilisez les encadrés** : Mettez en valeur les points importants
3. **Ajoutez des exercices** : Code modifiable encourage l'expérimentation
4. **Sections déroulantes** : Pour les explications détaillées optionnelles

### Pour les Étudiants

1. **Modifiez le code** : N'hésitez pas à expérimenter dans les éditeurs
2. **Bouton Réinitialiser** : Remet le code d'origine si vous vous perdez
3. **Regardez les sorties** : Les messages d'erreur sont éducatifs
4. **Explorez les sections** : Cliquez sur les sections déroulantes

## 🔧 Technologies Utilisées

- **Pyodide** : Python dans le navigateur (WebAssembly)
- **Monaco Editor** : L'éditeur de VS Code dans le navigateur
- **Marked.js** : Parser Markdown
- **CSS Variables** : Personnalisation facile
- **Vanilla JavaScript** : Pas de framework, code simple

## 📝 Ajouter Plus de Bibliothèques Python

Pour ajouter des bibliothèques Python supplémentaires, modifiez `app.js` :

```javascript
async function loadPyodide() {
    pyodide = await loadPyodideModule();
    // Ajoutez vos bibliothèques ici
    await pyodide.loadPackage(['numpy', 'matplotlib', 'pandas', 'scipy']);
    // ...
}
```

Bibliothèques disponibles : https://pyodide.org/en/stable/usage/packages-in-pyodide.html

## 🎓 Exemples de Cours

Le site inclut 4 cours d'exemple :

1. **Introduction à Python** : Premier contact avec le langage
2. **Variables et Types** : Types de données, conversions, listes
3. **Structures de Contrôle** : Conditions, boucles, break/continue
4. **Fonctions** : Création, paramètres, return, récursion

## 🐛 Dépannage

### Le code Python ne s'exécute pas

- Attendez que Pyodide soit chargé (quelques secondes au démarrage)
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que le navigateur supporte WebAssembly

### Les graphiques ne s'affichent pas

- Matplotlib peut prendre quelques secondes à initialiser
- Essayez de recharger la page
- Vérifiez que `plt.show()` est appelé

### Le style ne se charge pas correctement

- Videz le cache du navigateur
- Vérifiez que `styles.css` est dans le même dossier que `index.html`

## 📄 Licence

Ce projet est libre d'utilisation pour l'éducation.

## 🤝 Contributions

N'hésitez pas à :
- Ajouter de nouveaux cours
- Améliorer le CSS
- Signaler des bugs
- Proposer des fonctionnalités

## 📧 Support

Pour toute question ou problème, consultez la documentation ou ouvrez un ticket.

---

**Bon enseignement et bon apprentissage ! 🎓**
