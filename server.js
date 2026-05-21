const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! This app passed through staging before manual production approval.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});