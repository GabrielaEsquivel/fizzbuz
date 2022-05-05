const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = this.readListOfExplorers();
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = this.readListOfExplorers();
        return  ExplorerService.getExplorersUsernamesByMission(explorers, mission);

    }

    static getExplorersAmonutByMission(mission) {
        const explorers = this.readListOfExplorers();
        return  ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    
    static readListOfExplorers(){
        return  Reader.readJsonFile("explorers.json");
    }

    static applyValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static getExplorersByStack(nameStack){
        return ExplorerService.getExplorersByStack(nameStack);
    }
}

module.exports = ExplorerController; 