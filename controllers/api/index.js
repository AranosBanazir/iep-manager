const router = require(`express`).Router();
const studentRoutes = require("./student-routes");
const goalRoutes = require("./goal-routes");
const teacherRoutes = require("./teacher-routes");

router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);
// router.get("/goals", teacherRoutes);

module.exports = router;
