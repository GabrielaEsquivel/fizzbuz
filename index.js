const Reader = require('./lib/utils/Reader');
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile('../fizzbuz/explorers.json')
console.log(explorers)
// Aplicación del ExplorerService en la lista
console.log(ExplorerService.filterByMission(explorers, 'node'))
