const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () =>{
    test("Requerimiento 1: Calcular todos los explorers en una missión determinada", ()=>{
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        //console.log("Explorers", explorersInNode)
       // expect(explorersInNode.length).toBe(10);
    })/*,
    test("Requerimiento 2: Obtener el total de explorers en una missión determinada", ()=>{
        const amountOfExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");
       // expect(amountOfExplorersInNode).toBe(null);
    }),
    test("Requerimiento 3: Obtener los usernames de los explorers en una missión determinada", ()=>{
        const explorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        //expect(explorersUsernames[0]).toBe("ajolonauta1");
    });*/
});