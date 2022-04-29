const ExplorerService = require("../../lib/services/ExplorerService");
describe("Test para ExplorerService", () =>{
    test("Requerimiento 1: Calcular todos los explorers en una missión determinada", ()=>{
        const explorers = [
            {
                "name": "Woopa15",
                "githubUsername": "ajolonauta15",
                "score": 15,
                "mission": "node",
            }
        ];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        console.log("explorers", explorersInNode);
        expect(explorersInNode.length).toBe(1);
    });
});