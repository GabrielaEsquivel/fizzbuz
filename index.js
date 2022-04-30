// [EXPRESS] object
const express = require('express');

// [EXPRESS] app
const app = express();
app.use(express.json()) // Indicamos que usaremos JSON

// [PORT] declared
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

// [SERVICE] imported 
const ExplorerService = require("./lib/services/ExplorerService");

// [READER UTIL] imported
const Reader = require("./lib/utils/Reader");


// [EXPLORERS LIST] imported
const explorers = Reader.readJsonFile("../fizzbuz/explorers.json");

// [ROUTES] implemented

//HTTP Methods
app.get('/v1/explorers/:mission', (req, res) => {
    //Obtener lista de explorers que están en la misión especificada º

    const { mission }= req.params;
    const explorersInTheList = ExplorerService.filterByMission(explorers, mission);
    // HTTP STATUS: 200 successful 
    res.status(200).json(explorersInTheList);

});

app.get('/v1/explorers/amount/:mission', (req, res) => {
    // Obtener cantidad de explorers en una misión
    const { mission }= req.params;
    
    const amountOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    // HTTP STATUS: 200 successful 
    res.status(200).json(amountOfExplorers)

});





/*

console.log(explorers);
// Aplicación del ExplorerService en la lista
console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));
*/

