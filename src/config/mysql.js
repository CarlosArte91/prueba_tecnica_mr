const mysql = require("promise-mysql");
const { host, database, user, password } = require("../config.js");

const connection = mysql.createConnection({
    host,
    database,
    user,
    password
});

const getConnection = () => {
    return connection;
};

module.exports = getConnection;