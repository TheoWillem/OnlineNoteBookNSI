<div class="lesson-hero">
  <span class="eyebrow">PREMIÈRE NSI · PROGRAMMATION PYTHON</span>
  <h1>📦 Les variables en Python</h1>
  <p>Donner un nom à une valeur, la retrouver, la modifier et comprendre son type : les premiers gestes de tout programme.</p>

</div>

:::note 🎯 Objectifs de la séance
À la fin de ce chapitre, je suis capable de :
- créer une variable avec une affectation `=` et la réaffecter ;
- utiliser un nom explicite et respecter les règles de nommage ;
- manipuler les types `int`, `float`, `str` et `bool` ;
- convertir le type d'une valeur contenue dans une variable ;
- réaliser des calculs, utiliser `//`, `%`;
:::

:::reminder 🌱 Pour aller plus loin
Teste les variantes proposées dans les exemples : change les données, prédis le résultat **avant** d'exécuter, puis confronte ton hypothèse à Python.
:::

## 1. Une variable, qu'est-ce que c'est ?

Une **variable** est un **nom** auquel Python associe une valeur. 

Pour comprendre l'idée, tu peux t'imaginer une boîte d'oeuf : On peut mettre un nombre défini d'oeufs dans la boite, en enlever, en rajouter, etc. Et quand ont a besoin d'un oeuf il suffit de recupérer la boite et l'ouvrir pour récupérer son contenu.

![Schéma : le nom boite_oeufs pointe vers la valeur entière 12](assets/affectation.svg)

### Et en Python ca donne quoi ?   
En Python on commence par ecrire un mot ici `boite_oeufs`. C'est le nom donné à notre variable.

Le nom est suivis de l'opérateur d'affectation `=` il permet de mettre des éléments dans notre variable `boite_oeufs` nouvellement créée.  
Dans notre exemple cela revient à ouvrir notre boite à oeufs

Et enfin il ne reste plus qu'a préciser l'information que l'on veut stocker dans notre variable.
Dans notre exemple cela revient à mettre dans notre boite à oeuf une quantité d'oeufs.


```python
boite_oeufs = 12
print("Œufs disponibles :", boite_oeufs)
```

On dit qu'on affecte la valeur 12 à la variable `boite_oeufs`

:::reminder À retenir
`=` n'est pas une égalité mathématique : c'est une affectation. L'opérateur de comparaison d'égalité est `==`, que tu verras dans le chapitre sur les conditions.
:::

### Pour l'utiliser 

Pour utiliser la variable il suffit ensuite d'inscrire son nom pour en récupérer le contenu

```python
boite_oeufs = 12
print("Œufs disponibles :", boite_oeufs)
```

### Réaffecter une variable

Il est également possible de réaffecter une nouvelle valeur en utilisant exactement la même syntaxe. Ainsi la donnée stocké précédemment est écrasé par la nouvelle

```python
boite_oeufs = 12
print(boite_oeufs)  # 12
boite_oeufs = 6
print(boite_oeufs)  # 6
```

On peut également utiliser la variable pour sa propre réaffectation :

```python
boite_oeufs = 12
print(boite_oeufs)  # 12
boite_oeufs = boite_oeufs - 2
print(boite_oeufs)  # 10
```

Ici nous avons utilisé un calcul pour determiner le nombre d'oeufs après avoir pris 2. Nous verrons les opérations plus en détails plus tard dans ce cours. Cependant voici déjà un avant goût : 

Puisqu'utiliser notre variable signifie récupérer son contenu le calcul `boite_oeufs - 2` equivaut ici à ` 12 - 2`. 

De la même manière d'autres opérateurs logiques sont utilisable : `-`, `+`, `*`, `/`, ... 

### 🧪 Exercice 1 — Tes premières variables

Crée une variable `prenom` contenant le texte `"Alex"` et une variable `age` contenant l'entier `16`. Affiche une phrase avec ces deux variables.

```python:ex-prenom
# À toi de jouer !
# Crée prenom et age, puis affiche-les.
```

```python-test:ex-prenom
assert prenom == "Alex", "La variable prenom doit valoir 'Alex'."
assert age == 16, "La variable age doit contenir l'entier 16."
assert isinstance(age, int), "age doit être un int (sans guillemets)."
print("✅ Bravo : les deux variables sont correctement créées !")
```

:::collapsible 💡 Indice 1 — Choisir le bon type
Le prénom est du **texte** : mets-le entre guillemets. L'âge est un entier : pas de guillemets.
:::

:::collapsible 🔍 Indice 2 — Commencer l'affectation
Tu peux commencer par `prenom = "Alex"`, puis créer `age` sur la ligne suivante.
:::


### 🧪 Exercice 2 — Mettre à jour une valeur

Une boîte contient 12 œufs. On en utilise 3. Mets à jour `boite_oeufs` pour qu'elle indique le nombre d'œufs restants (sans écrire directement `9`).

```python:ex-oeufs
boite_oeufs = 12
# À compléter : retirer 3 œufs.
print("Il reste", boite_oeufs, "œufs.")
```

```python-test:ex-oeufs
assert boite_oeufs == 9, "La boîte devrait contenir 9 œufs."
print("✅ Le nombre d'œufs a été correctement mis à jour !")
```

:::collapsible 💡 Indice 1 — Utiliser la valeur précédente
Une nouvelle affectation peut utiliser la valeur actuelle de la même variable.
:::

:::collapsible 🔍 Indice 2 — Une écriture plus courte
`boite_oeufs = boite_oeufs - 3` peut aussi s'écrire `boite_oeufs -= 3`.
:::


## 2. Bien choisir le nom d'une variable

En Python, un nom : ne comporte pas d'espace, ne commence pas par un chiffre ou un caractère spécial et n'utilise pas de mot-clé réservé (`if`, `for`, `class`, etc.).  
On privilégie les noms descriptifs en `snake_case` ; c'est-à-dire tout les mots sont écrit en minuscule et sont séparé par un tiret du bas `_`.

| 👍 À privilégier | 👎 À éviter | Pourquoi ? |
|---|---|---|
| `nombre_eleves` | `n` | Nom plus explicite |
| `prix_total` | `prix total` | Les espaces sont interdits |
| `temperature_jour` | `°temperature` | Un identifiant ne commence pas par un caratère spécial |
| `annee_naissance` | `class` | `class` est réservé |


:::warning  Majuscules et minuscules
`age`, `Age` et `AGE` sont trois noms différents. Les variables ne sont pas les mêmes.
:::

### 🧪 Exercice 3 — Calculer le prix d'un panier

Trois cahiers coûtent 2,50 € chacun. Utilise des noms explicites pour calculer `prix_total`.

```python:ex-panier
# initialiser le prix du cahier
# initialiser le nombre du cahier
# Calculer le prix total
print("Prix total :", prix_total, "€")
```

```python-test:ex-panier
assert abs(prix_total - 7.5) < 1e-9, "Le prix total doit être égal à 7,50 €."
print("✅ Ton panier est correctement calculé !")
```

:::collapsible 💡 Indice 1 — Quelle opération ?
Un prix unitaire multiplié par une quantité donne un prix total.
:::

:::collapsible 🔍 Indice 2 — Syntaxe Python
La multiplication utilise le symbole `*` et non `×`.
:::


## 3. Les types de données

Une valeur possède un **type** : il détermine notamment les opérations possibles. En Python, on ne déclare pas le type à l'avance pour les variables simples ; c'est la valeur qui a un type.

En Python il y a 4 type de base. Nous verrons plus tard dans l'année des types dit *construit*.

![Schéma illustrant les types int, float, str et bool en Python](assets/types-python.svg)

Il est possible de récupérer le type de la variable en utilisant l'intruction `type(ma_variable)`.

```python
nombre_entier = 42      # int : entier
nombre_decimal = 3.14   # float : décimal
message = "Bonjour"     # str : chaîne de caractères
est_connecte = True    # bool : booléen

print(type(nombre_entier))
print(type(nombre_decimal))
print(type(message))
print(type(est_connecte))
```

:::attention Attention aux guillemets
`18` est un entier (`int`), mais `"18"` est du texte (`str`). Ces deux valeurs ne sont pas équivalentes.
:::

```python
print(4 + 5)        # 9
print("4" + "5")    # "45" (concaténation)
print("NSI " * 3)    # Répétition d'une chaîne
```

Si le type de la donnée manipulée n'est pas le bon il est possible de *caster*, c'est-à-dire de modifier le type en laissant la valeur intacte. Par exemple : 

```python
valeur = "67"
print(valeur * 3)    # Répétition d'une chaîne
valeur = int(valeur)
print(valeur * 3)    # multiplication
```

### 🧪 Exercice 4 — Convertir avant de calculer

Une quantité est un entier, mais le prix a été reçu sous forme de texte. Calcule `total` sous la forme d'un entier.

```python:ex-conversion
prix = "12"
quantite = 3
# Convertis prix, puis calcule total.
```

```python-test:ex-conversion
assert total == 36, "Le total doit être égal à 36."
assert isinstance(total, int), "Le résultat demandé est un entier."
print("✅ Conversion et calcul réussis !")
```

:::collapsible 💡 Indice 1 — Le problème vient du type
`prix` contient des chiffres, mais sa valeur est entre guillemets. La multiplication d'une chaîne par un entier répète la chaîne.
:::

:::collapsible 🔍 Indice 2 — Conversion explicite
`int(prix)` renvoie une valeur entière. Utilise-la pour calculer `total`.
:::


## 4. Calculs et affectations

Voici les différents opérateur disponible pour effectuer des calculs : 

| Symbole | Signification | Exemple | Résultat |
|---|---|---|---|
| `+` | Addition | `9 + 4` | `13` |
| `-` | Soustraction | `9 - 4` | `5` |
| `*` | Multiplication | `9 * 4` | `36` |
| `/` | Division | `9 / 4` | `2.25` |
| `//` | Division entière | `9 // 4` | `2` |
| `%` | Reste | `9 % 4` | `1` |
| `**` | Puissance | `9 ** 2` | `81` |

```python
compteur = 5
compteur += 2    # Equivalent à compteur = compteur + 2
print(compteur)  # 7
```

### 🧪 Exercice 5 — Convertir une durée

Un jeu a tourné pendant **135 heures**. Calcule le nombre de journées entières dans `jours` et les heures restantes dans `heures_restantes`.

```python:ex-duree
heures = 135
# Crée jours et heures_restantes.
```

```python-test:ex-duree
assert jours == 5, "Il y a 5 jours entiers dans 135 heures."
assert heures_restantes == 15, "Après 5 jours, il reste 15 heures."
print("✅ Décomposition de la durée correcte !")
```

:::collapsible 💡 Indice 1 — Un jour représente 24 heures
Combien de fois peut-on mettre 24 heures dans 135 heures ? Et combien en reste-t-il ?
:::

:::collapsible 🔍 Indice 2 — Deux opérateurs utiles
Utilise `// 24` pour le nombre de jours et `% 24` pour le reste.
:::


## 5. Booléens et comparaisons

Une variable de type booléene prend l'une de deux valeurs : `True` ou `False ; c'est-à-dire *Vrai* ou *Faux*.

```python
vrai = True
faux = False
print(vrai)
print(faux)
```

Tout comme en tant qu'être humain nous somme capable d'affirmer si un nombre est supérieur à un autre ou si 2 mots sont identiques, il est également possible pour la machine de le faire grâce aux comparaisons.

Voici les différents opérateurs de comparaison en Python :

| Opérateur | Signification | Exemple | Résultat |
|:---:|---|:---:|:---:|
| `<` | Strictement inférieur à | `3 < 5` | `True` |
| `>` | Strictement supérieur à | `3 > 5` | `False` |
| `<=` | Inférieur ou égal à | `5 <= 5` | `True` |
| `>=` | Supérieur ou égal à | `4 >= 5` | `False` |
| `==` | Égal à | `5 == 5` | `True` |
| `!=` | Différent de | `3 != 5` | `True` |

:::warning  Attention à ne pas confondre !
- `=` est l'opérateur **d'affectation** : il permet d'attribuer une valeur à une variable.
- `==` est l'opérateur **de comparaison** : il permet de vérifier si deux valeurs sont égales.

Par exemple, `age = 16` affecte la valeur `16` à `age`, tandis que `age == 16` renvoie `True` ou `False`.
:::

```python
age = 17
print(age >= 18)   # False
print(age != 18)   # True

mineur = age < 18
print(mineur)      #True
```

:::info To be continued ...
*Nous y reviendrons plus en détails lors du chapitre sur les conditions*
:::

### 🧪 Exercice 6 — Une condition d'accès

Un parc d'attractions possède une attraction réservée aux personnes âgées d'au moins **16 ans**.

Crée une variable booléenne `autorise` qui vaut :
- `True` si la personne a 16 ans ou plus ;
- `False` dans le cas contraire.

Utilise une **comparaison** pour déterminer la valeur de `autorise`.

```python:ex-acces
age = 15

# Crée la variable autorise à l'aide d'une comparaison.
```

```python-test:ex-acces
assert isinstance(autorise, bool), "autorise doit être un booléen."
assert autorise is False, "À 15 ans, l'accès doit être refusé."
print("✅ Bonne réponse !")
```

:::collapsible 💡 Indice 1 — Comparer deux nombres
Tu peux utiliser les opérateurs de comparaison pour vérifier si un nombre est supérieur, inférieur ou égal à un autre.

Une comparaison renvoie directement `True` ou `False`.
:::

:::collapsible 🔍 Indice 2 — L'opérateur adapté
L'opérateur `>=` signifie « supérieur ou égal à ».

Par exemple, `taille >= 150` renvoie `True` si `taille` vaut au moins 150.
:::



## 6. Échanger deux valeurs

Deux variables contiennent des valeurs différentes. Comment échanger leurs contenus **sans perdre l'une d'elles** ?

### 🧪 Exercice 7 — L'échange

```python:ex-echange
a = 7
b = 13
print(a, b)
# Échange le contenu de a et b.
print(a, b)
```

```python-test:ex-echange
assert a == 13, "Après l'échange, a doit contenir 13."
assert b == 7, "Après l'échange, b doit contenir 7."
print("✅ Les deux valeurs ont été échangées !")
```

:::collapsible 💡 Indice 1 — Préserver l'ancienne valeur
Si tu fais directement `a = b`, comment retrouver l'ancienne valeur de `a` ?
:::

:::collapsible 🔍 Indice 2 — Une variable temporaire
Utilise une troisième variable `temp` pour mémoriser la valeur de `a` avant sa modification.
:::



## 7. Défi final — Calculer une facture

Une commande contient un article à **49,90 € HT**, une TVA à **20 %** et des frais de livraison de **4,50 € TTC**. Calcule `total_ttc` en euros, arrondi à deux décimales. Formule : *prix HT × (1 + taux de TVA) + livraison*.

```python:defi-facture
prix_ht = 49.90
taux_tva = 0.20
livraison = 4.50
# Calcule total_ttc.
```

```python-test:defi-facture
assert abs(total_ttc - 64.38) < 1e-9, "Le montant attendu est 64,38 €."
print("✅ Défi réussi : facture calculée !")
```

:::collapsible 💡 Indice 1 — Structurer le calcul
Calcule d'abord le prix avec TVA ; ajoute ensuite les frais de livraison.
:::

:::collapsible 🔍 Indice 2 — Arrondir en Python
`round(valeur, 2)` arrondit un nombre à deux décimales.
:::

---

:::success ✅ Bilan — Je sais faire
- Associer une valeur à un nom et être en mesure d'en réaffectater une.
- Choisir un identifiant lisible.
- Reconnaître les quatre types de base.
- Calculer, convertir et utiliser les opérateurs.
:::


