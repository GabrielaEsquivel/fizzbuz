const fs = require("fs");
//require("../../explorers.json")
class Reader {
    static readJsonFile(path){
        console.log("path", path)
        const rawdata = fs.readFileSync(path, 'utf8');
        return JSON.parse(rawdata);  
    }
}
module.exports = Reader;
