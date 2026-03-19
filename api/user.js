export default async function handler(req, res) {
  if (req.method === "GET") {
    // позже подключишь БД
    return res.status(200).json({
      users: []
    });
  }
}
