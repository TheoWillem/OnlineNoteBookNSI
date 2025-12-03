# Les Variables

Une variables c'est comme une boite où on peut ranger des choses pour les réutiliser plus tard. 
Exemple: J'ai une boite_oeuf (ma variable) où je range 12 oeufs (la valeur). Toute la semaine je vais pouvoir prendre ma boite_oeuf (variable) et utiliser les oeufs (valeur) à l'intérieur. 
Dans ce contexte apres avoir utiliser mon premier oeuf ma boite_oeuf contiendra 11 oeufs et plus 12 oeufs mais ma boite_oeuf existera toujours tant que je ne la jette pas à la poubelle.

## L'affectation

L'affectation c'est le fait de créer une variable et de lui donner une valeur. En Python, on utilise le symbole `=` pour cela.

```python:executable
boite_oeuf = 12  # On crée la variable boite_oeuf et on lui donne la valeur 12
print("Nombre d'oeufs dans la boite:", boite_oeuf) # Affiche le contenu de la variable
```

On peut également réaffecter une nouvelle valeur à une variable existante :

```python:executable
boite_oeuf = 12  # On crée la variable boite_oeuf et on lui donne la valeur 12
print("Nombre d'oeufs dans la boite:", boite_oeuf) # Affiche le contenu de la variable
boite_oeuf = 10  # On réaffecte une nouvelle valeur à la variable boite_oeuf
print("Nombre d'oeufs dans la boite après réaffectation:", boite_oeuf) # Affiche le nouveau contenu de la variable
```

Avant d'aller plus loin il est important de mettre un point d'honneur sur l'importance des noms de variables. En effet le nom d'une variable doit respecter certaines regles:
- Ne pas contenir d'espace (utiliser le _ pour séparer les mots si besoin)
- Ne pas commencer par un chiffre
- Ne pas utiliser de caractères spéciaux (ex: !, ?, %, etc)
**Qui plus est il est conseillé d'utiliser des noms de variables explicites (ex: boite_oeuf est plus explicite que b) pour faciliter la lecture et la compréhension du code.**

## Les operations
Maintenant qu'on sait comment creer une variable voyons comment la manipuler. Pour récuperer la valeur contenue dans la variable on doit simplement ecrire le nom de la variable comme dans l'exemple de l'affichage précédent. Une fois le contenue récupéré il est alors possible diverses opération.

```python:executable
boite_oeuf = 12  # On crée la variable boite_oeuf et on lui donne la valeur 12
print("Nombre d'oeufs dans la boite:", boite_oeuf) # Affiche le contenu de la variable
boite_oeuf = boite_oeuf + 1
print("Nombre d'oeufs dans la boite apres + 1 (addition):", boite_oeuf)
boite_oeuf = boite_oeuf - 7
print("Nombre d'oeufs dans la boite apres - 7 (soustraction):", boite_oeuf)
boite_oeuf = boite_oeuf * 4
print("Nombre d'oeufs dans la boite apres * 4 (multiplication):", boite_oeuf)
boite_oeuf = boite_oeuf // 5
print("Nombre d'oeufs dans la boite apres // 5 (division entiere):", boite_oeuf) 
boite_oeuf = boite_oeuf % 3
print("Nombre d'oeufs dans la boite apres % 3 (modulo):", boite_oeuf) 
boite_oeuf = boite_oeuf / 7
print("Nombre d'oeufs dans la boite apres / 7 (division):", boite_oeuf) 
boite_oeuf = boite_oeuf ** 2
print("Nombre d'oeufs dans la boite apres ** 2 (puissance):", boite_oeuf)
```

Une autre syntaxe possible est d'utiliser `+=`,`-=`,`*=`, etc. Cela realise simultanément l'operation puis l'affectation :

```python:executable
boite_oeuf = 12  # On crée la variable boite_oeuf et on lui donne la valeur 12
print("Nombre d'oeufs dans la boite:", boite_oeuf) # Affiche le contenu de la variable
boite_oeuf += 1
print("Nombre d'oeufs dans la boite apres += 1 (addition):", boite_oeuf)
boite_oeuf -= 7
print("Nombre d'oeufs dans la boite apres -= 7 (soustraction):", boite_oeuf)
boite_oeuf *= 4
print("Nombre d'oeufs dans la boite apres *= 4 (multiplication):", boite_oeuf)
boite_oeuf //= 5
print("Nombre d'oeufs dans la boite apres //= 5 (division entiere):", boite_oeuf) 
boite_oeuf %= 3
print("Nombre d'oeufs dans la boite apres %= 3 (modulo):", boite_oeuf) 
boite_oeuf /= 7
print("Nombre d'oeufs dans la boite apres /= 7 (division):", boite_oeuf) 
boite_oeuf **= 2
print("Nombre d'oeufs dans la boite apres **= 2 (puissance):", boite_oeuf)
```


## Les types

En informatique les variables ont des types. Jusqu'à maintenant nous avons utilisé des nombres entiers. Dans d'autre langages de programmation il faut déclarer le type d'une variable avant de l'utiliser (ex: entier, texte, réel, booléen etc). 
En Python le type est dynamique, cela signifie que le type est trouvé automatiquement. 
On distingue 3 grand types de données : les nombres (entier et réel), les chaînes de caractères (texte) et les booléens (vrai/faux) dont voici des exemples:
```python
nombre = 5.6
texte = "hello"
boolean = True  # ou False
```
 
En fonction du type de la variable certaines opérations sont possibles.
```python:executable
nombre = 5 # +, -, *, /, //, %, **
print("----- Chaine de caractère -------")
print("Concatenation :", "hello " + "world")  # concaténation
print("Répétition :", "hello " * 3)  # répétition
print("------- Booleen (voir chapitre sur les conditions) -------")
print("True and False :", True and False)
print("True or False :", True or False)
print("not True :", not True)
```

En fonction du type de la variable certaines opérations sont impossibles.

```python:executable
nombre = 5
texte = "hello"
resultat = nombre + texte  # On ne peut pas additionner un nombre et une chaîne
```




