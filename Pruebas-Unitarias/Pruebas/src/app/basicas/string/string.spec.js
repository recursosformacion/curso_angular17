"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = require("./string");
// describe('Pruebas de Strings');
// it('Debe de regresar un string');
describe('Pruebas de strings', function () {
    it('Debe de regresar un string', function () {
        var resp = string_1.mensaje('Fernando');
        expect(typeof resp).toBe('string');
    });
    it('Debe de retornar un saludo con el nombre enviado', function () {
        var nombre = 'Juan';
        var resp = string_1.mensaje(nombre);
        expect(resp).toContain(nombre);
    });
});
