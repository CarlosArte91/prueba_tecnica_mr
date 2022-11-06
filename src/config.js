require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3001,
    db_uri: process.env.DB_URI || "",
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};