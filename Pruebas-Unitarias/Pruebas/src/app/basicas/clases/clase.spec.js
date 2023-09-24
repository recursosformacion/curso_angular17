"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clase_1 = require("./clase");
describe('Pruebas de clase', function () {
    // const jugador = new Jugador();
    var jugador;
    beforeAll(function () {
        // console.warn('BeforeAll');
        // jugador.hp = 100;
    });
    beforeEach(function () {
        // console.warn('BeforeEach');
        // jugador.hp = 100;
        jugador = new clase_1.Jugador();
    });
    afterAll(function () {
        // console.warn('AfterAll');
    });
    afterEach(function () {
        // console.warn('AfterEach');
        // jugador.hp = 100;
    });
    it('Debe de retornar 80 de hp, si recibe 20 de daño', function () {
        // const jugador = new Jugador();
        var resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });
    it('Debe de retornar 50 de hp, si recibe 50 de daño', function () {
        // const jugador = new Jugador();
        var resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });
    it('Debe de retornar 0 de hp, si recibe 100 de daño o más', function () {
        // const jugador = new Jugador();
        var resp = jugador.recibeDanio(100);
        expect(resp).toBe(0);
    });
});
