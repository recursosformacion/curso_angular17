"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeros_1 = require("./numeros");
describe('Pruebas de números', function () {
    it('Debe de retornar 100, si el número ingresado es mayor a 100', function () {
        var res = numeros_1.incrementar(300);
        expect(res).toBe(100);
    });
    it('Debe de retornar el número ingresado + 1, si no es mayor a 100', function () {
        var res = numeros_1.incrementar(50);
        expect(res).toBe(51);
    });
});
