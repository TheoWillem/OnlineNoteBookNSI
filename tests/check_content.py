"""Contrôles de cohérence des cours Markdown (stdlib uniquement)."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSES = ROOT / 'cours'
config = json.loads((ROOT / 'config.json').read_text(encoding='utf-8'))
assert isinstance(config.get('cours'), list) and config['cours'], 'Catalogue vide'

ids = set()
errors = []
for course in config['cours']:
    course_id = course['id']
    if course_id in ids: errors.append(f'ID de cours dupliqué : {course_id}')
    ids.add(course_id)
    file = COURSES / course['fichier']
    if not file.is_file():
        errors.append(f'Fichier manquant : {file}')
        continue
    markdown = file.read_text(encoding='utf-8')
    code_ids = set()
    test_ids = set()
    for lang, key in re.findall(r'^```(python(?:-static|-test)?)(?::([\w-]+))?\s*$', markdown, re.MULTILINE):
        if lang == 'python-test':
            if not key: errors.append(f'{file}: test sans ID')
            if key in test_ids: errors.append(f'{file}: tests dupliqués {key}')
            test_ids.add(key)
        elif lang == 'python' and key:
            if key in code_ids: errors.append(f'{file}: cellule dupliquée {key}')
            code_ids.add(key)
    for key in test_ids - code_ids:
        errors.append(f'{file}: tests {key} sans cellule python:{key}')
    # Blocs ::: non imbriqués et terminés. Les lignes entre fences sont ignorées.
    fence = False
    custom = False
    for line in markdown.splitlines():
        if re.match(r'^\s*```', line): fence = not fence; continue
        if fence: continue
        if re.match(r'^:::(?:collapsible|details|note|warning|attention|success|info|reminder)\s+', line):
            if custom: errors.append(f'{file}: blocs ::: imbriqués')
            custom = True
        elif line.strip() == ':::':
            if not custom: errors.append(f'{file}: fermeture ::: isolée')
            custom = False
    if custom: errors.append(f'{file}: bloc ::: non fermé')
    for asset in re.findall(r'!\[[^]]*\]\((assets/[^)]+)\)', markdown):
        if not (ROOT / asset).is_file(): errors.append(f'{file}: illustration absente {asset}')

# Le cours modèle, qui n'est pas déclaré dans config.json, est aussi contrôlé.
if not (COURSES / 'TEMPLATE.md').is_file(): errors.append('cours/TEMPLATE.md manquant')
if errors:
    raise SystemExit('\n'.join('❌ ' + e for e in errors))
print(f'✅ {len(ids)} cours, IDs et blocs Markdown cohérents.')
