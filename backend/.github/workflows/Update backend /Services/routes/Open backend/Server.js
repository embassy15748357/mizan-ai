const express = require("express");
const chatRoutes = require("./routes/chat");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Mizan AI",
    version: "1.0 Blueprint Edition",
    status: "Running"
  });
});

app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Mizan AI server is running on port ${PORT}`);
});
