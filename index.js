const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

app.post("/chat", async (req, res) => {
  try {
    const { message, language } = req.body;

    const reply = `Response in (${language}): ${message}`;

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("ChatGPT Backend is working!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
