const express = require("express");
const { generateResponse } = require("./services/ai");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Mizan AI",
    version: "1.0 Blueprint Edition",
    status: "Running"
  });
});

app.post("/chat", (req, res) => {
  const { message } = req.body;
  const reply = generateResponse(message || "");
  res.json({ reply });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Mizan AI server running on port ${PORT}`);
});
