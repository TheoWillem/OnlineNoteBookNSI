// ========================================
// INITIALISATION
// ========================================
let pyodide = null;
let monaco = null;
let editors = new Map();

// Charger Pyodide au démarrage
async function loadPyodideEnvironment() {
    console.log('🔄 Chargement de Pyodide...');
    try {
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
        });
        
        // Charger les packages de base
        console.log('📦 Chargement de micropip...');
        await pyodide.loadPackage(['micropip']);
        
        // Configuration de base pour l'environnement Python
        await pyodide.runPythonAsync(`
            import sys
            import io
            
            # Configurer les flux de sortie
            sys.stdout = io.StringIO()
            sys.stderr = io.StringIO()
            
            print("Environnement Python initialisé !")
        `);
        
        console.log('✅ Pyodide chargé avec succès !');
        console.log('💡 Les modules seront chargés automatiquement lors de leur premier import');
        
    } catch (error) {
        console.error('❌ Erreur lors du chargement de Pyodide:', error);
        alert('Erreur lors du chargement de Pyodide. Vérifiez votre connexion internet.');
    }
}

// Charger Monaco Editor
function loadMonaco() {
    return new Promise((resolve) => {
        require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } });
        require(['vs/editor/editor.main'], function () {
            monaco = window.monaco;
            resolve();
        });
    });
}

// ========================================
// GESTION DES COURS
// ========================================
const courses = [
    { id: 'introduction', title: '📌 Introduction à Python', file: 'introduction.md' },
    { id: 'variables', title: '🔢 Variables et Types', file: 'variables.md' },
    { id: 'structures', title: '🔄 Structures de Contrôle', file: 'structures.md' },
    { id: 'fonctions', title: '⚡ Fonctions', file: 'fonctions.md' },
    { id: 'matplotlib', title: '📊 Matplotlib & Visualisation', file: 'matplotlib.md' },
    { id: 'turtle', title: '🐢 Turtle Graphics', file: 'turtle-graphics.md' },
    { id: 'test-matplotlib', title: '🧪 Test Matplotlib', file: 'test-matplotlib.md' },
    { id: 'projets', title: '🎮 Projets Pratiques', file: 'projets.md' },
    { id: 'test-modules', title: '🔧 Test des Modules', file: 'test-modules.md' },
];

function loadCourseList() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    
    courses.forEach(course => {
        const item = document.createElement('div');
        item.className = 'course-item';
        item.textContent = course.title;
        item.onclick = (event) => loadCourse(course, event);
        courseList.appendChild(item);
    });
}

async function loadCourse(course, event) {
    try {
        const response = await fetch(`cours/${course.file}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const markdown = await response.text();
        
        // Mettre à jour le titre
        document.getElementById('courseTitle').textContent = course.title;
        
        // Convertir et afficher le contenu
        renderMarkdown(markdown);
        
        // Mettre à jour l'état actif
        document.querySelectorAll('.course-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (event && event.target) {
            event.target.classList.add('active');
        }
        
    } catch (error) {
        console.error('Erreur lors du chargement du cours:', error);
        document.getElementById('courseContent').innerHTML = `
            <div class="info-box attention">
                <strong>⚠️ Erreur</strong>
                <p>Impossible de charger le cours "${course.file}".</p>
                <p>Détails : ${error.message}</p>
                <p>Vérifiez que le fichier existe dans le dossier "cours/" et que le serveur est démarré.</p>
            </div>
        `;
    }
}

// ========================================
// RENDU MARKDOWN PERSONNALISÉ
// ========================================
function renderMarkdown(markdown) {
    // Parser le markdown avec des extensions personnalisées
    let html = marked.parse(markdown);
    
    // Traiter les boîtes d'information
    html = processInfoBoxes(html);
    
    // Traiter les sections déroulantes
    html = processCollapsibleSections(html);
    
    // Traiter les blocs de code Python
    html = processPythonCode(html);
    
    // Afficher le résultat
    document.getElementById('courseContent').innerHTML = html;
    
    // Initialiser les éditeurs de code
    initializeCodeEditors();
    
    // Initialiser les sections déroulantes
    initializeCollapsible();
}

function processInfoBoxes(html) {
    // Syntaxe: :::note, :::warning, :::attention, :::success, :::info, :::reminder
    const infoBoxRegex = /:::(note|warning|attention|success|info|reminder)\s+(.*?)\s+([\s\S]*?):::/g;
    
    return html.replace(infoBoxRegex, (match, type, title, content) => {
        const icons = {
            note: '📖',
            warning: '⚠️',
            attention: '🚨',
            success: '✅',
            info: 'ℹ️',
            reminder: '💡'
        };
        
        return `
            <div class="info-box ${type}">
                <strong>${icons[type]} ${title}</strong>
                ${marked.parse(content)}
            </div>
        `;
    });
}

function processCollapsibleSections(html) {
    // Syntaxe: :::collapsible Titre
    const collapsibleRegex = /:::collapsible\s+(.*?)\s+([\s\S]*?):::/g;
    let counter = 0;
    
    return html.replace(collapsibleRegex, (match, title, content) => {
        counter++;
        return `
            <div class="collapsible-section" data-id="collapsible-${counter}">
                <div class="collapsible-header">
                    <span>${title}</span>
                    <span class="collapsible-icon">▼</span>
                </div>
                <div class="collapsible-content">
                    <div class="collapsible-inner">
                        ${marked.parse(content)}
                    </div>
                </div>
            </div>
        `;
    });
}

function processPythonCode(html) {
    // Remplacer les blocs de code Python par des éditeurs interactifs
    const codeBlockRegex = /<pre><code class="language-python">([\s\S]*?)<\/code><\/pre>/g;
    let counter = 0;
    
    return html.replace(codeBlockRegex, (match, code) => {
        counter++;
        const decodedCode = decodeHtml(code);
        
        return `
            <div class="code-editor-container" data-editor-id="editor-${counter}">
                <div class="code-editor-header">
                    <div class="code-editor-title">
                        🐍 Python Editor
                    </div>
                    <div class="code-editor-actions">
                        <button class="btn btn-success btn-small" onclick="runPythonCode('editor-${counter}')">
                            ▶ Exécuter
                        </button>
                        <button class="btn btn-secondary btn-small" onclick="resetCode('editor-${counter}')">
                            🔄 Réinitialiser
                        </button>
                    </div>
                </div>
                <div class="code-editor" id="editor-${counter}"></div>
                <div class="code-output hidden" id="output-${counter}">
                    <span class="code-output-empty">Aucune sortie</span>
                </div>
            </div>
            <script type="application/json" data-original-code="editor-${counter}">
                ${JSON.stringify(decodedCode)}
            </script>
        `;
    });
}

function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

// ========================================
// ÉDITEURS DE CODE
// ========================================
async function initializeCodeEditors() {
    if (!monaco) {
        await loadMonaco();
    }
    
    const editorContainers = document.querySelectorAll('.code-editor');
    
    editorContainers.forEach(container => {
        const editorId = container.id;
        
        // Récupérer le code original
        const originalCodeScript = document.querySelector(`script[data-original-code="${editorId}"]`);
        const originalCode = JSON.parse(originalCodeScript.textContent);
        
        // Créer l'éditeur Monaco
        const editor = monaco.editor.create(container, {
            value: originalCode,
            language: 'python',
            theme: 'vs-dark',
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
        });
        
        editors.set(editorId, { editor, originalCode });
    });
}

function resetCode(editorId) {
    const editorData = editors.get(editorId);
    if (editorData) {
        editorData.editor.setValue(editorData.originalCode);
        
        // Effacer la sortie
        const outputElement = document.getElementById(`output-${editorId.replace('editor-', '')}`);
        outputElement.innerHTML = '<span class="code-output-empty">Aucune sortie</span>';
        outputElement.classList.add('hidden');
    }
}

// ========================================
// EXÉCUTION DU CODE PYTHON
// ========================================

// Cache pour les packages déjà chargés
const loadedPackages = new Set(['micropip']);

async function detectAndLoadPackages(code) {
    // Détecter les imports dans le code
    const importRegex = /^(?:from\s+(\S+)|import\s+(\S+))/gm;
    const matches = [...code.matchAll(importRegex)];
    const modules = new Set();
    
    matches.forEach(match => {
        const moduleName = (match[1] || match[2]).split('.')[0];
        modules.add(moduleName);
    });
    
    // Mapper certains modules vers leurs packages Pyodide
    const packageMap = {
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
    };
    
    const packagesToLoad = [];
    
    for (const module of modules) {
        const packageName = packageMap[module] || module;
        if (!loadedPackages.has(packageName) && 
            !['sys', 'os', 'io', 'math', 'random', 'time', 'datetime', 
             'json', 'collections', 're', 'itertools', 'functools'].includes(module)) {
            packagesToLoad.push(packageName);
        }
    }
    
    if (packagesToLoad.length > 0) {
        console.log('📦 Chargement des packages:', packagesToLoad.join(', '));
        
        for (const pkg of packagesToLoad) {
            try {
                await pyodide.loadPackage(pkg);
                loadedPackages.add(pkg);
                console.log(`✅ ${pkg} chargé`);
            } catch (error) {
                console.warn(`⚠️ Package ${pkg} non disponible dans Pyodide, tentative via micropip...`);
                try {
                    await pyodide.runPythonAsync(`
                        import micropip
                        await micropip.install('${pkg}')
                    `);
                    loadedPackages.add(pkg);
                    console.log(`✅ ${pkg} installé via micropip`);
                } catch (micropipError) {
                    console.error(`❌ Impossible de charger ${pkg}:`, micropipError);
                }
            }
        }
    }
}

async function runPythonCode(editorId) {
    if (!pyodide) {
        alert('Pyodide est en cours de chargement. Veuillez patienter...');
        return;
    }
    
    const editorData = editors.get(editorId);
    if (!editorData) return;
    
    const code = editorData.editor.getValue();
    const outputElement = document.getElementById(`output-${editorId.replace('editor-', '')}`);
    
    // Afficher la sortie
    outputElement.classList.remove('hidden');
    outputElement.innerHTML = '<div class="loading"></div> Exécution en cours...';
    
    try {
        // Détecter et charger les packages nécessaires
        await detectAndLoadPackages(code);
        
        // Réinitialiser les flux de sortie
        await pyodide.runPythonAsync(`
            import sys
            import io
            sys.stdout = io.StringIO()
            sys.stderr = io.StringIO()
        `);
        
        // Exécuter le code
        await pyodide.runPythonAsync(code);
        
        // Récupérer la sortie
        const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
        const stderr = await pyodide.runPythonAsync('sys.stderr.getvalue()');
        
        let output = '';
        
        if (stdout) {
            output += stdout;
        }
        
        if (stderr) {
            output += `<span style="color: #ef4444;">${stderr}</span>`;
        }
        
        // Vérifier s'il y a des figures matplotlib (si matplotlib est chargé)
        if (loadedPackages.has('matplotlib')) {
            try {
                const hasFigures = await pyodide.runPythonAsync(`
                    import matplotlib.pyplot as plt
                    bool(plt.get_fignums())
                `);
                
                if (hasFigures) {
                    await showMatplotlibFigures();
                    output += '\n<span style="color: #10b981;">✓ Graphique affiché dans une fenêtre séparée</span>';
                }
            } catch (e) {
                console.warn('Matplotlib check failed:', e);
            }
        }
        
        if (!output) {
            output = '<span class="code-output-empty">Code exécuté avec succès (aucune sortie)</span>';
        }
        
        outputElement.innerHTML = output;
        
    } catch (error) {
        console.error('Erreur Python:', error);
        outputElement.innerHTML = `<span style="color: #ef4444;">❌ Erreur: ${error.message}</span>`;
    }
}

async function showMatplotlibFigures() {
    const modal = document.getElementById('outputModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = '<h2>📊 Graphique Matplotlib</h2><div id="matplotlib-container"></div>';
    
    try {
        // Convertir les figures matplotlib en base64
        const imageData = await pyodide.runPythonAsync(`
            import matplotlib.pyplot as plt
            import io
            import base64
            
            images = []
            for fig_num in plt.get_fignums():
                fig = plt.figure(fig_num)
                
                # Sauvegarder en mémoire
                buf = io.BytesIO()
                fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
                buf.seek(0)
                
                # Convertir en base64
                img_base64 = base64.b64encode(buf.read()).decode('utf-8')
                images.append(img_base64)
                
                buf.close()
            
            images
        `);
        
        // Afficher les images
        const container = document.getElementById('matplotlib-container');
        
        if (imageData && imageData.length > 0) {
            imageData.forEach((imgBase64, index) => {
                const img = document.createElement('img');
                img.src = `data:image/png;base64,${imgBase64}`;
                img.style.maxWidth = '100%';
                img.style.marginTop = '1rem';
                img.style.borderRadius = '8px';
                img.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                container.appendChild(img);
            });
        } else {
            container.innerHTML = '<p style="color: #666;">Aucun graphique à afficher</p>';
        }
        
    } catch (error) {
        console.error('Erreur matplotlib:', error);
        modalBody.innerHTML = `
            <h2>❌ Erreur</h2>
            <p style="color: #ef4444;">Impossible d'afficher le graphique: ${error.message}</p>
        `;
    }
    
    modal.classList.add('active');
}

// ========================================
// SECTIONS DÉROULANTES
// ========================================
function initializeCollapsible() {
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    
    collapsibleHeaders.forEach(header => {
        header.onclick = function() {
            const section = this.parentElement;
            section.classList.toggle('active');
        };
    });
}

// ========================================
// MODAL
// ========================================
function setupModal() {
    const modal = document.getElementById('outputModal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.classList.remove('active');
    };
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    };
}

// ========================================
// SIDEBAR TOGGLE
// ========================================
function setupSidebar() {
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    
    toggleBtn.onclick = function() {
        sidebar.classList.toggle('active');
    };
}

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================
window.addEventListener('DOMContentLoaded', async () => {
    console.log('Initialisation de l\'application...');
    
    // Charger la liste des cours
    loadCourseList();
    
    // Configurer les éléments UI
    setupModal();
    setupSidebar();
    
    // Charger Pyodide en arrière-plan
    loadPyodideEnvironment();
    
    console.log('Application prête !');
});
