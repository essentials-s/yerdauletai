import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Message from "./Message.jsx";

export default function Chat({ user, language }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef();

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input };
    setMessages([...messages, newMsg]);
    setInput("");

    // API call to serverless function
    const res = await axios.post("/api/chat", { message: input, language });
    setMessages((prev) => [...prev, { sender: "ai", text: res.data.text }]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      {messages.length === 0 && (
        <div className="chat-empty fade-in">
          {language === "ru" ? "Привет, Yerdaulet AI" : language === "kz" ? "Сәлем, Yerdaulet AI" : "Hello, Yerdaulet AI"}
        </div>
      )}
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder={language === "ru" ? "Введите сообщение..." : language === "kz" ? "Хабарламаны енгізіңіз..." : "Type a message..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}
