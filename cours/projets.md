# 🎮 Projets Pratiques en Python

:::note Objectifs
Dans ce cours pratique, vous allez créer de vrais projets :
- Calculatrice avancée
- Jeu du pendu
- Gestionnaire de tâches
- Générateur de mots de passe
- Mini jeux
:::

## Introduction

La meilleure façon d'apprendre la programmation, c'est de **pratiquer** ! Ce cours vous propose des projets complets et concrets.

:::info Conseils
- Lisez le code et comprenez-le avant de l'exécuter
- Modifiez les valeurs et observez les changements
- Essayez d'ajouter vos propres fonctionnalités
:::

## Projet 1 : Calculatrice Avancée

Une calculatrice avec toutes les opérations de base :

```python
def calculatrice():
    """
    Calculatrice avec addition, soustraction,
    multiplication, division et puissance.
    """
    print("=== CALCULATRICE ===")
    print("Opérations disponibles:")
    print("+ : Addition")
    print("- : Soustraction")
    print("* : Multiplication")
    print("/ : Division")
    print("** : Puissance")
    print("% : Modulo (reste)")
    print()
    
    # Simulation d'entrées (en pratique, on utiliserait input())
    a = 15
    operation = "+"
    b = 7
    
    print(f"Calcul : {a} {operation} {b}")
    
    if operation == "+":
        resultat = a + b
    elif operation == "-":
        resultat = a - b
    elif operation == "*":
        resultat = a * b
    elif operation == "/":
        if b != 0:
            resultat = a / b
        else:
            print("Erreur : Division par zéro !")
            return
    elif operation == "**":
        resultat = a ** b
    elif operation == "%":
        resultat = a % b
    else:
        print("Opération invalide !")
        return
    
    print(f"Résultat : {resultat}")

# Exécuter la calculatrice
calculatrice()
```

:::collapsible Améliorations possibles
- Ajouter des fonctions scientifiques (sin, cos, sqrt)
- Gérer les parenthèses
- Conserver l'historique des calculs
- Ajouter un mode graphique avec matplotlib
:::

## Projet 2 : Gestionnaire de Mots de Passe

Générez des mots de passe sécurisés :

```python
import random
import string

def generer_mot_de_passe(longueur=12, avec_symboles=True):
    """
    Génère un mot de passe aléatoire sécurisé.
    """
    # Caractères disponibles
    lettres_min = string.ascii_lowercase  # a-z
    lettres_maj = string.ascii_uppercase  # A-Z
    chiffres = string.digits  # 0-9
    symboles = "!@#$%^&*()-_=+[]{}|;:,.<>?"
    
    # Construire l'ensemble de caractères
    caracteres = lettres_min + lettres_maj + chiffres
    if avec_symboles:
        caracteres += symboles
    
    # Générer le mot de passe
    mot_de_passe = ''.join(random.choice(caracteres) for _ in range(longueur))
    
    return mot_de_passe

# Générer plusieurs mots de passe
print("=== GÉNÉRATEUR DE MOTS DE PASSE ===\n")

print("Mots de passe de 8 caractères:")
for i in range(3):
    print(f"  {i+1}. {generer_mot_de_passe(8)}")

print("\nMots de passe de 12 caractères:")
for i in range(3):
    print(f"  {i+1}. {generer_mot_de_passe(12)}")

print("\nMots de passe de 16 caractères (avec symboles):")
for i in range(3):
    print(f"  {i+1}. {generer_mot_de_passe(16, True)}")
```

:::warning Sécurité
Dans un vrai projet, utilisez des bibliothèques spécialisées comme `secrets` pour la cryptographie.
:::

## Projet 3 : Jeu du Plus ou Moins

Un jeu classique pour deviner un nombre :

```python
import random

def jeu_plus_ou_moins():
    """
    Jeu où il faut deviner un nombre entre 1 et 100.
    """
    print("=== JEU DU PLUS OU MOINS ===")
    print("Je pense à un nombre entre 1 et 100")
    print()
    
    # L'ordinateur choisit un nombre
    nombre_secret = random.randint(1, 100)
    tentatives = 0
    max_tentatives = 7
    
    print(f"Vous avez {max_tentatives} tentatives")
    print()
    
    # Simulation de tentatives
    possibles = list(range(1, 101))
    trouve = False
    
    while tentatives < max_tentatives and not trouve:
        tentatives += 1
        # Simulation : l'ordinateur devine intelligemment
        essai = random.choice(possibles)
        
        print(f"Tentative {tentatives}: {essai}")
        
        if essai == nombre_secret:
            print(f"🎉 Trouvé ! Le nombre était {nombre_secret}")
            print(f"Nombre de tentatives : {tentatives}")
            trouve = True
        elif essai < nombre_secret:
            print("  → C'est plus !")
            # Retirer les nombres trop petits
            possibles = [n for n in possibles if n > essai]
        else:
            print("  → C'est moins !")
            # Retirer les nombres trop grands
            possibles = [n for n in possibles if n < essai]
        
        print()
    
    if not trouve:
        print(f"😢 Perdu ! Le nombre était {nombre_secret}")

# Jouer
jeu_plus_ou_moins()
```

:::collapsible Variantes du jeu
- Changer la plage de nombres (1-1000)
- Limiter le temps par tentative
- Mode à deux joueurs
- Ajouter des indices supplémentaires
:::

## Projet 4 : Analyseur de Texte

Analyser un texte et donner des statistiques :

```python
def analyser_texte(texte):
    """
    Analyse un texte et retourne des statistiques.
    """
    # Compter les caractères
    nb_caracteres = len(texte)
    nb_caracteres_sans_espaces = len(texte.replace(" ", ""))
    
    # Compter les mots
    mots = texte.split()
    nb_mots = len(mots)
    
    # Compter les phrases (approximatif)
    nb_phrases = texte.count('.') + texte.count('!') + texte.count('?')
    
    # Trouver le mot le plus long
    mot_le_plus_long = max(mots, key=len) if mots else ""
    
    # Compter les voyelles
    voyelles = "aeiouAEIOU"
    nb_voyelles = sum(1 for c in texte if c in voyelles)
    
    # Afficher les résultats
    print("=== ANALYSE DE TEXTE ===\n")
    print(f"Nombre de caractères : {nb_caracteres}")
    print(f"Caractères (sans espaces) : {nb_caracteres_sans_espaces}")
    print(f"Nombre de mots : {nb_mots}")
    print(f"Nombre de phrases : {nb_phrases}")
    print(f"Mot le plus long : {mot_le_plus_long} ({len(mot_le_plus_long)} lettres)")
    print(f"Nombre de voyelles : {nb_voyelles}")
    
    if nb_mots > 0:
        longueur_moyenne = nb_caracteres_sans_espaces / nb_mots
        print(f"Longueur moyenne des mots : {longueur_moyenne:.1f} lettres")
    
    # Mots les plus fréquents
    from collections import Counter
    mots_normalises = [mot.lower().strip('.,!?;:') for mot in mots]
    frequences = Counter(mots_normalises)
    
    print("\nMots les plus fréquents :")
    for mot, freq in frequences.most_common(5):
        print(f"  - '{mot}' : {freq} fois")

# Texte à analyser
texte_exemple = """
Python est un langage de programmation puissant et facile à apprendre.
Il est utilisé dans de nombreux domaines comme le web, la data science,
l'intelligence artificielle et bien d'autres. Python est vraiment génial !
"""

analyser_texte(texte_exemple)
```

## Projet 5 : Tri et Recherche

Algorithmes fondamentaux de tri et recherche :

```python
import random
import time

def tri_bulles(liste):
    """
    Tri à bulles : compare et échange les éléments adjacents.
    """
    n = len(liste)
    liste_copiee = liste.copy()
    
    for i in range(n):
        for j in range(0, n-i-1):
            if liste_copiee[j] > liste_copiee[j+1]:
                # Échanger
                liste_copiee[j], liste_copiee[j+1] = liste_copiee[j+1], liste_copiee[j]
    
    return liste_copiee

def tri_selection(liste):
    """
    Tri par sélection : trouve le minimum et le place au début.
    """
    liste_copiee = liste.copy()
    n = len(liste_copiee)
    
    for i in range(n):
        # Trouver le minimum
        min_idx = i
        for j in range(i+1, n):
            if liste_copiee[j] < liste_copiee[min_idx]:
                min_idx = j
        
        # Échanger
        liste_copiee[i], liste_copiee[min_idx] = liste_copiee[min_idx], liste_copiee[i]
    
    return liste_copiee

def recherche_binaire(liste_triee, element):
    """
    Recherche binaire : recherche efficace dans une liste triée.
    """
    gauche, droite = 0, len(liste_triee) - 1
    
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        
        if liste_triee[milieu] == element:
            return milieu  # Trouvé !
        elif liste_triee[milieu] < element:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    
    return -1  # Non trouvé

# Tests
print("=== ALGORITHMES DE TRI ET RECHERCHE ===\n")

# Générer une liste aléatoire
liste_originale = [random.randint(1, 100) for _ in range(10)]
print(f"Liste originale : {liste_originale}")
print()

# Tri à bulles
liste_triee_bulles = tri_bulles(liste_originale)
print(f"Tri à bulles : {liste_triee_bulles}")

# Tri par sélection
liste_triee_selection = tri_selection(liste_originale)
print(f"Tri par sélection : {liste_triee_selection}")

# Tri Python natif (pour comparaison)
liste_triee_python = sorted(liste_originale)
print(f"Tri Python : {liste_triee_python}")
print()

# Recherche binaire
element_cherche = liste_triee_python[5]
position = recherche_binaire(liste_triee_python, element_cherche)
print(f"Recherche de {element_cherche}")
print(f"Trouvé à l'index : {position}")
```

:::collapsible Autres algorithmes de tri
- **Tri rapide (Quick Sort)** : Diviser pour régner
- **Tri fusion (Merge Sort)** : Fusion de sous-listes
- **Tri par insertion** : Insertion progressive
- **Tri par tas (Heap Sort)** : Utilise une structure de tas
:::

## Projet 6 : Calendrier et Dates

Travailler avec les dates :

```python
from datetime import datetime, timedelta

def afficher_calendrier_mois(annee, mois):
    """
    Affiche un calendrier pour un mois donné.
    """
    import calendar
    
    print(f"\n=== CALENDRIER {calendar.month_name[mois]} {annee} ===\n")
    print(calendar.month(annee, mois))

def calculer_age(date_naissance):
    """
    Calcule l'âge à partir d'une date de naissance.
    """
    aujourd_hui = datetime.now()
    age = aujourd_hui.year - date_naissance.year
    
    # Ajuster si l'anniversaire n'est pas encore passé
    if aujourd_hui.month < date_naissance.month or \
       (aujourd_hui.month == date_naissance.month and aujourd_hui.day < date_naissance.day):
        age -= 1
    
    return age

def jours_jusqu_a(date_cible):
    """
    Calcule le nombre de jours jusqu'à une date.
    """
    aujourd_hui = datetime.now()
    difference = date_cible - aujourd_hui
    return difference.days

# Exemples
print("=== GESTION DES DATES ===")

# Date actuelle
maintenant = datetime.now()
print(f"\nDate et heure actuelles : {maintenant.strftime('%d/%m/%Y %H:%M:%S')}")

# Calculer un âge
date_naissance = datetime(2008, 5, 15)
age = calculer_age(date_naissance)
print(f"\nDate de naissance : {date_naissance.strftime('%d/%m/%Y')}")
print(f"Âge : {age} ans")

# Jours jusqu'à une date
noel = datetime(2025, 12, 25)
jours = jours_jusqu_a(noel)
print(f"\nJours jusqu'à Noël : {jours} jours")

# Afficher un calendrier
afficher_calendrier_mois(2025, 11)

# Jour de la semaine
print(f"\nAujourd'hui c'est : {maintenant.strftime('%A')}")
```

## Projet 7 : Statistiques et Probabilités

```python
import random

def lancer_des(nb_des=2, nb_lancers=1000):
    """
    Simule des lancers de dés et affiche les statistiques.
    """
    print(f"=== SIMULATION DE {nb_lancers} LANCERS DE {nb_des} DÉS ===\n")
    
    resultats = []
    for _ in range(nb_lancers):
        somme = sum(random.randint(1, 6) for _ in range(nb_des))
        resultats.append(somme)
    
    # Statistiques
    print(f"Minimum : {min(resultats)}")
    print(f"Maximum : {max(resultats)}")
    print(f"Moyenne : {sum(resultats) / len(resultats):.2f}")
    
    # Fréquences
    from collections import Counter
    frequences = Counter(resultats)
    
    print("\nDistribution des résultats :")
    for valeur in sorted(frequences.keys()):
        freq = frequences[valeur]
        pourcentage = (freq / nb_lancers) * 100
        barre = "█" * int(pourcentage)
        print(f"{valeur:2d} : {barre} {pourcentage:.1f}%")

def pile_ou_face(nb_lancers=100):
    """
    Simule des lancers de pièce.
    """
    print(f"\n=== {nb_lancers} LANCERS DE PIÈCE ===\n")
    
    pile = 0
    face = 0
    
    for _ in range(nb_lancers):
        if random.random() < 0.5:
            pile += 1
        else:
            face += 1
    
    print(f"Pile : {pile} ({pile/nb_lancers*100:.1f}%)")
    print(f"Face : {face} ({face/nb_lancers*100:.1f}%)")

# Exécuter les simulations
lancer_des(2, 1000)
pile_ou_face(100)
```

## Exercice Final : Gestionnaire de Tâches

Créez un gestionnaire de tâches complet :

```python
class GestionnaireTaches:
    """
    Gestionnaire de tâches simple.
    """
    def __init__(self):
        self.taches = []
    
    def ajouter_tache(self, titre, priorite="normale"):
        """Ajoute une nouvelle tâche."""
        tache = {
            'id': len(self.taches) + 1,
            'titre': titre,
            'priorite': priorite,
            'terminee': False
        }
        self.taches.append(tache)
        print(f"✅ Tâche ajoutée : {titre}")
    
    def terminer_tache(self, id_tache):
        """Marque une tâche comme terminée."""
        for tache in self.taches:
            if tache['id'] == id_tache:
                tache['terminee'] = True
                print(f"✅ Tâche terminée : {tache['titre']}")
                return
        print("❌ Tâche non trouvée")
    
    def supprimer_tache(self, id_tache):
        """Supprime une tâche."""
        self.taches = [t for t in self.taches if t['id'] != id_tache]
        print(f"🗑️ Tâche supprimée")
    
    def afficher_taches(self):
        """Affiche toutes les tâches."""
        if not self.taches:
            print("📋 Aucune tâche")
            return
        
        print("\n📋 LISTE DES TÂCHES\n")
        for tache in self.taches:
            statut = "✓" if tache['terminee'] else "○"
            priorite = "🔴" if tache['priorite'] == "haute" else "🟡" if tache['priorite'] == "moyenne" else "🟢"
            print(f"{statut} [{tache['id']}] {priorite} {tache['titre']}")
        print()

# Utilisation
gestionnaire = GestionnaireTaches()

# Ajouter des tâches
gestionnaire.ajouter_tache("Réviser le cours de NSI", "haute")
gestionnaire.ajouter_tache("Faire les exercices de maths", "haute")
gestionnaire.ajouter_tache("Lire le chapitre de physique", "moyenne")
gestionnaire.ajouter_tache("Préparer l'exposé d'anglais", "normale")

# Afficher
gestionnaire.afficher_taches()

# Terminer une tâche
gestionnaire.terminer_tache(1)
gestionnaire.terminer_tache(3)

# Afficher à nouveau
gestionnaire.afficher_taches()
```

:::success Félicitations !
Vous avez maintenant plusieurs projets concrets en Python ! N'hésitez pas à les modifier et à créer vos propres variantes. 🎉
:::

:::reminder Conseils pour vos projets
- **Commencez simple** : Une version basique qui fonctionne
- **Testez souvent** : Vérifiez chaque fonctionnalité
- **Ajoutez progressivement** : Complexifiez petit à petit
- **Commentez votre code** : Pour vous et les autres
- **Gérez les erreurs** : Anticipez les cas problématiques
:::
