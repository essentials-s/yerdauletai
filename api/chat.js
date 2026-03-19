import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  try {
    const { message, language, model } = req.body;

    const selectedModel = model || "gpt-5";

    const systemPrompt = `Отвечай на языке: ${language}`;

    const response = await client.chat.completions.create({
      model: selectedModel,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });

    res.status(200).json({
      text: response.choices[0].message.content
    });

  } catch (e) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
}
