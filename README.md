# ProEnglish — Victorine

Application d'apprentissage de l'anglais professionnel pour archivistes.  
Cible : postes BAD/AfDB, ONU, UNESCO.

## Modules
- 🗂️ Flashcards avec répétition espacée (SRS / SM-2)
- ⚡ Quiz vocabulaire (60 mots, 4 catégories)
- ✍️ Fill-in-the-blank
- 🎤 Simulation d'entretien + minuterie 90s
- 🎯 Mode examen (5 questions sans filet)
- 💬 Coaching IA conversationnel (Groq / Ollama / Anthropic) + voix
- 🗣️ Shadow Speaking
- 🎙️ Pronunciation Trainer

## Installation PWA (icône sur téléphone)
1. Ouvre l'app dans **Chrome** sur Android
2. Menu ⋮ → **"Ajouter à l'écran d'accueil"**
3. L'icône ProEnglish apparaît sur ton écran

Sur iOS (Safari) : bouton partage → **"Sur l'écran d'accueil"**

## Configuration coaching IA
Le module Coaching nécessite une clé API :
- **Groq** (recommandé, gratuit) : [console.groq.com/keys](https://console.groq.com/keys)
- **Ollama** (offline) : `OLLAMA_ORIGINS=* ollama serve`
- **Anthropic** : [console.anthropic.com](https://console.anthropic.com/settings/keys)

## Déploiement GitHub Pages
1. Crée un repo GitHub (ex. `proenglish`)
2. Upload tous les fichiers de ce dossier
3. Settings → Pages → Source : `main` / `root`
4. URL : `https://VMONNE.github.io/proenglish/`

## Technologies
HTML5 · CSS3 · JS Vanilla · Web Speech API · PWA · Service Worker  
Algorithme SRS SM-2 · API Groq (Llama 3.3 70B)
