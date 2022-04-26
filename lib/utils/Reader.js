const fs = require("fs");

class Reader {
    static readJsonFile(path){
        const rawdata = fs.readFileSync("explorers.json");
            return JSON.parse(rawdata);  
    }
}
module.exports = Reader;
console.log("LEYENDO.");
Reader.readJsonFile('../../explorers.json');