"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var booleanos_1 = require("./booleanos");
describe('Pruebas de Booleanos', function () {
    it('Debe de retornar true', function () {
        var res = booleanos_1.usuarioIngresado();
        expect(res).toBeTruthy();
    });
});
