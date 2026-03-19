import axios from "axios";

export const sendMessage = async (message, language, model) => {
  const res = await axios.post("/api/chat", {
    message,
    language,
    model
  });
  return res.data;
};
