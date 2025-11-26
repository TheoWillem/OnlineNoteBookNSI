# 🔧 Guide de Dépannage

## Problèmes Courants et Solutions

### ❌ "Impossible de charger les cours"

**Causes possibles :**

1. **Le serveur n'est pas démarré**
   ```bash
   # Solution : Démarrer le serveur
   cd /home/theo/Documents/perso/testSiteWebCour2
   python3 -m http.server 8000
   ```

2. **Erreur CORS** (Cross-Origin Resource Sharing)
   - Les fichiers doivent être servis par un serveur HTTP
   - Ne PAS ouvrir index.html directement avec `file://`
   - Toujours utiliser `http://localhost:8000`

3. **Fichiers de cours manquants**
   ```bash
   # Vérifier que les cours existent
   ls -la cours/
   ```

4. **Erreur JavaScript dans app.js**
   - Ouvrez la console du navigateur (F12)
   - Regardez les erreurs en rouge
   - Vérifiez la syntaxe JavaScript

### ❌ "Pyodide ne charge pas"

**Solutions :**

1. **Connexion internet requise**
   - Pyodide se charge depuis un CDN
   - Vérifiez votre connexion internet

2. **Attendez le chargement**
   - Pyodide prend 5-10 secondes à charger
   - Attendez avant d'exécuter du code Python

3. **Vérifiez la console**
   ```
   F12 > Console
   Recherchez "Pyodide chargé avec succès"
   ```

### ❌ "Le code Python ne s'exécute pas"

**Solutions :**

1. **Pyodide pas encore chargé**
   - Attendez quelques secondes après le chargement de la page
   - Regardez la console pour "Pyodide chargé"

2. **Erreur de syntaxe Python**
   - Vérifiez l'indentation (4 espaces)
   - Regardez le message d'erreur en rouge

3. **Bibliothèque non chargée**
   ```javascript
   // Dans app.js, vérifiez :
   await pyodide.loadPackage(['numpy', 'matplotlib']);
   ```

### ❌ "Les graphiques Matplotlib ne s'affichent pas"

**Solutions :**

1. **N'oubliez pas plt.show()**
   ```python
   import matplotlib.pyplot as plt
   # ... votre code ...
   plt.show()  # ← IMPORTANT !
   ```

2. **Attendez le chargement de Matplotlib**
   - Première utilisation peut prendre 10-15 secondes

3. **Vérifiez la configuration**
   ```python
   # Dans app.js, vérifiez cette ligne :
   matplotlib.use('module://matplotlib.backends.html5_canvas_backend')
   ```

### ❌ "Monaco Editor ne s'affiche pas"

**Solutions :**

1. **CDN non accessible**
   - Vérifiez votre connexion internet
   - Le CDN Monaco doit être accessible

2. **Conflit de chemins**
   ```javascript
   // Dans app.js, vérifiez :
   require.config({ 
       paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } 
   });
   ```

### ❌ "Les styles CSS ne s'appliquent pas"

**Solutions :**

1. **Videz le cache**
   ```
   Ctrl + Shift + R (Windows/Linux)
   Cmd + Shift + R (Mac)
   ```

2. **Vérifiez le chemin**
   ```html
   <!-- Dans index.html -->
   <link rel="stylesheet" href="styles.css">
   ```

3. **Erreur de syntaxe CSS**
   - Ouvrez styles.css
   - Vérifiez les accolades {}
   - Vérifiez les points-virgules ;

### ❌ "Port 8000 déjà utilisé"

**Solutions :**

```bash
# Option 1 : Tuer le processus sur le port 8000
lsof -ti:8000 | xargs kill -9

# Option 2 : Utiliser un autre port
python3 -m http.server 8001

# Option 3 : Trouver quel processus utilise le port
lsof -i :8000
```

### ❌ "Les sections déroulantes ne fonctionnent pas"

**Solutions :**

1. **Syntaxe Markdown incorrecte**
   ```markdown
   :::collapsible Titre
   Contenu
   :::
   ```
   - Vérifiez les trois doubles-points
   - Vérifiez la fermeture avec :::

2. **JavaScript non chargé**
   - Ouvrez F12 > Console
   - Cherchez les erreurs JavaScript

### ❌ "Les encadrés colorés ne s'affichent pas"

**Solutions :**

1. **Syntaxe correcte**
   ```markdown
   :::note Titre
   Contenu
   :::
   ```
   Types valides : `note`, `warning`, `attention`, `success`, `info`, `reminder`

2. **Regex dans app.js**
   - Vérifiez la fonction `processInfoBoxes()`

## 🔍 Déboguer Étape par Étape

### Étape 1 : Vérifier le serveur

```bash
# Le serveur tourne-t-il ?
curl http://localhost:8000/index.html
# Si erreur → Démarrer le serveur
```

### Étape 2 : Console du navigateur

```
1. Ouvrez la page : http://localhost:8000/index.html
2. Appuyez sur F12
3. Allez dans l'onglet "Console"
4. Recherchez les messages d'erreur en rouge
```

### Étape 3 : Onglet Network

```
1. F12 > Onglet "Network"
2. Rechargez la page (F5)
3. Vérifiez que tous les fichiers se chargent (code 200)
4. Si code 404 → Fichier manquant
```

### Étape 4 : Tester les composants

```javascript
// Dans la console du navigateur, testez :

// 1. Pyodide chargé ?
console.log(pyodide);

// 2. Monaco chargé ?
console.log(monaco);

// 3. Cours définis ?
console.log(courses);
```

## 📝 Checklist de Vérification

Avant de signaler un bug, vérifiez :

- [ ] Le serveur HTTP est démarré
- [ ] J'accède via `http://localhost:8000` (pas `file://`)
- [ ] La console ne montre pas d'erreurs JavaScript
- [ ] Les fichiers de cours existent dans `cours/`
- [ ] J'ai une connexion internet (pour les CDN)
- [ ] J'ai attendu que Pyodide charge (5-10 sec)
- [ ] J'ai vidé le cache du navigateur
- [ ] Le navigateur est à jour

## 🆘 Solutions Rapides

### Réinitialisation Complète

```bash
# 1. Arrêter tous les serveurs
pkill -f "python.*http.server"

# 2. Vider le cache du navigateur
# Ctrl + Shift + Delete > Effacer tout

# 3. Redémarrer le serveur
cd /home/theo/Documents/perso/testSiteWebCour2
python3 -m http.server 8000

# 4. Ouvrir dans un nouvel onglet
# http://localhost:8000/index.html
```

### Test Minimal

Créez un fichier `test.html` :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>Test</h1>
    <script>
        console.log("JavaScript fonctionne");
        fetch('cours/introduction.md')
            .then(r => r.text())
            .then(text => console.log("Cours chargé:", text.substring(0, 50)));
    </script>
</body>
</html>
```

Ouvrez `http://localhost:8000/test.html` et regardez la console.

## 📞 Obtenir de l'Aide

Si le problème persiste :

1. **Regardez la console** (F12)
2. **Copiez l'erreur exacte**
3. **Notez votre configuration**
   - OS (Windows/Mac/Linux)
   - Navigateur et version
   - Version de Python

4. **Décrivez ce que vous avez essayé**

## 🔗 Ressources Utiles

- **Console navigateur** : F12
- **Valider HTML** : https://validator.w3.org/
- **Valider CSS** : https://jigsaw.w3.org/css-validator/
- **Pyodide Docs** : https://pyodide.org/
- **Monaco Editor** : https://microsoft.github.io/monaco-editor/

---

**Note :** La plupart des problèmes sont résolus en :
1. Redémarrant le serveur
2. Vidant le cache
3. Attendant que Pyodide charge
