const express = require("express");
const app = express();

app.use(express.json());

app.post("/send", (req, res) => {
  const { title, body } = req.body;
  console.log("Notification:", title, body);
  res.json({ success: true });
});

app.get("/", (req, res) => {
  res.send("Mo Academy Server Running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
