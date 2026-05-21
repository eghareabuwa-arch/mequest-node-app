const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! My Node.js app is running successfully on Azure App Service.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});