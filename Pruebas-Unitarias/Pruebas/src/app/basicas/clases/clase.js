"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jugador = /** @class */ (function () {
    function Jugador() {
        this.hp = 100;
    }
    Jugador.prototype.recibeDanio = function (danio) {
        if (danio >= this.hp) {
            this.hp = 0;
        }
        else {
            this.hp = this.hp - danio;
        }
        return this.hp;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
