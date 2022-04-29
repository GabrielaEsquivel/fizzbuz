const ExplorerService = require("../../lib/services/ExplorerService");
const explorers = [
    {
        "name": "Woopa15",
        "githubUsername": "ajolonauta15",
        "score": 15,
        "mission": "node",
    }
];
describe("Test para ExplorerService", () =>{
    test("Requerimiento 1: Calcular todos los explorers en una missión determinada", ()=>{
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        console.log("explorers", explorersInNode);
        expect(explorersInNode.length).toBe(1);
    }),
    test("Requerimiento 2: Obtener el total de explorers en una missión determinada", ()=>{
        const amountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        console.log("explorers", amountOfExplorersInNode);
        expect(amountOfExplorersInNode).toBe(1);
    }),
    test("Requerimiento 3: Obtener los usernames de los explorers en una missión determinada", ()=>{
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        console.log("explorers", explorersUsernames);
        expect(explorersUsernames[0]).toBe("ajolonauta15");
    });
});