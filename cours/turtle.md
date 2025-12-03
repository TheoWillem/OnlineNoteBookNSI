# Découvrir le module `turtle` en Python

Le module `turtle` permet de faire de petits dessins à l’écran en contrôlant une « tortue » qui se déplace et trace des lignes.

## 1. Démarrer avec turtle

```python
import turtle          # On importe le module
t = turtle.Turtle()    # On crée une tortue (un crayon que l’on contrôle)
```

- `import turtle` : charge le module.
- `t = turtle.Turtle()` : crée un objet tortue nommé `t` (c’est elle qui dessine).

À la fin du programme, on ajoute souvent :

```python
turtle.done()
```

Cela laisse la fenêtre ouverte tant que tu ne la fermes pas.

---

## 2. Déplacer la tortue

```python
t.forward(100)   # Avancer de 100 pixels
t.right(90)      # Tourner à droite de 90°
t.left(90)       # Tourner à gauche de 90°
t.goto(100, 100) # Aller directement au point (x=100, y=100)
```

- `forward(distance)` : avance dans la direction actuelle.
- `right(angle)` : tourne vers la droite (en degrés).
- `left(angle)` : tourne vers la gauche (en degrés).
- `goto(x, y)` : se téléporte à la position donnée (par rapport au centre de la fenêtre).

---

## 3. Lever et poser le crayon

```python
t.penup()    # Lever le crayon : ne dessine plus en se déplaçant
t.pendown()  # Poser le crayon : recommence à dessiner
```

- Utile pour se déplacer sans tracer de ligne.

---

## 4. Gérer l’épaisseur, la couleur et la vitesse

```python
t.pensize(3)        # Épaisseur du trait (3 pixels)
t.pencolor("red")   # Couleur du trait : ici, rouge
t.speed(0)          # Vitesse max (0 = très rapide)
```

- `pensize(epaisseur)` : plus le nombre est grand, plus le trait est gros.
- `pencolor("nom_de_couleur")` : `"red"`, `"blue"`, `"green"`, etc.
- `speed(vitesse)` : de 1 (lent) à 10 (rapide), et 0 (le plus rapide).

---

## 5. Dessiner un cercle

```python
t.circle(50)  # Dessine un cercle de rayon 50 pixels
```

La tortue dessine un cercle autour de sa position actuelle.

---

## 6. Remplir une forme avec une couleur

Pour colorier une forme (un cercle, un carré, etc.) :

```python
t.fillcolor("blue")  # Couleur de remplissage
t.begin_fill()       # Commencer à remplir
t.circle(50)         # Exemple : on dessine un cercle
t.end_fill()         # Terminer et remplir la forme
```

Tout ce qui est dessiné **entre** `begin_fill()` et `end_fill()` sera rempli avec la couleur donnée.

---

## 7. Exemple complet

Voici un petit programme qui utilise tous ces éléments :

```python
import turtle

t = turtle.Turtle()

# Réglages du crayon
t.pensize(3)
t.pencolor("red")
t.speed(0)

# Aller à une position sans dessiner
t.penup()
t.goto(-50, 0)
t.pendown()

# Dessiner un cercle rouge rempli en bleu
t.fillcolor("blue")
t.begin_fill()
t.circle(50)
t.end_fill()

turtle.done()
```

Tu peux maintenant t’amuser à :
- changer les valeurs (angles, distances),
- changer les couleurs,
- dessiner plusieurs formes à différents endroits.