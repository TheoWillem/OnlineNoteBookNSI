:::details La boucle `for` avec les listes

Les boucles `for` sont souvent utilisées pour parcourir les éléments d'une liste. Voici un exemple :

```python:executable
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print("J'aime les", fruit)
```
Ici, la variable `fruit` prend successivement chaque valeur de la liste `fruits`, et le bloc d'instructions est exécuté pour chaque fruit. 

```python:executable
print("------- Exercice -------")
# * Écrire une boucle `for` qui affiche chaque élément de la liste suivante : nombres = [10, 20, 30, 40, 50].
# ** Écrire une boucle `for` qui calcule et affiche la somme des éléments de la liste suivante : nombres = [1, 2, 3, 4, 5].
```
:::

:::details La boucle `for` avec les chaines de caractères

Les boucles `for` peuvent également être utilisées pour parcourir les caractères d'une chaîne de caractères. Voici un exemple :

```python:executable
mot = "Python"
for lettre in mot:
    print(lettre)
```
Ici, la variable `lettre` prend successivement chaque caractère de la chaîne `mot`, et le bloc d'instructions est exécuté pour chaque lettre.   

```python:executable
print("------- Exercice -------")
# * Écrire une boucle `for` qui affiche chaque caractère de la chaîne suivante : phrase = "Hello world !".
# *** Écrire une boucle `for` qui compte le nombre de voyelles dans la chaîne suivante : phrase = "Apprendre à programmer en Python".
```
:::


:::details Les boucles imbriquées

Il est possible d'imbriquer des boucles `for`, c'est-à-dire d'avoir une boucle à l'intérieur d'une autre boucle. Voici un exemple :

```python:executable
for i in range(3):
    for j in range(2):
        print("i =", i, ", j =", j)
```
Ici, pour chaque valeur de `i`, la boucle intérieure parcourt toutes les valeurs de `j`.

```python:executable
print("------- Exercice -------")
# * Écrire une boucle `for` imbriquée qui affiche pour chaque nombre de 1 a 10 les nombre de 1 a 3.
# ** Écrire une boucle `for` imbriquée qui multiplie pas 2 chaque nombre d'un tableau.
# ** Écrire une boucle `for` imbriquée qui affiche une table de multiplication complète de 1 à 10.
# *** Écrire une boucle `for` imbriquée qui affiche un tableau de 5 lignes et 5 colonnes rempli de zéros.
```