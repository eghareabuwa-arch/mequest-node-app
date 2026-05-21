const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! My Node.js app has been deployed through GitHub Action to Azure App Service");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});