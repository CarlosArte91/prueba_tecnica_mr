const extractMain = (data, nameProp, result) => {    
    data.forEach((item) => {
        if (typeof item === "string" || typeof item === "number") {
            !result[nameProp].includes(item) && result[nameProp].push(item);
        }
        else {
            for (const property in item) {
                if (property !== "toString" && result[property]) {
                    if (!Array.isArray(item[property])) {
                        !result[property].includes(item[property]) && result[property].push(item[property]);                        
                    }
                    else {
                        extractMain(item[property], property, result);
                    }
                }
                            

            }    
        }
    });
};

const extractData = (data) => {
    let result = {
        vehicle: [],
        carBody: [],
        brand: [],
        model: [],
        year: [],
        cylinder: [],
        fuel: [],
        transmission: [],
        traction: []
    };
    extractMain(data, null, result);
    return result;
};

module.exports = extractData;