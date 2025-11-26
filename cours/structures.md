# Structures de Contrôle

:::note Objectifs
Apprendre à :
- Utiliser les conditions (if, elif, else)
- Créer des boucles (for, while)
- Contrôler le flux d'exécution
:::

## Les conditions

Les conditions permettent d'exécuter du code selon certaines circonstances :

### Structure if-else basique

```python
# Exemple simple
age = 16

if age >= 18:
    print("Vous êtes majeur")
else:
    print("Vous êtes mineur")
    
print("Ce message s'affiche toujours")
```

:::info Indentation
En Python, l'**indentation** (les espaces au début) est OBLIGATOIRE ! Elle définit les blocs de code. Utilisez 4 espaces par niveau.
:::

### Structure if-elif-else

Pour tester plusieurs conditions :

```python
note = 15

if note >= 16:
    print("Très bien !")
    mention = "TB"
elif note >= 14:
    print("Bien")
    mention = "B"
elif note >= 12:
    print("Assez bien")
    mention = "AB"
elif note >= 10:
    print("Passable")
    mention = "P"
else:
    print("Insuffisant")
    mention = "I"

print(f"Mention: {mention}")
```

:::collapsible Opérateurs logiques
Vous pouvez combiner plusieurs conditions :

```python
age = 16
permis = False

# ET logique (and)
if age >= 18 and permis:
    print("Vous pouvez conduire")
else:
    print("Vous ne pouvez pas conduire")

# OU logique (or)
jour = "samedi"
if jour == "samedi" or jour == "dimanche":
    print("C'est le week-end !")

# NON logique (not)
pluie = False
if not pluie:
    print("On peut sortir !")
```
:::

## Les boucles for

La boucle `for` permet de répéter des actions :

### Parcourir une séquence

```python
# Parcourir une liste
fruits = ["pomme", "banane", "orange", "fraise"]

for fruit in fruits:
    print(f"J'aime les {fruit}s")

print("Boucle terminée !")
```

### Utiliser range()

```python
# Compter de 0 à 4
for i in range(5):
    print(f"Itération {i}")

print()

# Compter de 1 à 5
for i in range(1, 6):
    print(f"Nombre: {i}")

print()

# Compter de 0 à 10 par pas de 2
for i in range(0, 11, 2):
    print(f"Nombre pair: {i}")
```

:::collapsible Table de multiplication
Créons une table de multiplication :
```python
nombre = 7

print(f"Table de multiplication de {nombre}:")
for i in range(1, 11):
    resultat = nombre * i
    print(f"{nombre} × {i} = {resultat}")
```
:::

## Les boucles while

La boucle `while` continue tant qu'une condition est vraie :

```python
# Compte à rebours
compteur = 5

while compteur > 0:
    print(f"Compteur: {compteur}")
    compteur = compteur - 1  # ou compteur -= 1

print("Décollage ! 🚀")
```

:::warning Attention aux boucles infinies
Assurez-vous que la condition devient False à un moment, sinon la boucle ne s'arrêtera jamais !

```python
# Boucle infinie - NE PAS EXÉCUTER !
# while True:
#     print("Cette boucle ne s'arrête jamais...")
```
:::

### Utilisation pratique de while

```python
# Deviner un nombre
nombre_secret = 42
tentatives = 0
max_tentatives = 5

print("Devinez le nombre entre 1 et 100")

while tentatives < max_tentatives:
    # En pratique, on utiliserait input()
    # Pour cet exemple, testons avec 35, puis 42
    essai = 35 if tentatives == 0 else 42
    tentatives += 1
    
    print(f"Tentative {tentatives}: {essai}")
    
    if essai == nombre_secret:
        print(f"Bravo ! Trouvé en {tentatives} essais !")
        break  # Sortir de la boucle
    elif essai < nombre_secret:
        print("C'est plus !")
    else:
        print("C'est moins !")
else:
    print(f"Perdu ! Le nombre était {nombre_secret}")
```

## Contrôle de boucle : break et continue

### break : sortir d'une boucle

```python
# Chercher un élément
nombres = [3, 7, 12, 8, 15, 4]
cherche = 8

for nombre in nombres:
    print(f"Vérification de {nombre}...")
    if nombre == cherche:
        print(f"Trouvé : {cherche} !")
        break
else:
    print(f"{cherche} n'est pas dans la liste")
```

### continue : passer à l'itération suivante

```python
# Afficher seulement les nombres pairs
for i in range(1, 11):
    if i % 2 != 0:  # Si impair
        continue    # Passer au suivant
    print(f"{i} est pair")
```

:::collapsible Différence entre break et continue
- **break** : sort complètement de la boucle
- **continue** : passe à l'itération suivante sans exécuter le reste du code
:::

## Boucles imbriquées

On peut mettre des boucles dans des boucles :

```python
# Créer un motif
hauteur = 5

for ligne in range(1, hauteur + 1):
    for colonne in range(ligne):
        print("*", end="")
    print()  # Retour à la ligne
```

:::collapsible Table de multiplication complète
```python
# Table de 1 à 5
print("Tables de multiplication de 1 à 5:")
print()

for nombre in range(1, 6):
    print(f"Table de {nombre}:")
    for multiplicateur in range(1, 11):
        resultat = nombre * multiplicateur
        print(f"{nombre} × {multiplicateur} = {resultat}")
    print()  # Ligne vide entre les tables
```
:::

## Exercice : FizzBuzz

Le célèbre problème FizzBuzz :

```python
# Pour les nombres de 1 à 30:
# - Si divisible par 3: afficher "Fizz"
# - Si divisible par 5: afficher "Buzz"
# - Si divisible par 3 ET 5: afficher "FizzBuzz"
# - Sinon: afficher le nombre

for i in range(1, 31):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
```

## Exercice : Somme et moyenne

Calculer la somme et la moyenne d'une liste de notes :

```python
# Liste de notes
notes = [15, 12, 18, 14, 16, 11, 17]

# Calcul de la somme
somme = 0
for note in notes:
    somme += note

# Calcul de la moyenne
moyenne = somme / len(notes)

print(f"Nombre de notes: {len(notes)}")
print(f"Somme des notes: {somme}")
print(f"Moyenne: {moyenne:.2f}")

# Compter les notes au-dessus de la moyenne
au_dessus = 0
for note in notes:
    if note > moyenne:
        au_dessus += 1

print(f"Notes au-dessus de la moyenne: {au_dessus}")
```

:::reminder Points clés
- **if/elif/else** : pour les conditions
- **for** : pour parcourir des séquences
- **while** : pour répéter tant qu'une condition est vraie
- **break** : sortir d'une boucle
- **continue** : passer à l'itération suivante
- **range()** : générer des séquences de nombres
:::

:::success Excellent travail !
Vous maîtrisez maintenant les structures de contrôle en Python ! Passez au cours sur les fonctions pour apprendre à organiser votre code.
:::
