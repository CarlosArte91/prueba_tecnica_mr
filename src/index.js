const app = require("./app.js");
const { port } = require("./config.js");
const { dbConnect } = require("./config/mongo.js");

const main = () => {
    app.listen(port, () => {
        console.log(`Server on port ${port}`);
    });
    dbConnect();
};

main();