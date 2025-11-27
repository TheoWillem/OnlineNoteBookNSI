# Les Fonctions en Python

:::note Objectifs
Apprendre à :
- Créer et utiliser des fonctions
- Passer des paramètres
- Retourner des valeurs
- Organiser son code efficacement
:::

## Qu'est-ce qu'une fonction ?

Une fonction est un **bloc de code réutilisable** qui effectue une tâche spécifique.

:::info Avantages des fonctions
- **Réutilisabilité** : écrivez une fois, utilisez plusieurs fois
- **Organisation** : code plus structuré et lisible
- **Maintenance** : plus facile à modifier
- **Tests** : plus simple à tester
:::

## Créer une fonction simple

```python
# Définition d'une fonction
def dire_bonjour():
    print("Bonjour !")
    print("Bienvenue dans le cours de NSI")

# Appel de la fonction
dire_bonjour()
dire_bonjour()  # On peut l'appeler plusieurs fois
```

:::collapsible Syntaxe
```
def nom_fonction():
    # Code de la fonction
    # Indenté avec 4 espaces
```

- `def` : mot-clé pour définir une fonction
- `nom_fonction` : nom choisi (conventions : minuscules, underscores)
- `()` : parenthèses pour les paramètres (vides ici)
- `:` : deux-points obligatoires
- Indentation : le corps de la fonction doit être indenté
:::

## Fonctions avec paramètres

Les paramètres permettent de passer des informations à la fonction :

```python
# Fonction avec un paramètre
def saluer(nom):
    print(f"Bonjour {nom} !")
    print("Ravi de vous rencontrer")

# Appels avec différents arguments
saluer("Alice")
saluer("Bob")
saluer("Charlie")
```

### Plusieurs paramètres

```python
# Fonction avec plusieurs paramètres
def presenter(nom, age, classe):
    print(f"Je m'appelle {nom}")
    print(f"J'ai {age} ans")
    print(f"Je suis en {classe}")

# Appel avec plusieurs arguments
presenter("Alice", 16, "Première NSI")
```

:::collapsible Paramètres par défaut
Vous pouvez donner des valeurs par défaut :

```python
def saluer(nom, formule="Bonjour"):
    print(f"{formule} {nom} !")

saluer("Alice")              # Utilise "Bonjour"
saluer("Bob", "Salut")       # Utilise "Salut"
saluer("Charlie", "Bonsoir") # Utilise "Bonsoir"
```
:::

## Retourner des valeurs

Les fonctions peuvent calculer et retourner des résultats :

```python
# Fonction qui retourne une valeur
def additionner(a, b):
    resultat = a + b
    return resultat

# Utilisation
somme = additionner(5, 3)
print(f"5 + 3 = {somme}")

# On peut utiliser directement le résultat
print(f"10 + 20 = {additionner(10, 20)}")
```

### Retourner plusieurs valeurs

```python
# Retourner plusieurs valeurs (tuple)
def calculer_tout(a, b):
    somme = a + b
    difference = a - b
    produit = a * b
    quotient = a / b if b != 0 else None
    
    return somme, difference, produit, quotient

# Récupérer les résultats
s, d, p, q = calculer_tout(10, 3)
print(f"Somme: {s}")
print(f"Différence: {d}")
print(f"Produit: {p}")
print(f"Quotient: {q:.2f}")
```

## Exemples pratiques

### Calculer une moyenne

```python
def calculer_moyenne(notes):
    """
    Calcule la moyenne d'une liste de notes.
    """
    if len(notes) == 0:
        return 0
    
    somme = sum(notes)
    moyenne = somme / len(notes)
    return moyenne

# Utilisation
mes_notes = [15, 12, 18, 14, 16]
ma_moyenne = calculer_moyenne(mes_notes)
print(f"Moyenne: {ma_moyenne:.2f}")
```

:::info Documentation
Les triples guillemets `"""..."""` créent une **docstring**, qui documente la fonction. C'est une bonne pratique !
:::

### Vérifier si un nombre est premier

```python
def est_premier(n):
    """
    Vérifie si un nombre est premier.
    Retourne True si premier, False sinon.
    """
    if n < 2:
        return False
    
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    
    return True

# Test
for nombre in range(1, 21):
    if est_premier(nombre):
        print(f"{nombre} est premier")
```

### Convertir une température

```python
def celsius_vers_fahrenheit(celsius):
    """Convertit Celsius en Fahrenheit"""
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_vers_celsius(fahrenheit):
    """Convertit Fahrenheit en Celsius"""
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Utilisation
temp_c = 25
temp_f = celsius_vers_fahrenheit(temp_c)
print(f"{temp_c}°C = {temp_f}°F")

temp_f2 = 77
temp_c2 = fahrenheit_vers_celsius(temp_f2)
print(f"{temp_f2}°F = {temp_c2:.1f}°C")
```

## Portée des variables

Les variables ont une **portée** (scope) :

```python
# Variable globale
compteur = 0

def incrementer():
    # Variable locale
    local_var = 10
    global compteur  # Accéder à la variable globale
    compteur += 1
    print(f"Compteur dans la fonction: {compteur}")
    print(f"Variable locale: {local_var}")

incrementer()
incrementer()
print(f"Compteur global: {compteur}")
# print(local_var)  # Erreur ! local_var n'existe pas ici
```

:::warning Attention
Évitez d'utiliser trop de variables globales. Préférez passer les valeurs en paramètres et retourner les résultats.
:::

## Fonctions récursives

Une fonction peut s'appeler elle-même :

```python
def factorielle(n):
    """
    Calcule la factorielle de n (n!)
    Exemple: 5! = 5 × 4 × 3 × 2 × 1 = 120
    """
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorielle(n - 1)

# Test
for i in range(6):
    print(f"{i}! = {factorielle(i)}")
```

:::collapsible Suite
```python
def fibonacci(n):
    """
    Retourne le n-ième nombre de Fibonacci.
    0, 1, 1, 2, 3, 5, 8, 13, 21, ...
    """
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# Afficher les 10 premiers nombres de Fibonacci
print("Suite de Fibonacci:")
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```
:::

## Exercice : Jeu de devinette

```python
def deviner_nombre():
    """
    Jeu où l'ordinateur devine votre nombre.
    """
    import random
    
    nombre_secret = random.randint(1, 100)
    tentatives = 0
    max_tentatives = 10
    
    print("J'ai choisi un nombre entre 1 et 100")
    print(f"Vous avez {max_tentatives} tentatives")
    
    while tentatives < max_tentatives:
        tentatives += 1
        # Simulation d'un essai (en pratique, on utiliserait input())
        essai = random.randint(1, 100)
        print(f"\nTentative {tentatives}: {essai}")
        
        if essai == nombre_secret:
            print(f"🎉 Gagné en {tentatives} essais !")
            return True
        elif essai < nombre_secret:
            print("↑ C'est plus !")
        else:
            print("↓ C'est moins !")
    
    print(f"\n❌ Perdu ! Le nombre était {nombre_secret}")
    return False

# Lancer le jeu
deviner_nombre()
```

## Exercice : Statistiques sur une liste

```python
def statistiques(nombres):
    """
    Calcule min, max, moyenne, médiane d'une liste.
    """
    if not nombres:
        return None
    
    # Trier pour la médiane
    nombres_tries = sorted(nombres)
    
    # Calculs
    minimum = min(nombres)
    maximum = max(nombres)
    moyenne = sum(nombres) / len(nombres)
    
    # Médiane
    n = len(nombres_tries)
    if n % 2 == 0:
        mediane = (nombres_tries[n//2 - 1] + nombres_tries[n//2]) / 2
    else:
        mediane = nombres_tries[n//2]
    
    return {
        'min': minimum,
        'max': maximum,
        'moyenne': moyenne,
        'mediane': mediane,
        'etendue': maximum - minimum
    }

# Test
notes = [15, 12, 18, 14, 16, 11, 17, 13]
stats = statistiques(notes)

print("Statistiques des notes:")
print(f"Minimum: {stats['min']}")
print(f"Maximum: {stats['max']}")
print(f"Moyenne: {stats['moyenne']:.2f}")
print(f"Médiane: {stats['mediane']}")
print(f"Étendue: {stats['etendue']}")
```

:::reminder Points clés
- **def** : définir une fonction
- **Paramètres** : données en entrée
- **return** : renvoyer un résultat
- **Docstring** : documenter la fonction
- **Portée** : variables locales vs globales
- **Récursion** : fonction qui s'appelle elle-même
:::

:::success Félicitations !
Vous savez maintenant créer et utiliser des fonctions en Python ! C'est une compétence fondamentale en programmation.
:::
