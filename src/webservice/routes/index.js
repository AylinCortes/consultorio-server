const express = require("express");

const {
  loginReceptionist,
  registerReceptionist,
  updateReceptionist,
  deleteReceptionist,
  getAllReceptionists,
} = require("../controllers/receptionist");
const {
  registerDoctor,
  getAllDoctors,
  getTotalDoctors,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctor");
const {
  registerPatient,
  getTotalPatients,
  getAllPatients,
  deletePatient,
  updatePatient,
} = require("../controllers/patient");


const router = express.Router();


router.post("/registerDoctor", registerDoctor);

router.post("/registerPatient", registerPatient);

router.post("/registerReceptionist", registerReceptionist);

router.get("/getAllReceptionists", getAllReceptionists);

router.post("/login", loginReceptionist);

router.put("/editReceptionist", updateReceptionist);

router.delete("/deleteReceptionist", deleteReceptionist);

router.get("/getAllDoctors", getAllDoctors);

router.get("/getAllPatients", getAllPatients);

router.get("/getTotalDoctors", getTotalDoctors);

router.get("/getTotalPatients", getTotalPatients);

router.put("/editDoctor", updateDoctor);
router.put("/editPatient", updatePatient);


router.delete("/deleteDoctor", deleteDoctor);
router.delete("/deletePatient", deletePatient);


module.exports = router;
