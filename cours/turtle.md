# Dé## 1. Démarrer avec turtle

```python-static
import turtle          # On importe le module
t = turtle.Turtle()    # On crée une tortue (un crayon que l'on contrôle)
```

- `import turtle` : charge le module.
- `t = turtle.Turtle()` : crée un objet tortue nommé `t` (c'est elle qui dessine).

À la fin du programme, on ajoute souvent :

```python-static
turtle.done()
```

Cela laisse la fenêtre ouverte tant que tu ne la fermes pas.

:::info À noter
Le module `turtle` ne fonctionne pas dans Pyodide (le Python du navigateur). Ces exemples sont **en lecture seule** pour que tu comprennes la syntaxe. Pour les tester, tu devras les copier dans un fichier Python sur ton ordinateur.
::: `turtle` en Python

Le module `turtle` permet de faire de petits dessins à l’écran en contrôlant une « tortue » qui se déplace et trace des lignes.

## 1. Démarrer avec turtle

```python-static
import turtle          # On importe le module
t = turtle.Turtle()    # On crée une tortue (un crayon que l’on contrôle)
```

- `import turtle` : charge le module.
- `t = turtle.Turtle()` : crée un objet tortue nommé `t` (c’est elle qui dessine).

À la fin du programme, on ajoute souvent :

```python-static
turtle.done()
```

Cela laisse la fenêtre ouverte tant que tu ne la fermes pas.

---

## 2. Déplacer la tortue

```python-static
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

```python-static
t.penup()    # Lever le crayon : ne dessine plus en se déplaçant
t.pendown()  # Poser le crayon : recommence à dessiner
```

- Utile pour se déplacer sans tracer de ligne.

---

## 4. Gérer l’épaisseur, la couleur et la vitesse

```python-static
t.pensize(3)        # Épaisseur du trait (3 pixels)
t.pencolor("red")   # Couleur du trait : ici, rouge
t.speed(0)          # Vitesse max (0 = très rapide)
```

- `pensize(epaisseur)` : plus le nombre est grand, plus le trait est gros.
- `pencolor("nom_de_couleur")` : `"red"`, `"blue"`, `"green"`, etc.
- `speed(vitesse)` : de 1 (lent) à 10 (rapide), et 0 (le plus rapide).

---

## 5. Dessiner un cercle

```python-static
t.circle(50)  # Dessine un cercle de rayon 50 pixels
```

La tortue dessine un cercle autour de sa position actuelle.

---

## 6. Remplir une forme avec une couleur

Pour colorier une forme (un cercle, un carré, etc.) :

```python-static
t.fillcolor("blue")  # Couleur de remplissage
t.begin_fill()       # Commencer à remplir
t.circle(50)         # Exemple : on dessine un cercle
t.end_fill()         # Terminer et remplir la forme
```

Tout ce qui est dessiné **entre** `begin_fill()` et `end_fill()` sera rempli avec la couleur donnée.

---

## 7. Exemple complet

Voici un petit programme qui utilise tous ces éléments :

```python-static
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

Tu peux maintenant t'amuser à :
- changer les valeurs (angles, distances),
- changer les couleurs,
- dessiner plusieurs formes à différents endroits.

---

## 8. Comparaison : Code Statique vs Code Exécutable

### Exemple de code Turtle (lecture seule)

Voici du code Turtle avec **coloration syntaxique** mais non exécutable (car Turtle ne fonctionne pas dans le navigateur) :

```python-static
import turtle

# Dessiner un carré
for i in range(4):
    turtle.forward(100)
    turtle.right(90)

turtle.done()
```

### Exemple de code Python standard (exécutable)

Et voici du code Python **exécutable** dans le navigateur :

```python
# Ce code fonctionne dans Pyodide
import math

rayon = 50
perimetre = 2 * math.pi * rayon
aire = math.pi * rayon ** 2

print(f"Pour un cercle de rayon {rayon}:")
print(f"  Périmètre: {perimetre:.2f}")
print(f"  Aire: {aire:.2f}")
```

:::success Astuce
- Utilise `python-static` pour les exemples de syntaxe ou du code qui ne peut pas s'exécuter dans le navigateur
- Utilise `python` pour le code interactif que les élèves peuvent modifier et tester
:::