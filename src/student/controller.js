const pool = require("../../config/db");

exports.getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (err, results) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(results.rows);
  });
};
