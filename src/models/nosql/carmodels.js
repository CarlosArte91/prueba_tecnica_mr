const mongoose = require("mongoose");

const CarmodelSchema = new mongoose.Schema({
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
    year: [Number],
    cylinder: [String],
    fuel: [String],
    transmission: [String],
    traction: [String]
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model("carmodels", CarmodelSchema);