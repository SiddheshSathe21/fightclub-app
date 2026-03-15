# FIGHT CLUB — Self Improvement App

## Quick Start

### 1. Fill in Firebase Config
Open `js/firebase-config.js` and replace the 6 placeholder values with your
Firebase project config from Firebase Console → Project Settings → Your apps.

### 2. Get a Free AI API Key
Choose one provider (Groq is recommended — free and fast):
- **Groq**: https://console.groq.com
- **Gemini**: https://aistudio.google.com
- **Anthropic**: https://console.anthropic.com (paid)

### 3. Deploy to Netlify
1. Go to https://app.netlify.com
2. Drag the entire `fightclub-project/` folder onto the Netlify dashboard
3. After deploy, go to Site config → Environment variables
4. Add your AI key: `GROQ_API_KEY` = your key

### 4. Add Your Domain to Firebase
Firebase Console → Authentication → Settings → Authorized domains
→ Add your Netlify URL (e.g. `your-app.netlify.app`)

---

## Project Structure

```
fightclub-project/
│
├── index.html                  ← Main HTML page (edit title/meta here)
│
├── css/
│   └── styles.css              ← ALL styling (colours, fonts, layout, responsive)
│
├── js/
│   ├── app.js                  ← Compiled app logic (DO NOT edit directly)
│   └── firebase-config.js      ← YOUR FIREBASE CONFIG GOES HERE
│
├── netlify/
│   └── functions/
│       └── claude.js           ← AI API proxy (switch providers here)
│
├── netlify.toml                ← Netlify build configuration
├── firestore.rules             ← Paste into Firebase → Firestore → Rules
├── .env.example                ← Environment variable template
└── README.md                   ← This file
```

---

## Want to Edit the App?

The source file is `app.jsx` (kept separately — not in this folder).
After editing app.jsx, run:
```bash
node compile.mjs
```
Then copy the new `app.compiled.js` to `js/app.js`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Styling | CSS (no framework) |
| Auth + Database | Firebase (Google) |
| Hosting | Netlify |
| AI Responses | Groq / Gemini / Anthropic |
| Fonts | Google Fonts |
