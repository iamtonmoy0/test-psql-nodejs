const router = require("express").Router();
const controller = require("./controller.js");

router.route("/").get(controller.getStudents).post(controller.addStudent);
router.route("/:id").get(controller.getStudentById);

module.exports = router;
