const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const json = require("../../explorers.json")
class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = this.readListOfExplorers;
        console.log("explorers", explorers);
        //return ExplorerService.filterByMission(explorers, mission);

    }

    static getExplorersUsernamesByMission(mission){
        const explorers = this.readListOfExplorers;
        return  ExplorerService.getExplorersUsernamesByMission(explorers, mission);

    }

    static getExplorersAmonutByMission(mission) {
        const explorers = this.readListOfExplorers;
        return  ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    
    get readListOfExplorers(){
       //require('../../explorers.json')
        return  Reader.readJsonFile("explorers.json");
    }
}

module.exports = ExplorerController; 