const express = require("express");

const app = express();
app.use(express.json());

app.use("/api/v1/students", require("./src/student/route"));

app.get("/", async (req, res) => {
  res.send("server is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
