# 📋 Commandes Utiles

## Démarrage du serveur

```bash
# Méthode 1 : Script automatique (recommandé)
./start.sh

# Méthode 2 : Python 3
python3 -m http.server 8000

# Méthode 3 : Python 2
python -m SimpleHTTPServer 8000

# Méthode 4 : Node.js (si installé)
npx serve

# Méthode 5 : PHP (si installé)
php -S localhost:8000
```

## Gestion Git (si vous versionnez)

```bash
# Initialiser un dépôt
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Site de cours NSI"

# Ajouter un remote GitHub
git remote add origin https://github.com/votre-nom/cours-nsi.git

# Pousser vers GitHub
git push -u origin main

# Mettre à jour
git add .
git commit -m "Description des changements"
git push
```

## Édition des fichiers

```bash
# Ouvrir le projet dans VS Code
code .

# Ouvrir un cours spécifique
code cours/introduction.md

# Éditer les styles
code styles.css

# Éditer la logique
code app.js
```

## Vérification et tests

```bash
# Lister les fichiers
ls -la

# Voir l'arborescence
tree -L 2

# Vérifier la syntaxe JavaScript (si Node.js installé)
npx eslint app.js

# Chercher dans les fichiers
grep -r "texte" .

# Compter les lignes de code
find . -name "*.js" -o -name "*.css" | xargs wc -l
```

## Maintenance

```bash
# Faire une sauvegarde
tar -czf backup-cours-nsi-$(date +%Y%m%d).tar.gz .

# Nettoyer les fichiers temporaires
rm -f *~ *.bak

# Rechercher des fichiers volumineux
find . -type f -size +1M

# Vérifier l'espace disque
du -sh .
```

## Déploiement

```bash
# GitHub Pages (après push)
# 1. Allez dans Settings > Pages sur GitHub
# 2. Sélectionnez la branche main
# 3. Le site sera sur https://votre-nom.github.io/cours-nsi/

# Netlify (avec CLI)
npm install -g netlify-cli
netlify deploy --prod

# Vercel (avec CLI)
npm install -g vercel
vercel --prod
```

## Développement

```bash
# Surveiller les changements (si vous installez un watcher)
npx nodemon --watch cours --ext md --exec 'echo Cours modifié'

# Lancer plusieurs commandes en parallèle
# Terminal 1
python3 -m http.server 8000

# Terminal 2
code .

# Créer un nouveau cours rapidement
cp cours/TEMPLATE.md cours/nouveau-cours.md
```

## Statistiques

```bash
# Compter les mots dans tous les cours
wc -w cours/*.md

# Nombre de lignes de code
cloc .

# Taille du projet
du -sh .

# Nombre de fichiers
find . -type f | wc -l
```

## Permissions (si nécessaire)

```bash
# Rendre le script exécutable
chmod +x start.sh

# Permissions lecture/écriture
chmod 644 *.md *.html *.css *.js

# Permissions pour tous les scripts
chmod +x *.sh
```

## Dépannage

```bash
# Tuer un serveur sur le port 8000
lsof -ti:8000 | xargs kill -9

# Vérifier quel processus utilise le port
lsof -i :8000

# Nettoyer le cache du navigateur (dans le navigateur)
# Ctrl+Shift+Delete

# Vérifier les erreurs JavaScript (dans le navigateur)
# F12 > Console

# Tester la validité du HTML
# https://validator.w3.org/

# Tester la validité du CSS
# https://jigsaw.w3.org/css-validator/
```

## Astuces VS Code

```bash
# Extensions recommandées à installer
code --install-extension esbenp.prettier-vscode
code --install-extension yzhang.markdown-all-in-one
code --install-extension ritwickdey.liveserver

# Formater automatiquement
# Dans VS Code : Shift+Alt+F

# Rechercher et remplacer dans tous les fichiers
# Ctrl+Shift+H
```

## Performance

```bash
# Optimiser les images (si vous en ajoutez)
# Installer imagemagick d'abord
# sudo apt-get install imagemagick
convert image.png -quality 85 image-optimized.png

# Minifier le CSS (optionnel, pour production)
# npx clean-css-cli -o styles.min.css styles.css

# Minifier le JavaScript (optionnel, pour production)
# npx terser app.js -o app.min.js
```

## Partage rapide (développement)

```bash
# Partager temporairement avec ngrok
# 1. Installer ngrok : https://ngrok.com/
# 2. Lancer votre serveur : python3 -m http.server 8000
# 3. Dans un autre terminal : ngrok http 8000
# 4. Partagez l'URL https://xxxx.ngrok.io

# Alternative : localtunnel
npx localtunnel --port 8000
```

---

💡 **Conseil** : Gardez ce fichier à portée de main pour retrouver rapidement les commandes !
