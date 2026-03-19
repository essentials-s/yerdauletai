export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // заглушка (подключи БД позже)
    if (email === "test@test.com" && password === "123456") {
      return res.status(200).json({
        user: {
          email,
          name: "Test User",
          avatar: "https://i.pravatar.cc/150"
        }
      });
    }

    return res.status(401).json({ error: "Неверные данные" });
  }
}
