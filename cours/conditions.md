<div class="lesson-hero">

  <span class="eyebrow">PREMIÈRE NSI · PROGRAMMATION PYTHON</span>

  <h1>🔀 Les conditions et les tables de vérité</h1>

  <p>Faire prendre des décisions à un programme, combiner plusieurs critères et comprendre la logique des booléens.</p>

</div>

:::note 🎯 Objectifs de la séance

À la fin de ce chapitre, je suis capable de :

- utiliser les valeurs booléennes `True` et `False` et les opérateurs de comparaison ;
- écrire une instruction conditionnelle avec `if` ;
- distinguer les rôles de `if`, `elif` et `else` ;
- utiliser correctement les deux-points et l'indentation ;
- écrire des conditions imbriquées ;
- combiner des conditions avec `and`, `or` et `not` ;
- comprendre l'importance des parenthèses et de la priorité des opérateurs ;
- construire et lire des :b[**tables de vérité**] pour vérifier une expression logique.

:::

:::reminder 🌱 Pour aller plus loin

Comme dans les chapitres précédents, modifie les valeurs des exemples. :s[Avant de cliquer sur « Exécuter », essaie de prédire les instructions qui seront exécutées et le résultat obtenu.]

Pense à tester les :b[cas limites] : par exemple, si une condition est `age >= 18`, que se passe-t-il pour `17`, `18` et `19` **(ou -8)**?

:::

## 1. Pourquoi utiliser des conditions ?
Jusqu'à présent, nous avons écrit des programmes qui exécutent leurs instructions les unes à la suite des autres. Pourtant, un programme doit souvent :b[prendre une décision] en fonction des données qu'il reçoit.

Imaginons un jeu qui affiche un message différent selon le nombre de points du joueur :

- si le joueur possède au moins 100 points, il gagne ;
- sinon, il doit continuer à jouer.

Nous avons donc besoin de :g[choisir les instructions à exécuter selon une situation]. C'est le rôle d'une :b[**condition**].

### Une condition répond à une question
Une condition correspond à une question dont la réponse est soit :g[`True` (vrai)], soit :r[`False` (faux)].

Par exemple : « Le joueur possède-t-il au moins 100 points ? »

```python
points = 120
print(points >= 100)  # True

points = 75
print(points >= 100)  # False
```

L'expression `points >= 100` est une :b[**expression booléenne**]. Son résultat dépend de la valeur contenue dans `points`.

:::reminder À retenir

:s[Une condition est une expression évaluée par Python pour déterminer si elle est vraie ou fausse.] Dans ce chapitre, nous utiliserons principalement des expressions dont le résultat est de type :b[`bool`].

:::

## 2. Rappel : booléens et comparaisons
Nous avons découvert les booléens dans le chapitre sur les variables. En Python, le type `bool` contient seulement deux valeurs : :g[`True`] et :r[`False`]. Attention aux majuscules : `true` et `false` **ne sont pas** les mots-clés Python attendus.

```python
est_connecte = True
partie_terminee = False
print(type(est_connecte))  # <class 'bool'>
print(partie_terminee)     # False
```

### Les opérateurs de comparaison
Pour obtenir un booléen à partir de deux valeurs, nous pouvons les :b[comparer].

| Opérateur | Signification | Exemple | Résultat |
|:---:|---|:---:|:---:|
| `<` | Strictement inférieur à | `3 < 5` | `True` |
| `>` | Strictement supérieur à | `3 > 5` | `False` |
| `<=` | Inférieur ou égal à | `5 <= 5` | `True` |
| `>=` | Supérieur ou égal à | `4 >= 5` | `False` |
| `==` | Égal à | `5 == 5` | `True` |
| `!=` | Différent de | `3 != 5` | `True` |

Regardons plusieurs comparaisons avec un âge de 16 ans :

```python
age = 16
print(age >= 16)  # True
print(age > 16)   # False
print(age == 16)  # True
print(age != 16)  # False
```

La différence entre `>` et `>=` est particulièrement importante à comprendre. `>` signifie **strictement supérieur** et `>=` **supérieur ou égal**. Cela implique que `16 >= 16` vaut `True` contrairement à `16 > 16` qui vaut `False`.

:::warning ⚠️ Ne pas confondre `=` et `==`

- `age = 16` : :b[affectation]. Nous donnons la valeur `16` à la variable `age`.
- `age == 16` : :b[comparaison]. Nous demandons si la valeur de `age` est égale à `16`.

On utilise donc :r[`==`] pour vérifier une égalité à l'intérieur d'une condition.

:::

### 🧪 Exercice 1 — Une attraction réservée aux plus grands
Une attraction est accessible aux personnes mesurant :b[au moins 140 cm]. Crée un booléen `autorise` grâce à une comparaison avec la variable `taille`.

```python:ex-conditions-comparaison
taille = 138
# Crée autorise à l'aide d'une comparaison.
```

```python-test:ex-conditions-comparaison
assert isinstance(autorise, bool), "autorise doit être un booléen."
assert autorise is False, "Une taille de 138 cm ne permet pas l'accès."
print("✅ La comparaison donne le bon résultat !")
```

:::collapsible 💡 Indice 1 — Traduire « au moins »

« Au moins 140 cm » signifie :g[140 cm ou davantage]. Faut-il utiliser `>` ou `>=` ?

:::

:::collapsible 🔍 Indice 2 — Construire l'expression

Utilise une comparaison entre `taille` et `140`, puis affecte son résultat à `autorise`. Il n'est pas nécessaire d'écrire `True` ou `False` à la main.

:::

## 3. Prendre une décision avec `if`
Le mot-clé :b[`if`] signifie « si ». Il permet de n'exécuter un bloc d'instructions :g[que lorsque la condition est vraie].

### La syntaxe de `if`
```python
points = 120

if points >= 100:
    print("Bravo !")
    print("Tu as gagné !")

print("Fin du programme.")
```

Étudions les éléments de cette instruction :

| Élément | Rôle |
|:---:|---|
| `if` | Commence une instruction conditionnelle. |
| `points >= 100` | Condition évaluée par Python. |
| `:` | Annonce le début du bloc d'instructions. |
| Indentation | Indique les instructions appartenant au `if`. |

Dans cet exemple, le joueur possède 120 points. La condition `120 >= 100` est vraie : les deux messages de victoire sont donc affichés.

En revanche, si `points` vaut `75`, la condition est fausse. Python :r[ignore le bloc indenté], puis poursuit le programme avec `print("Fin du programme.")`.

Essaie de modifier la valeur contenu dans la variable `points` pour afficher `Bravo !` et `Tu as gagné`. 

```python
points = 75

if points >= 100:
    print("Bravo !")
    print("Tu as gagné !")

print("Fin du programme.")
```

:::reminder À retenir

Avec `if`, :s[le bloc indenté est exécuté uniquement si la condition vaut `True`.]

L'instruction qui revient au niveau d'indentation précédent se trouve :b[en dehors de la condition] ; elle sera donc exécutée dans les deux cas, sauf si le programme est interrompu avant.

:::

### L'importance de l'indentation
Contrairement à d'autres langages de programmation, les accolades `{` `}`ne servent pas à délimiter les blocs d'instructions. C'est :b[**l'indentation**] qui joue ce rôle.

On utilise généralement :b[une tabulation **(soit 4 espaces)**] pour chaque niveau d'indentation. Les deux-points `:` après la condition sont également obligatoires.

```python
age = 18

if age >= 18:
    print("Tu es majeur.")  # Dans le if.

print("À bientôt !")      # En dehors du if.
```

:::warning ⚠️ Une erreur fréquente

Si tu oublies d'indenter la ligne après `if`, Python déclenche une `IndentationError`.

Ne confonds pas non plus :b[le bloc conditionnel] et les instructions qui viennent après lui : leur niveau d'indentation change le comportement du programme.

:::

### 🧪 Exercice 2 — Détecter une température élevée
Crée une fonction `forte_chaleur(temperature)` qui :g[renvoie `True`] si la température est supérieure ou égale à 30 °C et `False` sinon.

Pour cet exercice, utilise un `if` qui modifie la variable `alerte`, initialisée à `False`.

```python:ex-conditions-if
def forte_chaleur(temperature):
    """Indique si la température atteint au moins 30 °C."""
    alerte = False
    # Ajoute un if qui modifie alerte si nécessaire.
    return alerte

print(forte_chaleur(32))
```

```python-test:ex-conditions-if
assert forte_chaleur(32) is True, "À 32 °C, il doit y avoir une alerte."
assert forte_chaleur(30) is True, "À 30 °C, l'alerte doit être déclenchée."
assert forte_chaleur(29) is False, "À 29 °C, il ne doit pas y avoir d'alerte."
assert forte_chaleur(-5) is False, "À -5 °C, il ne doit pas y avoir d'alerte."
print("✅ La condition fonctionne, y compris à la limite de 30 °C !")
```

:::collapsible 💡 Indice 1 — Quand déclencher l'alerte ?

Demande-toi à quel moment la température est supérieur à 30°C devient vrai. La variable `alerte` doit-elle changer dans les autres cas ?

:::

:::collapsible 🔍 Indice 2 — Modifier la variable

À l'intérieur du `if`, affecte `True` à `alerte`. Si la condition est fausse, la valeur initiale `False` est conservée.

:::

## 4. Prévoir deux possibilités avec `if` et `else`
Avec `if` seul, nous pouvons exécuter un bloc si la condition est vraie. Mais comment prévoir explicitement ce qu'il faut faire :b[si elle est fausse] ?

Nous ajoutons le mot-clé :b[`else`], qui signifie « sinon ».

```python
age = 15

if age >= 18:
    print("Accès autorisé.")
else:
    print("Accès refusé.")
```

![Schéma du chemin d'exécution : if / else avec age = 15](assets/schema-if-else-age-15.png)

Python commence par évaluer la condition `age >= 18` :

- si elle vaut :g[`True`], le bloc du `if` est exécuté ;
- si elle vaut :r[`False`], le bloc du `else` est exécuté.

:s[Un seul de ces deux blocs est exécuté lors d'un même passage.] On parle de :b[**deux branches**] d'une condition.

### Observer l'exécution étape par étape
Prenons un programme légèrement plus long :

```python
points = 100
print("Début du contrôle.")
if points >= 100:
    print("Victoire !")
else:
    print("Continue de jouer.")

print("Fin du contrôle.")
```

Le message `"Début du contrôle."` est toujours affiché. Comme `points >= 100` est vrai, Python affiche `"Victoire !"`, mais pas `"Continue de jouer."`. Puis il affiche `"Fin du contrôle."`.

Remplace `100` par `99` : :b[une seule valeur change], mais :g[le programme emprunte une autre branche].

:::reminder À retenir

- `if` teste une condition ;
- `else` ne contient :b[pas de condition] : il correspond à tous les cas où celle du `if` est fausse ;
- les instructions de chaque branche doivent être indentées.

:::

### 🧪 Exercice 3 — Pair ou impair ?
Un entier est :b[pair] si le reste de sa division par 2 vaut `0`.

Crée une fonction `est_pair(nombre)` qui utilise :b[`if` et `else`] et renvoie un booléen indiquant si `nombre` est pair.

```python:ex-conditions-pair
def est_pair(nombre):
    """Renvoie True si nombre est pair, False sinon."""
    # Complète avec if et else.
    pass

print(est_pair(8))
```

```python-test:ex-conditions-pair
assert est_pair(8) is True, "8 est pair."
assert est_pair(7) is False, "7 est impair."
assert est_pair(0) is True, "0 est pair."
assert est_pair(-4) is True, "-4 est pair."
assert est_pair(-3) is False, "-3 est impair."
print("✅ La fonction distingue les nombres pairs et impairs !")
```

:::collapsible 💡 Indice 1 — Rappeler l'opérateur `%`

L'opérateur `%` renvoie le :b[reste d'une division entière]. Par exemple, `7 % 2` vaut `1`.

:::

:::collapsible 🔍 Indice 2 — Choisir les deux branches

Teste si le nombre est pair. Si c'est vrai, renvoie `True` ; sinon, renvoie `False`.

:::

## 5. Choisir parmi plusieurs possibilités avec `elif`
Une condition peut posséder plus de deux possibilités. Par exemple, un cinéma peut pratiquer trois tarifs différents selon l'âge du spectateur pour cela on utilisera le mot-clé :b[`elif`], qui signifie « sinon, si ».

```python
age = 15

if age < 12:
    print("Tarif enfant")
elif age < 18:
    print("Tarif adolescent")
else:
    print("Tarif adulte")
```

![Schéma du chemin d'exécution : if / elif / else avec age = 15](assets/schema-if-elif-else-age-15.png)

### Comment Python choisit-il une branche ?
Python évalue les conditions :b[dans l'ordre où elles sont écrites].

1. Il teste d'abord `age < 12`.
2. Si cette condition est fausse, il teste `age < 18`.
3. Si aucune condition précédente n'est vraie, il exécute le bloc `else`.

Dès qu'une condition est vraie, Python exécute son bloc et :s[ne teste plus les autres branches de cette même structure `if` / `elif` / `else`] ; c'est-à-dire les les autres branches au même niveau d'indentation.

Si `age` vaut `15`, la première condition est fausse et la seconde est vraie : le message sera `"Tarif adolescent"`.

:::info 💡 Pourquoi écrire seulement `age < 18` ?

Lorsque Python arrive au `elif`, il sait déjà que `age < 12` est faux. Cela signifie que l'âge vaut :b[plus de 12 ans].

Le test `age < 18` suffit donc à identifier les âges compris entre 12 et 17 ans. Nous pourrions aussi écrire `12 <= age < 18`, mais ce n'est pas indispensable ici.

:::

### Attention à l'ordre des conditions
Regarde cet exemple :

```python
note = 17

if note >= 10:
    print("Réussite")
elif note >= 16:
    print("Très bonne réussite")
```

Quel message sera affiché ? :r[Uniquement `"Réussite"` !] Le premier test est déjà vrai pour `17`. Le `elif` ne sera donc jamais atteint pour une note supérieure ou égale à 16.

Pour distinguer les notes :b[très bonnes] des notes simplement :b[suffisantes], nous devons :g[tester d'abord la condition la plus exigeante].

```python
note = 17

if note >= 16:
    print("Très bonne réussite")
elif note >= 10:
    print("Réussite")
else:
    print("À retravailler")
```

:::warning ⚠️ Plusieurs `if` ou un `if` / `elif` ?

Deux `if` indépendants peuvent tous les deux s'exécuter si leurs conditions sont vraies.

Avec `if` / `elif` / `else`, Python :s[ne choisit qu'une seule branche]. Utilise cette structure si les catégories doivent être exclusives.

:::

### 🧪 Exercice 4 — Trois tarifs
Crée une fonction `tarif(age)` qui renvoie le prix d'une place de cinéma :

- :b[5 €] si la personne a moins de 12 ans ;
- :b[8 €] si elle a entre 12 et 17 ans inclus ;
- :b[12 €] si elle a 18 ans ou plus.

On suppose que `age` est un entier positif ou nul.

```python:ex-conditions-tarif
def tarif(age):
    """Renvoie le tarif du cinéma en fonction de l'âge."""
    # Complète avec if, elif et else.
    pass

print(tarif(15))
```

```python-test:ex-conditions-tarif
assert tarif(0) == 5, "À 0 an, le tarif enfant s'applique."
assert tarif(11) == 5, "À 11 ans, le tarif enfant s'applique."
assert tarif(12) == 8, "À 12 ans, le tarif adolescent commence."
assert tarif(17) == 8, "À 17 ans, le tarif adolescent s'applique."
assert tarif(18) == 12, "À 18 ans, le tarif adulte commence."
assert tarif(40) == 12, "À 40 ans, le tarif adulte s'applique."
print("✅ Les trois tarifs et leurs frontières sont corrects !")
```

:::collapsible 💡 Indice 1 — Découper les âges

Commence par les moins de 12 ans. Lorsque Python arrive au `elif`, la personne a déjà au moins 12 ans.

:::

:::collapsible 🔍 Indice 2 — Les trois branches

Utilise `if age < 12`, puis `elif age < 18`, puis `else`. Chaque branche doit renvoyer le bon prix avec `return`.

:::

### 🧪 Exercice 5 — Corriger l'ordre des tests
Le programme suivant classe les notes, mais la catégorie `"Très bien"` n'est jamais renvoyée. :b[Corrige l'ordre des conditions] sans changer les trois catégories.

```python:ex-conditions-ordre
def appreciation(note):
    if note >= 10:
        return "Admis"
    elif note >= 16:
        return "Très bien"
    else:
        return "Insuffisant"

print(appreciation(18))
```

```python-test:ex-conditions-ordre
assert appreciation(18) == "Très bien", "18 doit donner Très bien."
assert appreciation(16) == "Très bien", "16 doit donner Très bien."
assert appreciation(15) == "Admis", "15 doit donner Admis."
assert appreciation(10) == "Admis", "10 doit donner Admis."
assert appreciation(9) == "Insuffisant", "9 doit donner Insuffisant."
print("✅ Les conditions sont maintenant dans le bon ordre !")
```

:::collapsible 💡 Indice 1 — Une condition en masque une autre

Si une note est supérieure ou égale à 16, elle est aussi supérieure ou égale à 10. Quel test faut-il effectuer en premier ?

:::

:::collapsible 🔍 Indice 2 — Inverser les comparaisons

La première condition doit être `note >= 16` et la suivante `note >= 10`. Vérifie aussi les textes renvoyés.

:::

## 6. Imbriquer des conditions
Il est possible d'écrire un `if` :b[à l'intérieur d'un autre `if`]. On parle alors de :b[**conditions imbriquées**].

Imaginons une attraction réservée aux personnes d'au moins 16 ans et possédant un billet.

```python
age = 17
billet = True

if age >= 16:
    if billet:
        print("Accès autorisé")
    else:
        print("Billet manquant")
else:
    print("Âge insuffisant")
```

![Schéma du chemin d'exécution : conditions imbriquées avec age = 17 et billet = True](assets/schema-conditions-imbriquees-age-17-billet.png)

La première condition vérifie l'âge. :b[Ce n'est que si elle est vraie] que Python vérifie la présence du billet.

Remarque les :b[deux niveaux d'indentation] :

- le `if billet:` se trouve à l'intérieur du premier `if` ;
- le `else` de `billet` est aligné avec `if billet:` ;
- le dernier `else` est aligné avec le premier `if`.

:::reminder À retenir

:s[L'indentation permet de savoir à quel `if` appartient chaque `else`.]

Une mauvaise indentation peut modifier la décision prise par le programme, même si toutes les comparaisons sont correctes.

:::

### 🧪 Exercice 6 — Contrôler l'entrée d'une attraction
Crée une fonction `controle_entree(age, billet)` qui renvoie :

- `"Âge insuffisant"` si `age` est inférieur à 16 ;
- `"Billet manquant"` si la personne a au moins 16 ans, mais ne possède pas de billet ;
- `"Accès autorisé"` si les deux conditions sont satisfaites.

Pour cet exercice, utilise des :b[conditions imbriquées], sans `and` ni `or` : nous allons les découvrir juste après.

```python:ex-conditions-imbriquees
def controle_entree(age, billet):
    """Renvoie le résultat du contrôle d'accès."""
    # Utilise un premier if sur l'âge, puis un second if sur billet.
    pass

print(controle_entree(17, True))
```

```python-test:ex-conditions-imbriquees
assert controle_entree(15, True) == "Âge insuffisant", "À 15 ans, l'âge est insuffisant."
assert controle_entree(17, False) == "Billet manquant", "Sans billet, l'accès est refusé."
assert controle_entree(17, True) == "Accès autorisé", "Avec 17 ans et un billet, l'accès est autorisé."
assert controle_entree(16, True) == "Accès autorisé", "À 16 ans exactement, l'accès est autorisé."
assert controle_entree(15, False) == "Âge insuffisant", "Le contrôle de l'âge doit être prioritaire."
print("✅ Les conditions imbriquées fonctionnent !")
```

:::collapsible 💡 Indice 1 — Tester dans le bon ordre

Commence par vérifier `age >= 16`. Le billet n'a besoin d'être vérifié que lorsque cette première condition est vraie.

:::

:::collapsible 🔍 Indice 2 — Bien placer les `else`

Dans le premier `if`, ajoute un second `if billet:` suivi de son `else`. Le `else` du premier `if` doit être moins indenté.

:::

## 7. Combiner des conditions avec les opérateurs logiques
Les conditions imbriquées sont utiles, mais elles peuvent devenir longues lorsque nous devons prendre en compte plusieurs critères.

Python possède trois :b[**opérateurs logiques**] particulièrement importants :

| Opérateur | Signification | Condition pour obtenir `True` |
|:---:|---|---|
| `and` | :b[ET] logique | Les deux conditions sont vraies. |
| `or` | :b[OU] logique | Au moins une des deux conditions est vraie. |
| `not` | :b[NON] logique | La condition initiale est fausse. |

**Voir partie 9 pour plus de détails**

### Le ET logique : `and`
Imaginons que l'accès à une salle nécessite :b[un âge d'au moins 16 ans ET un billet].

```python
age = 17
billet = True

if age >= 16 and billet:
    print("Accès autorisé")
else:
    print("Accès refusé")
```

L'expression `age >= 16 and billet` n'est vraie que si :g[les deux conditions sont vraies en même temps].

Si la personne a 17 ans mais ne possède pas de billet, l'accès est refusé. Même chose si elle possède un billet, mais n'a que 15 ans.

:::reminder À retenir : :r[and]

:s[Le ET logique exige que toutes les conditions reliées par `and` soient vraies.]

Avec `A and B`, le résultat vaut `True` uniquement lorsque `A` :b[et] `B` valent `True`.

:::

### 🧪 Exercice 7 — Une inscription obligatoire
Un participant peut commencer une activité s'il a :b[au moins 12 ans ET s'il est inscrit].

Crée une fonction `peut_participer(age, inscrit)` qui renvoie le booléen correspondant en utilisant `and`.

```python:ex-conditions-and
def peut_participer(age, inscrit):
    """Indique si un participant remplit les deux conditions."""
    # Renvoie directement l'expression booléenne.
    pass

print(peut_participer(14, True))
```

```python-test:ex-conditions-and
assert peut_participer(14, True) is True, "14 ans et inscrit : participation autorisée."
assert peut_participer(11, True) is False, "11 ans : âge insuffisant."
assert peut_participer(14, False) is False, "Sans inscription : participation refusée."
assert peut_participer(11, False) is False, "Aucune condition remplie : participation refusée."
assert peut_participer(12, True) is True, "À 12 ans exactement, la participation est autorisée."
print("✅ Les deux critères sont bien vérifiés !")
```

:::collapsible 💡 Indice 1 — Deux critères indispensables

Construis une comparaison sur l'âge, puis relie-la au booléen `inscrit` avec `and`.

:::

:::collapsible 🔍 Indice 2 — Pas besoin de `if`

Une expression comme `age >= 12 and inscrit` produit déjà un booléen. Il suffit de le renvoyer avec `return`.

:::

### Le OU logique : `or`
Cette fois, une activité est accessible si la personne est :b[majeure OU accompagnée]. Une seule de ces deux possibilités suffit.

```python
age = 16
accompagne = True

if age >= 18 or accompagne:
    print("Accès autorisé")
else:
    print("Accès refusé")
```

Le `or` est un :b[OU inclusif] :

- si seule la première condition est vraie, le résultat est vrai ;
- si seule la deuxième est vraie, le résultat est vrai ;
- :g[si les deux conditions sont vraies, le résultat est également vrai] ;
- le résultat est faux uniquement lorsque les deux conditions sont fausses.

:::warning ⚠️ « OU » ne signifie pas forcément « une seule possibilité »

En Python, :s[`or` signifie « au moins une condition vraie ».] Il accepte donc aussi le cas où les deux conditions sont vraies.

Nous verrons plus loin comment reconnaître le cas où :b[une seule des deux conditions] est vraie.

:::

### 🧪 Exercice 8 — Deux moyens d'accéder à une activité
Crée une fonction `acces_libre(age, accompagne)` qui renvoie `True` si la personne est majeure :b[ou] accompagnée, `False` sinon.

```python:ex-conditions-or
def acces_libre(age, accompagne):
    """Indique si une personne est majeure ou accompagnée."""
    # Utilise or.
    pass

print(acces_libre(16, True))
```

```python-test:ex-conditions-or
assert acces_libre(18, False) is True, "Une personne majeure peut accéder seule."
assert acces_libre(16, True) is True, "Une personne mineure accompagnée peut accéder."
assert acces_libre(18, True) is True, "Les deux conditions peuvent être vraies."
assert acces_libre(16, False) is False, "Une personne mineure non accompagnée ne peut pas accéder."
assert acces_libre(17, False) is False, "À 17 ans sans accompagnement, l'accès est refusé."
print("✅ Le OU logique fonctionne dans les quatre situations !")
```

:::collapsible 💡 Indice 1 — Au moins une condition

Relie la comparaison `age >= 18` à la variable `accompagne` avec l'opérateur qui signifie « OU ».

:::

:::collapsible 🔍 Indice 2 — Construire le retour

L'expression `age >= 18 or accompagne` renvoie directement `True` ou `False`. Utilise `return`.

:::

### Le NON logique : `not`
L'opérateur :b[`not`    ] inverse la valeur d'une expression booléenne.

```python
connecte = True
print(connecte)      # True
print(not connecte)  # False

connecte = False
print(not connecte)  # True
```

Nous pouvons donc tester qu'une condition est :b[fausse] :

```python
en_maintenance = False

if not en_maintenance:
    print("Le service est disponible.")
else:
    print("Le service est en maintenance.")
```

:::reminder À retenir : :r[not]

:s[`not True` donne `False`, et `not False` donne `True`.]

`not` ne modifie pas automatiquement la variable utilisée : il produit simplement le résultat opposé.

:::

### 🧪 Exercice 9 — Vérifier qu'un compte n'est pas bloqué
Crée une fonction `compte_actif(bloque)` qui renvoie :g[`True` lorsque `bloque` vaut `False`] et inversement.

```python:ex-conditions-not
def compte_actif(bloque):
    """Indique si le compte n'est pas bloqué."""
    # Utilise not.
    pass

print(compte_actif(False))
```

```python-test:ex-conditions-not
assert compte_actif(False) is True, "Un compte non bloqué est actif."
assert compte_actif(True) is False, "Un compte bloqué n'est pas actif."
print("✅ La négation logique est correcte !")
```

:::collapsible 💡 Indice 1 — Inverser un booléen

L'expression doit donner le contraire de `bloque`.

:::

:::collapsible 🔍 Indice 2 — Utiliser `not`

Le résultat de `not bloque` peut être directement renvoyé par la fonction.

:::

## 8. Écrire des conditions plus complexes
Nous pouvons combiner plusieurs comparaisons, plusieurs opérateurs logiques et des parenthèses.

Par exemple, imaginons qu'un utilisateur puisse accéder à un service s'il :b[est majeur ou possède une invitation], mais uniquement si son compte :b[n'est pas suspendu].

```python
age = 17
invitation = True
suspendu = False

if (age >= 18 or invitation) and not suspendu:
    print("Accès autorisé")
else:
    print("Accès refusé")
```

Décomposons cette expression :

1. `age >= 18` vaut `False` ;
2. `invitation` vaut `True` ;
3. `(False or True)` vaut `True` ;
4. `not suspendu` vaut `True` ;
5. `True and True` vaut `True`.

:g[La condition complète est donc vraie.] L'accès est autorisé.

### La priorité des opérateurs logiques
Comme pour les opérations mathématiques, Python respecte un :b[ordre de priorité]. Sans parenthèses, les opérateurs sont évalués dans l'ordre suivant :

| Priorité | Opérateur | Signification |
|:---:|:---:|---|
| 1 (la plus élevée) | `not` | NON |
| 2 | `and` | ET |
| 3 (la plus faible) | `or` | OU |

:s[Les :b[parenthèses] permettent de regrouper les expressions et de rendre notre intention plus claire.]

Observons la différence :

```python
A = True
B = False
C = False
print(A or B and C)      # True
print((A or B) and C)    # False
```

Dans la première expression, Python évalue d'abord `B and C`, puis `A or ...`.

Dans la seconde, les parenthèses imposent de calculer `A or B` avant de faire le `and C`.

:::warning ⚠️ Attention aux comparaisons mal écrites

Écrire `age == 16 or 17` ne signifie :r[pas] « l'âge vaut 16 ou 17 ».

Pour tester ces deux valeurs, il faut écrire `age == 16 or age == 17`, ou encore `age in (16, 17)` (syntaxe que nous verrons plus tard).

Avec `age == 16 or 17`, Python considère la valeur `17` comme vraie dans un contexte booléen. Cette expression est donc toujours vraie.

:::

### Écrire un intervalle
Pour savoir si un âge est compris entre :b[12 ans inclus et 18 ans exclus], nous pouvons écrire :

```python
age = 15
print(age >= 12 and age < 18)  # True
print(12 <= age < 18)          # True
```

La deuxième syntaxe est une :b[**comparaison chaînée**] propre à Python. Elle correspond ici aux deux comparaisons reliées par `and`.

:::reminder À retenir

:s[Lorsque tu mélanges `and`, `or` et `not`, utilise des parenthèses pour rendre la condition explicite.]

Même lorsqu'elles ne sont pas obligatoires, les parenthèses facilitent la lecture et évitent les erreurs de logique.

:::

### 🧪 Exercice 10 — Une autorisation sous conditions
Un utilisateur peut accéder à un service s'il est :b[majeur OU invité], à condition de :b[ne pas être suspendu].

Crée `peut_acceder(age, invite, suspendu)` en utilisant les opérateurs logiques.

```python:ex-conditions-priorite
def peut_acceder(age, invite, suspendu):
    """Indique si l'utilisateur peut accéder au service."""
    # Complète l'expression logique.
    pass

print(peut_acceder(17, True, False))
```

```python-test:ex-conditions-priorite
assert peut_acceder(19, False, False) is True, "Une personne majeure non suspendue peut accéder."
assert peut_acceder(17, True, False) is True, "Une invitation suffit pour une personne mineure."
assert peut_acceder(17, False, False) is False, "Sans majorité ni invitation, l'accès est refusé."
assert peut_acceder(19, True, True) is False, "Une suspension interdit l'accès, même avec une invitation."
assert peut_acceder(19, False, True) is False, "Une personne majeure suspendue ne peut pas accéder."
assert peut_acceder(18, False, False) is True, "À 18 ans exactement, l'accès est autorisé."
print("✅ L'expression combinée prend en compte tous les critères !")
```

:::collapsible 💡 Indice 1 — Regrouper deux possibilités

Commence par regrouper `age >= 18` et `invite` avec des parenthèses. Quel opérateur indique qu'une seule de ces conditions suffit ?

:::

:::collapsible 🔍 Indice 2 — Exclure les suspensions

Associe `(age >= 18 or invite)` à `not suspendu` grâce à l'opérateur `and`.

:::

## 9. Comprendre les tables de vérité
Jusqu'ici, nous avons exécuté nos programmes avec différentes valeurs pour vérifier nos conditions. Mais comment être certains de ne pas oublier une situation ?

Une :b[**table de vérité**] permet de :g[représenter toutes les combinaisons possibles de valeurs booléennes] et d'indiquer le résultat d'une expression logique dans chaque cas.

On représente souvent les deux conditions étudiées par les lettres `A` et `B`.

Chaque condition peut valoir :g[`True`] ou :r[`False`]. Avec deux conditions, nous avons donc :b[quatre combinaisons possibles] :

1. `A = False`, `B = False` ;
2. `A = False`, `B = True` ;
3. `A = True`, `B = False` ;
4. `A = True`, `B = True`.

### La table de vérité du NON : `not`
L'opérateur `not` ne porte que sur une seule condition. Il suffit donc de deux lignes :

| `A` | `not A` |
|:---:|:---:|
| :r[False] | :g[True] |
| :g[True] | :r[False] |

:s[Le NON inverse systématiquement la valeur de départ.]

### La table de vérité du ET : `and`
| `A` | `B` | `A and B` |
|:---:|:---:|:---:|
| :r[False] | :r[False] | :r[False] |
| :r[False] | :g[True] | :r[False] |
| :g[True] | :r[False] | :r[False] |
| :g[True] | :g[True] | :g[True] |

Pour que `A and B` soit vrai, :b[les deux valeurs doivent être vraies].

### La table de vérité du OU : `or`
| `A` | `B` | `A or B` |
|:---:|:---:|:---:|
| :r[False] | :r[False] | :r[False] |
| :r[False] | :g[True] | :g[True] |
| :g[True] | :r[False] | :g[True] |
| :g[True] | :g[True] | :g[True] |

Pour que `A or B` soit vrai, :b[au moins une valeur doit être vraie].

:::reminder À retenir

:s[Le `and` est vrai uniquement si les deux conditions sont vraies. Le `or` est faux uniquement si les deux conditions sont fausses.]

Le `or` de Python est :b[inclusif] : si `A` et `B` valent tous les deux `True`, le résultat vaut aussi `True`.

:::

### Construire la table d'une expression composée
Étudions maintenant :b[`A and not B`].

Pour ne pas nous tromper, nous ajoutons une colonne intermédiaire `not B`, puis nous calculons `A and not B`.

| `A` | `B` | `not B` | `A and not B` |
|:---:|:---:|:---:|:---:|
| :r[False] | :r[False] | :g[True] | :r[False] |
| :r[False] | :g[True] | :r[False] | :r[False] |
| :g[True] | :r[False] | :g[True] | :g[True] |
| :g[True] | :g[True] | :r[False] | :r[False] |

Par exemple, à la troisième ligne :

- `A` vaut `True` ;
- `B` vaut `False`, donc `not B` vaut `True` ;
- `True and True` donne :g[`True`].

:::info 💡 Combien de lignes faut-il ?

Pour :b[une] condition booléenne, il existe 2 possibilités.

Pour :b[deux] conditions booléennes indépendantes, il en existe 4.

Pour :b[trois] conditions booléennes indépendantes, il en existe 8.

En général, avec `n` conditions booléennes indépendantes, il y a :b[`2 ** n` combinaisons possibles] (soit « 2 puissance n »).

:::

### 🧪 Exercice 11 — Une expression et sa table de vérité
Considérons l'expression `A and not B`.

Avant d'écrire le code, essaie de compléter sur une feuille la dernière colonne de ce tableau :

| `A` | `B` | `A and not B` |
|:---:|:---:|:---:|
| :r[False] | :r[False] | ? |
| :r[False] | :g[True] | ? |
| :g[True] | :r[False] | ? |
| :g[True] | :g[True] | ? |

Crée ensuite une fonction `expression(A, B)` qui :g[renvoie le résultat de cette expression]. Tu pourras comparer les résultats de Python à ta table.

```python:ex-conditions-table
def expression(A, B):
    """Renvoie le résultat de A ET NON B."""
    # Traduis l'expression logique en Python.
    pass

print(expression(False, False))
print(expression(False, True))
print(expression(True, False))
print(expression(True, True))
```

```python-test:ex-conditions-table
assert expression(False, False) is False, "Faux ET NON Faux doit donner Faux."
assert expression(False, True) is False, "Faux ET NON Vrai doit donner Faux."
assert expression(True, False) is True, "Vrai ET NON Faux doit donner Vrai."
assert expression(True, True) is False, "Vrai ET NON Vrai doit donner Faux."
print("✅ Les quatre lignes de la table de vérité sont correctes !")
```

:::collapsible 💡 Indice 1 — Commencer par le NON

Calcule d'abord `not B`. Ensuite seulement, combine ce résultat avec `A`.

:::

:::collapsible 🔍 Indice 2 — Traduire la formule

Il suffit de renvoyer l'expression `A and not B` à l'aide de `return`.

:::

### Le cas du « OU exclusif »
Le OU logique de Python est inclusif. Pourtant, dans certaines situations, nous voulons qu':b[une seule des deux conditions soit vraie, mais pas les deux]. On parle de :b[**OU exclusif**], souvent noté `XOR`.

Par exemple : « Je peux choisir le dessert A ou le dessert B, mais pas les deux à la fois. »

| `A` | `B` | OU inclusif (`A or B`) | OU exclusif |
|:---:|:---:|:---:|:---:|
| :r[False] | :r[False] | :r[False] | :r[False] |
| :r[False] | :g[True] | :g[True] | :g[True] |
| :g[True] | :r[False] | :g[True] | :g[True] |
| :g[True] | :g[True] | :g[True] | :r[False] |

Nous pouvons construire un OU exclusif avec les trois opérateurs étudiés :

```python
A = True
B = False
resultat = (A and not B) or (B and not A)
print(resultat)  # True
```

Dans cette expression, nous vérifions que :g[`A` est vrai sans `B`] :b[ou] que :g[`B` est vrai sans `A`].

:::info 💡 Pour aller plus loin

Python permet également d'utiliser `!=` entre deux booléens pour obtenir le comportement du OU exclusif. Il existe aussi l'opérateur `^` pour effectuer un OU exclusif sur des booléens.

Dans ce chapitre, nous privilégions la construction avec `and`, `or` et `not` pour bien comprendre le raisonnement.

:::

### 🧪 Exercice 12 — Le OU exclusif
Crée une fonction `un_seul(A, B)` qui renvoie `True` :b[seulement si exactement l'un des deux booléens est vrai].

```python:ex-conditions-xor
def un_seul(A, B):
    """Renvoie True si un seul des deux booléens est vrai."""
    # Utilise and, or et not.
    pass

print(un_seul(True, False))
```

```python-test:ex-conditions-xor
assert un_seul(False, False) is False, "Aucune condition vraie : résultat faux."
assert un_seul(False, True) is True, "Seul B vrai : résultat vrai."
assert un_seul(True, False) is True, "Seul A vrai : résultat vrai."
assert un_seul(True, True) is False, "Deux conditions vraies : résultat faux."
print("✅ Le OU exclusif respecte sa table de vérité !")
```

:::collapsible 💡 Indice 1 — Décomposer le raisonnement

Il existe deux situations acceptées : `A` vrai et `B` faux, :b[ou] `A` faux et `B` vrai.

:::

:::collapsible 🔍 Indice 2 — Assembler les conditions

Utilise `(A and not B) or (B and not A)` pour décrire les deux situations possibles.

:::

### Une table de vérité avec trois conditions
Pour finir, étudions l'expression :b[`(A or B) and not C`].

Nous ajoutons une colonne `A or B`, puis une colonne `not C`, avant de calculer le résultat final.

| `A` | `B` | `C` | `A or B` | `not C` | `(A or B) and not C` |
|:---:|:---:|:---:|:---:|:---:|:---:|
| :r[False] | :r[False] | :r[False] | :r[False] | :g[True] | :r[False] |
| :r[False] | :r[False] | :g[True] | :r[False] | :r[False] | :r[False] |
| :r[False] | :g[True] | :r[False] | :g[True] | :g[True] | :g[True] |
| :r[False] | :g[True] | :g[True] | :g[True] | :r[False] | :r[False] |
| :g[True] | :r[False] | :r[False] | :g[True] | :g[True] | :g[True] |
| :g[True] | :r[False] | :g[True] | :g[True] | :r[False] | :r[False] |
| :g[True] | :g[True] | :r[False] | :g[True] | :g[True] | :g[True] |
| :g[True] | :g[True] | :g[True] | :g[True] | :r[False] | :r[False] |

Cette méthode fonctionne même lorsque l'expression devient longue : :s[on calcule une colonne à la fois, en respectant les parenthèses et la priorité des opérateurs].

## 10. Défi final — Un contrôle d'accès complet
Une activité impose les règles suivantes :

- si le compte est :r[suspendu], l'accès est interdit, quels que soient les autres critères ;
- si la personne ne possède :r[pas de billet], elle ne peut pas entrer ;
- si elle a :g[au moins 16 ans] ou qu'elle est :g[accompagnée], l'accès est autorisé ;
- dans les autres cas, elle ne remplit pas la condition d'âge.

Crée une fonction `statut_entree(age, billet, accompagne, suspendu)` qui renvoie :b[exactement l'un des quatre messages] :

- `"Accès interdit"` ;
- `"Billet manquant"` ;
- `"Accès autorisé"` ;
- `"Âge insuffisant"`.

Tu dois réutiliser les notions du chapitre : :b[`if` / `elif` / `else`], comparaisons et opérateurs logiques. Fais particulièrement attention à :s[l'ordre des vérifications].

```python:defi-conditions-entree
def statut_entree(age, billet, accompagne, suspendu):
    """Détermine si une personne peut participer à une activité.

    Paramètres :
        age (int) : âge de la personne, en années.
        billet (bool) : indique si la personne possède un billet.
        accompagne (bool) : indique si la personne est accompagnée.
        suspendu (bool) : indique si son compte est suspendu.

    Renvoie :
        str : message indiquant la situation de la personne.
    """
    # Vérifie les règles dans le bon ordre.
    pass

print(statut_entree(15, True, True, False))
```

```python-test:defi-conditions-entree
assert statut_entree(16, True, False, False) == "Accès autorisé", "À 16 ans avec un billet, l'accès est autorisé."
assert statut_entree(15, True, True, False) == "Accès autorisé", "L'accompagnement permet l'accès."
assert statut_entree(15, True, False, False) == "Âge insuffisant", "À 15 ans sans accompagnement, l'âge est insuffisant."
assert statut_entree(16, False, False, False) == "Billet manquant", "Sans billet, l'accès doit être refusé."
assert statut_entree(20, True, True, True) == "Accès interdit", "Une suspension interdit l'accès."
assert statut_entree(15, False, False, True) == "Accès interdit", "La suspension est prioritaire sur les autres motifs."
assert statut_entree(15, False, True, False) == "Billet manquant", "L'accompagnement ne remplace pas le billet."
assert statut_entree(15, True, False, True) == "Accès interdit", "La suspension est prioritaire sur l'âge."
print("✅ Défi réussi : tous les cas d'accès sont traités !")
```

:::collapsible 💡 Indice 1 — Définir les priorités

Teste d'abord la suspension, puis le billet. Ces deux vérifications permettent de rejeter immédiatement certains cas.

:::

:::collapsible 🔍 Indice 2 — Utiliser une expression logique

Après les deux premiers contrôles, teste `age >= 16 or accompagne`. Si cette condition est vraie, renvoie `"Accès autorisé"` ; sinon, renvoie `"Âge insuffisant"`.

:::

---

:::success ✅ Bilan — Je sais faire

- :b[Évaluer] une comparaison et reconnaître un booléen.
- Utiliser `if` pour exécuter un bloc selon une condition.
- Distinguer les branches de `if`, `elif` et `else`, sans oublier l'indentation.
- Utiliser des :b[conditions imbriquées] pour prendre des décisions successives.
- Combiner des conditions avec :b[`and`, `or` et `not`].
- Employer les :b[parenthèses] pour clarifier des expressions logiques.
- :g[Construire une table de vérité] pour une ou plusieurs conditions booléennes.
- Tester les :b[cas limites] pour vérifier le comportement de mon programme.

:::
