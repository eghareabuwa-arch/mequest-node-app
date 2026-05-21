const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! My Node app.js app is now running from GitHub Actions on Azure App Service.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});