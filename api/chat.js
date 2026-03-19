import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  const { message, language } = req.body;

  const prompt = `Language: ${language}\nUser: ${message}\nAI:`;

  const response = await client.chat.completions.create({
    model: "gpt-5",
    messages: [{ role: "user", content: prompt }]
  });

  res.status(200).json({ text: response.choices[0].message.content });
}
