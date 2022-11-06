const mongoose = require("mongoose");

const CarsavesSchema = new mongoose.Schema({
    vehicle: {
        type: String
    },
    carBody: {
        type: String
    },
    brand: {
        type: String
    },
    model: {
        type: String
    },
    year: {
        type: Number
    },
    cylinder: {
        type: String
    },
    fuel: {
        type: String
    },
    transmission: {
        type: String
    },
    traction: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("carsaves", CarsavesSchema);