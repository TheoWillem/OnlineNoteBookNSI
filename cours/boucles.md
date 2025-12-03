# Les boucles en Python

Les boucles permettent de répéter un bloc d'instruction plusieurs fois. En Python, il existe principalement deux types de boucles : la boucle `for` et la boucle `while`.

:::details * La boucle `for`
## La boucle `for`

La boucle `for` est utilisée pour répéter un bloc d'instructions un **nombre déterminé de fois**. Afin de définir ce nombre, on utilise souvent la fonction `range()`, qui génère une séquence de nombres *(objet de type range)*.

```python:executable
print(list(range(5)))
```
On peut utiliser cette séquence dans une boucle `for` pour itérer sur chaque valeur générée par `range()` :

```python:executable
for i in range(5):
    print("Itération numéro", i)
```
Ici, la variable `i` prend successivement les valeurs de 0 à 4, et le bloc d'instructions à l'intérieur de la boucle est exécuté 5 fois.

```python:executable
print("------- Exercice -------")
# * Écrire une boucle `for` qui affiche les nombres de 0 à 10.
# ** Ecrire une boucle for qui affiche la table de multiplication de 7 (de 0 à 10).
# *** Ecrire un boucle for qui affiche tout les nombre qui sont des multiple de 3 entre 0 et 30.

``` 
:::

:::details * La boucle `while`
## La boucle `while`

La boucle `while` est utilisée pour répéter un bloc d'instructions tant qu'une **condition** est vraie. Voici un exemple simple :

```python:executable
compteur = 0
while compteur < 5:
    print("Compteur:", compteur)
    compteur += 1
```
Ici, la boucle continue tant que la variable `compteur` est inférieure à 5. À chaque itération, on affiche la valeur de `compteur` et on l'incrémente de 1.

```python:executable
print("------- Exercice -------")
# * Écrire une boucle `while` qui affiche les nombres de 0 à 10.
# ** Écrire une boucle `while` qui affiche la table de multiplication de 8 (de 0 à 10).
# *** Écrire une boucle `while` qui affiche tous les nombres qui sont des multiples de 4 entre 0 et 40.
```
:::

:::details ** Les instructions `break` et `continue`

Les instructions `break` et `continue` permettent de contrôler le flux d'une boucle :

### `break` : permet de sortir immédiatement de la boucle.

```python:executable
for i in range(10):
    if i == 5:
        break
    print("i =", i)
```

### `continue` : permet de passer à l'itération suivante de la boucle sans exécuter le reste du code dans le bloc.

```python:executable
for i in range(10):
    if i % 2 == 0:
        continue
    print("i =", i)
```
:::

---

## Turtle
Pour s'amuser avec les boucles, on peut utiliser le module `turtle`, qui permet de dessiner à l'écran en déplaçant une "tortue" virtuelle. Pour cela voir le cour [s'amuser avec turtle](turtle.md).
