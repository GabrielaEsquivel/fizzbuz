const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const explorers = [
    { name: "Explorer1", score: 1, trick: 1},
    { name: "Explorer3", score: 3, trick: "FIZZ"},
    { name: "Explorer5", score: 5, trick: "BUZZ"},
    { name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
];
describe("Test para FizzbuzzService", () =>{
    test("Requerimiento 1: Validación de Explorer", ()=>{
        const explorer1 = FizzbuzzService.applyValidationInExplorer(explorers[0]);
        expect(explorer1.trick).toBe(1);

        const explorer2 = FizzbuzzService.applyValidationInExplorer(explorers[1]);
        expect(explorer2.trick).toBe("FIZZ");

        const explorer3 = FizzbuzzService.applyValidationInExplorer(explorers[2]);
        expect(explorer3.trick).toBe("BUZZ");
    });
});