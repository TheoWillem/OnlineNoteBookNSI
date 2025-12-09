# La Prgrammation Orientée Objet (POO)  

---

👾 **Bienvenue dans le monde de la POO !**

La Programmation Orientée Objet (POO) est un paradigme de programmation qui utilise des "objets" pour représenter des données et des comportements. Elle permet de structurer le code de manière plus modulaire et réutilisable.

---

## Un exemple en programmation impérative (celle que nous avons vue jusqu'à présent)

🧙‍♂️ **Le duel des magiciens**

Nous allons créer un petit jeu où deux magiciens vont s'affronter.  
Chaque magicien a :
- **des points de vie (PV)**
- **1 premier sort d'eau**
- **1 deuxième sort de feu**
- **1 troisième sort de plante**

| Sort | Bat | Est battu par |
|------|-----|---------------|
| 🪨 eau | 🔥 feu | 🌱 plante |
| 🔥 feu | 🌱 plante | 🪨 eau |
| 🌱 plante | 🪨 eau | 🔥 feu |

Les magiciens lancent des sorts en même temps. Et le magicien qui utilise le sort faible au sort du magicien adverse perd 1 point de vie.  
Si les deux magiciens utilisent le même sort, ils ne perdent pas de points de vie.

:::reminder Règle_du_jeu 
- eau > feu
- feu > plante
- plante > eau
:::

---

⚔️ **Déroulement du combat**

Le combat se déroule jusqu'à ce qu'un des deux magiciens n'ait plus de points de vie.  
*(C'est un jeu de pierre-papier-ciseaux ; le premier qui gagne 2 manches)*

:::info Information
En programmation impérative, il faudrait écrire quelque chose comme cela :
:::

```python
# Définition des magiciens
magicien1_pv = 2
magicien2_pv = 2

magicien1_sort = "eau" 
magicien2_sort = "eau"   
magicien1_sort2 = "plante"
magicien2_sort2 = "plante"
magicien1_sort3 = "feu"
magicien2_sort3 = "feu"

def determiner_gagnant(sort1, sort2):
    if sort1 == sort2:
        return 0  # Égalité
    elif (sort1 == "eau" and sort2 == "feu") or \
         (sort1 == "feu" and sort2 == "plante") or \
         (sort1 == "plante" and sort2 == "eau"):
        return 1  # Le joueur 1 gagne
    else:
        return 2  # Le joueur 2 gagne
```

:::attention Danger
On se rend rapidement compte que le code devient vite fastidieux à écrire et à suivre avec toutes ces variables qui se ressemblent. 

Et si maintenant je veux rajouter 5 autres magiciens ? 10 magiciens ? Il faudrait créer plein de nouvelles variables pour chaque magicien, et le code deviendrait rapidement ingérable.
:::

---

## 🚀 Introduction à la POO

Changeons maintenant de paradigme et utilisons la POO pour structurer notre code. Tout comme dans tout bon MMORPG, on retrouve des **classes** pour définir des personnages qui ont des attributs et des compétences spécifiques. Nous allons faire de même en programmation :

Nous allons créer une **classe** qui contiendra les attributs et les comportements (méthodes) de chaque type de personnage. Nous pourrons ensuite créer autant d'**instances** (objets) de cette classe que nous le souhaitons pour avoir plein de magiciens différents mais qui partagent les mêmes attributs et comportements.

Par exemple, je vais pouvoir créer une classe `Magicien` qui aura des points de vie et 3 sorts. Mais chaque instance de la classe (chaque magicien) pourra avoir un nombre de points de vie différent.

---

### 🏗️ Définir une classe

Pour définir ma classe Magicien, j'utilise le mot clef `class` suivi du nom de la classe. Par convention, les noms de classes commencent par une majuscule.

```python-static
class Magicien:
    def __init__(self, nom):
        self.pv = 2
        self.sort1 = "eau"
        self.sort2 = "feu"
        self.sort3 = "plante"
```

:::note Attributs
Un attribut est une variable associée à une classe ou à une instance de cette classe.
:::

:::note Constructeur
Le constructeur est une fonction (méthode) spéciale appelée `__init__`. Dans les paramètres de cette fonction, le mot clef self fait référence à l'instance actuelle de la classe.
:::

Maintenant que nous avons assigné tous les attributs de notre magicien, nous allons définir un comportement (une méthode) pour que le magicien puisse lancer un sort.

:::note Méthode
Une méthode est une fonction définie à l'intérieur d'une classe qui décrit un comportement associé à cette classe. Ici, notre magicien va pouvoir lancer un sort grâce à la méthode `lancer_sort`.

/!\ Attention à l'indentation des méthodes à l'intérieur de la classe.
:::

```python-static
class Magicien:
    def __init__(self, nom):
        self.nom = nom
        self.pv = 2
        self.sort1 = "eau"
        self.sort2 = "feu"
        self.sort3 = "plante"

    def lancer_sort(self, sort, cible):
        if sort == "eau":
            if cible.sort1 == "feu":
                cible.pv -= 1
        elif sort == "feu":
            if cible.sort2 == "plante":
                cible.pv -= 1
        elif sort == "plante":
            if cible.sort3 == "eau":
                cible.pv -= 1
```

---

### 🧙‍♂️ Créer des instances de la classe

C'est bien beau d'avoir mis en place un moule pour créer des magiciens (la classe), mais il faut maintenant créer des magiciens spécifiques (des `instances` de la classe). Pour cela :

```python-static
magicien1 = Magicien("Gandalf") # ma_variable = NomDeLaClasse(parametres)
magicien2 = Magicien("Saruman")
```

:::info Self
Mais du coup, à quoi ça sert `self` dans la définition de la classe ?

`self` fait référence à l'instance actuelle de la classe. C'est grâce à `self` que l'on peut accéder aux attributs et méthodes de l'instance depuis l'intérieur de la classe.
:::

---

### 🎯 Accéder aux attributs et méthodes d'une instance

Pour accéder aux attributs de chaque magicien, on utilise la notation par point `.` :

```python-static
print(magicien1.nom)  # Affiche "Gandalf"
print(magicien2.pv)   # Affiche 2
```

Pour faire lancer un sort à un magicien contre un autre, on utilise aussi la notation par point pour appeler la méthode `lancer_sort` :

```python-static
magicien1.lancer_sort("eau", magicien2)
print(magicien2.pv)  # Affiche 1 car Saruman a perdu 1 point de vie
```

---

#### Exemple complet

```python
class Magicien:
    def __init__(self, nom):
        self.nom = nom
        self.pv = 2
        self.sort1 = "eau"
        self.sort2 = "feu"
        self.sort3 = "plante"

    def lancer_sort(self, sort, cible):
        if sort == "eau":
            if cible.sort1 == "feu":
                cible.pv -= 1
        elif sort == "feu":
            if cible.sort2 == "plante":
                cible.pv -= 1
        elif sort == "plante":
            if cible.sort3 == "eau":
                cible.pv -= 1

magicien1 = Magicien("Gandalf")
magicien2 = Magicien("Saruman")

magicien1.lancer_sort("eau", magicien2)
print(f"{magicien2.nom} a {magicien2.pv} points de vie restants.")
```

---

## 🏆 À toi de jouer !

:::success Félicitations
Maintenant que tu as compris les bases de la POO, essaye de créer une classe `Guerrier` avec des attributs et des méthodes spécifiques.

Par exemple tu peux créer un `class Guerrier`. N'oublie pas la méthode `__init__` pour initialiser les attributs. On veut 3 attributs :
- **nom**
- **points de vie (pv)**
- **force**

Et une méthode `attaquer` qui permet au guerrier d'attaquer un autre guerrier et de lui faire perdre des points de vie en fonction de la force du guerrier.
:::

```python
# Ton code ici !
```


