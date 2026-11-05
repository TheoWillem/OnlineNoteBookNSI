"""Vérifie que les corrections des exercices Variables passent les tests formatifs."""
import contextlib
import io
import re
from pathlib import Path

course = (Path(__file__).resolve().parent.parent / 'cours/variables.md').read_text(encoding='utf-8')
blocks = list(re.finditer(r'^```python:([a-zA-Z0-9_-]+)\n([\s\S]*?)\n```$', course, re.MULTILINE))
assert len(blocks) == 8, f'8 exercices attendus, {len(blocks)} trouvés'
for index, block in enumerate(blocks):
    name = block.group(1)
    next_start = blocks[index + 1].start() if index + 1 < len(blocks) else len(course)
    section = course[block.end():next_start]
    test = re.search(r'^```python-test:' + re.escape(name) + r'\n([\s\S]*?)\n```$', section, re.MULTILINE)
    correction = re.search(r'^:::collapsible ✅ Proposition de correction\n```python-static\n([\s\S]*?)\n```', section, re.MULTILINE)
    assert test is not None, f'{name} : tests manquants'
    assert correction is not None, f'{name} : correction manquante'
    context = {}
    with contextlib.redirect_stdout(io.StringIO()):
        exec(compile(correction.group(1), '<correction>', 'exec'), context)
        exec(compile(test.group(1), '<test>', 'exec'), context)
    # Le squelette initial ne doit pas déjà valider l'exercice.
    context = {}
    try:
        with contextlib.redirect_stdout(io.StringIO()):
            exec(compile(block.group(2), '<squelette>', 'exec'), context)
            exec(compile(test.group(1), '<test>', 'exec'), context)
    except (AssertionError, NameError):
        pass
    else:
        raise AssertionError(f'{name} : squelette validé sans réponse élève')
    print(f'✅ {name}: correction validée, squelette incomplet')
