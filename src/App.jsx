import React, { useState } from "react";
import Chat from "./components/Chat.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Settings from "./components/Settings.jsx";
import Login from "./components/Login.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("ru"); // ru, kz, en
  const [theme, setTheme] = useState("light"); // light / dark

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className={`app ${theme}`}>
      <Sidebar user={user} setLanguage={setLanguage} setTheme={setTheme} />
      <Chat user={user} language={language} />
      <Settings language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
    </div>
  );
}
