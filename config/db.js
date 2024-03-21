const Pool = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rest_api",
  password: "mysecretpassword",
  port: 5432,
});

module.exports = pool;
