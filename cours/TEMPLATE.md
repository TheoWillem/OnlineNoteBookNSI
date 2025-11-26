# Titre de Votre Cours

:::note Objectifs
Décrivez ici les objectifs du cours :
- Objectif 1
- Objectif 2
- Objectif 3
:::

## Introduction

Introduisez le sujet du cours ici. Expliquez pourquoi c'est important et ce que les étudiants vont apprendre.

:::info Information contextuelle
Ajoutez des informations de contexte importantes ici.
:::

## Concept Principal 1

Expliquez le premier concept avec du texte et des exemples.

### Exemple de Code

```python
# Exemple de code Python
print("Votre code ici")

# Ce code sera automatiquement exécutable
resultat = 2 + 2
print(f"Le résultat est : {resultat}")
```

:::collapsible Explications détaillées
Ajoutez des explications supplémentaires que les étudiants peuvent ouvrir/fermer.
- Point 1
- Point 2
- Point 3
:::

## Concept Principal 2

Continuez avec les autres concepts...

### Pratique Interactive

```python
# Les étudiants peuvent modifier ce code
def ma_fonction():
    return "Modifiez-moi !"

print(ma_fonction())
```

:::warning Attention
Mettez en garde sur les erreurs communes ou les points délicats.
:::

## Exercice Pratique

```python
# Exercice pour les étudiants
# TODO: Complétez ce code

def exercice():
    # Votre solution ici
    pass

# Testez votre solution
exercice()
```

:::reminder Rappel
Rappelez les points clés à retenir.
:::

## Types d'Encadrés Disponibles

### Note (bleu)
```
:::note Titre
Contenu de la note
:::
```

### Warning (orange)
```
:::warning Titre
Contenu de l'avertissement
:::
```

### Attention (rouge)
```
:::attention Titre
Contenu important
:::
```

### Success (vert)
```
:::success Titre
Message de succès
:::
```

### Info (cyan)
```
:::info Titre
Information
:::
```

### Reminder (violet)
```
:::reminder Titre
Rappel important
:::
```

### Section Déroulante
```
:::collapsible Titre de la section
Contenu caché par défaut
:::
```

## Visualisation avec Matplotlib

Si vous voulez inclure des graphiques :

```python
import matplotlib.pyplot as plt
import numpy as np

# Créer des données
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Créer le graphique
plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Mon Graphique')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.show()
```

## Conclusion

Résumez les points clés du cours.

:::success Félicitations !
Message de fin encourageant pour les étudiants.
:::

---

## Notes pour l'Enseignant

- N'oubliez pas d'ajouter votre cours dans `app.js` :
  ```javascript
  const courses = [
      // ... autres cours
      { id: 'nouveau-cours', title: '🆕 Nouveau Cours', file: 'nouveau-cours.md' },
  ];
  ```

- Utilisez des emojis dans les titres pour rendre le menu plus visuel
- Testez tous les exemples de code avant de publier
- Pensez à varier les types d'exercices
