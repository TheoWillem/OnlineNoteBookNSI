# Les conditions en Python

Les **conditions** permettent de dire à un programme :  
« Si quelque chose est vrai, alors tu fais ça, sinon tu fais autre chose ».

Dans le cours sur les **variables**, on a vu le type `bool` avec les valeurs :
- `True` : vrai
- `False` : faux  

Les conditions utilisent justement ces valeurs.

---

## 1. Comparer des valeurs : les opérateurs de comparaison

Afin de vérifier si une condition est vraie ou fausse, on utilise des **opérateurs de comparaison**. Par exemple pour vérifier l'égalité on va utiliser `==` :

```python:executable
a = 3           #-> `=` assignation
print(a == 3)   #-> `==` comparaison (a est-il égal à 3 ?)
print(a == 5)   #-> `==` comparaison (a est-il égal à 5 ?)
```
Comme vous pouvez le constater dans la sortie, l'expression `a == 3` renvoie `True` car `a` vaut bien `3` en revanche, `a == 5` renvoie `False` car `a` ne vaut pas `5`.

Réaliser une comparaison revient donc à poser une question dont la réponse est soit `True` soit `False`.
Cette réponse est ensuite utilisée dans les conditions. Si la réponse est `True`, le bloc de code associé à la condition est exécuté, sinon il est ignoré.

Il existe plusieurs opérateurs de comparaison, en voici quelques-uns avec des exemples :
```python:executable
a = 5
b = 3

print(a == b)  # égal ?     -> False
print(a != b)  # différent ? -> True
print(a > b)   # strictement supérieur ? -> True
print(a < b)   # strictement inférieur ? -> False
print(a >= b)  # supérieur ou égal ? -> True
print(a <= b)  # inférieur ou égal ? -> False
```

Les principaux opérateurs :

- `==` : égal à  
- `!=` : différent de  
- `>`  : strictement supérieur à  
- `<`  : strictement inférieur à  
- `>=` : supérieur ou égal à  
- `<=` : inférieur ou égal à  


---

## 2. La condition `if` : exécuter un bloc si c’est vrai

Nous avons maintenant les outils pour créer des conditions.

Syntaxe de base :

```python
if condition:
    # bloc d'instructions (indenté)
    ...
```

- Si la `condition` vaut `True`, le bloc est exécuté.
- Si elle vaut `False`, le bloc est **sauté**.

Exemple :

```python:executable
age = 18

if age >= 18:
    print("Tu es majeur.")
```

Ici, `age >= 18` est une **expression booléenne** (elle vaut `True` ou `False`).  
Essaye de modifier `age = 16` -> tu constateras que rien ne s’affiche, car la condition est fausse et que par conséquent, le bloc indenté est sauté.

---

### Comparaison de chaînes de caractères
On peut aussi comparer des chaînes de caractères avec les mêmes opérateurs.

```python:executable
mot_de_passe = "secret"
if mot_de_passe == "secret":
    print("Accès autorisé.")
```

Bien que ce ne soit pas le plus courant, on peut aussi utiliser les autres opérateurs (`!=`, `<`, `>`, etc.) avec des chaînes de caractères. Dans ce cas, la comparaison se fait selon l’ordre alphabétique.

```python:executable
mot1 = "apple"
mot2 = "banana"
if mot1 < mot2:
    print(f"{mot1} vient avant {mot2} dans l'alphabet.")

mot1 = "grape"
mot2 = "grapefruit"
if mot1 != mot2:
    print(f"{mot1} et {mot2} sont différents.")

mot1 = "Orange"
mot2 = "orange"
if mot1 < mot2:
    print(f"{mot1} vient avant {mot2} dans l'ordre ASCII.")
if mot1 > mot2:
    print(f"{mot1} vient après {mot2} dans l'ordre ASCII.")
```
Comme tu peux le voir, la comparaison de chaînes de caractères est sensible à la casse (majuscules/minuscules) et suit l'ordre ASCII (voir table ASCII).

## 3. Ajouter des cas supplémentaires : `elif`

`elif` signifie **else if** (sinon si).  
Il permet d’ajouter d’autres conditions à tester, **dans l’ordre**.

Syntaxe :

```python
if condition1:
    # bloc 1
elif condition2:
    # bloc 2
elif condition3:
    # bloc 3
```

Le programme s’arrête **au premier bloc dont la condition est vraie**.

Exemple :

```python:executable
note = 14

if note >= 16:
    print("Très bien")
elif note >= 12:
    print("Assez bien")
elif note >= 10:
    print("Passable")
```

- Si `note = 17` → affiche `Très bien`
- Si `note = 14` → affiche `Assez bien`
- Si `note = 10` → affiche `Passable`
- Si `note = 8`  → n’affiche rien (aucune condition vraie)

---

## 4. Gérer le cas « sinon » : `else`

`else` sert à dire : **si aucune des conditions précédentes n’est vraie**.

Syntaxe complète :

```python
if condition1:
    # bloc 1
elif condition2:
    # bloc 2
else:
    # bloc 3 (cas par défaut)
```

Exemple avec une note :

```python:executable
note = 8

if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Réussi")
else:
    print("Échec")
```

Ici :
- si `note >= 16` → `Très bien`
- sinon, si `note >= 10` → `Réussi`
- sinon (tous les autres cas) → `Échec`

---
## 5. Imbriquer des conditions
On peut imbriquer des conditions, c’est-à-dire mettre un `if` à l’intérieur d’un autre `if`.

```python:executable
age = 20
a_permis = True

if age >= 18:
    if a_permis:
        print("Tu peux conduire une voiture.")
    else:
        print("Tu dois avoir le permis pour conduire.")
else:
    print("Tu es trop jeune pour conduire.")
```



## 6. Combiner plusieurs conditions : and / or / not

On peut combiner des conditions avec les opérateurs logiques :

- `and` : et
- `or`  : ou
- `not` : non

Ces opérateurs permettent de créer des conditions plus complexes en vérifiant plusieurs critères.  
Pour rappel, voici leur **table de vérité** :

|   A   |   B   | A and B | A or B | not A |
|:-----:|:-----:|:-------:|:------:|:-----:|
| True  | True  |  True   |  True  | False |
| True  | False |  False  |  True  | False |
| False | True  |  False  |  True  |  True |
| False | False |  False  | False  |  True |

Voici des exemples d’utilisation :

```python:executable
age = 20
a_permis = True

if age >= 18 and a_permis:
    print("Tu peux conduire une voiture.")
```
Modifie `age` et `a_permis` pour tester différents cas.

```python:executable
jour = "samedi"

if jour == "samedi" or jour == "dimanche":
    print("C'est le week-end !")
```
Modifie `jour` pour tester différents cas.

```python:executable
est_connecte = False

if not est_connecte:
    print("Tu dois te connecter.")
else:
    print("Tu es déjà connecté.")
```
Modifie `est_connecte` pour tester différents cas.

---

## 8. Exercices

A vous de pratiquer !

```python:executable
print("------- Exercices : conditions -------")
# * SI le contenue de ma variable "nombre" EST STRICTEMENT POSITIVE, ALORS j'affiche "positif" SINON j'affiche "négatif ou nul".
# ** SI ma variable "age" EST SUPÉRIEURE OU ÉGALE À 21 :
#           ALORS SI ma variable booléenne "boit_alcool" EST VRAI 
#               ALORS j'affiche "Peut acheter de l'alcool"
#               SINON j'affiche "Ne peut pas acheter d'alcool"
#    SINON j'affiche "Trop jeune pour acheter de l'alcool".
# ** SI mon nombre est PAIR, ALORS j'affiche "pair", SINON j'affiche "impair".
# ** Demander deux nombres et afficher le plus grand. (Attention à l'égalité !)
# *** SI ma variable "nombre" est plus grande que 10 j'ajoute 1 à "nombre". SI ma variable "nombre" est plus grande que 11 j'ajoute 1 à "nombre" SINON SI j'ajoute 10 à "nombre". J'affiche la valeur finale de "nombre".
```

Avant d'executer le code si dessous, reféchis à quel valeur sera affiché à la fin de l'execution du code; puis verifie ton raisonnement en executant le code.
-> N'hésite pas à prendre un papier et un crayon pour simuler l'execution du code pas à pas !

Si tu n'est pas tombé sur le bon résultat du premier coup ce n'est pas grave, essaye d'ajouter des prints un peu partout dans le code pour suivre l'évolution de la variable "nombre" (`print(nombre)`).

```python:executable
# *** Quel sera la valeur finale de "nombre" ?
nombre = 10

if nombre == 10:
    nombre += 1
if nombre > 11:
    nombre += 2
else:
    nombre += 3
if nombre < 15:
    nombre += 4
    if nombre == 12:
        nombre += 20
    elif nombre > 12:
        nombre += 5
    else:
        nombre = 0
else:
    nombre += 1

print(nombre)
```