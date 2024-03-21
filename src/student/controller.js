const pool = require("../../config/db");
const query = require("./query");

exports.getStudents = (req, res) => {
  pool.query(query.getStudent, (err, results) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(results.rows);
  });
};
// get student by id
exports.getStudentById = (req, res) => {
  pool.query(query.getStudentById, [req.params.id], (err, result) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(result.rows);
  });
};
// add student
exports.addStudent = (req, res) => {
  const { name, email, created_at } = req.body; // Corrected key name to "created_at"
  pool.query(query.checkEmailExist, [req.body.email], (err, result) => {
    if (err) {
      res.send(err); // Handle error from query
      return;
    }
    if (result.rows.length) {
      res.send("email with is id already exist");
      return;
    }
    // Insert new student record with the current timestamp
    pool.query(query.addStudent, [name, email, new Date()], (err, result) => {
      if (err) {
        res.send(err); // Handle error from query
        return;
      }
      res.send("student created!");
    });
  });
};
