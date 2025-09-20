# Sai Kireeti — Netflix‑Style Portfolio

A sleek, cinematic personal portfolio built with **React + Vite + Tailwind**.

## ✨ Features
- Dark, Netflix-like UI with card rows and modals
- Fully responsive
- All copy lives in `/src/data/content.js` for easy edits

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 🔧 Edit Content
Update text and images in: `src/data/content.js` and `public/thumbnails/*`

## 📦 Production Build
```bash
npm run build
npm run preview
```

## ☁️ Deploy
- **Vercel**: Import repo → Framework preset: Vite → Deploy
- **GitHub Pages**:
  1) `npm i -D gh-pages`
  2) Add to `package.json`:
     ```json
     "homepage": "https://<your-username>.github.io/<repo-name>/",
     "scripts": {
       "predeploy": "vite build",
       "deploy": "gh-pages -d dist"
     }
     ```
  3) `npm run deploy`

---

© 2025 Sai Kireeti. All rights reserved.
