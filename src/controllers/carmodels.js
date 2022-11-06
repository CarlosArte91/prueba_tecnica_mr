const { carmodels } = require("../models");
const extractData = require("../utils/extractData");

const getVehicles = async (req, res) => {
    try {
        const { query } = req;
        console.log(query);
        let data;
        if (Object.keys(query).length) {
            data = await carmodels.find(query);
        }
        else data = await carmodels.find();        
        return res.json(extractData(data));
    } catch (error) {
        console.log(error);
    }
};

const addVehicle = async (req, res) => {
    try {
        const { body } = req;
        const data = await carmodels.create(body);
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
};

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await carmodels.findByIdAndDelete(id);
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addVehicle,
    getVehicles,
    deleteVehicle
};