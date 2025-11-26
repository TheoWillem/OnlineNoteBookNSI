# Test des Modules Python

:::note Information
Cette page vous permet de tester différents modules Python. Les modules sont chargés automatiquement lors de leur premier import !
:::

## Modules Disponibles

Pyodide supporte de nombreux modules scientifiques populaires :

- **NumPy** - Calcul numérique
- **Matplotlib** - Graphiques
- **Pandas** - Analyse de données
- **SciPy** - Calcul scientifique
- **Scikit-learn** - Machine learning
- **SymPy** - Mathématiques symboliques
- Et bien d'autres via micropip !

## Test 1 : NumPy

```python
import numpy as np

# Créer un tableau
arr = np.array([1, 2, 3, 4, 5])
print("Tableau:", arr)
print("Moyenne:", np.mean(arr))
print("Écart-type:", np.std(arr))

# Opérations matricielles
matrix = np.array([[1, 2], [3, 4]])
print("\nMatrice:")
print(matrix)
print("Déterminant:", np.linalg.det(matrix))
```

## Test 2 : Matplotlib (Simple)

```python
import matplotlib.pyplot as plt
import numpy as np

# Données
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Graphique
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2)
plt.title('Fonction Sinus')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True, alpha=0.3)
plt.show()

print("✅ Graphique généré !")
```

## Test 3 : Modules Standards

Les modules de la bibliothèque standard Python sont disponibles sans installation :

```python
import math
import random
import datetime
import json

# Math
print("π =", math.pi)
print("e =", math.e)
print("√2 =", math.sqrt(2))

# Random
print("\nNombres aléatoires:", [random.randint(1, 10) for _ in range(5)])

# Datetime
now = datetime.datetime.now()
print("\nDate et heure:", now.strftime("%d/%m/%Y %H:%M:%S"))

# JSON
data = {"nom": "Python", "version": 3.11}
print("\nJSON:", json.dumps(data, indent=2))
```

## Test 4 : Collections et Itertools

```python
from collections import Counter, defaultdict
import itertools

# Counter
fruits = ['pomme', 'banane', 'pomme', 'orange', 'banane', 'pomme']
compteur = Counter(fruits)
print("Compteur:", compteur)
print("Fruit le plus commun:", compteur.most_common(1))

# Itertools
print("\nCombinaisons de 2 parmi 4:")
for combo in itertools.combinations([1, 2, 3, 4], 2):
    print(combo)

# Permutations
print("\nPermutations de [A, B, C]:")
for perm in itertools.permutations(['A', 'B', 'C']):
    print(''.join(perm))
```

## Test 5 : Calculs Scientifiques Avancés

```python
import numpy as np

# Statistiques
data = np.random.normal(100, 15, 1000)
print("Données générées (distribution normale)")
print(f"Moyenne: {np.mean(data):.2f}")
print(f"Médiane: {np.median(data):.2f}")
print(f"Écart-type: {np.std(data):.2f}")
print(f"Min: {np.min(data):.2f}")
print(f"Max: {np.max(data):.2f}")

# Percentiles
print(f"\n25e percentile: {np.percentile(data, 25):.2f}")
print(f"50e percentile: {np.percentile(data, 50):.2f}")
print(f"75e percentile: {np.percentile(data, 75):.2f}")
```

## Test 6 : Graphique Complexe

```python
import matplotlib.pyplot as plt
import numpy as np

# Créer plusieurs sous-graphiques
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Graphique 1: Sinusoïde
x = np.linspace(0, 2*np.pi, 100)
axes[0, 0].plot(x, np.sin(x), 'r-')
axes[0, 0].set_title('Sinus')
axes[0, 0].grid(True)

# Graphique 2: Cosinusoïde
axes[0, 1].plot(x, np.cos(x), 'b-')
axes[0, 1].set_title('Cosinus')
axes[0, 1].grid(True)

# Graphique 3: Parabole
x2 = np.linspace(-5, 5, 100)
axes[1, 0].plot(x2, x2**2, 'g-')
axes[1, 0].set_title('Parabole')
axes[1, 0].grid(True)

# Graphique 4: Exponentielle
axes[1, 1].plot(x, np.exp(x/5), 'm-')
axes[1, 1].set_title('Exponentielle')
axes[1, 1].grid(True)

plt.tight_layout()
plt.show()

print("✅ Graphiques multiples générés !")
```

## Test 7 : Expressions Régulières

```python
import re

texte = """
Email: contact@example.com
Tel: 06 12 34 56 78
Site: https://www.example.com
"""

# Chercher les emails
emails = re.findall(r'\b[\w.-]+@[\w.-]+\.\w+\b', texte)
print("Emails trouvés:", emails)

# Chercher les numéros de téléphone
tels = re.findall(r'\d{2} \d{2} \d{2} \d{2} \d{2}', texte)
print("Téléphones trouvés:", tels)

# Chercher les URLs
urls = re.findall(r'https?://[\w.-]+\.\w+', texte)
print("URLs trouvées:", urls)
```

## Test 8 : Manipulation de Chaînes Avancée

```python
# String formatting
nom = "Alice"
age = 16
moyenne = 15.75

print(f"Nom: {nom}")
print(f"Age: {age}")
print(f"Moyenne: {moyenne:.2f}")

# Manipulation de texte
texte = "Python est GÉNIAL pour la NSI"
print(f"\nOriginal: {texte}")
print(f"Majuscules: {texte.upper()}")
print(f"Minuscules: {texte.lower()}")
print(f"Titre: {texte.title()}")
print(f"Mots: {texte.split()}")
print(f"Longueur: {len(texte)}")

# Compréhension de liste
mots = texte.split()
longueurs = [len(mot) for mot in mots]
print(f"\nLongueurs des mots: {longueurs}")
```

:::success Modules Dynamiques
Les modules sont chargés automatiquement ! Si un module n'est pas disponible dans Pyodide, le système tentera de l'installer via micropip.
:::

:::info Modules Supportés
Pour voir la liste complète des packages disponibles, consultez :
https://pyodide.org/en/stable/usage/packages-in-pyodide.html
:::

:::warning Limitations
Certains modules nécessitant des extensions C non compilées pour WebAssembly peuvent ne pas fonctionner. En cas de doute, testez !
:::
