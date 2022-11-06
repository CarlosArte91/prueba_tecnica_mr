const { carsaves } = require("../models");

const getCarSaves = async (req, res) => {
    try {
        const data = await carsaves.find();
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
};

const addNewCar = async (req, res) => {
    try {
        const { body } = req;
        const data = await carsaves.create(body);
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
};

const deleteCarSave = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await carsaves.findByIdAndDelete(id);
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getCarSaves,
    addNewCar,
    deleteCarSave
};