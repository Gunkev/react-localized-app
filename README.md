# React Localized App (i18next + Localazy)

This project demonstrates how to build a fully localized React application using **i18next** for runtime translations and **Localazy** for translation management. The app supports multiple languages, ICU plurals, and a pseudo-locale for visual QA.

You can clone the project, install dependencies, configure Localazy, and run it locally in minutes.

---

## 🚀 Features

- React + Vite setup  
- i18next + react-i18next  
- Static JSON translations (`en`, `fr`, `qps`)  
- ICU plural support  
- Pseudo-locale for UI stretching tests  
- Localazy integration for upload/download workflow  
- TailwindCSS for styling  

---

## 📦 Project Structure

```bash
react-localized/
├─ public/
├─ src/
│  ├─ assets/
│  │  └─ i18n/
│  │     ├─ en.json
│  │     ├─ fr.json
│  │     ├─ qps.json
│  │     └─ index.js
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ localazy.json
├─ localazy.keys.json (ignored)
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ yarn.lock

```
## Clone the repository:

```bash
git clone https://github.com/Gunkev/react-localized-app.git
cd react-localized-app
```

## Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```
## Run app

```bash
yarn dev
```

## Integration Guide Links

- https://localazy.com/blog/react-i18next-localazy-tutorial-part-1-i18n-foundations
- https://localazy.com/blog/react-i18next-localazy-part-2-setting-up-translations
