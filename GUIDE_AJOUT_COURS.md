# 📖 Guide : Ajouter un Nouveau Cours

Ce guide vous explique étape par étape comment ajouter un nouveau cours à votre site.

## 🎯 Étape 1 : Créer le Fichier Markdown

1. Ouvrez le dossier `cours/`
2. Créez un nouveau fichier avec l'extension `.md` (par exemple : `listes.md`)
3. Utilisez le template fourni dans `cours/TEMPLATE.md` comme point de départ

### Exemple : créer un cours sur les listes

```bash
# Dans le dossier du projet
cd cours
touch listes.md
```

## ✍️ Étape 2 : Écrire le Contenu

Ouvrez votre nouveau fichier et commencez à écrire :

```markdown
# Les Listes en Python

:::note Objectifs
À la fin de ce cours, vous saurez :
- Créer et manipuler des listes
- Utiliser les méthodes de listes
- Parcourir des listes avec des boucles
:::

## Qu'est-ce qu'une Liste ?

Une liste est une collection ordonnée d'éléments...

### Exemple Simple

```python
# Créer une liste
fruits = ["pomme", "banane", "orange"]
print(fruits)
```

## Exercice

```python
# À vous de jouer !
ma_liste = []
# Ajoutez des éléments...
```

:::success Félicitations !
Vous maîtrisez les listes !
:::
```

## 🔗 Étape 3 : Enregistrer le Cours dans l'Application

Ouvrez le fichier `app.js` et ajoutez votre cours à la liste `courses` :

```javascript
const courses = [
    { id: 'introduction', title: '📌 Introduction à Python', file: 'introduction.md' },
    { id: 'variables', title: '🔢 Variables et Types', file: 'variables.md' },
    { id: 'structures', title: '🔄 Structures de Contrôle', file: 'structures.md' },
    { id: 'fonctions', title: '⚡ Fonctions', file: 'fonctions.md' },
    { id: 'matplotlib', title: '📊 Matplotlib & Visualisation', file: 'matplotlib.md' },
    
    // Ajoutez votre nouveau cours ici
    { id: 'listes', title: '📝 Les Listes', file: 'listes.md' },
];
```

### Format de l'Objet Cours

```javascript
{
    id: 'identifiant-unique',        // ID unique (sans espaces, minuscules)
    title: '🎯 Titre du Cours',      // Titre affiché (avec emoji recommandé)
    file: 'nom-fichier.md'           // Nom du fichier dans le dossier cours/
}
```

## 🎨 Étape 4 : Choisir un Emoji

Choisissez un emoji représentatif pour votre cours :

| Sujet | Emoji suggérés |
|-------|----------------|
| Introduction | 📌 🎯 🚀 |
| Variables | 🔢 💾 📦 |
| Conditions | 🔀 ❓ ⚖️ |
| Boucles | 🔄 🔁 ♻️ |
| Fonctions | ⚡ 🔧 ⚙️ |
| Listes | 📝 📋 🗂️ |
| Dictionnaires | 📚 🗂️ 🔑 |
| Fichiers | 📁 💾 📄 |
| Classes | 🏛️ 🎭 🏗️ |
| Graphiques | 📊 📈 📉 |
| Jeux | 🎮 🕹️ 🎲 |
| Web | 🌐 🌍 💻 |
| Bases de données | 🗄️ 💿 🔐 |

Site pour chercher des emojis : [Emojipedia](https://emojipedia.org/)

## ✅ Étape 5 : Tester Votre Cours

1. Sauvegardez tous les fichiers modifiés
2. Rechargez la page dans votre navigateur
3. Vérifiez que :
   - Le cours apparaît dans le menu latéral
   - Le cours se charge correctement
   - Le code Python s'exécute
   - Les encadrés s'affichent correctement
   - Les sections déroulantes fonctionnent

## 🐛 Dépannage

### Le cours n'apparaît pas dans le menu

**Solution :** Vérifiez que vous avez bien ajouté le cours dans `app.js` et sauvegardé le fichier.

### Erreur "Impossible de charger le cours"

**Solution :** 
- Vérifiez que le nom du fichier dans `app.js` correspond exactement au fichier dans `cours/`
- Assurez-vous que le fichier est bien dans le dossier `cours/`
- Vérifiez qu'il n'y a pas de faute de frappe

### Le code Python ne s'exécute pas

**Solution :**
- Assurez-vous d'utiliser la syntaxe correcte pour les blocs de code : ` ```python `
- Attendez que Pyodide soit chargé (quelques secondes au démarrage)

### Les encadrés ne s'affichent pas

**Solution :**
- Vérifiez la syntaxe : `:::type Titre` et `:::` pour fermer
- Types valides : `note`, `warning`, `attention`, `success`, `info`, `reminder`

### Les sections déroulantes ne fonctionnent pas

**Solution :**
- Vérifiez la syntaxe : `:::collapsible Titre` et `:::` pour fermer

## 📝 Bonnes Pratiques

### 1. Structure du Cours

```markdown
# Titre Principal (H1)

:::note Objectifs
Toujours commencer par les objectifs
:::

## Section 1 (H2)
### Sous-section (H3)

## Section 2
### Exemple de code
### Exercice pratique

## Conclusion

:::success Message de fin
Encouragement final
:::
```

### 2. Ordre des Éléments

1. **Titre et objectifs** : Commencez toujours par ça
2. **Introduction** : Contexte et importance
3. **Concepts** : Théorie avec exemples
4. **Pratique** : Code exécutable
5. **Exercices** : Pour s'entraîner
6. **Conclusion** : Résumé et encouragements

### 3. Code Exécutable

- **Petits exemples** : 5-10 lignes max
- **Code commenté** : Expliquez chaque partie importante
- **Code modifiable** : Encouragez les étudiants à expérimenter
- **Progression** : Du simple au complexe

### 4. Encadrés

Utilisez-les judicieusement :
- **Note** : Informations générales importantes
- **Info** : Contexte supplémentaire
- **Warning** : Erreurs communes à éviter
- **Attention** : Points critiques
- **Success** : Félicitations et encouragements
- **Reminder** : Points clés à retenir

### 5. Sections Déroulantes

Utilisez-les pour :
- Explications détaillées optionnelles
- Solutions d'exercices
- Informations supplémentaires
- Concepts avancés

## 🎓 Exemple Complet

Voici un exemple de cours bien structuré :

```markdown
# Les Dictionnaires en Python

:::note Objectifs
À la fin de ce cours, vous saurez :
- Créer et manipuler des dictionnaires
- Accéder aux valeurs avec des clés
- Parcourir des dictionnaires
- Utiliser les méthodes de dictionnaires
:::

## Qu'est-ce qu'un Dictionnaire ?

Un dictionnaire est une structure de données qui stocke des paires **clé-valeur**.

:::info Analogie
C'est comme un vrai dictionnaire : vous cherchez un **mot** (la clé) pour trouver sa **définition** (la valeur).
:::

## Créer un Dictionnaire

```python
# Dictionnaire vide
mon_dict = {}

# Dictionnaire avec des données
personne = {
    "nom": "Alice",
    "age": 16,
    "classe": "Première NSI"
}

print(personne)
```

:::collapsible Syntaxe détaillée
- Accolades `{}` pour créer un dictionnaire
- Clés : généralement des chaînes de caractères
- Deux-points `:` entre clé et valeur
- Virgule `,` entre les paires
:::

## Accéder aux Valeurs

```python
personne = {
    "nom": "Alice",
    "age": 16,
    "classe": "Première NSI"
}

# Accès direct
print(personne["nom"])
print(personne["age"])

# Méthode get() (plus sûre)
print(personne.get("classe"))
print(personne.get("email", "Non renseigné"))
```

:::warning Attention
Accéder à une clé inexistante avec `[]` provoque une erreur. Préférez `.get()` qui retourne `None` ou une valeur par défaut.
:::

## Exercice Pratique

```python
# Créez un dictionnaire pour vous-même
moi = {
    "nom": "Votre Nom",
    # Ajoutez d'autres informations...
}

# Affichez vos informations
print(f"Je m'appelle {moi['nom']}")
# Complétez...
```

:::reminder Points clés
- Les dictionnaires utilisent des paires clé-valeur
- Les clés doivent être uniques
- Utilisez `.get()` pour un accès sécurisé
- Les dictionnaires sont modifiables
:::

:::success Bravo !
Vous maîtrisez maintenant les dictionnaires Python ! 🎉
:::
```

## 📊 Organisation des Cours

Suggestions d'ordre pour un curriculum complet :

1. 📌 Introduction à Python
2. 🔢 Variables et Types
3. 🔄 Structures de Contrôle
4. 📝 Les Listes
5. 🔑 Les Dictionnaires
6. ⚡ Fonctions
7. 📁 Manipulation de Fichiers
8. 🏛️ Programmation Orientée Objet
9. 📊 Matplotlib et Visualisation
10. 🌐 Introduction au Web (optionnel)

## 🚀 Aller Plus Loin

### Ajouter des Quiz

Créez des quiz interactifs (nécessite un peu de JavaScript) :

```markdown
## Quiz

<div class="quiz">
    <p><strong>Question :</strong> Que va afficher ce code ?</p>
    <pre><code>x = [1, 2, 3]
print(len(x))</code></pre>
    <button onclick="alert('Correct ! La réponse est 3')">3</button>
    <button onclick="alert('Non, réessayez')">2</button>
</div>
```

### Ajouter des Vidéos

Intégrez des vidéos YouTube :

```markdown
## Vidéo Explicative

<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" allowfullscreen>
</iframe>
```

### Ajouter des Liens Externes

```markdown
## Ressources Supplémentaires

- [Documentation Python](https://docs.python.org/fr/3/)
- [W3Schools Python](https://www.w3schools.com/python/)
- [Real Python](https://realpython.com/)
```

---

**Bon enseignement ! 🎓**
