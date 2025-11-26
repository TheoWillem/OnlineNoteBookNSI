# Introduction à Python

:::note Objectifs du cours
À la fin de ce cours, vous serez capable de :
- Comprendre les bases de Python
- Écrire vos premiers programmes
- Utiliser l'environnement de développement
:::

## Qu'est-ce que Python ?

Python est un langage de programmation **interprété**, **haut niveau** et **polyvalent**. Il a été créé par Guido van Rossum et publié pour la première fois en 1991.

:::info Information importante
Python est l'un des langages les plus populaires au monde et est utilisé dans de nombreux domaines : web, data science, intelligence artificielle, automatisation, etc.
:::

## Pourquoi apprendre Python ?

1. **Syntaxe simple et claire** - Python ressemble à du pseudo-code
2. **Grande communauté** - Des millions de développeurs dans le monde
3. **Nombreuses bibliothèques** - Pour presque tous les besoins
4. **Très demandé** - Sur le marché du travail

:::reminder Rappel
En NSI (Numérique et Sciences Informatiques), Python est le langage principal utilisé pour découvrir les concepts de programmation.
:::

## Votre premier programme Python

Commençons par le traditionnel "Hello, World!" :

```python
# Mon premier programme Python
print("Hello, World!")
print("Bienvenue dans le cours de NSI !")
```

:::collapsible Explications détaillées
Le symbole `#` permet d'ajouter des commentaires dans votre code. Les commentaires sont ignorés par Python mais aident à comprendre le code.

La fonction `print()` affiche du texte à l'écran. Le texte doit être entre guillemets (simples ' ou doubles ").
:::

## Utiliser des variables

Les variables permettent de stocker des informations :

```python
# Déclaration de variables
nom = "Alice"
age = 16
moyenne = 15.5

# Affichage
print("Nom:", nom)
print("Age:", age)
print("Moyenne:", moyenne)
```

:::collapsible Exercice pratique
Modifiez le code ci-dessus pour afficher vos propres informations. Ajoutez une variable `classe` avec votre classe (par exemple "Première NSI").
:::

## Opérations mathématiques

Python peut être utilisé comme une calculatrice :

```python
# Opérations de base
a = 10
b = 3

print("Addition:", a + b)
print("Soustraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Division entière:", a // b)
print("Modulo (reste):", a % b)
print("Puissance:", a ** b)
```

:::warning Attention
La division `/` donne toujours un résultat décimal (float), même si les deux nombres sont entiers. Utilisez `//` pour une division entière.
:::

## Exercice final

Créez un programme qui :
1. Demande le nom de l'utilisateur
2. Calcule la somme de deux nombres
3. Affiche un message personnalisé

```python
# Programme interactif
nom = "Étudiant"  # Modifiez avec votre nom
nombre1 = 25
nombre2 = 17

somme = nombre1 + nombre2

print(f"Bonjour {nom} !")
print(f"La somme de {nombre1} et {nombre2} est : {somme}")
```

:::success Félicitations !
Vous avez terminé votre premier cours de Python ! Passez au cours suivant pour découvrir les types de données en détail.
:::
