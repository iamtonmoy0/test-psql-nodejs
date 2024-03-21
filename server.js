const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("server is running");
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
