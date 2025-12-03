# Introduction à Python

Python est un **langage de programmation** très utilisé pour :
- apprendre à programmer car sa syntaxe est **simple** et proche du langage naturel
- le web, la data, l’Intelligence artificielle, la recherche, etc.
- Il est dans le top 3 des langages les plus utilisés de nos jours !

---

## 1. Python : un langage interprété

Python est un langage **interprété** :

- Tu écris ton code dans un fichier (par exemple `programme.py`).
- L’**interpréteur Python** lit le fichier **ligne après ligne** et exécute chaque instruction.
- Si une erreur apparaît, l’exécution s’arrête à l’endroit du problème.

Contrairement à certains langages **compilés** (comme C), il n’y a pas d’étape de compilation séparée :  
on peut souvent tester rapidement de petites portions de code.

---

## 2. Exécution ligne par ligne

Python exécute les instructions **dans l’ordre**. Pour vérifier cela, executez le code suivant grace au bouton "Exécuter en haut à droite" du bloc de code ci-dessous :

```python:executable
print("Ligne 1")
print("Ligne 2")
print("Ligne 3")
```


La 1ʳᵉ ligne est exécutée, puis la 2ᵉ, puis la 3ᵉ.
Certaines instructions (comme les conditions ou les boucles) peuvent faire sauter des lignes ou les répéter, mais l’idée de base reste : le programme lit de haut en bas.

## Votre premier programme Python !

On va commencer par écrire un programme très simple qui affiche du texte à l’écran.
La fonction print() permet d’afficher quelque chose à l’écran (dans la console).

```python:executable
print("Bonjour")
print("3 + 4 =", 3 + 4)
```

Le texte doit être mis entre guillemets "mon_texte" ou 'mon_autre_texte'.
On peut afficher plusieurs choses à la fois, séparées par des virgules.

### A vous de jouer !
Traditionnellement, le premier programme dans un nouveau langage affiche : "Hello, World!".

```python:executable
# Ecrire un programme qui affiche "Hello, World!" à l'écran. (utilisez print())
```

Les `print()` vous seront très utile pour afficher et comprendre ce qui se passe dans votre programme à un moment donné. Ce sera un de vos meilleurs alliés pour programmer !