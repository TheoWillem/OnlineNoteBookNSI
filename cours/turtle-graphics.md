# 🐢 Turtle Graphics - Dessiner avec Python

## ⏱️ Durée estimée : 45 minutes

Découvrez la programmation graphique avec le module Turtle, parfait pour apprendre les bases de la géométrie et de l'algorithmique !

:::warning ⚠️ Exécution Locale Requise
**Le module turtle nécessite une exécution locale** car il crée des fenêtres graphiques qui ne peuvent pas s'afficher dans le navigateur.

**Options pour exécuter le code turtle :**
1. 🐍 **Python local** : Installez Python sur votre ordinateur et exécutez les scripts
2. 🌐 **Trinket.io** : Utilisez https://trinket.io pour exécuter du code turtle en ligne
3. 💻 **IDE en ligne** : Replit, Google Colab ou d'autres IDE supportant turtle

**Pourquoi ?** Le module turtle ouvre une fenêtre graphique système qui nécessite un environnement d'exécution complet.
:::

---

## 🎯 Objectifs

À la fin de ce cours, vous serez capable de :
- ✅ Utiliser le module turtle pour créer des dessins
- ✅ Contrôler le déplacement de la tortue
- ✅ Créer des formes géométriques
- ✅ Utiliser les couleurs et les styles
- ✅ Créer des motifs complexes

---

## 📖 Qu'est-ce que Turtle ?

:::info Info
Turtle est un module Python qui permet de dessiner en contrôlant une "tortue" virtuelle qui se déplace sur un canvas. C'est l'outil idéal pour apprendre la programmation de manière visuelle !
:::

### Concept de base

La tortue :
- 🐢 Se déplace sur un canvas (zone de dessin)
- ✏️ Peut lever ou baisser son crayon
- 🔄 Peut tourner à gauche ou à droite
- 🎨 Peut changer de couleur

---

## 🚀 Commandes de Base

### Déplacement

| Commande | Description |
|----------|-------------|
| `forward(distance)` ou `fd(distance)` | Avancer |
| `backward(distance)` ou `bk(distance)` | Reculer |
| `right(angle)` ou `rt(angle)` | Tourner à droite |
| `left(angle)` ou `lt(angle)` | Tourner à gauche |
| `goto(x, y)` | Aller à une position |
| `home()` | Retour à la position initiale |

### Crayon

| Commande | Description |
|----------|-------------|
| `pendown()` ou `pd()` | Baisser le crayon (dessiner) |
| `penup()` ou `pu()` | Lever le crayon (ne pas dessiner) |
| `pensize(width)` | Définir l'épaisseur du trait |
| `pencolor(color)` | Définir la couleur du trait |

### Remplissage

| Commande | Description |
|----------|-------------|
| `fillcolor(color)` | Définir la couleur de remplissage |
| `begin_fill()` | Commencer le remplissage |
| `end_fill()` | Terminer le remplissage |

---

## 📋 Exemple 1 : Premier Carré

Commençons par dessiner un simple carré :

```python
import turtle

# Créer une tortue
t = turtle.Turtle()

# Dessiner un carré
for i in range(4):
    t.forward(100)  # Avancer de 100 pixels
    t.right(90)     # Tourner de 90 degrés à droite

print("✅ Carré dessiné !")
```

:::note Note
La tortue commence au centre du canvas (0, 0) et regarde vers la droite.
:::

---

## 🔺 Exemple 2 : Triangle Équilatéral

```python
import turtle

t = turtle.Turtle()
t.pensize(3)
t.pencolor("blue")

# Triangle équilatéral
for i in range(3):
    t.forward(150)
    t.left(120)  # Angle externe d'un triangle équilatéral

print("✅ Triangle dessiné !")
```

---

## ⭐ Exemple 3 : Étoile

```python
import turtle

t = turtle.Turtle()
t.speed(2)  # Vitesse de dessin (0=rapide, 10=lent)
t.pensize(2)
t.pencolor("gold")

# Dessiner une étoile à 5 branches
for i in range(5):
    t.forward(150)
    t.right(144)  # Angle magique pour une étoile !

print("✅ Étoile dessinée !")
```

:::reminder Astuce
Pour une étoile à n branches, l'angle de rotation est 180 - (180/n). Pour 5 branches : 180 - 36 = 144°
:::

---

## 🎨 Exemple 4 : Carré Coloré et Rempli

```python
import turtle

t = turtle.Turtle()
t.speed(1)

# Configuration des couleurs
t.pencolor("red")
t.fillcolor("yellow")
t.pensize(3)

# Dessiner un carré rempli
t.begin_fill()
for i in range(4):
    t.forward(120)
    t.right(90)
t.end_fill()

print("✅ Carré coloré et rempli !")
```

---

## 🔷 Exemple 5 : Hexagone

```python
import turtle

t = turtle.Turtle()
t.speed(2)
t.pensize(3)
t.pencolor("purple")
t.fillcolor("lightblue")

# Dessiner un hexagone
t.begin_fill()
for i in range(6):
    t.forward(100)
    t.right(60)  # 360/6 = 60
t.end_fill()

print("✅ Hexagone dessiné !")
```

---

## 🌀 Exemple 6 : Spirale

```python
import turtle

t = turtle.Turtle()
t.speed(0)  # Vitesse maximale
t.pencolor("blue")

# Dessiner une spirale
for i in range(100):
    t.forward(i * 2)
    t.right(90)

print("✅ Spirale dessinée !")
```

---

## 🌈 Exemple 7 : Spirale Arc-en-ciel

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# Couleurs de l'arc-en-ciel
colors = ["red", "orange", "yellow", "green", "blue", "purple"]

# Dessiner une spirale colorée
for i in range(150):
    t.pencolor(colors[i % 6])  # Changer de couleur
    t.forward(i * 2)
    t.right(59)

print("✅ Spirale arc-en-ciel dessinée !")
```

:::success Couleurs
Vous pouvez utiliser des noms de couleurs en anglais (red, blue, green...) ou des codes hexadécimaux (#FF0000, #00FF00...).
:::

---

## 🌸 Exemple 8 : Fleur

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# Dessiner une fleur avec 12 pétales
for i in range(12):
    # Dessiner un pétale
    t.pencolor("pink")
    t.fillcolor("lightpink")
    t.begin_fill()
    t.circle(50, 60)  # Arc de cercle
    t.left(120)
    t.circle(50, 60)
    t.end_fill()
    
    # Tourner pour le prochain pétale
    t.left(30)

print("✅ Fleur dessinée !")
```

---

## 🎯 Exemple 9 : Cible

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(3)

# Dessiner des cercles concentriques
colors = ["red", "white", "blue", "white", "red"]
rayon = 100

for i, color in enumerate(colors):
    t.penup()
    t.goto(0, -rayon + i*20)
    t.pendown()
    t.fillcolor(color)
    t.begin_fill()
    t.circle(rayon - i*20)
    t.end_fill()

print("✅ Cible dessinée !")
```

---

## 🏠 Exemple 10 : Maison

```python
import turtle

t = turtle.Turtle()
t.speed(2)
t.pensize(3)

# Base de la maison (carré)
t.pencolor("brown")
t.fillcolor("lightyellow")
t.begin_fill()
for i in range(4):
    t.forward(150)
    t.right(90)
t.end_fill()

# Toit (triangle)
t.pencolor("darkred")
t.fillcolor("red")
t.begin_fill()
t.right(30)
t.forward(150)
t.right(120)
t.forward(150)
t.end_fill()

# Porte
t.penup()
t.goto(60, 0)
t.pendown()
t.setheading(90)  # Regarder vers le haut
t.pencolor("brown")
t.fillcolor("brown")
t.begin_fill()
for i in range(2):
    t.forward(60)
    t.right(90)
    t.forward(30)
    t.right(90)
t.end_fill()

print("✅ Maison dessinée !")
```

---

## ♻️ Exemple 11 : Polygone Générique

```python
import turtle

def dessiner_polygone(cotes, taille, couleur):
    """Dessine un polygone régulier"""
    t = turtle.Turtle()
    t.speed(2)
    t.pensize(2)
    t.pencolor(couleur)
    
    angle = 360 / cotes
    
    for i in range(cotes):
        t.forward(taille)
        t.right(angle)
    
    return t

# Dessiner plusieurs polygones
dessiner_polygone(3, 100, "red")     # Triangle
turtle.Turtle().penup()
turtle.Turtle().goto(150, 0)
dessiner_polygone(5, 80, "blue")     # Pentagone
turtle.Turtle().penup()
turtle.Turtle().goto(-150, 0)
dessiner_polygone(8, 60, "green")    # Octogone

print("✅ Polygones dessinés !")
```

---

## 🎲 Exemple 12 : Motif Aléatoire

```python
import turtle
import random

t = turtle.Turtle()
t.speed(0)

# Dessiner des formes aléatoires
for i in range(50):
    # Couleur aléatoire
    r = random.random()
    g = random.random()
    b = random.random()
    t.pencolor(r, g, b)
    
    # Position aléatoire
    x = random.randint(-300, 300)
    y = random.randint(-300, 300)
    t.penup()
    t.goto(x, y)
    t.pendown()
    
    # Forme aléatoire
    cotes = random.randint(3, 8)
    taille = random.randint(20, 60)
    angle = 360 / cotes
    
    for j in range(cotes):
        t.forward(taille)
        t.right(angle)

print("✅ Motif aléatoire dessiné !")
```

---

## 🔢 Exemple 13 : Spirale de Carrés

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# Dessiner une spirale de carrés
colors = ["red", "orange", "yellow", "green", "blue", "purple"]

for i in range(60):
    t.pencolor(colors[i % 6])
    t.forward(i * 5)
    t.right(91)  # Légèrement plus que 90° pour créer la spirale

print("✅ Spirale de carrés dessinée !")
```

---

## 🌟 Exemple 14 : Mandala

```python
import turtle

t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# Dessiner un mandala
for i in range(36):
    t.pencolor("blue")
    t.circle(100)
    t.right(10)

print("✅ Mandala dessiné !")
```

---

## 🎨 Commandes Avancées

:::collapsible Commandes Avancées à Connaître

### Vitesse
```python
t.speed(0)      # Rapide (pas d'animation)
t.speed(1)      # Très lent
t.speed(10)     # Rapide
```

### Position et Orientation
```python
t.goto(x, y)           # Aller à une position
t.setx(x)              # Définir x
t.sety(y)              # Définir y
t.setheading(angle)    # Définir l'orientation (0=droite, 90=haut)
t.home()               # Retour à (0,0) et orientation 0
```

### Cercles et Arcs
```python
t.circle(radius)           # Cercle complet
t.circle(radius, extent)   # Arc de cercle (extent en degrés)
t.dot(size, color)         # Dessiner un point
```

### Écriture de Texte
```python
t.write("Texte", font=("Arial", 16, "bold"))
```

### Canvas
```python
turtle.bgcolor("lightblue")    # Couleur de fond
turtle.title("Mon Dessin")     # Titre de la fenêtre
turtle.setup(800, 600)         # Taille de la fenêtre
```

:::

---

## 💡 Exercices

:::attention Défi
Essayez de créer :
1. 🔷 Un damier (alternance de carrés noirs et blancs)
2. 🌈 Un arc-en-ciel avec des demi-cercles
3. ❄️ Un flocon de neige
4. 🎨 Votre prénom en grand
5. 🎡 Une roue avec des rayons
:::

---

## 🎓 Résumé

Vous savez maintenant :
- ✅ Déplacer la tortue (forward, backward, right, left)
- ✅ Contrôler le crayon (penup, pendown, pensize, pencolor)
- ✅ Remplir des formes (begin_fill, end_fill)
- ✅ Créer des formes géométriques (carrés, triangles, cercles...)
- ✅ Utiliser les couleurs et les styles
- ✅ Créer des motifs complexes (spirales, mandalas...)
- ✅ Utiliser les boucles pour répéter des motifs

:::success Bravo !
Vous maîtrisez maintenant les bases de Turtle Graphics ! C'est un excellent outil pour visualiser vos algorithmes et créer des œuvres d'art avec du code. 🎨
:::

---

## 📚 Pour Aller Plus Loin

- Explorez les animations avec `turtle.ontimer()`
- Créez des jeux interactifs avec `turtle.onkey()`
- Dessinez des fractales (Koch, Sierpinski...)
- Créez des simulations (mouvement brownien, L-systems...)

:::info Documentation
Pour plus d'informations : [Documentation Python Turtle](https://docs.python.org/3/library/turtle.html)
:::
