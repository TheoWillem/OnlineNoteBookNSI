// ========================================
// CONSTANTES ET CONFIGURATION
// ========================================
const CONFIG = Object.freeze({
    PYODIDE_VERSION: 'v0.24.1',
    MONACO_VERSION: '0.44.0',
    PYODIDE_INDEX_URL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
    MONACO_BASE_URL: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs'
});

const PYTHON_STDLIB_MODULES = Object.freeze(new Set([
    'sys', 'os', 'io', 'math', 'random', 'time', 'datetime',
    'json', 'collections', 're', 'itertools', 'functools'
]));

const PACKAGE_MAP = Object.freeze({
    'numpy': 'numpy',
    'np': 'numpy',
    'matplotlib': 'matplotlib',
    'plt': 'matplotlib',
    'pandas': 'pandas',
    'pd': 'pandas',
    'scipy': 'scipy',
    'sklearn': 'scikit-learn',
    'skimage': 'scikit-image',
    'cv2': 'opencv-python',
    'sympy': 'sympy',
    'PIL': 'Pillow',
    'bs4': 'beautifulsoup4',
    'requests': 'requests',
});

const INFO_BOX_ICONS = Object.freeze({
    note: '📖',
    warning: '⚠️',
    attention: '🚨',
    success: '✅',
    info: 'ℹ️',
    reminder: '💡'
});

// ========================================
// ÉTAT GLOBAL
// ========================================
const AppState = {
    pyodide: null,
    monaco: null,
    editors: new Map(),
    loadedPackages: new Set(['micropip']),
    currentCourse: null,
    editorCounter: 0,
    collapsibleCounter: 0,
    pendingCollapsibles: []
};

// Cache des éléments DOM
const DOMCache = {
    courseGrid: null,
    courseSelection: null,
    courseTitle: null,
    courseContent: null,
    outputModal: null,
    modalBody: null,
    homeButton: null,
    tocSidebar: null,
    tocContent: null,
    tocToggle: null,
    tocFloatingButton: null,
    
    init() {
        this.courseGrid = document.getElementById('courseGrid');
        this.courseSelection = document.getElementById('courseSelection');
        this.courseTitle = document.getElementById('courseTitle');
        this.courseContent = document.getElementById('courseContent');
        this.outputModal = document.getElementById('outputModal');
        this.modalBody = document.getElementById('modalBody');
        this.homeButton = document.getElementById('homeButton');
        this.tocSidebar = document.getElementById('tocSidebar');
        this.tocContent = document.getElementById('tocContent');
        this.tocToggle = document.getElementById('tocToggle');
        this.tocFloatingButton = document.getElementById('tocFloatingButton');
    }
};

// ========================================
// UTILITAIRES
// ========================================
/**
 * Échappe les caractères HTML
 * @param {string} text - Le texte à échapper
 * @returns {string}
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Décode les entités HTML
 * @param {string} html - Le HTML à décoder
 * @returns {string}
 */
function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

/**
 * Affiche un message d'erreur
 * @param {string} message - Le message
 */
function showError(message) {
    alert(message);
}

/**
 * Log une erreur avec contexte
 * @param {string} context - Le contexte
 * @param {Error|string} error - L'erreur
 */
function logError(context, error) {
    const message = error instanceof Error ? error.message : error;
    console.error(`❌ [${context}]:`, message);
}

// ========================================
// INITIALISATION PYODIDE
// ========================================
/**
 * Charge Pyodide
 * @returns {Promise<void>}
 */
async function loadPyodideEnvironment() {
    console.log('🔄 Chargement de Pyodide...');
    try {
        AppState.pyodide = await loadPyodide({
            indexURL: CONFIG.PYODIDE_INDEX_URL
        });
        
        console.log('📦 Chargement de micropip...');
        await AppState.pyodide.loadPackage(['micropip']);
        
        await AppState.pyodide.runPythonAsync(`
            import sys
            import io
            sys.stdout = io.StringIO()
            sys.stderr = io.StringIO()
            print("Environnement Python initialisé !")
        `);
        
        console.log('✅ Pyodide chargé avec succès !');
    } catch (error) {
        logError('Pyodide', error);
        showError('Erreur lors du chargement de Pyodide. Vérifiez votre connexion internet.');
    }
}

/**
 * Charge Monaco Editor
 * @returns {Promise<void>}
 */
function loadMonaco() {
    return new Promise((resolve, reject) => {
        try {
            require.config({ paths: { vs: CONFIG.MONACO_BASE_URL } });
            require(['vs/editor/editor.main'], function () {
                AppState.monaco = window.monaco;
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });
}

// ========================================
// GESTION DES COURS
// ========================================
const courses = Object.freeze([
    // 1. Introduction
    {
        id: 'introduction-python',
        title: 'Introduction à Python',
        icon: '🐍',
        description: 'Découvrez Python : un langage simple et puissant pour apprendre la programmation.',
        file: 'introduction-python.md'
    },
    
    // 2. Bases : Variables
    {
        id: 'variables',
        title: 'Les Variables',
        icon: '📦',
        description: 'Apprenez à stocker et manipuler des données avec les variables et les types.',
        file: 'variables.md'
    },
    
    // 3. Structures : Conditions
    {
        id: 'conditions',
        title: 'Les Conditions',
        icon: '🔀',
        description: 'Prenez des décisions dans vos programmes avec if, elif et else.',
        file: 'conditions.md'
    },
    
    // 4. Collections : Listes
    {
        id: 'listes',
        title: 'Les Listes',
        icon: '📋',
        description: 'Manipulez des collections d\'éléments avec les listes Python.',
        file: 'listes.md'
    },
    
    // 5. Structures : Boucles
    {
        id: 'boucles',
        title: 'Les Boucles',
        icon: '🔁',
        description: 'Répétez des actions avec les boucles for et while.',
        file: 'boucles.md'
    },
    
    // 6. Boucles avancées
    {
        id: 'boucles-suite',
        title: 'Les Boucles (Suite)',
        icon: '🔄',
        description: 'Allez plus loin avec break, continue et les boucles imbriquées.',
        file: 'boucles-suite.md'
    },
    
    // 7. Fonctions
    {
        id: 'fonctions',
        title: 'Les Fonctions',
        icon: '⚡',
        description: 'Créez du code réutilisable et organisé avec les fonctions Python.',
        file: 'fonctions.md'
    },
    
    // 8. Mini-Projet : Devine le nombre
    {
        id: 'devine',
        title: 'Devine le Nombre (Mini-Projet)',
        icon: '🎲',
        description: 'Créez un jeu où l\'ordinateur choisit un nombre et le joueur doit deviner.',
        file: 'devine(mini-projet).md'
    },
    
    // 9. Graphisme : Turtle
    {
        id: 'turtle',
        title: 'Turtle Graphics',
        icon: '🐢',
        description: 'Apprenez à dessiner et créer des animations avec le module Turtle.',
        file: 'turtle.md'
    },
]);

/**
 * Charge la grille des cours avec des cartes
 */
function loadCourseGrid() {
    const fragment = document.createDocumentFragment();
    
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.dataset.courseId = course.id;
        
        card.innerHTML = `
            <span class="course-card-icon">${course.icon}</span>
            <h3 class="course-card-title">${escapeHtml(course.title)}</h3>
            <p class="course-card-description">${escapeHtml(course.description)}</p>
        `;
        
        fragment.appendChild(card);
    });
    
    DOMCache.courseGrid.innerHTML = '';
    DOMCache.courseGrid.appendChild(fragment);
    
    // Délégation d'événements
    DOMCache.courseGrid.addEventListener('click', handleCourseCardClick);
}

/**
 * Gestionnaire de clic sur les cartes de cours
 * @param {Event} event
 */
function handleCourseCardClick(event) {
    const courseCard = event.target.closest('.course-card');
    if (!courseCard) return;
    
    const courseId = courseCard.dataset.courseId;
    const course = courses.find(c => c.id === courseId);
    
    if (course) {
        loadCourse(course);
    }
}

/**
 * Nettoie les éditeurs Monaco
 */
function cleanupEditors() {
    AppState.editors.forEach(editorData => {
        if (editorData.editor) {
            editorData.editor.dispose();
        }
    });
    AppState.editors.clear();
    AppState.editorCounter = 0;
    AppState.collapsibleCounter = 0;
}

/**
 * Charge un cours
 * @param {Object} course - Le cours
 * @returns {Promise<void>}
 */
async function loadCourse(course) {
    try {
        cleanupEditors();
        
        const response = await fetch(`cours/${course.file}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const markdown = await response.text();
        
        // Mettre à jour le titre avec l'icône
        DOMCache.courseTitle.textContent = `${course.icon} ${course.title}`;
        
        // Cacher la page de sélection et afficher le contenu du cours
        DOMCache.courseSelection.style.display = 'none';
        DOMCache.courseContent.style.display = 'block';
        
        // Afficher le bouton d'accueil
        DOMCache.homeButton.style.display = 'block';
        
        renderMarkdown(markdown);
        
        // Générer la table des matières après le rendu
        setTimeout(() => {
            generateTableOfContents();
        }, 100);
        
        AppState.currentCourse = course;
        
    } catch (error) {
        logError('Chargement cours', error);
        showCourseError(course.file, error.message);
    }
}

/**
 * Affiche une erreur de chargement
 * @param {string} filename - Nom du fichier
 * @param {string} message - Message d'erreur
 */
function showCourseError(filename, message) {
    DOMCache.courseContent.innerHTML = `
        <div class="info-box attention">
            <strong>⚠️ Erreur</strong>
            <p>Impossible de charger le cours "${escapeHtml(filename)}".</p>
            <p>Détails : ${escapeHtml(message)}</p>
            <p>Vérifiez que le fichier existe dans le dossier "cours/" et que le serveur est démarré.</p>
        </div>
    `;
}

// ========================================
// RENDU MARKDOWN
// ========================================
/**
 * Rend le markdown
 * @param {string} markdown - Le contenu markdown
 */
function renderMarkdown(markdown) {
    try {
        // D'abord, extraire les collapsibles du markdown brut (les stocke dans AppState)
        markdown = processCollapsibleSections(markdown);
        
        // Ensuite, parser tout le markdown en HTML (sauf le contenu des collapsibles qui est stocké)
        let html = marked.parse(markdown);
        
        // Traiter les info boxes
        html = processInfoBoxes(html);
        
        // Traiter le code Python dans le HTML principal
        html = processPythonCode(html);
        
        // Finaliser les collapsibles (parse leur contenu et traite aussi le code Python)
        html = finalizeCollapsibleSections(html);
        
        // Nettoyer les balises <p> vides
        html = html.replace(/<p>\s*<\/p>/g, '');
        
        DOMCache.courseContent.innerHTML = html;
        
        initializeCodeEditors();
        initializeCollapsible();
        generateTableOfContents();
    } catch (error) {
        logError('Rendu markdown', error);
        showCourseError('markdown', error.message);
    }
}

/**
 * Traite les boîtes d'information
 * @param {string} html - Le HTML
 * @returns {string}
 */
function processInfoBoxes(html) {
    const infoBoxRegex = /:::(note|warning|attention|success|info|reminder)\s+(.*?)\s+([\s\S]*?):::/g;
    
    return html.replace(infoBoxRegex, (match, type, title, content) => {
        const icon = INFO_BOX_ICONS[type] || '📌';
        
        return `
            <div class="info-box ${type}">
                <strong>${icon} ${escapeHtml(title)}</strong>
                ${marked.parse(content)}
            </div>
        `;
    });
}

/**
 * Traite les sections déroulantes
 * @param {string} markdown - Le markdown brut
 * @returns {string}
 */
function processCollapsibleSections(markdown) {
    const collapsibleRegex = /:::collapsible\s+(.*?)\n([\s\S]*?)\n:::/g;
    const collapsibles = [];
    
    // Extraire et stocker les collapsibles
    const processedMarkdown = markdown.replace(collapsibleRegex, (match, title, content) => {
        AppState.collapsibleCounter++;
        const id = AppState.collapsibleCounter;
        
        // Stocker le collapsible avec son contenu
        collapsibles.push({ id, title: title.trim(), content: content.trim() });
        
        // Remplacer par un marqueur unique
        return `\n\n<!--COLLAPSIBLE_PLACEHOLDER_${id}-->\n\n`;
    });
    
    // Stocker les collapsibles dans l'état global pour y accéder plus tard
    AppState.pendingCollapsibles = collapsibles;
    
    return processedMarkdown;
}

/**
 * Traite les blocs de code Python
 * @param {string} html - Le HTML
 * @returns {string}
 */
function processPythonCode(html) {
    const codeBlockRegex = /<pre><code class="language-python">([\s\S]*?)<\/code><\/pre>/g;
    
    return html.replace(codeBlockRegex, (match, code) => {
        AppState.editorCounter++;
        const id = AppState.editorCounter;
        const decodedCode = decodeHtml(code);
        const editorId = `editor-${id}`;
        
        return `
            <div class="code-editor-container" data-editor-id="${editorId}">
                <div class="code-editor-header">
                    <div class="code-editor-title">
                        🐍 Python Editor
                    </div>
                    <div class="code-editor-actions">
                        <button class="btn btn-success btn-small" onclick="runPythonCode('${editorId}')">
                            ▶ Exécuter
                        </button>
                        <button class="btn btn-secondary btn-small" onclick="resetCode('${editorId}')">
                            🔄 Réinitialiser
                        </button>
                    </div>
                </div>
                <div class="code-editor" id="${editorId}"></div>
                <div class="code-output" id="output-${id}">
                    <span class="code-output-empty">Aucune sortie</span>
                </div>
            </div>
            <script type="application/json" data-original-code="${editorId}">
                ${JSON.stringify(decodedCode)}
            </script>
        `;
    });
}

/**
 * Finalise les sections collapsibles après le traitement du code Python
 * @param {string} html - Le HTML
 * @returns {string}
 */
function finalizeCollapsibleSections(html) {
    // Récupérer les collapsibles stockés
    const collapsibles = AppState.pendingCollapsibles || [];
    
    // Remplacer chaque placeholder par le collapsible complet
    collapsibles.forEach(({ id, title, content }) => {
        // Parser le contenu markdown du collapsible
        let parsedContent = marked.parse(content);
        
        // Traiter le code Python dans le contenu parsé
        parsedContent = processPythonCode(parsedContent);
        
        const collapsibleHtml = `
            <div class="collapsible-section" data-id="collapsible-${id}">
                <div class="collapsible-header">
                    <span>${escapeHtml(title)}</span>
                    <span class="collapsible-icon">▼</span>
                </div>
                <div class="collapsible-content">
                    <div class="collapsible-inner">
                        ${parsedContent}
                    </div>
                </div>
            </div>
        `;
        
        // Remplacer le placeholder
        const placeholderRegex = new RegExp(`<!--COLLAPSIBLE_PLACEHOLDER_${id}-->`, 'g');
        html = html.replace(placeholderRegex, collapsibleHtml);
    });
    
    // Réinitialiser les collapsibles en attente
    AppState.pendingCollapsibles = [];
    
    return html;
}

// ========================================
// ÉDITEURS DE CODE
// ========================================
/**
 * Initialise les éditeurs de code
 * @returns {Promise<void>}
 */
async function initializeCodeEditors() {
    if (!AppState.monaco) {
        await loadMonaco();
    }
    
    const editorContainers = document.querySelectorAll('.code-editor');
    
    const promises = Array.from(editorContainers).map(container => createMonacoEditor(container));
    await Promise.all(promises);
}

/**
 * Crée un éditeur Monaco
 * @param {HTMLElement} container - Le conteneur
 * @returns {Promise<void>}
 */
function createMonacoEditor(container) {
    return new Promise((resolve) => {
        const editorId = container.id;
        
        const originalCodeScript = document.querySelector(`script[data-original-code="${editorId}"]`);
        if (!originalCodeScript) {
            console.warn(`Code original non trouvé pour ${editorId}`);
            resolve();
            return;
        }
        
        const originalCode = JSON.parse(originalCodeScript.textContent);
        
        const editor = AppState.monaco.editor.create(container, {
            value: originalCode,
            language: 'python',
            theme: 'vs-dark',
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            scrollbar: {
                vertical: 'auto',
                horizontal: 'auto',
                useShadows: false,
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10
            }
        });
        
        AppState.editors.set(editorId, { editor, originalCode });
        resolve();
    });
}

/**
 * Réinitialise un éditeur
 * @param {string} editorId - L'ID de l'éditeur
 */
function resetCode(editorId) {
    const editorData = AppState.editors.get(editorId);
    if (!editorData) {
        console.warn(`Éditeur ${editorId} non trouvé`);
        return;
    }
    
    editorData.editor.setValue(editorData.originalCode);
    
    const outputId = `output-${editorId.replace('editor-', '')}`;
    const outputElement = document.getElementById(outputId);
    
    if (outputElement) {
        outputElement.innerHTML = '<span class="code-output-empty">Aucune sortie</span>';
    }
}

// ========================================
// EXÉCUTION DU CODE PYTHON
// ========================================
/**
 * Détecte et charge les packages nécessaires
 * @param {string} code - Le code Python
 * @returns {Promise<void>}
 */
async function detectAndLoadPackages(code) {
    const importRegex = /^(?:from\s+(\S+)|import\s+(\S+))/gm;
    const matches = code.matchAll(importRegex);
    const modules = new Set();
    
    for (const match of matches) {
        const moduleName = (match[1] || match[2]).split('.')[0];
        modules.add(moduleName);
    }
    
    const packagesToLoad = [];
    
    for (const module of modules) {
        const packageName = PACKAGE_MAP[module] || module;
        
        if (!AppState.loadedPackages.has(packageName) && !PYTHON_STDLIB_MODULES.has(module)) {
            packagesToLoad.push(packageName);
        }
    }
    
    if (packagesToLoad.length > 0) {
        console.log('📦 Chargement des packages:', packagesToLoad.join(', '));
        await Promise.all(packagesToLoad.map(pkg => loadPackage(pkg)));
    }
}

/**
 * Charge un package Python
 * @param {string} pkg - Le nom du package
 * @returns {Promise<void>}
 */
async function loadPackage(pkg) {
    try {
        await AppState.pyodide.loadPackage(pkg);
        AppState.loadedPackages.add(pkg);
        console.log(`✅ ${pkg} chargé`);
        
        if (pkg === 'matplotlib') {
            await configureMatplotlib();
        }
    } catch (error) {
        console.warn(`⚠️ Package ${pkg} non disponible, tentative via micropip...`);
        await loadPackageViaMicropip(pkg);
    }
}

/**
 * Configure matplotlib
 * @returns {Promise<void>}
 */
async function configureMatplotlib() {
    try {
        await AppState.pyodide.runPythonAsync(`
            import matplotlib
            matplotlib.use('Agg')
            import matplotlib.pyplot as plt
            plt.ioff()
            
            import warnings
            warnings.filterwarnings('ignore', message='.*non-GUI backend.*')
            warnings.filterwarnings('ignore', category=UserWarning, module='matplotlib')
        `);
        console.log('✅ Matplotlib configuré');
    } catch (error) {
        logError('Matplotlib config', error);
    }
}

/**
 * Charge un package via micropip
 * @param {string} pkg - Le nom du package
 * @returns {Promise<void>}
 */
async function loadPackageViaMicropip(pkg) {
    try {
        await AppState.pyodide.runPythonAsync(`
            import micropip
            await micropip.install('${pkg}')
        `);
        AppState.loadedPackages.add(pkg);
        console.log(`✅ ${pkg} installé via micropip`);
    } catch (error) {
        logError(`Package ${pkg}`, error);
    }
}

/**
 * Réinitialise l'environnement Python
 * @returns {Promise<void>}
 */
async function resetPythonEnvironment() {
    await AppState.pyodide.runPythonAsync(`
        import sys
        import io
        sys.stdout = io.StringIO()
        sys.stderr = io.StringIO()
        
        try:
            import matplotlib
            matplotlib.use('Agg')
            import matplotlib.pyplot as plt
            plt.ioff()
            
            import warnings
            warnings.filterwarnings('ignore', message='.*non-GUI backend.*')
        except:
            pass
    `);
}

/**
 * Vérifie s'il y a des figures matplotlib
 * @returns {Promise<boolean>}
 */
async function checkMatplotlibFigures() {
    if (!AppState.loadedPackages.has('matplotlib')) {
        return false;
    }
    
    try {
        return await AppState.pyodide.runPythonAsync(`
            import matplotlib.pyplot as plt
            bool(plt.get_fignums())
        `);
    } catch (e) {
        console.warn('Vérification matplotlib échouée:', e);
        return false;
    }
}

/**
 * Exécute le code Python
 * @param {string} editorId - L'ID de l'éditeur
 * @returns {Promise<void>}
 */
async function runPythonCode(editorId) {
    if (!AppState.pyodide) {
        showError('Pyodide est en cours de chargement. Veuillez patienter...');
        return;
    }
    
    const editorData = AppState.editors.get(editorId);
    if (!editorData) {
        console.warn(`Éditeur ${editorId} non trouvé`);
        return;
    }
    
    const code = editorData.editor.getValue();
    const outputId = `output-${editorId.replace('editor-', '')}`;
    const outputElement = document.getElementById(outputId);
    
    if (!outputElement) {
        console.warn(`Élément de sortie ${outputId} non trouvé`);
        return;
    }
    
    try {
        await detectAndLoadPackages(code);
        await resetPythonEnvironment();
        await AppState.pyodide.runPythonAsync(code);
        
        const stdout = await AppState.pyodide.runPythonAsync('sys.stdout.getvalue()');
        const stderr = await AppState.pyodide.runPythonAsync('sys.stderr.getvalue()');
        
        const hasFigures = await checkMatplotlibFigures();
        
        if (hasFigures) {
            console.log('🎨 Matplotlib détecté - Affichage dans la modal');
            await showMatplotlibFigures(stdout, stderr);
            outputElement.innerHTML = '<span>📊 Graphique affiché dans la fenêtre modale</span>';
            return;
        }
        
        displayTextOutput(outputElement, stdout, stderr);
        
    } catch (error) {
        logError('Python', error);
        displayError(outputElement, error.message);
    }
}

/**
 * Affiche la sortie texte
 * @param {HTMLElement} outputElement - L'élément de sortie
 * @param {string} stdout - Sortie standard
 * @param {string} stderr - Sortie d'erreur
 */
function displayTextOutput(outputElement, stdout, stderr) {
    let output = '';
    
    if (stdout) {
        output += escapeHtml(stdout);
    }
    
    if (stderr) {
        output += `<span style="color: #ef4444;">${escapeHtml(stderr)}</span>`;
    }
    
    if (!output) {
        output = '<span class="code-output-empty">Aucune sortie</span>';
    }
    
    outputElement.innerHTML = output;
}

/**
 * Affiche une erreur
 * @param {HTMLElement} outputElement - L'élément de sortie
 * @param {string} message - Le message d'erreur
 */
function displayError(outputElement, message) {
    outputElement.innerHTML = `<span style="color: #ef4444;">❌ Erreur: ${escapeHtml(message)}</span>`;
}

/**
 * Affiche les figures matplotlib
 * @param {string} stdout - Sortie standard
 * @param {string} stderr - Sortie d'erreur
 * @returns {Promise<void>}
 */
async function showMatplotlibFigures(stdout, stderr) {
    let textOutput = '';
    if (stdout && stdout.trim()) {
        textOutput += `<div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; font-family: 'Courier New', monospace; white-space: pre-wrap; color: #e2e8f0;">${escapeHtml(stdout)}</div>`;
    }
    if (stderr && stderr.trim()) {
        textOutput += `<div style="background: #7f1d1d; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; font-family: 'Courier New', monospace; white-space: pre-wrap; color: #fca5a5;">${escapeHtml(stderr)}</div>`;
    }
    
    DOMCache.modalBody.innerHTML = `
        <h2>📊 Résultat de l'Exécution</h2>
        ${textOutput}
        <div id="matplotlib-container"></div>
    `;
    
    try {
        const imageData = await generateMatplotlibImages();
        displayMatplotlibImages(imageData);
    } catch (error) {
        logError('Matplotlib', error);
        DOMCache.modalBody.innerHTML = `
            <h2>❌ Erreur</h2>
            <p style="color: #ef4444;">Impossible d'afficher le graphique: ${escapeHtml(error.message)}</p>
        `;
    }
    
    await cleanupMatplotlib();
    DOMCache.outputModal.classList.add('active');
}

/**
 * Génère les images matplotlib
 * @returns {Promise<Array<string>>}
 */
async function generateMatplotlibImages() {
    return await AppState.pyodide.runPythonAsync(`
        import matplotlib.pyplot as plt
        import io
        import base64
        
        images = []
        for fig_num in plt.get_fignums():
            fig = plt.figure(fig_num)
            buf = io.BytesIO()
            fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
            buf.seek(0)
            img_base64 = base64.b64encode(buf.read()).decode('utf-8')
            images.append(img_base64)
            buf.close()
        
        images
    `);
}

/**
 * Affiche les images matplotlib
 * @param {Array<string>} imageData - Les images en base64
 */
function displayMatplotlibImages(imageData) {
    const container = document.getElementById('matplotlib-container');
    
    if (!container) {
        console.error('Conteneur matplotlib non trouvé');
        return;
    }
    
    if (imageData && imageData.length > 0) {
        const fragment = document.createDocumentFragment();
        
        imageData.forEach((imgBase64) => {
            const img = document.createElement('img');
            img.src = `data:image/png;base64,${imgBase64}`;
            img.style.maxWidth = '100%';
            img.style.marginTop = '1rem';
            img.style.borderRadius = '8px';
            img.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            fragment.appendChild(img);
        });
        
        container.appendChild(fragment);
    } else {
        container.innerHTML = '<p style="color: #666;">Aucun graphique à afficher</p>';
    }
}

/**
 * Nettoie matplotlib
 * @returns {Promise<void>}
 */
async function cleanupMatplotlib() {
    try {
        await AppState.pyodide.runPythonAsync(`
            import matplotlib.pyplot as plt
            plt.close('all')
        `);
        
        const matplotlibElements = document.querySelectorAll('[id^="matplotlib_"]');
        matplotlibElements.forEach(el => {
            console.log('🗑️ Suppression widget matplotlib:', el.id);
            el.remove();
        });
    } catch (error) {
        console.warn('⚠️ Erreur nettoyage matplotlib (non critique):', error);
    }
}

// ========================================
// SECTIONS DÉROULANTES
// ========================================
/**
 * Initialise les sections déroulantes
 */
function initializeCollapsible() {
    DOMCache.courseContent.addEventListener('click', (event) => {
        const header = event.target.closest('.collapsible-header');
        if (header) {
            const section = header.parentElement;
            section.classList.toggle('active');
        }
    });
}

// ========================================
// MODAL
// ========================================
/**
 * Configure la modal
 */
function setupModal() {
    const closeBtn = DOMCache.outputModal.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        DOMCache.outputModal.classList.remove('active');
    });
    
    DOMCache.outputModal.addEventListener('click', (event) => {
        if (event.target === DOMCache.outputModal) {
            DOMCache.outputModal.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && DOMCache.outputModal.classList.contains('active')) {
            DOMCache.outputModal.classList.remove('active');
        }
    });
}

// ========================================
// SIDEBAR
// ========================================


/**
 * Retourne à la page d'accueil
 */
function goToHome() {
    // Nettoyer les éditeurs
    cleanupEditors();
    
    // Réinitialiser le titre
    DOMCache.courseTitle.textContent = '📚 Cours NSI - Notebook Interactif';
    
    // Cacher le bouton d'accueil
    DOMCache.homeButton.style.display = 'none';
    
    // Afficher la page de sélection et cacher le contenu du cours
    DOMCache.courseSelection.style.display = 'block';
    DOMCache.courseContent.style.display = 'none';
    
    // Cacher la table des matières
    hideTOC();
    
    // Vider le contenu du cours
    DOMCache.courseContent.innerHTML = '';
    
    // Réinitialiser le cours actuel
    AppState.currentCourse = null;
}

/**
 * Configure le bouton d'accueil
 */
function setupHomeButton() {
    const homeBtn = document.getElementById('homeButton');
    
    if (homeBtn) {
        homeBtn.addEventListener('click', goToHome);
    }
}

// ========================================
// TABLE DES MATIÈRES
// ========================================
/**
 * Génère la table des matières à partir du contenu du cours
 */
function generateTableOfContents() {
    if (!DOMCache.courseContent || !DOMCache.tocContent) return;
    
    // Récupérer tous les titres h2, h3, h4 du contenu
    const headings = DOMCache.courseContent.querySelectorAll('h2, h3, h4');
    
    if (headings.length === 0) {
        // Pas de titres, cacher la TOC
        hideTOC();
        return;
    }
    
    // Créer les liens de la table des matières
    const fragment = document.createDocumentFragment();
    
    headings.forEach((heading, index) => {
        // Ajouter un ID au titre s'il n'en a pas
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        
        const level = heading.tagName.toLowerCase();
        const text = heading.textContent;
        
        const link = document.createElement('a');
        link.className = `toc-item toc-${level}`;
        link.textContent = text;
        link.href = `#${heading.id}`;
        link.dataset.target = heading.id;
        
        // Gérer le clic
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToHeading(heading.id);
            
            // Sur mobile, fermer la TOC après le clic
            if (window.innerWidth <= 1200) {
                DOMCache.tocSidebar.classList.remove('active');
            }
        });
        
        fragment.appendChild(link);
    });
    
    DOMCache.tocContent.innerHTML = '';
    DOMCache.tocContent.appendChild(fragment);
    
    // Afficher la TOC
    showTOC();
    
    // Détecter la section active lors du scroll
    observeActiveSection();
}

/**
 * Fait défiler jusqu'à un titre spécifique
 * @param {string} headingId - L'ID du titre
 */
function scrollToHeading(headingId) {
    const heading = document.getElementById(headingId);
    if (!heading) {
        console.warn(`Heading with id "${headingId}" not found`);
        return;
    }
    
    // Le container avec le scroll
    const container = document.querySelector('.content-container');
    
    if (container) {
        // Calculer la position en tenant compte de la toolbar
        const toolbarHeight = 73;
        const containerRect = container.getBoundingClientRect();
        const headingRect = heading.getBoundingClientRect();
        
        // Position relative au container
        const scrollTop = container.scrollTop;
        const relativeTop = headingRect.top - containerRect.top;
        const targetScroll = scrollTop + relativeTop - 20; // 20px de marge
        
        container.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    } else {
        // Fallback vers window scroll
        const toolbarHeight = 73;
        const elementPosition = heading.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - toolbarHeight - 20;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    
    // Mettre à jour le lien actif
    updateActiveTOCItem(headingId);
}

/**
 * Met à jour le lien actif dans la TOC
 * @param {string} headingId - L'ID du titre actif
 */
function updateActiveTOCItem(headingId) {
    // Retirer la classe active de tous les liens
    const allLinks = DOMCache.tocContent.querySelectorAll('.toc-item');
    allLinks.forEach(link => link.classList.remove('active'));
    
    // Ajouter la classe active au lien correspondant
    const activeLink = DOMCache.tocContent.querySelector(`[data-target="${headingId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Observe les sections visibles pour mettre à jour la TOC
 */
function observeActiveSection() {
    const headings = DOMCache.courseContent.querySelectorAll('h2, h3, h4');
    
    if (!headings.length) return;
    
    // Le container avec le scroll
    const container = document.querySelector('.content-container');
    
    // Observer les changements de visibilité
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateActiveTOCItem(entry.target.id);
            }
        });
    }, {
        root: container, // Observer dans le container
        rootMargin: '-100px 0px -66%',
        threshold: 0
    });
    
    headings.forEach(heading => observer.observe(heading));
}

/**
 * Affiche la table des matières
 */
function showTOC() {
    if (DOMCache.tocSidebar) {
        DOMCache.tocSidebar.style.display = 'block';
        
        // Sur desktop, afficher directement
        if (window.innerWidth > 1200) {
            DOMCache.tocSidebar.classList.remove('hidden');
            // Afficher aussi le bouton toggle
            if (DOMCache.tocToggle) {
                DOMCache.tocToggle.style.display = 'flex';
                DOMCache.tocToggle.classList.remove('toc-closed');
            }
        }
    }
    
    if (DOMCache.tocFloatingButton && window.innerWidth <= 1200) {
        DOMCache.tocFloatingButton.style.display = 'flex';
    }
}

/**
 * Cache la table des matières
 */
function hideTOC() {
    if (DOMCache.tocSidebar) {
        DOMCache.tocSidebar.style.display = 'none';
        DOMCache.tocSidebar.classList.remove('active');
    }
    
    if (DOMCache.tocFloatingButton) {
        DOMCache.tocFloatingButton.style.display = 'none';
    }
    
    // Cacher aussi le bouton toggle
    if (DOMCache.tocToggle) {
        DOMCache.tocToggle.style.display = 'none';
        DOMCache.tocToggle.classList.remove('toc-closed');
    }
}

/**
 * Configure les contrôles de la table des matières
 */
function setupTOCControls() {
    // Bouton toggle indépendant (Desktop et Mobile)
    if (DOMCache.tocToggle) {
        DOMCache.tocToggle.addEventListener('click', () => {
            // Sur desktop, toggle hidden pour replier/déplier
            if (window.innerWidth > 1200) {
                DOMCache.tocSidebar.classList.toggle('hidden');
                // Toggle la classe sur le bouton lui-même pour la rotation de la flèche
                DOMCache.tocToggle.classList.toggle('toc-closed');
            } else {
                // Sur mobile, toggle active
                DOMCache.tocSidebar.classList.toggle('active');
            }
        });
    }
    
    // Bouton flottant sur mobile
    if (DOMCache.tocFloatingButton) {
        DOMCache.tocFloatingButton.addEventListener('click', () => {
            DOMCache.tocSidebar.classList.toggle('active');
        });
    }
    
    // Fermer la TOC en cliquant en dehors sur mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1200 && 
            DOMCache.tocSidebar.classList.contains('active') &&
            !DOMCache.tocSidebar.contains(e.target) &&
            !DOMCache.tocFloatingButton.contains(e.target)) {
            DOMCache.tocSidebar.classList.remove('active');
        }
    });
    
    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
            DOMCache.tocSidebar.classList.remove('active');
            DOMCache.tocSidebar.classList.remove('hidden');
            if (DOMCache.tocFloatingButton) {
                DOMCache.tocFloatingButton.style.display = 'none';
            }
        } else {
            DOMCache.tocSidebar.classList.add('hidden');
            if (DOMCache.tocSidebar.style.display === 'block') {
                DOMCache.tocFloatingButton.style.display = 'flex';
            }
        }
    });
}

// ========================================
// INITIALISATION
// ========================================
/**
 * Initialise l'application
 * @returns {Promise<void>}
 */
async function initializeApp() {
    console.log('🚀 Initialisation de l\'application...');
    
    DOMCache.init();
    loadCourseGrid();
    setupModal();
    setupHomeButton();
    setupTOCControls();
    
    loadPyodideEnvironment().catch(error => {
        logError('Init Pyodide', error);
    });
    
    console.log('✅ Application prête !');
}

// Démarrer l'application
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
