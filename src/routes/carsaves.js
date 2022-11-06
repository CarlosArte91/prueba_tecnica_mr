const { Router } = require("express");
const { getCarSaves, addNewCar, deleteCarSave } = require("../controllers/carsaves");

const router = Router();

router.get("/", getCarSaves);
router.post("/", addNewCar);
router.delete("/delete/:id", deleteCarSave);

module.exports = router;