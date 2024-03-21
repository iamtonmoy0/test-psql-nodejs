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

exports.getStudentById = (req, res) => {
  pool.query(query.getStudentById, [req.params.id], (err, result) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(result.rows);
  });
};
exports.addStudent=(req,res)=>{
	
}
