# 📊 Test Matplotlib - Affichage de Graphiques

## ⏱️ Durée estimée : 15 minutes

Ce cours teste l'affichage de graphiques avec Matplotlib dans le navigateur.

---

## 🎯 Objectif

Tester que les graphiques matplotlib s'affichent correctement dans une fenêtre modale.

---

## 📋 Test 1 : Graphique Simple

Commençons par un graphique basique :

```python
import matplotlib.pyplot as plt

# Données simples
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Créer le graphique
plt.figure(figsize=(8, 5))
plt.plot(x, y, marker='o', color='blue', linewidth=2)
plt.title('Mon Premier Graphique')
plt.xlabel('Axe X')
plt.ylabel('Axe Y')
plt.grid(True, alpha=0.3)

# Afficher
plt.show()
```

:::info Info
Cliquez sur "▶ Exécuter" pour voir le graphique dans une fenêtre séparée.
:::

---

## 📊 Test 2 : Graphiques Multiples

Testonsavec plusieurs sous-graphiques :

```python
import matplotlib.pyplot as plt
import numpy as np

# Créer une figure avec 2 sous-graphiques
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))

# Premier graphique : Sinus
x = np.linspace(0, 2*np.pi, 100)
y1 = np.sin(x)
ax1.plot(x, y1, color='red', label='sin(x)')
ax1.set_title('Fonction Sinus')
ax1.set_xlabel('x')
ax1.set_ylabel('sin(x)')
ax1.legend()
ax1.grid(True, alpha=0.3)

# Deuxième graphique : Cosinus
y2 = np.cos(x)
ax2.plot(x, y2, color='blue', label='cos(x)')
ax2.set_title('Fonction Cosinus')
ax2.set_xlabel('x')
ax2.set_ylabel('cos(x)')
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
```

---

## 📈 Test 3 : Graphique en Barres

```python
import matplotlib.pyplot as plt

# Données
categories = ['Python', 'JavaScript', 'Java', 'C++', 'C#']
values = [85, 75, 65, 55, 45]
colors = ['#3776ab', '#f7df1e', '#007396', '#00599c', '#68217a']

# Créer le graphique
plt.figure(figsize=(10, 6))
plt.bar(categories, values, color=colors, edgecolor='black', linewidth=1.5)
plt.title('Popularité des Langages de Programmation', fontsize=16, fontweight='bold')
plt.xlabel('Langage', fontsize=12)
plt.ylabel('Score de Popularité', fontsize=12)
plt.ylim(0, 100)

# Ajouter les valeurs sur les barres
for i, v in enumerate(values):
    plt.text(i, v + 2, str(v), ha='center', fontweight='bold')

plt.grid(axis='y', alpha=0.3)
plt.show()
```

---

## 🥧 Test 4 : Graphique Circulaire (Pie Chart)

```python
import matplotlib.pyplot as plt

# Données
langages = ['Python', 'JavaScript', 'Java', 'Autres']
parts = [35, 30, 20, 15]
colors = ['#3776ab', '#f7df1e', '#007396', '#95a5a6']
explode = (0.1, 0, 0, 0)  # "Exploser" la première part

# Créer le graphique
plt.figure(figsize=(8, 8))
plt.pie(parts, explode=explode, labels=langages, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=90)
plt.title('Répartition des Langages', fontsize=16, fontweight='bold')
plt.axis('equal')  # Cercle parfait
plt.show()
```

---

## 📉 Test 5 : Graphique avec Numpy

```python
import matplotlib.pyplot as plt
import numpy as np

# Générer des données
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = np.sin(x) * np.cos(x)

# Créer le graphique
plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='sin(x)', linewidth=2, color='red')
plt.plot(x, y2, label='cos(x)', linewidth=2, color='blue')
plt.plot(x, y3, label='sin(x) × cos(x)', linewidth=2, color='green', linestyle='--')

plt.title('Fonctions Trigonométriques', fontsize=16, fontweight='bold')
plt.xlabel('x', fontsize=12)
plt.ylabel('y', fontsize=12)
plt.legend(fontsize=12)
plt.grid(True, alpha=0.3)
plt.axhline(y=0, color='black', linewidth=0.5)
plt.axvline(x=0, color='black', linewidth=0.5)
plt.show()
```

---

## ✅ Vérification

:::success Succès
Si tous les graphiques s'affichent correctement dans des fenêtres modales, le système fonctionne parfaitement !
:::

:::attention Points à vérifier
- Les graphiques doivent s'ouvrir dans une fenêtre modale
- Les images doivent être claires et de bonne qualité
- Vous pouvez fermer la fenêtre modale en cliquant sur la croix ou à l'extérieur
- Les couleurs et les styles doivent être respectés
:::

---

## 🎓 Conclusion

Vous savez maintenant que :
- ✅ Matplotlib fonctionne dans le navigateur via Pyodide
- ✅ Les graphiques sont convertis en images PNG et affichés
- ✅ Tous les types de graphiques sont supportés (lignes, barres, circulaires, etc.)
- ✅ Les sous-graphiques fonctionnent également

:::reminder Rappel
N'oubliez pas que l'exécution se fait dans le navigateur, donc certaines fonctions avancées de matplotlib peuvent ne pas être disponibles.
:::
