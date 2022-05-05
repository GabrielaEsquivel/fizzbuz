class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersFiltered= explorers.filter(explorer =>{
            return explorer.mission == mission;
        });
        return explorersFiltered;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersFiltered= explorers.filter(explorer =>{
            return explorer.mission == mission;
        });
        return explorersFiltered.length; 
    }
    
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        
    }

    static getExplorersByStack(explorers, stack){
        return explorers.filter(explorer => explorer.stacks.includes(stack))
    }
}

module.exports = ExplorerService;