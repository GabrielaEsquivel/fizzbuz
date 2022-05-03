// [EXPRESS] object
const express = require('express');

// [EXPRESS] app
const app = express();
app.use(express.json()) // Indicamos que usaremos JSON

// [PORT] declared
const port = 3000;

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`FizzBuzz API listening on localhost:port ${port}`);
})

const ExplorerController = require("../lib/controllers/ExplorerController");

app.get('/v1/explorers/:mission', (req, res) => {
    //Obtener lista de explorers que están en la misión especificada º
    const { mission }= req.params;
    const explorersInTheList = ExplorerController.getExplorersByMission(mission);
    
    // HTTP STATUS: 200 successful 
    res.status(200).json(explorersInTheList);
});

app.get('/v1/explorers/amount/:mission', (req, res) => {
    // Obtener cantidad de explorers en una misión
    const { mission }= req.params;
    
    const amountOfExplorers = ExplorerController.getExplorersAmonutByMission(mission);
    // HTTP STATUS: 200 successful 
    res.status(200).json(amountOfExplorers)

});

app.get('/v1/explorers/usernames/:mission', (req, res) => {
    // Obtener la lista de username en una misión
    const { mission }= req.params;
    const amountOfExplorers = ExplorerController.getExplorersUsernamesByMission(mission);
    // HTTP STATUS: 200 successful 
    res.status(200).json(amountOfExplorers)

});

app.get('/v1/explorers/score/:scorde', (req, res) => {
    const { score } = req.params;
    const finalScore = ExplorerController.applyValidationInNumber(score);
    res.status(200).json(finalScore)

});