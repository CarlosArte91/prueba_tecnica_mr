const { db_uri } = require("../config.js");

const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) console.log("*** CONECT DB MONGO ***");
        else console.log("*** DB MONGO ERROR ***");
    });
};

module.exports.dbConnect = dbConnect;