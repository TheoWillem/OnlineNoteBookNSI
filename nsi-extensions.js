/*
 * Extensions pour OnlineNoteBookNSI :
 * 1. Catalogue regroupé par niveau (à partir de config.json).
 * 2. Réponses rédigées éditables dans les cours Markdown (```reponse:<id>).
 * 3. Sauvegarde locale + import/export des réponses, compatibles avec l'ancien format JSON.
 *
 * Ce module s'ajoute APRÈS app.js dans index.html, sans remplacer le moteur Python.
 */
(function installNsiExtensions() {
    'use strict';

    if (typeof loadCourseGrid !== 'function' ||
        typeof renderMarkdown !== 'function' ||
        typeof processPythonCode !== 'function' ||
        typeof setupProgressControls !== 'function') {
        console.error('Extensions NSI : app.js doit être chargé avant nsi-extensions.js.');
        return;
    }

    function escapeAttribute(value) {
        return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    // --- Classement des cours par niveau ---
    function levelRank(level) {
        const value = level.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (value.includes('seconde') || value.includes('snt')) return 0;
        if (value.includes('premiere')) return 1;
        if (value.includes('terminale')) return 2;
        if (value.includes('hors')) return 3;
        return 4;
    }

    window.loadCourseGrid = function loadGroupedCourseGrid() {
        const parent = document.getElementById('courseGrid');
        if (!parent) return;
        const groups = new Map();
        // courses est le catalogue déjà chargé depuis config.json par app.js.
        courses.forEach(course => {
            const level = String(course.level || '').trim() || 'Autres cours';
            if (!groups.has(level)) groups.set(level, []);
            groups.get(level).push(course);
        });

        const fragment = document.createDocumentFragment();
        const sorted = Array.from(groups.entries()).sort((a, b) => levelRank(a[0]) - levelRank(b[0]));
        sorted.forEach(([level, items]) => {
            const section = document.createElement('section');
            section.className = 'nsi-level-section';
            const heading = document.createElement('h2');
            heading.className = 'nsi-level-heading';
            heading.textContent = level;
            const count = document.createElement('span');
            count.className = 'nsi-level-count';
            count.textContent = `${items.length} TD`;
            heading.appendChild(count);
            const grid = document.createElement('div');
            grid.className = 'nsi-level-grid';
            items.forEach(course => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.dataset.courseId = course.id;
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-label', course.title);
                card.innerHTML = `
                    <span class="course-card-icon">${escapeAttribute(course.icon)}</span>
                    <h3 class="course-card-title">${escapeAttribute(course.title)}</h3>
                    <p class="course-card-description">${escapeAttribute(course.description)}</p>
                `;
                grid.appendChild(card);
            });
            section.append(heading, grid);
            fragment.appendChild(section);
        });
        parent.classList.add('nsi-grouped-catalog');
        parent.replaceChildren(fragment);
        if (!parent.dataset.nsiCardEvents) {
            parent.addEventListener('click', handleCourseCardClick);
            parent.addEventListener('keydown', event => {
                if ((event.key === 'Enter' || event.key === ' ') &&
                    event.target.classList.contains('course-card')) {
                    event.preventDefault();
                    event.target.click();
                }
            });
            parent.dataset.nsiCardEvents = 'true';
        }
    };

    // Si l'ancien installateur a été exécuté, il convertit les blocs avant Marked.
    // On désactive uniquement cette conversion ancienne pour utiliser un seul
    // composant de réponse, éditable et compatible avec l'import/export ci-dessous.
    if (typeof window.processWrittenAnswers === 'function') {
        window.processWrittenAnswers = markdown => markdown;
    }

    // --- Conversion des blocs Markdown de réponse ---
    // Même forme que les blocs Python dans le HTML produit par Marked :
    // <pre><code class="language-reponse:question-1">...</code></pre>
    const originalProcessPythonCode = window.processPythonCode;
    const writtenAnswerFence = /<pre(?:\s[^>]*)?><code\s+class="language-(?:reponse|answer)(?::([A-Za-z0-9_-]+))?"[^>]*>([\s\S]*?)<\/code><\/pre>/gi;

    window.processPythonCode = function processCodeAndAnswers(html) {
        html = html.replace(writtenAnswerFence, (_match, explicitId, escapedHint) => {
            const id = explicitId || `auto-${++AppState.__nsiAnswerCount}`;
            const hint = decodeHtml(escapedHint).trim() || 'Rédige ta réponse ici…';
            return `<section class="nsi-answer-box" data-nsi-answer-id="${escapeAttribute(id)}">
                <label class="nsi-answer-label" for="nsi-answer-${escapeAttribute(id)}">✍️ Réponse rédigée</label>
                <textarea class="nsi-answer-input" id="nsi-answer-${escapeAttribute(id)}"
                    data-nsi-answer-id="${escapeAttribute(id)}" rows="5"
                    placeholder="${escapeAttribute(hint)}"></textarea>
                <div class="nsi-answer-toolbar">
                    <span class="nsi-answer-status" aria-live="polite">Sauvegarde locale</span>
                    <button class="nsi-answer-clear btn btn-secondary btn-small" type="button">↺ Effacer</button>
                </div>
            </section>`;
        });
        return originalProcessPythonCode(html);
    };

    function answerStorageKey(id) {
        return `nsi-progress:v1:${AppState.currentCourse.id}:reponse:${id}`;
    }
    function initWrittenAnswers() {
        const container = document.getElementById('courseContent');
        if (!container || !AppState.currentCourse) return;
        const ids = new Set();
        container.querySelectorAll('.nsi-answer-input').forEach(input => {
            const id = input.dataset.nsiAnswerId;
            const box = input.closest('.nsi-answer-box');
            const status = box.querySelector('.nsi-answer-status');
            if (ids.has(id)) {
                status.textContent = '⚠ Identifiant de réponse utilisé plusieurs fois';
                return;
            }
            ids.add(id);
            let stored = null;
            try { stored = localStorage.getItem(answerStorageKey(id)); }
            catch (error) { status.textContent = '⚠ Stockage local indisponible'; }
            if (stored !== null) {
                input.value = stored;
                status.textContent = '✓ Réponse retrouvée';
            }
            input.addEventListener('input', () => {
                try {
                    if (input.value) localStorage.setItem(answerStorageKey(id), input.value);
                    else localStorage.removeItem(answerStorageKey(id));
                    status.textContent = input.value ? '✓ Sauvegardé ici' : 'Réponse vide';
                } catch (error) { status.textContent = '⚠ Sauvegarde impossible'; }
            });
            box.querySelector('.nsi-answer-clear').addEventListener('click', () => {
                if (!input.value || window.confirm('Effacer cette réponse ?')) {
                    input.value = '';
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                }
            });
        });
    }

    const originalRenderMarkdown = window.renderMarkdown;
    window.renderMarkdown = function renderMarkdownWithAnswers(markdown) {
        AppState.__nsiAnswerCount = 0;
        const result = originalRenderMarkdown(markdown);
        initWrittenAnswers();
        return result;
    };

    // --- Export et import : extension sans modifier les cellules Python ---
    const originalSetupProgressControls = window.setupProgressControls;
    window.setupProgressControls = function setupProgressWithAnswers() {
        originalSetupProgressControls();
        const exportButton = document.getElementById('exportProgressButton');
        const fileInput = document.getElementById('importProgressFile');
        if (exportButton && !exportButton.dataset.nsiExtraListener) {
            exportButton.addEventListener('click', event => {
                if (!AppState.currentCourse) return;
                // Intercepte le clic avant le gestionnaire d'origine.
                event.stopImmediatePropagation();
                const codes = {};
                AppState.editors.forEach(data => {
                    if (!data.readOnly) codes[data.key] = data.editor.getValue();
                });
                const answers = {};
                document.querySelectorAll('#courseContent .nsi-answer-input').forEach(input => {
                    answers[input.dataset.nsiAnswerId] = input.value;
                });
                const progress = {
                    format: 'nsi-progress-v1', course: AppState.currentCourse.id, codes, answers
                };
                const url = URL.createObjectURL(new Blob([JSON.stringify(progress, null, 2)], {
                    type: 'application/json'
                }));
                const link = document.createElement('a');
                link.href = url;
                link.download = `nsi-${AppState.currentCourse.id}-travail.json`;
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.setTimeout(() => URL.revokeObjectURL(url), 1000);
            }, true);
            exportButton.dataset.nsiExtraListener = 'true';
        }
        if (fileInput && !fileInput.dataset.nsiExtraListener) {
            fileInput.addEventListener('change', async event => {
                // Empêche le double import par l'ancien code.
                event.stopImmediatePropagation();
                const file = fileInput.files && fileInput.files[0];
                if (!file || !AppState.currentCourse) return;
                try {
                    const progress = JSON.parse(await file.text());
                    if (progress.format !== 'nsi-progress-v1' ||
                        progress.course !== AppState.currentCourse.id ||
                        !progress.codes || typeof progress.codes !== 'object' ||
                        Array.isArray(progress.codes)) {
                        throw new Error('Fichier JSON incompatible avec ce TD.');
                    }
                    let codeCount = 0;
                    AppState.editors.forEach(data => {
                        if (!data.readOnly && typeof progress.codes[data.key] === 'string') {
                            data.editor.setValue(progress.codes[data.key]);
                            codeCount++;
                        }
                    });
                    let answerCount = 0;
                    const answers = progress.answers;
                    if (answers && typeof answers === 'object' && !Array.isArray(answers)) {
                        document.querySelectorAll('#courseContent .nsi-answer-input').forEach(input => {
                            if (typeof answers[input.dataset.nsiAnswerId] !== 'string') return;
                            input.value = answers[input.dataset.nsiAnswerId];
                            input.dispatchEvent(new Event('input', { bubbles: true }));
                            answerCount++;
                        });
                    }
                    window.alert(`${codeCount} cellule(s) Python et ${answerCount} réponse(s) rédigée(s) importée(s).`);
                } catch (error) {
                    window.alert(`Import impossible : ${error.message}`);
                } finally { fileInput.value = ''; }
            }, true);
            fileInput.dataset.nsiExtraListener = 'true';
        }
    };

    console.info('Extensions NSI activées : niveaux, réponses rédigées, sauvegarde et import/export.');
})();
