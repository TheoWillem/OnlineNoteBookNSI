// Smoke tests sans dépendances : parser pédagogique, configuration, sauvegarde.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const store = new Map();
const config = JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
const sandbox = {
    console,
    Map,
    Set,
    Object,
    alert: () => {},
    document: {
        readyState: 'loading',
        addEventListener: () => {},
        createElement: () => ({
            set innerHTML(value) { this.value = value; },
            get innerHTML() { return this.value || ''; },
            set textContent(value) { this.value = value; },
            get textContent() { return this.value || ''; }
        }),
        getElementById: () => null
    },
    fetch: async () => ({ ok: true, json: async () => config }),
    localStorage: {
        getItem: (key) => store.has(key) ? store.get(key) : null,
        setItem: (key, value) => store.set(key, value),
        removeItem: (key) => store.delete(key)
    },
    marked: { parse: (value) => value }
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'app.js'), 'utf8'), sandbox);
const evaluate = (js) => vm.runInContext(js, sandbox);

(async () => {
    await evaluate('loadCourseConfig()');
    assert.equal(evaluate('courses.length'), 11);
    assert.equal(evaluate('courses.find(c => c.id === "variables").file'), 'variables.md');
    evaluate('AppState.currentCourse = { id: "variables" }');

    evaluate('AppState.collapsibleCounter = 0');
    const md = 'Titre\n\n:::note À retenir\nUn texte en **gras**.\n:::\n\n' +
        ':::collapsible 💡 Indice\nLe contenu est masqué.\n:::\n';
    const result = sandbox.processCollapsibleSections(md);
    assert.match(result, /COLLAPSIBLE_PLACEHOLDER_1/);
    assert.match(result, /COLLAPSIBLE_PLACEHOLDER_2/);
    assert.equal(evaluate('AppState.pendingCollapsibles.length'), 2);
    assert.equal(evaluate('AppState.pendingCollapsibles[0].type'), 'note');
    const htmlBlocks = sandbox.finalizeCollapsibleSections(result);
    assert.match(htmlBlocks, /info-box note/);
    assert.match(htmlBlocks, /collapsible-header/);

    const html = sandbox.processPythonCode('<pre><code class="language-python:ex1">x = 0\n</code></pre>');
    assert.match(html, /data-code-key="ex1"/);
    sandbox.processPythonCode('<pre><code class="language-python-test:ex1">assert x == 42</code></pre>');
    assert.equal(evaluate('AppState.tests.get("ex1")'), 'assert x == 42');

    const original = 'x = 0';
    let value = 'x = 42';
    const data = { originalCode: original, editorId: 'editor-1', key: 'ex1', readOnly: false,
        editor: { getValue: () => value } };
    sandbox.saveCode(data);
    assert.equal(store.get('nsi-progress:v1:variables:ex1'), value);
    assert.equal(sandbox.readSavedCode('ex1'), value);
    value = original;
    sandbox.saveCode(data);
    assert.equal(store.has('nsi-progress:v1:variables:ex1'), false);

    console.log('✅ Frontend : configuration, encadrés, tests et sauvegarde locale.');
})().catch((error) => { console.error(error); process.exitCode = 1; });
