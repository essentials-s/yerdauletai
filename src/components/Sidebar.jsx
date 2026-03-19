import React from "react";

export default function Sidebar({ user, setLanguage, setTheme }) {
  return (
    <div className="sidebar">
      <div className="user-info">
        <img src={user.avatar} alt="avatar" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <button className="new-chat">Новый чат</button>
      <div className="settings">
        <h4>Язык</h4>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="kz">Қазақша</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>

        <h4>Тема</h4>
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
        </select>
      </div>
    </div>
  );
}
