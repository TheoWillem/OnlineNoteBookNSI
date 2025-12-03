<!-- filepath: /home/theo/Documents/perso/testSiteWebCours/cours/fonctions.md -->
# Les fonctions en Python

Les **fonctions** permettent de **réutiliser un bout de code** et d’**organiser** ton programme.

On peut voir une fonction comme un bout de programme **action** capable de réaliser une tâche définie, avec un nom. Donc une fonction = une tâche.

Exemples de tâche possibles : afficher un message de bienvenue, calculer une moyenne, envoyer un email, etc.
---

## 1. Créer une fonction

### 1.1. Syntaxe de base

```python
def nom_de_la_fonction():
    # bloc d instructions (indenté)
    ...
```

- `def` : mot-clé pour **définir** une fonction
- `nom_de_la_fonction` : tu choisis un nom (le nom doit respecter les règles des noms de variables)
- `()` : les parenthèses
- `:` : indique le début du bloc
- ensuite, **le code de la fonction est indenté** (comme pour un `if` ou une boucle)

### 1.2. Exemple : dire bonjour

```python:executable
def dire_bonjour():
    print("Bonjour !")
    print("Bienvenue en NSI.")
    print('-----')

# Appel de la fonction
dire_bonjour()
```

Remarques :
- Définir la fonction **ne l exécute pas**.
- Elle est exécutée **uniquement** quand on l’**appelle** : `dire_bonjour()`.

On peut l’appeler **plusieurs fois** :

```python:executable
def dire_bonjour():
    print("Bonjour !")
    print("Bienvenue en NSI.")
    print('-----')

# On appelle la fonction 3 fois
dire_bonjour()
dire_bonjour()
dire_bonjour()
```
---

## 2. Ajouter des paramètres

Une fonction peut prendre des **paramètres**, c’est‑à‑dire des valeurs qu’on lui donne lorsqu’on l’appelle. Elle peut ensuite les utiliser dans son code pour réaliser sa tâche.

### 2.1. Syntaxe avec paramètres

```python
def nom_de_la_fonction(param1, param2):
    # utiliser param1, param2 dans le code
    ...
```

Les paramètres se mettent **entre les parenthèses**. On peut en avoir :
- aucun : `()`
- un seul : `(x)`
- plusieurs : `(x, y, message)`

### 2.2. Exemple : dire bonjour à quelqu’un

```python:executable
def dire_bonjour_a(prenom):
    print("Bonjour", prenom, "!")

# Appels de la fonction avec des valeurs différentes

dire_bonjour_a("Alice")
dire_bonjour_a("Bob")
dire_bonjour_a("Charlie")
```

Ici :
- `prenom` est le **paramètre** dans la définition
- "Alice", "Bob", "Charlie" sont les **valeurs** qu’on passe à la fonction lors de l’appel

On peut imaginer :
- la **fonction** comme une machine
- les **paramètres** comme les entrées qu’on met dans la machine

### 2.3. Exemple : afficher une ligne de séparation

```python:executable
def ligne(separateur, longueur):
    print(separateur * longueur)

ligne("-", 10)
ligne("*", 5)
ligne("#", 20)
```

Ici, la même fonction peut produire des lignes très différentes selon les **paramètres**.

---

## 3. Exécuter une fonction avec des valeurs différentes

L’intérêt principal des fonctions avec paramètres est de **réutiliser le même code** avec des **données différentes**.

```python:executable
def presentation(prenom, age):
    print("Je m appelle", prenom, "et j ai", age, "ans.")

presentation("Alice", 15)
presentation("Bob", 16)
presentation("Charlie", 15)
```

On ne réécrit pas tout le `print` à chaque fois :
- on change seulement les **valeurs** passées à la fonction

---

## 4. (Aperçu) Fonctions qui renvoient une valeur

Pour l’instant, nos fonctions **affichent** des choses (`print`).

On peut aussi créer des fonctions qui **renvoient** une valeur grâce à `return`.

```python:executable
def carre(x):
    return x * x

resultat = carre(5)
print("Le carré de 5 vaut", resultat)
```

Ici :
- la fonction calcule `x * x`
- `return` renvoie le résultat au programme
- on peut alors le stocker dans une variable ou le réutiliser ailleurs

---

## 5. Exercices

```python:executable
print("------- Exercices : fonctions -------")
# * Écrire une fonction bonjour() qui affiche "Bonjour !" puis l'appeler 3 fois.
# * Écrire une fonction ligne() qui affiche une ligne de 20 tirets "--------------------".
# ** Modifier ligne() pour qu'elle prenne un paramètre longueur et affiche autant de tirets que demandé.
# ** Écrire une fonction dire(prenom) qui affiche "Salut" suivi du prénom donné en paramètre.
# *** Écrire une fonction carre(n) qui RENVOIE (return) le carré de n, puis tester avec plusieurs valeurs.
# *** Ecrire une fonction divise(a, b) qui RENVOIE le résultat de la division de a par b (en gérant la division par zéro)
# *** Utilise la fonction divise(a, b) en parametre de la fonction carre(n) pour calculer le carré du résultat de la division.
```