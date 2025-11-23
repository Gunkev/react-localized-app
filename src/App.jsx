import { useTranslation } from "react-i18next";
import "./App.css";
import i18n from "./i18n";
import { useState } from "react";

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);

  return (
    <div className="p-6">
      <h1 className="">{t("welcome")}</h1>
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="mt-4 bg-amber-600 p-3 rounded-md"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="qps">Pseudo</option>
      </select>

      <p className="mt-4">{t("items", { count })}</p>
      <div className="flex gap-3 mt-3 justify-center">
        <button onClick={() => setCount((c) => Math.max(0, c - 1))} className="text-blue-950">-</button>
        <button onClick={() => setCount((c) => c + 1)} className="text-blue-950">+</button>
      </div>
    </div>
  );
}

export default App;
