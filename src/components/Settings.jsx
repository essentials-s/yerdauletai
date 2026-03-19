import React from "react";

export default function Settings({ language, setLanguage, theme, setTheme }) {
  return (
    <div className="settings-panel">
      <h3>Настройки</h3>

      <div>
        <label>Язык:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="kz">Қазақша</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>

      <div>
        <label>Тема:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
        </select>
      </div>

      <div className="links">
        <a href="mailto:yerdauletai@outlook.com">Сообщить об ошибке</a>
        <a href="mailto:yerdauletai@outlook.com">Связаться с автором</a>
      </div>
    </div>
  );
}
