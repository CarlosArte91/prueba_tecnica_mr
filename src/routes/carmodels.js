const { Router } = require("express");
const { addVehicle, getVehicles, deleteVehicle } = require("../controllers/carmodels");

const router = Router();

router.get("/", getVehicles);
router.post("/", addVehicle);
router.delete("/delete/:id", deleteVehicle)

module.exports = router;