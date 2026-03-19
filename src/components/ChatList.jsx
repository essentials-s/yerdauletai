import React from "react";

export default function ChatList({ chats, setCurrentChat }) {
  return (
    <div className="chat-list">
      {chats.map((chat, index) => (
        <div
          key={index}
          className="chat-item"
          onClick={() => setCurrentChat(chat)}
        >
          {chat.title || "Новый чат"}
        </div>
      ))}
    </div>
  );
}
