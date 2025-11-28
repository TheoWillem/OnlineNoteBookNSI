# MINI-Projet : Devine le nombre

L'objectif de ce **mini-projet** est de créer un **jeu simple** où l'ordinateur choisit un **nombre aléatoire**, et le joueur doit **deviner ce nombre** en recevant successivement des indices *+* ou *-*.

Pour cela, nous allons utiliser les concepts suivants :
- Le `input()` pour obtenir des **entrées de l'utilisateur**
- **Importation de modules** (`random`)
- **Boucles** (`while`)
- **Conditions** (`if`, `elif`, `else`)
- **Fonctions** (`def`)

## Importer le module `random` et choisir un nombre

```python
import random
nombre_mystere = random.randint(1, 20)
print("J'ai choisi un nombre entre 1 et 20 : ", nombre_mystere) 
```
:::warning Attention !
Attention à bien importer le module `random` avant de l'utiliser.
La fonction `randint(a, b)` génère un nombre entier aléatoire entre `a` et `b`, *inclus*.
:::

## Demander une devinette à l'utilisateur

```python
reponse = input("Entre un nombre : ")
reponse = int(reponse)
print(f"Tu as entré : {reponse}")
```
:::warning Attention !
L'entrée de `input()` est toujours une chaîne de caractères. Il faut la convertir en entier avec `int()` si tu veux la comparer à un nombre. (c'est ce que nous faisons ici ligne 2) -> voir cours sur les variables
:::

## Plus de précisions :
Le **résultat attendu** de ce projet est d'avoir dans sa console un échange de ce type :

```
J'ai choisi un nombre entre 1 et 20.
Devine le nombre : 10
C'est plus que 10!
Devine le nombre : 15
C'est moins que 15!
Devine le nombre : 13
C'est moins que 13!
Devine le nombre : 12
Gagné ! Le nombre était bien 12.
```

Tu auras besoin de ces **fonctions** que tu auras fait toi-même :
- Une fonction pour **générer un nombre aléatoire**
- Une fonction pour **demander une devinette** à l'utilisateur
- Une **fonction principale** qui gère le jeu (*démarre le jeu*, boucle jusqu'à ce que l'utilisateur trouve le bon nombre, affiche des indices)

:::collapsible Aide

Pour demander **en BOUCLE** une devinette jusqu'à ce que l'utilisateur trouve le bon nombre, tu peux utiliser une boucle `while`. **TANT QUE** la devinette n'est pas égale au nombre mystère, continue de demander une nouvelle devinette. On adapte ensuite le message en fonction : **SI** le nombre est *plus grand* ou **SI** le nombre est *plus petit*.
:::


:::collapsible Bonus
Pour rendre le jeu plus intéressant, tu peux ajouter :
- (facile) Un **compteur de tentatives** pour afficher combien d'essais l'utilisateur a fait avant de trouver
- (facile) Une **limite de tentatives** (par exemple *10 essais maximum*)
- (moyen) Des **niveaux de difficulté** (par exemple, choisir un nombre entre *1 et 50* pour un niveau difficile)
- (moyen) Permettre à l'utilisateur de **rejouer** après une partie (en demandant "Veux-tu rejouer ? (oui/non)")
- (moyen-difficile) Varier les phrases en fonction de à quel point l'utilisateur est proche du nombre (ex: **"Tu brûles !"** si la différence est inférieure à 3)
:::

