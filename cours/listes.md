<!-- filepath: /home/theo/Documents/perso/testSiteWebCours/cours/listes.md -->
# Les listes en Python

## 1. Les listes : une structure de données

Une **liste** est une structure de données qui permet de stocker plusieurs valeurs dans une seule variable.

```python:executable
notes = [12, 15, 9, 18]
prenoms = ["Alice", "Bob", "Charlie"]
```

On parle parfois de **tableau**, mais en Python le type s’appelle `list`.

---

## 2. Types des éléments : Python est flexible

En Python, une liste peut contenir des **types différents** :

```python:executable
melange = [42, "Python", 3.14, True]
```

Dans beaucoup d’autres langages (C, Java, etc.), les tableaux ne peuvent contenir **qu’un seul type** (par exemple uniquement des `int`).  
En Python, ce n’est pas interdit de mélanger, mais en pratique, on met souvent le **même type** pour rester clair et éviter les erreurs.

---

## 3. Indices et accès aux valeurs (très important)

### 3.1. L’idée des indices

On peut voir une liste comme une rangée de boîtes numérotées :

```text
fruits = ["pomme", "banane", "cerise"]
             |         |         |     
indice       0         1         2
```

- Chaque case a un **indice** (un numéro).
- On utilise cet indice pour **lire** ou **modifier** la valeur.

### 3.2. Attention : ça commence à 0

En Python (et dans beaucoup de langages) :

- la **1ʳᵉ case** a l’indice `0`
- la 2ᵉ case a l’indice `1`
- la 3ᵉ case a l’indice `2`
- etc.

```python:executable
fruits = ["pomme", "banane", "cerise"]

print(fruits[0])  # 1er élément  -> "pomme"
print(fruits[1])  # 2e élément   -> "banane"
print(fruits[2])  # 3e élément   -> "cerise"
```

👉 Erreur classique : chercher le 1er élément avec `fruits[1]`.  
Rappel : **on compte 0, 1, 2, 3, ... et pas 1, 2, 3, ...**

### 3.3. Accéder à une valeur = comme une variable avec un numéro

Au lieu d’avoir :

```python
note1 = 12
note2 = 15
note3 = 9
```

On met tout dans une liste :

```python:executable
notes = [12, 15, 9]

print(notes[0])  # même idée que note1
print(notes[1])  # même idée que note2
print(notes[2])  # même idée que note3
```

On a donc **une variable** (`notes`) + **un indice** (0, 1, 2, …).

### 3.4. Modifier une valeur à un indice donné

On peut changer ce qu’il y a dans une case :

```python:executable
fruits = ["pomme", "banane", "cerise"]

fruits[1] = "kiwi"   # on remplace "banane" (indice 1) par "kiwi"
print(fruits)        # ["pomme", "kiwi", "cerise"]
```

### 3.5. Indice trop grand = erreur

Si on demande un indice qui n’existe pas, Python se fâche :

```python:executable
fruits = ["pomme", "banane", "cerise"]

print(fruits[3])  # ERREUR : il n'y a pas d'indice 3 (juste 0,1,2)
```

Erreur obtenue : `IndexError: list index out of range`  
→ ça veut dire : « tu as demandé une case en dehors de la liste ».

Pour éviter ça, on peut utiliser `len()` pour connaître la taille :

```python:executable
fruits = ["pomme", "banane", "cerise"]
n = len(fruits)   # ici 3

print("Longueur de la liste :", n)
print("Dernier élément :", fruits[n - 1])  # fruits[2]
```

:::details ** 3.6. Indices négatifs : partir de la fin

Python permet aussi d’utiliser des **indices négatifs** :

```python:executable
fruits = ["pomme", "banane", "cerise"]

print(fruits[-1])  # dernier élément  -> "cerise"
print(fruits[-2])  # avant-dernier    -> "banane"
```

Ça peut être pratique pour aller chercher la fin de la liste sans calculer `len(liste) - 1`.
::: 


## 4. Fonctions / méthodes utiles sur les listes

Les listes ont plein de **méthodes** déjà prêtes dans Python :

```python:executable
nombres = [1, 2, 3]

nombres.append(4)      # ajoute un élément à la fin -> [1, 2, 3, 4]
nombres.insert(1, 10)  # insère 10 à l'indice 1 -> [1, 10, 2, 3, 4]
nombres.remove(10)     # enlève la première occurrence de 10 -> [1, 2, 3, 4]
dernier = nombres.pop()  # enlève et retourne le dernier élément -> dernier = 4

taille = len(nombres)  # longueur de la liste -> ici 3
```

Quelques méthodes fréquentes :

- `append(x)` : ajoute `x` à la fin
- `insert(i, x)` : ajoute `x` à la position `i`
- `remove(x)` : supprime la première valeur égale à `x`
- `pop()` : supprime et renvoie le dernier élément
- `len(liste)` : donne le **nombre d’éléments**

---

## 5. Opérations sur les listes

### a) Addition : concaténation

```python:executable
a = [1, 2]
b = [3, 4]
c = a + b
print(c)  # [1, 2, 3, 4]
```

Le `+` **colle** les listes l’une à la suite de l’autre.

### b) Multiplication : répétition

```python:executable
l = [0]
l2 = l * 5
print(l2)  # [0, 0, 0, 0, 0]
```

Le `*` **répète** le contenu plusieurs fois.

---

## 6. Les listes de listes

On peut mettre des listes **dans** une liste : ce sont des « listes de listes » (souvent utilisées comme tableaux 2D).

```python:executable
grille = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grille[0])    # [1, 2, 3]
print(grille[0][1]) # 2 (ligne 0, colonne 1)
```

- `grille[0]` : la première ligne
- `grille[0][1]` : 2e élément de la 1re ligne

---

## 7. Parcourir une liste (avec `for`)

Pour parcourir les éléments d’une liste, on utilise une boucle `for`.  
Pour en apprendre plus sur les boucles, voir le chapitre [Les Boucles (suite)](boucles-suite.md).

```python:executable
fruits = ["pomme", "banane", "cerise"]

for fruit in fruits:
    print("J'aime les", fruit)
```

On peut aussi utiliser l’indice :

```python:executable
fruits = ["pomme", "banane", "cerise"]

for i in range(len(fruits)):
    print("Indice", i, "->", fruits[i])
```

---

## Exercices

```python:executable
print("------- Exercices : listes -------")
# * Créer une liste de 4 fruits, afficher le 1er et le 3e élément.
# * Afficher le dernier élément d'une liste sans écrire directement son indice (utiliser len()).
# ** Créer une liste de notes, modifier la 2e note, puis afficher la liste.
# ** Tester les indices négatifs sur une liste de 5 éléments.
# *** Écrire un programme qui affiche chaque indice et chaque valeur d'une liste (avec range(len(...))).
# *** Provoquer volontairement un IndexError, puis corriger le programme.
```
