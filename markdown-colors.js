/*
 * Syntaxe courte de coloration des cours NSI.
 * Exemples : :g[texte vert] ; :r[texte rouge] ; :s[texte surligné].
 * Cette extension inline de Marked préserve les blocs de code Python.
 */
(function registerNsiMarkdownColors() {
    'use strict';

    const aliases = Object.freeze({
        g: 'green', green: 'green', vert: 'green',
        r: 'red', red: 'red', rouge: 'red',
        b: 'blue', blue: 'blue', bleu: 'blue',
        o: 'orange', orange: 'orange',
        v: 'violet', violet: 'violet',
        s: 'highlight', surligne: 'highlight', highlight: 'highlight'
    });

    if (typeof marked === 'undefined' || typeof marked.use !== 'function') {
        console.warn('Coloration Markdown : Marked n’est pas disponible.');
        return;
    }

    marked.use({
        extensions: [{
            name: 'nsiColoredText',
            level: 'inline',
            start(source) {
                // Évite d'examiner les portions sans potentiel marqueur :nom[...].
                return source.search(/:[a-z]+\[/i);
            },
            tokenizer(source) {
                const match = /^:([a-z]+)\[([^\]\r\n]+)\]/i.exec(source);
                if (!match) return;

                const variant = aliases[match[1].toLowerCase()];
                if (!variant) return;

                return {
                    type: 'nsiColoredText',
                    raw: match[0],
                    variant,
                    // Prend également en charge **gras**, *italique* et `code`.
                    tokens: this.lexer.inlineTokens(match[2])
                };
            },
            renderer(token) {
                return `<span class="md-color md-color--${token.variant}">${this.parser.parseInline(token.tokens)}</span>`;
            }
        }]
    });
})();
