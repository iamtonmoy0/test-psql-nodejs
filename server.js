const express = require("express");
const { Pool, Connection } = require("pg");
const app = express();

const pool = new Pool({
  connectionString:
    "postgresql://postgres:mysecretpassword@localhost:5432/message_boards",
});

app.get("/", async (req, res) => {
  const client = await pool.connect();
  const result = await client.query(
    `SELECT * FROM users LIMIT ${req.query.limit || 10}`
  );
  res.status(200).json({
    data: result.rows,
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
