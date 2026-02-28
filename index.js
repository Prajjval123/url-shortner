const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("URL Shortener API running");
});

app.listen(4000, () => console.log("Server started on port 4000"));