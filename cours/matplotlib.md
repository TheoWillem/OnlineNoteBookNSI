# Visualisation de Données avec Matplotlib

:::note Objectifs
Dans ce cours bonus, vous allez apprendre à :
- Créer des graphiques avec Matplotlib
- Visualiser des données scientifiques
- Personnaliser vos graphiques
:::

## Introduction à Matplotlib

Matplotlib est la bibliothèque Python la plus populaire pour créer des graphiques et visualisations.

:::info Installation
Dans un environnement normal, vous devriez installer matplotlib avec :
```
pip install matplotlib
```
Mais ici, Pyodide l'a déjà chargé pour vous !
:::

## Premier Graphique Simple

```python
import matplotlib.pyplot as plt

# Données
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Créer le graphique
plt.figure(figsize=(8, 5))
plt.plot(x, y, marker='o', color='blue', linewidth=2)
plt.title('Mon Premier Graphique')
plt.xlabel('Axe X')
plt.ylabel('Axe Y')
plt.grid(True)
plt.show()
```

:::reminder Note
Cliquez sur "Exécuter" et le graphique s'ouvrira dans une fenêtre modale !
:::

## Fonctions Mathématiques

Traçons quelques fonctions mathématiques classiques :

```python
import matplotlib.pyplot as plt
import numpy as np

# Créer des valeurs x
x = np.linspace(-5, 5, 100)

# Calculer différentes fonctions
y1 = x ** 2          # Parabole
y2 = x ** 3          # Cubique
y3 = np.sin(x) * 3   # Sinus

# Créer le graphique
plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='x²', color='red', linewidth=2)
plt.plot(x, y2, label='x³', color='green', linewidth=2)
plt.plot(x, y3, label='3×sin(x)', color='blue', linewidth=2)

plt.title('Fonctions Mathématiques')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True, alpha=0.3)
plt.axhline(y=0, color='black', linewidth=0.5)
plt.axvline(x=0, color='black', linewidth=0.5)
plt.show()
```

:::collapsible Explication du code
- `np.linspace(-5, 5, 100)` : crée 100 valeurs entre -5 et 5
- `plt.figure(figsize=(10, 6))` : définit la taille du graphique
- `plt.plot()` : trace une ligne
- `label=` : nom pour la légende
- `plt.legend()` : affiche la légende
- `plt.grid()` : ajoute une grille
- `plt.axhline()` et `plt.axvline()` : lignes horizontale et verticale
:::

## Graphiques en Barres

Visualisons des données statistiques :

```python
import matplotlib.pyplot as plt
import numpy as np

# Données de notes par matière
matieres = ['Maths', 'NSI', 'Physique', 'Français', 'Anglais']
notes = [15, 17, 14, 13, 16]
couleurs = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

# Créer le graphique en barres
plt.figure(figsize=(10, 6))
bars = plt.bar(matieres, notes, color=couleurs, edgecolor='black', linewidth=1.5)

# Ajouter les valeurs sur les barres
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height,
             f'{height:.0f}',
             ha='center', va='bottom', fontsize=12, fontweight='bold')

plt.title('Notes par Matière', fontsize=16, fontweight='bold')
plt.ylabel('Note (/20)', fontsize=12)
plt.ylim(0, 20)
plt.grid(axis='y', alpha=0.3)
plt.show()
```

## Diagramme Circulaire (Camembert)

```python
import matplotlib.pyplot as plt

# Répartition du temps d'étude
activites = ['Maths', 'NSI', 'Physique', 'Révisions', 'Exercices']
temps = [5, 6, 4, 3, 2]  # heures par semaine

# Couleurs personnalisées
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

# Créer le diagramme
plt.figure(figsize=(10, 8))
plt.pie(temps, labels=activites, colors=colors, autopct='%1.1f%%',
        startangle=90, shadow=True, explode=(0.1, 0, 0, 0, 0))
plt.title('Répartition du Temps d\'Étude (heures/semaine)', 
          fontsize=14, fontweight='bold')
plt.axis('equal')  # Pour un cercle parfait
plt.show()
```

:::success Astuce
L'option `explode=(0.1, 0, 0, 0, 0)` fait ressortir la première portion du camembert !
:::

## Nuage de Points (Scatter Plot)

Visualisons une corrélation entre deux variables :

```python
import matplotlib.pyplot as plt
import numpy as np

# Générer des données aléatoires avec corrélation
np.random.seed(42)
heures_etude = np.random.randint(1, 20, 50)
notes = heures_etude * 0.5 + np.random.randn(50) * 2 + 8

# Créer le scatter plot
plt.figure(figsize=(10, 6))
plt.scatter(heures_etude, notes, c=notes, cmap='viridis', 
            s=100, alpha=0.6, edgecolors='black', linewidth=1)

# Ajouter une ligne de tendance
z = np.polyfit(heures_etude, notes, 1)
p = np.poly1d(z)
plt.plot(heures_etude, p(heures_etude), "r--", linewidth=2, 
         label=f'Tendance: y={z[0]:.2f}x+{z[1]:.2f}')

plt.colorbar(label='Note')
plt.title('Corrélation Heures d\'Étude vs Notes', fontsize=14, fontweight='bold')
plt.xlabel('Heures d\'Étude par Semaine', fontsize=12)
plt.ylabel('Note (/20)', fontsize=12)
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
```

:::collapsible Comprendre le code
- `np.random.seed(42)` : pour des résultats reproductibles
- `c=notes` : colore les points selon leur valeur
- `cmap='viridis'` : palette de couleurs
- `s=100` : taille des points
- `alpha=0.6` : transparence
- `np.polyfit()` : calcule la droite de régression linéaire
:::

## Graphiques Multiples (Subplots)

Créer plusieurs graphiques dans une seule figure :

```python
import matplotlib.pyplot as plt
import numpy as np

# Données
x = np.linspace(0, 2*np.pi, 100)

# Créer une figure avec 4 sous-graphiques
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Graphique 1: Sinus
axes[0, 0].plot(x, np.sin(x), 'b-', linewidth=2)
axes[0, 0].set_title('Fonction Sinus')
axes[0, 0].grid(True)

# Graphique 2: Cosinus
axes[0, 1].plot(x, np.cos(x), 'r-', linewidth=2)
axes[0, 1].set_title('Fonction Cosinus')
axes[0, 1].grid(True)

# Graphique 3: Tangente
axes[1, 0].plot(x, np.tan(x), 'g-', linewidth=2)
axes[1, 0].set_title('Fonction Tangente')
axes[1, 0].set_ylim(-5, 5)
axes[1, 0].grid(True)

# Graphique 4: Exponentielle
axes[1, 1].plot(x, np.exp(x/3), 'm-', linewidth=2)
axes[1, 1].set_title('Fonction Exponentielle')
axes[1, 1].grid(True)

# Titre général
fig.suptitle('Fonctions Trigonométriques et Exponentielle', 
             fontsize=16, fontweight='bold')
plt.tight_layout()
plt.show()
```

## Histogramme

Visualiser une distribution de données :

```python
import matplotlib.pyplot as plt
import numpy as np

# Générer des notes aléatoires (distribution normale)
np.random.seed(42)
notes = np.random.normal(12, 3, 1000)  # moyenne=12, écart-type=3
notes = np.clip(notes, 0, 20)  # Limiter entre 0 et 20

# Créer l'histogramme
plt.figure(figsize=(12, 6))
n, bins, patches = plt.hist(notes, bins=20, color='skyblue', 
                             edgecolor='black', alpha=0.7)

# Colorier selon les notes
for i, patch in enumerate(patches):
    if bins[i] < 10:
        patch.set_facecolor('red')
    elif bins[i] < 12:
        patch.set_facecolor('orange')
    elif bins[i] < 14:
        patch.set_facecolor('yellow')
    elif bins[i] < 16:
        patch.set_facecolor('lightgreen')
    else:
        patch.set_facecolor('green')

# Ajouter des statistiques
moyenne = np.mean(notes)
mediane = np.median(notes)
plt.axvline(moyenne, color='red', linestyle='--', linewidth=2, 
            label=f'Moyenne: {moyenne:.2f}')
plt.axvline(mediane, color='blue', linestyle='--', linewidth=2, 
            label=f'Médiane: {mediane:.2f}')

plt.title('Distribution des Notes (1000 étudiants)', fontsize=14, fontweight='bold')
plt.xlabel('Note', fontsize=12)
plt.ylabel('Nombre d\'étudiants', fontsize=12)
plt.legend()
plt.grid(axis='y', alpha=0.3)
plt.show()
```

:::info Statistiques
- **Moyenne** : somme des valeurs / nombre de valeurs
- **Médiane** : valeur centrale quand les données sont triées
- **Distribution normale** : la fameuse "courbe en cloche"
:::

## Graphique Animé (Spirale)

Créons quelque chose d'artistique :

```python
import matplotlib.pyplot as plt
import numpy as np

# Créer une spirale
theta = np.linspace(0, 8*np.pi, 1000)
r = theta

# Convertir en coordonnées cartésiennes
x = r * np.cos(theta)
y = r * np.sin(theta)

# Créer le graphique
plt.figure(figsize=(10, 10))
plt.plot(x, y, linewidth=2)
plt.scatter(x[::50], y[::50], c=range(len(x[::50])), 
            cmap='rainbow', s=100, zorder=5)

plt.title('Spirale Colorée', fontsize=16, fontweight='bold')
plt.axis('equal')
plt.grid(True, alpha=0.3)
plt.colorbar(label='Position')
plt.show()
```

:::success Projet artistique
Essayez de modifier les paramètres (theta, formules) pour créer d'autres motifs !
:::

## Exercice Final : Dashboard de Statistiques

Créez un tableau de bord complet :

```python
import matplotlib.pyplot as plt
import numpy as np

# Données
mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']
temperatures = [3, 5, 10, 15, 20, 25]
precipitations = [50, 40, 45, 38, 30, 20]

# Créer une figure avec plusieurs graphiques
fig = plt.figure(figsize=(14, 10))

# Graphique 1: Températures
ax1 = plt.subplot(2, 2, 1)
ax1.plot(mois, temperatures, marker='o', color='red', linewidth=2, markersize=8)
ax1.fill_between(mois, temperatures, alpha=0.3, color='red')
ax1.set_title('Températures Moyennes', fontweight='bold')
ax1.set_ylabel('°C')
ax1.grid(True, alpha=0.3)

# Graphique 2: Précipitations
ax2 = plt.subplot(2, 2, 2)
ax2.bar(mois, precipitations, color='blue', alpha=0.7, edgecolor='black')
ax2.set_title('Précipitations', fontweight='bold')
ax2.set_ylabel('mm')
ax2.grid(axis='y', alpha=0.3)

# Graphique 3: Camembert saisons
ax3 = plt.subplot(2, 2, 3)
saisons = ['Hiver', 'Printemps', 'Été', 'Automne']
durees = [90, 92, 93, 90]
colors = ['#87CEEB', '#90EE90', '#FFD700', '#FF8C00']
ax3.pie(durees, labels=saisons, colors=colors, autopct='%1.1f%%', startangle=90)
ax3.set_title('Durée des Saisons (jours)', fontweight='bold')

# Graphique 4: Nuage de points température vs précipitations
ax4 = plt.subplot(2, 2, 4)
scatter = ax4.scatter(temperatures, precipitations, c=range(len(mois)), 
                      cmap='viridis', s=200, alpha=0.7, edgecolors='black', linewidth=2)
for i, moi in enumerate(mois):
    ax4.annotate(moi, (temperatures[i], precipitations[i]), 
                 fontsize=10, fontweight='bold')
ax4.set_title('Température vs Précipitations', fontweight='bold')
ax4.set_xlabel('Température (°C)')
ax4.set_ylabel('Précipitations (mm)')
ax4.grid(True, alpha=0.3)

# Titre général
fig.suptitle('Dashboard Météorologique', fontsize=18, fontweight='bold')
plt.tight_layout()
plt.show()
```

:::reminder Points clés
- Matplotlib est puissant et flexible
- Utilisez `plt.figure(figsize=)` pour la taille
- Les subplots permettent plusieurs graphiques
- Personnalisez avec colors, labels, titles, etc.
- N'oubliez pas `plt.show()` à la fin !
:::

:::success Félicitations !
Vous savez maintenant créer des visualisations professionnelles avec Matplotlib ! 📊🎨
:::
