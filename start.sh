#!/bin/bash

# Script de lancement rapide pour le site de cours NSI
# Usage: ./start.sh

echo "🚀 Démarrage du site de cours NSI..."
echo ""

# Vérifier si Python est installé
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 trouvé"
    PORT=8000
    
    # Vérifier si le port est déjà utilisé
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
        echo "⚠️  Le port $PORT est déjà utilisé"
        echo "Voulez-vous essayer le port 8001 ? (y/n)"
        read -r response
        if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
            PORT=8001
        else
            echo "❌ Arrêt du script"
            exit 1
        fi
    fi
    
    echo ""
    echo "📚 Serveur démarré sur http://localhost:$PORT"
    echo "📖 Page d'accueil: http://localhost:$PORT/start.html"
    echo "💻 Interface principale: http://localhost:$PORT/index.html"
    echo ""
    echo "Appuyez sur Ctrl+C pour arrêter le serveur"
    echo ""
    
    # Démarrer le serveur
    python3 -m http.server $PORT
    
elif command -v python &> /dev/null; then
    echo "✅ Python trouvé"
    PORT=8000
    
    echo ""
    echo "📚 Serveur démarré sur http://localhost:$PORT"
    echo "📖 Page d'accueil: http://localhost:$PORT/start.html"
    echo "💻 Interface principale: http://localhost:$PORT/index.html"
    echo ""
    echo "Appuyez sur Ctrl+C pour arrêter le serveur"
    echo ""
    
    # Démarrer le serveur
    python -m SimpleHTTPServer $PORT
    
else
    echo "❌ Python n'est pas installé"
    echo ""
    echo "Alternatives:"
    echo "1. Installez Python: sudo apt-get install python3"
    echo "2. Utilisez Node.js: npx serve"
    echo "3. Ouvrez directement index.html dans votre navigateur"
    exit 1
fi
