# Morpion (Tic-Tac-Toe)

## Description du jeu
Le morpion est un jeu à deux joueurs qui se joue sur une grille de 3x3 cases. Chaque joueur choisit un symbole (X ou O) et place son symbole dans une case vide à tour de rôle. Le premier joueur à aligner trois de ses symboles horizontalement, verticalement ou en diagonale gagne la partie. Si toutes les cases sont remplies sans qu'un joueur ait aligné trois symboles, la partie est déclarée nulle.

## Règles du jeu
1. Le jeu se joue sur une grille de 3x3 cases.
2. Deux joueurs participent : l'un utilise le symbole X, l'autre le symbole O.
3. Les joueurs jouent à tour de rôle, en commençant par le joueur X.
4. Un joueur place son symbole dans une case vide de la grille.
5. Le premier joueur à aligner trois de ses symboles horizontalement, verticalement ou en diagonale remporte la partie.
6. Si toutes les cases sont remplies sans qu'un joueur ait gagné, la partie est déclarée nulle.

## Réalisation du projet
Le projet consiste à créer une version numérique du jeu de morpion en utilisant Python. Voici les étapes principales pour réaliser ce projet :
1. **Initialisation de la grille** : Créer une structure de données (comme une liste de listes) pour représenter la grille de jeu.
2. **Affichage de la grille** : Écrire une fonction pour afficher la grille de manière lisible pour les joueurs.
3. **Gestion des tours** : Implémenter une boucle pour gérer les tours des joueurs, en alternant entre le joueur 'X' et le joueur 'O'.
4. **Vérification des conditions de victoire** : Écrire une fonction pour vérifier si un joueur a gagné après chaque tour.
5. **Gestion des entrées utilisateur** : Permettre aux joueurs de choisir la case où ils veulent placer leur symbole, en s'assurant que la case est vide. (ex: en demandant les coordonnées de la case 0;0 à 2;2)
6. **Déclaration du résultat** : Annoncer le gagnant lorsque la partie est gagnée ou déclarer une partie nulle lorsque la grille est pleine.

:::note Conseil
Je vous recommande d'utiliser des fonctions pour chacune des fonctionnalités mentionnées ci-dessus afin de structurer votre code de manière claire et modulaire.

N'oubliez pas non plus les docstrigs pour documenter vos fonctions !
:::