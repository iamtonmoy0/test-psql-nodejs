// get student
exports.getStudent = "SELECT * FROM students";
// get student by id
exports.getStudentById = "SELECT * FROM students WHERE ID = $1";
// check email if exist
exports.checkEmailExist = "SELECT s  FROM students s WHERE s.email = $1";
// add students
exports.addStudent =
  "INSERT INTO students ( name,email,created_at) VALUES ($1,$2,$3)";
