<div class="lesson-hero">
  <span class="eyebrow">PREMIÈRE NSI · PROGRAMMATION PYTHON</span>
  <h1>⚙️ Les fonctions en Python</h1>
  <p>Donner un nom à une tâche, la réutiliser avec des données différentes et récupérer son résultat : apprenons à organiser nos programmes.</p>
</div>

:::note 🎯 Objectifs de la séance

À la fin de ce chapitre, je suis capable de :

- définir une fonction avec `def`, puis l'appeler ;
- utiliser des **paramètres** pour transmettre des données à une fonction ;
- distinguer les **paramètres** des **arguments** ;
- renvoyer un résultat avec `return` et le différencier de `print` ;
- comprendre le rôle d'une **variable locale** ;
- documenter une fonction et vérifier son fonctionnement avec `assert` ;
- réutiliser une fonction à l'intérieur d'une autre.

:::

:::reminder 🌱 Pour aller plus loin

Comme dans le chapitre sur les variables, teste les exemples en modifiant les données : :s[prédis ce qui va s'afficher **avant** d'exécuter le programme], puis compare ta réponse avec celle de Python.

:::

## 1. Une fonction, qu'est-ce que c'est ?

Jusqu'à présent, nous avons écrit des instructions les unes à la suite des autres. Mais que faire si nous voulons :b[réaliser plusieurs fois la même tâche] ?

Par exemple, imaginons que nous voulions afficher un message de bienvenue au début de chaque partie d'un jeu. Sans fonction, il faudrait recopier le même code à chaque fois.

```python
print("Bienvenue dans le jeu !")
print("Bonne chance !")
# Plus tard dans le programme...
print("Bienvenue dans le jeu !")
print("Bonne chance !")
```

Une :b[**fonction**] est un :g[ensemble d'instructions regroupées sous un nom] pour réaliser une tâche précise. Une fois créée, nous pouvons l'utiliser autant de fois que nécessaire.

### Et en Python, ça donne quoi ?

Pour définir une fonction, nous utilisons le mot-clé :b[`def`], suivi de son nom, de parenthèses `()` et de deux-points `:`.

```python
def dire_bonjour():
    print("Bienvenue dans le jeu !")
    print("Bonne chance !")
# On appelle la fonction.
dire_bonjour()
```

Voici ce que nous venons d'écrire :

| Élément | Rôle |
|:---:|---|
| `def` | Indique que nous allons **définir** une fonction. |
| `dire_bonjour` | Nom de notre fonction, que nous avons choisi. |
| `()` | Contient les paramètres, s'il y en a. **(nous verrons cela en détail tout à l'heure)** |
| `:` | Marque le début du bloc d'instructions. |
| Indentation | Indique les instructions appartenant à la fonction. |

:::reminder Qu'est-ce que l'indentation ?

L'indentation est un décalage horizontal des lignes de code d'une ligne à l'autre. Ce décalage est en général de 4 espaces ou, plus simplement, d'une tabulation.

L'indentation permet de délimiter les blocs de code (par exemple, l'ensemble des lignes appartenant à une fonction).

:::

### Définir une fonction n'est pas l'exécuter

:::reminder À retenir

:s[La définition d'une fonction avec `def` ne lance pas son code.] Pour exécuter les instructions de la fonction, il faut :g[**l'appeler**] en écrivant son nom suivi de parenthèses.

:::

```python
def dire_bonjour():
    print("Bonjour !")
print("Avant l'appel")
dire_bonjour()
print("Après l'appel")
```

Et rien ne nous empêche d'appeler la même fonction plusieurs fois :

```python
def dire_bonjour():
    print("Bonjour !")
dire_bonjour()
dire_bonjour()
dire_bonjour()
```

### 🧪 Exercice 1 — Ta première fonction

Crée une fonction nommée `bonjour` qui **affiche** exactement `Bonjour !` lorsqu'on l'appelle. Appelle-la ensuite une première fois pour vérifier son fonctionnement.

```python:ex-fonction-bonjour
# Définis la fonction bonjour.
# Appelle-la une première fois.
```

```python-test:ex-fonction-bonjour
import io
from contextlib import redirect_stdout
assert callable(bonjour), "bonjour doit être une fonction."
sortie = io.StringIO()
with redirect_stdout(sortie):
    bonjour()
assert sortie.getvalue().strip() == "Bonjour !", "La fonction doit afficher exactement Bonjour !"
print("✅ La fonction bonjour fonctionne !")
```

:::collapsible 💡 Indice 1 — Commencer la définition

Une fonction commence par le mot-clé `def`, puis son nom et des parenthèses. N'oublie pas les deux-points.

:::

:::collapsible 🔍 Indice 2 — Compléter le corps

Écris `def bonjour():`, puis, sur la ligne suivante et avec une indentation, utilise `print("Bonjour !")`.

:::

## 2. Les paramètres : adapter une fonction

Notre fonction `dire_bonjour()` affiche toujours le même message. Mais nous aimerions maintenant :b[personnaliser le message] en fonction de la personne à qui nous nous adressons.

Pour cela, nous allons lui donner un :b[**paramètre**]. Il s'agit d'un nom que la fonction pourra utiliser à l'intérieur de son code.

```python
def dire_bonjour(prenom):
    print("Bonjour", prenom, "!")
dire_bonjour("Alice")
dire_bonjour("Bob")
```

Le nom `prenom` est le :b[paramètre] défini entre les parenthèses. Lorsque nous appelons `dire_bonjour("Alice")`, le texte `"Alice"` est l':g[**argument**] fourni à la fonction.

![Schéma : un argument est transmis à une fonction et utilisé par son paramètre](assets/fonction-parametres.svg)

:::reminder À retenir

- Le :b[**paramètre**] est le **nom** utilisé lors de la définition de la fonction.
- L':g[**argument**] est la **valeur** transmise lors de l'appel.

Dans `dire_bonjour("Alice")`, l'argument `"Alice"` est associé au paramètre `prenom`.

:::

### Plusieurs paramètres

Une fonction peut recevoir plusieurs paramètres, séparés par des virgules.

```python
def presentation(prenom, age):
    print(prenom, "a", age, "ans.")
presentation("Alice", 16)
presentation("Bob", 17)
```

:::warning Attention à l'ordre !

Dans `presentation("Alice", 16)`, l'argument `"Alice"` est associé à `prenom` et `16` à `age`.

:s[En utilisant les arguments dans un ordre différent, nous ne transmettons pas les mêmes données aux paramètres.] Ainsi, si nous ne renseignons pas les paramètres dans le bon ordre, le paramètre `age` pourrait contenir le prénom et inversement.

:::

### 🧪 Exercice 2 — Un message personnalisé

Crée une fonction `saluer(prenom)` qui affiche exactement `Salut Alice !` quand on lui transmet `"Alice"`, et adapte le message pour les autres prénoms.

```python:ex-fonction-saluer
# Complète la fonction.
def saluer(prenom):
    pass
# Essaie avec plusieurs prénoms.
saluer("Alice")
```

```python-test:ex-fonction-saluer
import io
from contextlib import redirect_stdout
for prenom in ("Alice", "Bob", "Charlie"):
    sortie = io.StringIO()
    with redirect_stdout(sortie):
        saluer(prenom)
    assert sortie.getvalue().strip() == f"Salut {prenom} !", f"Le message doit s'adapter au prénom {prenom}."
print("✅ Les trois prénoms fonctionnent !")
```

:::collapsible 💡 Indice 1 — Utiliser le paramètre

Tu n'as pas besoin de connaître le prénom à l'avance. Utilise directement `prenom` dans l'instruction `print`.

:::

:::collapsible 🔍 Indice 2 — Construire l'affichage

La fonction peut utiliser `print("Salut", prenom, "!")` : Python insère des espaces entre les éléments.

:::

### 🧪 Exercice 3 — Une ligne personnalisable

Crée une fonction `ligne(symbole, longueur)` qui affiche une ligne composée du caractère `symbole`, répété `longueur` fois.

Par exemple, `ligne("-", 5)` doit afficher `-----` et `ligne("*", 3)` doit afficher `***`.

```python:ex-fonction-ligne
# Complète la fonction.
def ligne(symbole, longueur):
    pass
ligne("-", 5)
ligne("*", 3)
```

```python-test:ex-fonction-ligne
import io
from contextlib import redirect_stdout
for symbole, longueur in (("-", 5), ("*", 3), ("#", 8)):
    sortie = io.StringIO()
    with redirect_stdout(sortie):
        ligne(symbole, longueur)
    assert sortie.getvalue().strip() == symbole * longueur, "La ligne affichée ne correspond pas aux arguments."
print("✅ Ta fonction produit les bonnes lignes !")
```

:::collapsible 💡 Indice 1 — Une opération déjà connue

Nous avons vu dans le cours sur les variables qu'une chaîne de caractères peut être répétée grâce à l'opérateur `*`.

:::

:::collapsible 🔍 Indice 2 — Utiliser les deux paramètres

Essaie de construire la chaîne `symbole * longueur`, puis affiche-la avec `print`.

:::

## 3. Renvoyer une valeur avec `return`

Jusqu'à maintenant, les fonctions que nous avons créées :b[affichaient] quelque chose avec `print`. Mais que faire si nous voulons :b[récupérer le résultat d'un calcul] pour l'utiliser plus tard dans notre programme ?

Nous allons utiliser le mot-clé :g[**`return`**].

```python
def carre(nombre):
    return nombre * nombre
resultat = carre(5)
print("Le carré de 5 vaut", resultat)
```

Ici, `carre(5)` :g[renvoie la valeur `25`]. Nous pouvons donc la stocker dans une variable, l'afficher ou l'utiliser dans un autre calcul.

### Quelle différence entre `print` et `return` ?

![Schéma comparant l'affichage avec print et la valeur renvoyée avec return](assets/fonction-print-return.svg)

| Instruction | Ce qu'elle fait | Peut-on réutiliser le résultat ? |
|:---:|---|:---:|
| `print(...)` | **Affiche** une information à l'écran. | Pas directement : `print` renvoie `None`. |
| `return ...` | **Renvoie** une valeur à l'endroit de l'appel. | Oui, cette valeur peut être stockée ou utilisée. |

```python
def afficher_carre(nombre):
    print(nombre * nombre)
def calculer_carre(nombre):
    return nombre * nombre
valeur1 = afficher_carre(4)  # Affiche 16, mais renvoie None.
valeur2 = calculer_carre(4)  # Renvoie 16 sans l'afficher.
print("Valeur 1 :", valeur1)
print("Valeur 2 :", valeur2)
```

:::attention ⚠️ Une erreur fréquente

:s[Afficher un résultat et renvoyer un résultat sont deux choses différentes.] Si la consigne demande de **renvoyer** une valeur, il faut utiliser `return`.

:::

### 🧪 Exercice 4 — Calculer la moitié d'un nombre

Crée une fonction `moitie(nombre)` qui :g[renvoie] la moitié du nombre reçu en paramètre. Teste-la avec plusieurs valeurs.

```python:ex-fonction-carre
# Complète la fonction.
def moitie(nombre):
    pass
print(moitie(6))
```

```python-test:ex-fonction-carre
assert moitie(6) == 3, "La moitié de 6 doit valoir 3."
assert moitie(0) == 0, "La moitié de 0 doit valoir 0."
assert moitie(-4) == -2, "La moitié de -4 doit valoir -2."
assert moitie(3.5) == 1.75, "La fonction doit aussi fonctionner avec un décimal."
print("✅ Ta fonction renvoie les bonnes moitiés !")
```

:::collapsible 💡 Indice 1 — Quelle opération ?

Utilise une instruction de la forme `return nombre / 2` à l'intérieur de la fonction.

:::

### 🧪 Exercice 5 — Calculer un prix total

Crée une fonction `prix_total(prix_unitaire, quantite)` qui :g[renvoie] le montant total d'un achat. Par exemple, trois cahiers à 2,50 € coûtent 7,50 €.

```python:ex-fonction-prix-total
# Complète la fonction.
def prix_total(prix_unitaire, quantite):
    pass
print("Total :", prix_total(2.50, 3), "€")
```

```python-test:ex-fonction-prix-total
assert abs(prix_total(2.50, 3) - 7.50) < 1e-9, "Trois articles à 2,50 € coûtent 7,50 €."
assert abs(prix_total(10, 2) - 20) < 1e-9, "Deux articles à 10 € coûtent 20 €."
assert abs(prix_total(1.25, 4) - 5) < 1e-9, "Quatre articles à 1,25 € coûtent 5 €."
print("✅ Le calcul fonctionne pour plusieurs paniers !")
```

:::collapsible 💡 Indice 1 — Réinvestir le cours précédent

Un prix total se calcule à partir d'un prix unitaire et d'une quantité. Nous avons déjà utilisé cette opération dans le cours sur les variables.

:::

:::collapsible 🔍 Indice 2 — Bien utiliser `return`

Renvoie le résultat de `prix_unitaire * quantite`. Ne te contente pas de l'afficher.

:::

### 🧪 Exercice 6 — Corriger une fonction

Voici une fonction `double(nombre)` qui semble fonctionner, mais qui ne permet pas de réutiliser son résultat.

Corrige-la pour qu'elle :g[renvoie] le double du nombre, au lieu de simplement l'afficher.

```python:ex-fonction-double
def double(nombre):
    print(nombre * 2)
resultat = double(4)
print("Résultat récupéré :", resultat)
```

```python-test:ex-fonction-double
assert double(4) == 8, "double(4) doit renvoyer 8."
assert double(10) == 20, "double(10) doit renvoyer 20."
assert double(-2) == -4, "double(-2) doit renvoyer -4."
print("✅ La fonction renvoie maintenant une valeur !")
```

:::collapsible 💡 Indice 1 — Observer le problème

La fonction affiche le résultat, mais que contient `resultat` après l'appel ? Compare le comportement de `print` et celui de `return`.

:::

:::collapsible 🔍 Indice 2 — Une seule instruction à remplacer

Remplace `print(nombre * 2)` par une instruction `return` qui renvoie le même calcul.

:::

## 4. Les variables locales

Dans le chapitre précédent, nous avons appris à créer des variables. Nous pouvons aussi en créer :b[à l'intérieur d'une fonction].

Une variable créée dans une fonction est généralement dite :b[**locale**] : elle est accessible dans cette fonction, mais pas directement depuis l'extérieur.

```python
def calculer_ttc(prix_ht):
    taux_tva = 0.20
    prix_ttc = prix_ht * (1 + taux_tva)
    return prix_ttc
print(calculer_ttc(10))
```

Dans cet exemple, `taux_tva` et `prix_ttc` sont des :b[variables locales]. La fonction les utilise pour réaliser son calcul, puis renvoie le résultat.

:::warning Attention à la portée des variables

:s[Une variable locale n'est pas directement accessible à l'extérieur de sa fonction.] Écrire `print(taux_tva)` après l'appel provoquerait ici une erreur, car `taux_tva` n'a été définie que dans la fonction.

:::

### 🧪 Exercice 7 — Calculer un prix TTC

Crée une fonction `calculer_ttc(prix_ht)` qui utilise une variable locale `taux_tva` égale à `0.20` et :g[renvoie] le prix TTC.

```python:ex-fonction-tva
# Complète la fonction.
def calculer_ttc(prix_ht):
# Définis taux_tva.
# Calcule et renvoie le prix TTC.
    pass
print(calculer_ttc(10))
```

```python-test:ex-fonction-tva
assert abs(calculer_ttc(10) - 12) < 1e-9, "10 € HT doivent donner 12 € TTC."
assert abs(calculer_ttc(20) - 24) < 1e-9, "20 € HT doivent donner 24 € TTC."
assert abs(calculer_ttc(0) - 0) < 1e-9, "0 € HT doivent donner 0 € TTC."
print("✅ La TVA est correctement appliquée !")
```

:::collapsible 💡 Indice 1 — Rappel sur la TVA

Avec une TVA de 20 %, le prix TTC est égal au prix HT multiplié par `1.20`.

:::

:::collapsible 🔍 Indice 2 — Utiliser une variable locale

À l'intérieur de la fonction, commence par `taux_tva = 0.20`. Renvoie ensuite `prix_ht * (1 + taux_tva)`.

:::

## 5. Documenter et tester une fonction

Une fonction doit être :b[facile à comprendre], y compris lorsqu'une autre personne lit notre code.

Nous pouvons utiliser une :b[**docstring**], c'est-à-dire une courte documentation écrite entre triples guillemets `"""` juste après la ligne `def`.

Une docstring peut préciser :b[le rôle de la fonction], les :b[paramètres] qu'elle reçoit (leur nom, leur type et leur rôle) ainsi que la :g[valeur renvoyée] avec son type.

```python
def aire_rectangle(longueur, largeur):
    """Renvoie l'aire d'un rectangle à partir de ses dimensions.

    Paramètres :
        longueur (int ou float) : longueur du rectangle.
        largeur (int ou float) : largeur du rectangle.

    Renvoie :
        int ou float : aire du rectangle.
    """
    return longueur * largeur

print(aire_rectangle(5, 3))
```


### Vérifier le résultat avec `assert`

Nous pouvons aussi vérifier qu'une fonction renvoie la bonne valeur grâce à :b[`assert`].

```python
def carre(nombre):
    """Renvoie le carré d'un nombre."""
    return nombre * nombre

assert carre(4) == 16
assert carre(-2) == 4
print("Tous les tests ont réussi !")
```

Si l'expression placée après `assert` est fausse, Python déclenche une :r[erreur `AssertionError`].

Il est également possible d'ajouter un :b[message d'erreur personnalisé] en plaçant une virgule `,` après la condition, suivie d'un texte entre guillemets.

La syntaxe est la suivante : `assert condition, "Message d'erreur"`

```python
def carre(nombre):
    """Renvoie le carré d'un nombre."""
    return nombre * nombre

assert carre(4) == 16, "Le carré de 4 devrait être 16."
assert carre(-2) == 4, "Le carré de -2 devrait être 4."
assert carre(3) == 6, "Le carré de 3 devrait être 9."

print("Tous les tests ont réussi !")
```

Dans cet exemple, la dernière assertion est :r[fausse]. Python déclenche donc une `AssertionError` et affiche le message associé.

:::reminder À retenir

- :s[Un bon test vérifie le résultat pour plusieurs arguments], pas uniquement pour un exemple qui fonctionne par hasard. On essaye en générale de vérifier des "cas limites" ; c'est-à-dire des cas, des valeurs, qui pourraient être problématiquse.
- Le message placé après la virgule est affiché :b[uniquement si l'assertion échoue].
- Si une assertion échoue, :r[l'exécution du programme s'interrompt], sauf si l'erreur est interceptée.

:::

### 🧪 Exercice 8 — Une fonction documentée

Crée une fonction `perimetre_rectangle(longueur, largeur)` qui :g[renvoie] le périmètre d'un rectangle. Ajoute une :b[docstring] qui explique ce qu'elle calcule, décrit ses deux paramètres et précise la valeur renvoyée.

```python:ex-fonction-perimetre
# Complète la fonction et ajoute sa docstring.
def perimetre_rectangle(longueur, largeur):
    pass
print(perimetre_rectangle(5, 3))
```

```python-test:ex-fonction-perimetre
assert perimetre_rectangle(5, 3) == 16, "Le périmètre d'un rectangle de 5 × 3 vaut 16."
assert perimetre_rectangle(2, 2) == 8, "Le périmètre d'un carré de côté 2 vaut 8."
assert perimetre_rectangle(10, 1) == 22, "Le périmètre d'un rectangle de 10 × 1 vaut 22."
assert isinstance(perimetre_rectangle.__doc__, str) and perimetre_rectangle.__doc__.strip(), "Ajoute une docstring à la fonction."
print("✅ Calcul et documentation corrects !")
```

:::collapsible 💡 Indice 1 — Une formule connue

Le périmètre d'un rectangle est égal à deux fois la somme de sa longueur et de sa largeur.

:::

:::collapsible 🔍 Indice 2 — Documenter puis renvoyer

Après `def`, ajoute une docstring indiquant le rôle de la fonction, les paramètres `longueur` et `largeur`, ainsi que le périmètre renvoyé. Utilise ensuite `return 2 * (longueur + largeur)`.

:::

## 6. Réutiliser une fonction dans une autre

Maintenant que nous savons définir, appeler et documenter des fonctions, nous pouvons les :b[assembler] pour créer des programmes plus complets.

```python
def carre(nombre):
    return nombre * nombre
def somme_des_carres(a, b):
    return carre(a) + carre(b)
print(somme_des_carres(3, 4))
```

Ici, `somme_des_carres` :b[appelle la fonction `carre`] deux fois. Cela évite de recopier le même calcul.

:::info 💡 Pour aller plus loin

:s[Une fonction peut appeler une autre fonction.] Cela permet de découper un problème en petites tâches plus simples à comprendre et à tester.

:::

## 7. Défi final — Calculer une facture

Une boutique vend un article à :b[**49,90 € HT**]. La commande comprend :b[une quantité d'articles], une TVA de :b[**20 %**] et :b[**4,50 € de livraison TTC**].

Tu dois créer **deux fonctions** :

- `calculer_ht(prix_unitaire, quantite)` : renvoie le prix HT de la commande ;
- `calculer_facture(prix_unitaire, quantite, taux_tva, livraison)` : :g[utilise `calculer_ht`] et renvoie le total TTC, arrondi à deux décimales.

Pour une quantité de 1 article, le résultat attendu est :g[**64,38 €**].

```python:defi-fonctions-facture
prix_unitaire = 49.90
quantite = 1
taux_tva = 0.20
livraison = 4.50
# 1. Crée calculer_ht(prix_unitaire, quantite).
# 2. Crée calculer_facture(prix_unitaire, quantite, taux_tva, livraison).
# Cette seconde fonction doit appeler calculer_ht.
# 3. Affiche le résultat de calculer_facture avec les données ci-dessus.
```

```python-test:defi-fonctions-facture
assert abs(calculer_ht(49.90, 1) - 49.90) < 1e-9, "calculer_ht doit renvoyer le prix HT de la commande."
assert abs(calculer_ht(8.50, 3) - 25.50) < 1e-9, "La quantité doit être prise en compte."
assert abs(calculer_facture(49.90, 1, 0.20, 4.50) - 64.38) < 1e-9, "Le total attendu est 64,38 €."
assert abs(calculer_facture(10, 2, 0.10, 3) - 25) < 1e-9, "La fonction doit fonctionner pour d'autres arguments."
print("✅ Défi réussi : les calculs de la facture sont corrects !")
```

:::collapsible 💡 Indice 1 — Découper le problème

Commence par une fonction qui calcule `prix_unitaire * quantite`. Ensuite, la seconde fonction applique la TVA et ajoute les frais de livraison.

:::

:::collapsible 🔍 Indice 2 — Appeler une fonction depuis une autre

Dans `calculer_facture`, commence par écrire `total_ht = calculer_ht(prix_unitaire, quantite)`. Calcule ensuite le total TTC et utilise `round(total_ttc, 2)`.

:::

---

:::success ✅ Bilan — Je sais faire

- **Définir** et **appeler** une fonction.
- Utiliser un ou plusieurs **paramètres** et transmettre des **arguments**.
- Distinguer :b[`print`] de :g[`return`].
- Manipuler des **variables locales**.
- **Documenter** une fonction et vérifier son résultat avec `assert`.
- **Réutiliser** une fonction à l'intérieur d'une autre.

:::
