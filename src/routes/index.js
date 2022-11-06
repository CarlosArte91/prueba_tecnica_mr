const fs = require("fs");
const { Router } = require("express");
const router = Router();

fs.readdirSync(__dirname).forEach(file => {
    if (file !== "index.js") {
        router.use(`/${file.split(".").shift()}`, require(`./${file}`));
    }
});

module.exports = router;