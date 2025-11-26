# 🔇 Suppression Warning Matplotlib

## ⚠️ Le Warning

```
UserWarning: Matplotlib is currently using agg, which is a non-GUI backend, 
so cannot show the figure.
```

### Cause

Ce warning apparaît quand :
1. Matplotlib utilise le backend "Agg" (non-graphique)
2. Le code utilisateur appelle `plt.show()`
3. Matplotlib essaie d'afficher la figure mais ne peut pas (backend non-GUI)

**C'est normal !** Nous voulons justement utiliser le backend "Agg" pour générer des images PNG au lieu de widgets interactifs.

---

## ✅ Solution

Filtrer les warnings Python pour supprimer ce message.

### Code Ajouté (2 Endroits)

#### 1. Lors du Chargement de Matplotlib (ligne ~335)

```javascript
if (pkg === 'matplotlib') {
    await pyodide.runPythonAsync(`
        import matplotlib
        matplotlib.use('Agg')
        import matplotlib.pyplot as plt
        plt.ioff()
        
        # Supprimer les warnings matplotlib
        import warnings
        warnings.filterwarnings('ignore', message='.*non-GUI backend.*')
        warnings.filterwarnings('ignore', category=UserWarning, module='matplotlib')
    `);
}
```

#### 2. Avant Chaque Exécution (ligne ~378)

```javascript
await pyodide.runPythonAsync(`
    import sys
    import io
    sys.stdout = io.StringIO()
    sys.stderr = io.StringIO()
    
    try:
        import matplotlib
        matplotlib.use('Agg')
        import matplotlib.pyplot as plt
        plt.ioff()
        
        # Supprimer le warning "cannot show the figure"
        import warnings
        warnings.filterwarnings('ignore', message='.*non-GUI backend.*')
    except:
        pass
`);
```

---

## 🎯 Explication des Filtres

### `warnings.filterwarnings('ignore', message='.*non-GUI backend.*')`

- **Filtre :** Tous les warnings contenant "non-GUI backend"
- **Cible :** Le message exact du warning matplotlib

### `warnings.filterwarnings('ignore', category=UserWarning, module='matplotlib')`

- **Filtre :** Tous les UserWarning venant de matplotlib
- **Cible :** Capture tous les warnings similaires

---

## 🧪 Test

**Code utilisateur :**
```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [1, 4, 9])
plt.title("Mon graphique")
plt.show()  # ← Avant: générait un warning
```

**Avant :**
```
❌ UserWarning: Matplotlib is currently using agg, which is a non-GUI backend...
```

**Après :**
```
✅ (Aucun warning)
```

---

## 📝 Pourquoi Deux Fois ?

| Endroit | Raison |
|---------|--------|
| **Lors du chargement** | Configuration initiale quand matplotlib est importé la première fois |
| **Avant chaque exécution** | Au cas où le code utilisateur réinitialise les warnings |

**Sécurité maximale !** Même si l'utilisateur fait `import warnings; warnings.resetwarnings()`, nos filtres seront réappliqués.

---

## ✅ Résultat

- ✅ Backend "Agg" actif (pas de widgets interactifs)
- ✅ Graphiques générés en PNG
- ✅ Affichage dans la modal
- ✅ **Aucun warning affiché !**

**Le warning est complètement supprimé !** 🎉
