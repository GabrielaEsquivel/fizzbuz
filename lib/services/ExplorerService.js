class ExplorerService {
    static filterByMission(explorers, mission){
       const explorersFiltered= explorers.filter(explorer =>{
            return explorer.mission == mission;
        });
        return explorersFiltered;
    }
    static getAmountOfExplorersByMission(explorers, mission){}
    
    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports = ExplorerService