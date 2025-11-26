# Guide de Personnalisation CSS

Ce guide explique comment personnaliser l'apparence de votre site de cours NSI.

## 📝 Variables CSS

Toutes les couleurs et espacements sont définis dans des variables CSS au début de `styles.css`. Modifiez ces valeurs pour changer l'apparence globale du site.

### Couleurs Principales

```css
:root {
    /* Couleurs principales */
    --primary-color: #2563eb;      /* Bleu - Utilisé pour les titres et boutons principaux */
    --secondary-color: #475569;     /* Gris foncé - Texte secondaire */
    --accent-color: #0ea5e9;        /* Bleu clair - Accents et survol */
    --background-color: #f8fafc;    /* Gris très clair - Fond de page */
    --sidebar-bg: #1e293b;          /* Gris-bleu foncé - Barre latérale */
    --content-bg: #ffffff;          /* Blanc - Fond du contenu */
}
```

### Couleurs des Boîtes d'Information

```css
/* Couleurs des boîtes d'information */
--note-color: #3b82f6;        /* Bleu - Notes générales */
--warning-color: #f59e0b;      /* Orange - Avertissements */
--danger-color: #ef4444;       /* Rouge - Dangers/Attention */
--success-color: #10b981;      /* Vert - Succès/Félicitations */
--info-color: #06b6d4;         /* Cyan - Informations */
--reminder-color: #8b5cf6;     /* Violet - Rappels */
```

### Typographie

```css
/* Polices de caractères */
--font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-code: 'Consolas', 'Monaco', 'Courier New', monospace;
```

### Espacements

```css
/* Espacements (marges et padding) */
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
```

### Autres Styles

```css
/* Bordures */
--border-radius: 8px;
--border-radius-sm: 4px;

/* Ombres */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

## 🎨 Exemples de Thèmes

### Thème Sombre

```css
:root {
    --primary-color: #60a5fa;
    --secondary-color: #9ca3af;
    --accent-color: #3b82f6;
    --background-color: #111827;
    --sidebar-bg: #1f2937;
    --content-bg: #374151;
}
```

### Thème Nature (Vert)

```css
:root {
    --primary-color: #059669;
    --secondary-color: #047857;
    --accent-color: #34d399;
    --background-color: #f0fdf4;
    --sidebar-bg: #064e3b;
    --content-bg: #ffffff;
}
```

### Thème Violet

```css
:root {
    --primary-color: #7c3aed;
    --secondary-color: #6d28d9;
    --accent-color: #a78bfa;
    --background-color: #faf5ff;
    --sidebar-bg: #5b21b6;
    --content-bg: #ffffff;
}
```

### Thème Orange/Chaleureux

```css
:root {
    --primary-color: #ea580c;
    --secondary-color: #c2410c;
    --accent-color: #fb923c;
    --background-color: #fff7ed;
    --sidebar-bg: #7c2d12;
    --content-bg: #ffffff;
}
```

## 🔧 Personnalisations Avancées

### Changer la Largeur de la Barre Latérale

Dans `styles.css`, cherchez `.sidebar` :

```css
.sidebar {
    width: 280px;  /* Changez cette valeur (ex: 320px, 250px) */
    /* ... */
}
```

### Modifier la Largeur Maximale du Contenu

Cherchez `.course-content` :

```css
.course-content {
    max-width: 900px;  /* Changez cette valeur (ex: 1200px, 800px) */
    /* ... */
}
```

### Personnaliser la Hauteur des Éditeurs de Code

Cherchez `.code-editor` :

```css
.code-editor {
    height: 300px;  /* Changez cette valeur (ex: 400px, 250px) */
    /* ... */
}
```

### Changer la Police

Ajoutez une police Google Fonts dans `index.html` :

```html
<head>
    <!-- ... -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

Puis dans `styles.css` :

```css
:root {
    --font-main: 'Inter', sans-serif;
}
```

### Ajouter un Logo Personnalisé

Dans `index.html`, remplacez dans la sidebar :

```html
<div class="logo">
    <img src="votre-logo.png" alt="Logo" style="max-width: 100%;">
    <h2>📚 Cours NSI</h2>
</div>
```

## 🎯 Classes Utilitaires

Utilisez ces classes directement dans vos fichiers Markdown :

### Espacements

```html
<div class="mt-2">Marge en haut moyenne</div>
<div class="mb-3">Marge en bas grande</div>
```

Classes disponibles : `mt-1`, `mt-2`, `mt-3`, `mt-4`, `mb-1`, `mb-2`, `mb-3`, `mb-4`

### Alignement

```html
<div class="text-center">Texte centré</div>
```

### Visibilité

```html
<div class="hidden">Élément caché</div>
```

## 💡 Conseils de Design

### 1. Cohérence des Couleurs

Utilisez un générateur de palette de couleurs comme :
- [Coolors.co](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

### 2. Contraste

Assurez-vous que le texte est lisible sur les fonds :
- Ratio de contraste minimum : 4.5:1
- Testez avec [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 3. Accessibilité

- Utilisez des tailles de police suffisantes (minimum 16px)
- Évitez de transmettre l'information uniquement par la couleur
- Testez avec un lecteur d'écran

### 4. Responsive Design

Le site est déjà responsive, mais vous pouvez ajuster les breakpoints dans les media queries :

```css
@media (max-width: 768px) {
    /* Styles pour tablettes et mobiles */
}

@media (max-width: 480px) {
    /* Styles pour petits mobiles */
}
```

## 🚀 Aller Plus Loin

### Animations Personnalisées

Ajoutez des animations CSS :

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.course-content {
    animation: fadeIn 0.5s ease-out;
}
```

### Thème Clair/Sombre (Toggle)

Ajoutez un bouton pour basculer entre thèmes :

1. Ajoutez un bouton dans `index.html` :
```html
<button id="themeToggle">🌙</button>
```

2. Ajoutez le JavaScript dans `app.js` :
```javascript
document.getElementById('themeToggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
};
```

3. Définissez les styles du thème sombre dans `styles.css` :
```css
body.dark-theme {
    --background-color: #111827;
    --content-bg: #1f2937;
    /* ... autres variables */
}
```

## 📚 Ressources

- [MDN Web Docs - CSS](https://developer.mozilla.org/fr/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Compatibilité des fonctionnalités CSS

---

**Amusez-vous à personnaliser votre site ! 🎨**
