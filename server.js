const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! This Node.js app was deployed through staging and approved for production.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});