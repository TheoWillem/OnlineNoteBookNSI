# Variables et Types de Données

:::note Objectifs
Dans ce cours, vous allez apprendre :
- Les différents types de données en Python
- Comment créer et manipuler des variables
- Les conversions entre types
:::

## Les types de base

Python possède plusieurs types de données fondamentaux :

:::collapsible Types numériques
- **int** : nombres entiers (ex: 42, -10, 0)
- **float** : nombres décimaux (ex: 3.14, -0.5, 2.0)
- **complex** : nombres complexes (ex: 3+4j)
:::

:::collapsible Types de texte
- **str** : chaînes de caractères (ex: "Hello", 'Python')
:::

:::collapsible Types booléens
- **bool** : valeurs logiques True ou False
:::

## Déclaration et affichage de variables

```python
# Différents types de variables
entier = 42
decimal = 3.14159
texte = "Python est génial !"
booleen = True

# Afficher le type d'une variable
print("Type de entier:", type(entier))
print("Type de decimal:", type(decimal))
print("Type de texte:", type(texte))
print("Type de booleen:", type(booleen))
```

:::info Information
La fonction `type()` permet de connaître le type d'une variable. C'est très utile pour déboguer votre code !
:::

## Manipulation de chaînes de caractères

Les chaînes de caractères (strings) sont très utilisées en programmation :

```python
# Création de chaînes
prenom = "Alice"
nom = "Dupont"

# Concaténation (assemblage)
nom_complet = prenom + " " + nom
print("Nom complet:", nom_complet)

# Méthodes utiles
print("Majuscules:", nom_complet.upper())
print("Minuscules:", nom_complet.lower())
print("Longueur:", len(nom_complet))

# Formatage moderne avec f-strings
age = 16
message = f"{prenom} a {age} ans"
print(message)
```

:::collapsible Autres méthodes de chaînes
Python offre de nombreuses méthodes pour manipuler les chaînes :
- `.strip()` : enlever les espaces au début et à la fin
- `.replace(old, new)` : remplacer un texte par un autre
- `.split()` : diviser une chaîne en liste
- `.startswith()` : vérifier si commence par...
- `.endswith()` : vérifier si termine par...
:::

## Conversions de types

Il est souvent nécessaire de convertir un type en un autre :

```python
# Conversion en entier
texte_nombre = "42"
nombre = int(texte_nombre)
print("Converti en int:", nombre, type(nombre))

# Conversion en décimal
entier = 10
decimal = float(entier)
print("Converti en float:", decimal, type(decimal))

# Conversion en texte
age = 16
age_texte = str(age)
print("Converti en str:", age_texte, type(age_texte))

# Calculs avec conversions
resultat = int("5") + int("7")
print("5 + 7 =", resultat)
```

:::warning Attention aux erreurs
Toutes les conversions ne sont pas possibles ! Par exemple :
```python
# Ceci causera une erreur :
# nombre = int("Hello")  # ValueError!
```
Assurez-vous que la chaîne contient bien un nombre avant de convertir.
:::

## Opérateurs de comparaison

Les opérateurs permettent de comparer des valeurs :

```python
a = 10
b = 5

# Comparaisons
print("a == b:", a == b)  # Égal
print("a != b:", a != b)  # Différent
print("a > b:", a > b)    # Plus grand
print("a < b:", a < b)    # Plus petit
print("a >= b:", a >= b)  # Plus grand ou égal
print("a <= b:", a <= b)  # Plus petit ou égal
```

## Les listes

Les listes permettent de stocker plusieurs valeurs :

```python
# Création d'une liste
nombres = [1, 2, 3, 4, 5]
fruits = ["pomme", "banane", "orange"]
mixte = [1, "deux", 3.0, True]

# Accès aux éléments (indexation commence à 0)
print("Premier fruit:", fruits[0])
print("Dernier fruit:", fruits[-1])

# Modification
fruits[1] = "fraise"
print("Liste modifiée:", fruits)

# Méthodes utiles
nombres.append(6)  # Ajouter à la fin
print("Après append:", nombres)

nombres.remove(3)  # Supprimer une valeur
print("Après remove:", nombres)

print("Longueur de la liste:", len(nombres))
```

:::collapsible Opérations sur les listes
Voici d'autres opérations courantes :
```python
# Slicing (découpage)
nombres = [0, 1, 2, 3, 4, 5]
print(nombres[1:4])   # [1, 2, 3]
print(nombres[:3])    # [0, 1, 2]
print(nombres[3:])    # [3, 4, 5]

# Vérifier la présence
print(3 in nombres)   # True
print(10 in nombres)  # False
```
:::

## Exercice pratique

Créez un programme qui manipule différents types de données :

```python
# Informations personnelles
nom = "Votre Nom"
age = 16
moyenne_maths = 15.5
moyenne_nsi = 17.0

# Calculs
moyenne_generale = (moyenne_maths + moyenne_nsi) / 2

# Liste de matières
matieres = ["Mathématiques", "NSI", "Physique", "Français"]

# Affichage
print(f"Nom: {nom}")
print(f"Age: {age} ans")
print(f"Moyenne générale: {moyenne_generale}")
print(f"Nombre de matières: {len(matieres)}")
print(f"Matières: {', '.join(matieres)}")
```

:::reminder Rappel important
- Les **variables** stockent des valeurs
- Les **types** définissent la nature des données
- Les **conversions** permettent de changer de type
- Les **listes** regroupent plusieurs valeurs
:::

:::success Bravo !
Vous maîtrisez maintenant les bases des variables et types en Python ! Continuez vers le cours sur les structures de contrôle.
:::
