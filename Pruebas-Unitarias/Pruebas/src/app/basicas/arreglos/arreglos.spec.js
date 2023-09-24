"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arreglos_1 = require("./arreglos");
describe('Pruebas de arreglos', function () {
    it('Debe de retornar al menos 3 robots', function () {
        var res = arreglos_1.obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    it('Debe de existir MegaMan y Ultron', function () {
        var res = arreglos_1.obtenerRobots();
        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultron');
    });
});
