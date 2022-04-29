// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// routes

//HTTP Methods
app.get('/v1/explorers/:mission', (req, res) => {
    res.send(`GET METHOD IMPLEMENTED, Explorers V1 API  ${new Date()}`)

    // HTTP STATUS: 200 successful 
    res.status(200).json(explorers)

})

app.get('/v1/explorers/amount/:mission', (req, res) => {
    res.send(`GET METHOD IMPLEMENTED, Explorers V1 API  ${new Date()}`)

    // HTTP STATUS: 200 successful 
    res.status(200).json(explorer)

})






const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("../fizzbuz/explorers.json");
console.log(explorers);
// Aplicación del ExplorerService en la lista
console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));

