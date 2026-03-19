import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hljs from "highlight.js";

export default function Message({ sender, text }) {
  const [displayText, setDisplayText] = useState("");

  // typing animation
  useEffect(() => {
    if (sender === "ai") {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 15);
    } else {
      setDisplayText(text);
    }
  }, [text, sender]);

  useEffect(() => {
    hljs.highlightAll();
  }, [displayText]);

  return (
    <motion.div
      className={`message ${sender}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <pre>
        <code>{displayText}</code>
      </pre>
    </motion.div>
  );
}
