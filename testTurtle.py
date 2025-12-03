import turtle as tl
import math

import turtle
t = turtle.Turtle() 

def etoile(x, y, size):
    t.penup()
    t.goto(x, y)
    t.pendown()
    for _ in range(5):
        t.forward(size)
        t.right(144)

def maison(x, y, size):
    t.penup()
    t.goto(x, y)
    t.pendown()
    for _ in range(4):
        t.forward(size)
        t.right(90)
    t.left(45)
    t.forward(math.sqrt(2) * size / 2)
    t.right(90)
    t.forward(math.sqrt(2) * size / 2)

def sol(y):
    t.penup()
    t.goto(-500, y)
    t.pendown()
    t.forward(1000)

def cercle(x, y, radius):
    t.penup()
    t.goto(x, y - radius)
    t.pendown()
    t.circle(radius)

def rosace(x, y, radius, petals):
    angle = 360 / petals
    for _ in range(petals):
        cercle(x, y, radius)
        t.right(angle)
    
def dragon_de_tres_loin(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.dot(10, "red")

def couronne_avent(x, y, radius):
    cercle(x, y, radius)
    cercle(x, y, radius / 2)

    cercle(x - radius / 1.3, y, radius / 6)
    cercle(x + radius / 1.3, y, radius / 6)
    cercle(x, y + radius / 1.3, radius / 6)
    cercle(x, y - radius / 1.3, radius / 6)

    etoile(x - radius * 0.6, y + radius * 0.6, radius / 4)
    etoile(x + radius * 0.45, y - radius * 0.45, radius / 4)
    etoile(x - radius * 0.55, y - radius * 0.55, radius / 4)
    etoile(x + radius * 0.5, y + radius * 0.5, radius / 4)

""" sol(-300)
maison(-200, -100, 200)
etoile(0, 100, 150)
etoile(-250, 200, 100)
etoile(250, 250, 75)
 """
turtle.done()














def carre(x, y, size):
    """ Dessine un carré de côté size dont le coin supérieur gauche est en (x, y)

    Paramètres :
    ------------
    x : int
        Coordonnée x du coin supérieur gauche
    y : int
        Coordonnée y du coin supérieur gauche
    size : int
        Longueur du côté du carré

    Retourne :
    ---------
    bool
        True si le carré a été dessiné avec succès
    """
    t.penup()
    t.goto(x, y)
    t.pendown()
    for _ in range(4):
        t.forward(size)
        t.right(90)

    return True #ne sert a rien, juste pour l'exemple







#ajouter fonction de set up position

