"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var textos = __importStar(require("./validaciones/textos"));
var numeros_1 = require("./validaciones/numeros");
var numeros_2 = __importDefault(require("./validaciones/numeros"));
console.log(numeros_2.default(10, 4));
console.log(numeros_1.PI);
console.log(textos.obtenerError(1));
