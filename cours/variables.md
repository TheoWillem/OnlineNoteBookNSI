<div class="lesson-hero">
  <span class="eyebrow">PREMIÈRE NSI · PROGRAMMATION PYTHON</span>
  <h1>📦 Les variables en Python</h1>
  <p>Donner un nom à une valeur, la retrouver, la modifier et comprendre son type : les premiers gestes de tout programme.</p>
  <div class="lesson-meta"><span>⏱ 1 h 30</span><span>🎯 Débutant</span><span>🧪 7 exercices + 1 défi</span></div>
</div>

:::note 🎯 Objectifs de la séance
À la fin de ce chapitre, je suis capable de :
- créer une variable avec une affectation `=` et la réaffecter ;
- utiliser un nom explicite et respecter les règles d'identification ;
- manipuler les types `int`, `float`, `str` et `bool` ;
- réaliser des calculs, utiliser `//`, `%` et convertir une valeur ;
- vérifier seul mon programme avec les tests fournis.
:::

:::info 💾 Comment utiliser ce cours ?
Tous les blocs **Python** sont éditables. Clique sur **▶ Exécuter**, puis sur **✓ Vérifier** pour les exercices disposant de tests.

Tes modifications sont **enregistrées automatiquement dans ce navigateur sur cet appareil**. Utilise **💾 Exporter** pour conserver un fichier, puis **📂 Importer** si tu changes d'appareil. Les tests sont des aides formatives, **pas une note**.
:::

## 1. Une variable, qu'est-ce que c'est ?

Une **variable** est un **nom** auquel Python associe une valeur. Imagine une étiquette `boite_oeufs` qui te permet de retrouver le nombre d'œufs disponibles.

![Schéma : le nom boite_oeufs pointe vers la valeur entière 12](assets/affectation.svg)

En Python, l'opérateur `=` effectue une **affectation** : l'expression à droite est évaluée, puis le nom à gauche désigne le résultat.

```python
boite_oeufs = 12
print("Œufs disponibles :", boite_oeufs)
```

:::reminder 🧠 À retenir
`=` **n'est pas** une égalité mathématique : c'est une affectation. L'opérateur de comparaison d'égalité est `==`, que tu verras dans le chapitre sur les conditions.
:::

### Réaffecter une variable

```python
boite_oeufs = 12
boite_oeufs = boite_oeufs - 1
print(boite_oeufs)  # 11
```

La variable est toujours appelée `boite_oeufs`, mais elle désigne maintenant la valeur `11`. La soustraction n'a pas lieu *automatiquement* lorsque tu prélèves un œuf : il faut écrire une instruction pour modifier la valeur.

:::collapsible 🔎 Observer pas à pas
1. `boite_oeufs = 12` : le nom désigne `12`.
2. Python évalue `boite_oeufs - 1`, soit `11`.
3. `boite_oeufs = ...` : le nom désigne désormais `11`.
4. `print` affiche la nouvelle valeur.
:::

### 🧪 Exercice 1 — Mes premières variables

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

:::collapsible ✅ Proposition de correction
```python-static
prenom = "Alex"
age = 16
print("Je m'appelle", prenom, "et j'ai", age, "ans.")
```
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

:::collapsible ✅ Proposition de correction
```python-static
boite_oeufs = 12
boite_oeufs -= 3
print(boite_oeufs)
```
:::

## 2. Bien choisir le nom d'une variable

En Python, un nom : ne comporte pas d'espace, ne commence pas par un chiffre et n'utilise pas de mot-clé réservé (`if`, `for`, `class`, etc.). On privilégie les noms descriptifs en `snake_case`.

| 👍 À privilégier | 👎 À éviter | Pourquoi ? |
|---|---|---|
| `nombre_eleves` | `n` | Nom plus explicite |
| `prix_total` | `prix total` | Les espaces sont interdits |
| `temperature_jour` | `2temperature` | Un identifiant ne commence pas par un chiffre |
| `annee_naissance` | `class` | `class` est réservé |

:::warning ⚠️ Majuscules et minuscules
`age`, `Age` et `AGE` sont **trois noms différents**. Les variables ne sont pas automatiquement interchangeables.
:::

### 🧪 Exercice 3 — Calculer le prix d'un panier

Trois cahiers coûtent 2,50 € chacun. Utilise des noms explicites pour calculer `prix_total`.

```python:ex-panier
prix_cahier = 2.50
nombre_cahiers = 3
# Complète pour définir prix_total.
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

:::collapsible ✅ Proposition de correction
```python-static
prix_cahier = 2.50
nombre_cahiers = 3
prix_total = prix_cahier * nombre_cahiers
print(prix_total)
```
:::

## 3. Les types de données

Une valeur possède un **type** : il détermine notamment les opérations possibles. En Python, on ne déclare pas le type à l'avance pour les variables simples ; c'est la valeur qui a un type.

![Schéma illustrant les types int, float, str et bool en Python](assets/types-python.svg)

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

:::attention ⛔ Attention aux guillemets
`18` est un entier (`int`), mais `"18"` est du texte (`str`). Ces deux valeurs ne sont pas équivalentes.
:::

```python
print(4 + 5)        # 9
print("4" + "5")    # "45" (concaténation)
print("NSI " * 3)    # Répétition d'une chaîne
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

:::collapsible ✅ Proposition de correction
```python-static
prix = "12"
quantite = 3
total = int(prix) * quantite
print(total)
```
:::

## 4. Calculs et affectations

| Symbole | Signification | Exemple | Résultat |
|---|---|---|---|
| `+` | Addition | `9 + 4` | `13` |
| `-` | Soustraction | `9 - 4` | `5` |
| `*` | Multiplication | `9 * 4` | `36` |
| `/` | Division | `9 / 4` | `2.25` |
| `//` | Quotient entier (division plancher) | `9 // 4` | `2` |
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

:::collapsible ✅ Proposition de correction
```python-static
heures = 135
jours = heures // 24
heures_restantes = heures % 24
print(jours, "jours et", heures_restantes, "heures")
```
:::

## 5. Booléens et comparaisons

Un booléen prend l'une de deux valeurs : `True` ou `False`. Les comparaisons (`<`, `>`, `<=`, `>=`, `==`, `!=`) produisent des booléens.

```python
age = 17
print(age >= 18)   # False
print(age != 18)   # True
```

### 🧪 Exercice 6 — Une condition d'accès

L'accès est autorisé si l'utilisateur est **majeur OU accompagné**. Crée un booléen `autorise` qui décrit cette règle.

```python:ex-acces
age = 17
accompagne = False
# Crée autorise avec une expression booléenne.
```

```python-test:ex-acces
assert autorise is False, "17 ans et non accompagné : accès refusé."
print("✅ Expression correcte pour ce premier cas !")
```

:::collapsible 💡 Indice 1 — Deux conditions
Teste si `age` est au moins 18, puis combine avec `accompagne`.
:::

:::collapsible 🔍 Indice 2 — Le OU logique
En Python, le OU logique se note `or`.
:::

:::collapsible ✅ Proposition de correction
```python-static
age = 17
accompagne = False
autorise = (age >= 18) or accompagne
print(autorise)
```
:::

## 6. Échanger deux valeurs

Deux variables contiennent des valeurs différentes. Comment échanger leurs contenus **sans perdre l'une d'elles** ?

### 🧪 Exercice 7 — L'échange

```python:ex-echange
a = 7
b = 13
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

:::collapsible ✅ Proposition de correction
```python-static
a = 7
b = 13
temp = a
a = b
b = temp
print(a, b)
# Variante Python : a, b = b, a
```
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

:::collapsible ✅ Proposition de correction
```python-static
prix_ht = 49.90
taux_tva = 0.20
livraison = 4.50
total_ttc = round(prix_ht * (1 + taux_tva) + livraison, 2)
print(total_ttc)
```
:::

---

:::success ✅ Bilan — Je sais faire
- Associer un nom à une valeur et comprendre une réaffectation.
- Choisir un identifiant lisible.
- Reconnaître les quatre types usuels.
- Calculer, convertir et utiliser les opérateurs.
- Tester mes réponses et corriger mes erreurs à l'aide des indices.
:::

:::reminder 🌱 Pour aller plus loin
Teste les variantes proposées dans les exemples : change les données, prédis le résultat **avant** d'exécuter, puis confronte ton hypothèse à Python.
:::
