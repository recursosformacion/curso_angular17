"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // Crear nuevo  usuario
        // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
        // Login
        // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
        this.url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
        this.apikey = 'AIzaSyATpR7b0b7DRPfxqmdmr0CyDMBUXljX1Do';
    }
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.login = function (usuario) {
        var _this = this;
        var authData = {
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
        };
        return this.http.post(this.url + "signInWithPassword?key=" + this.apikey, authData).pipe(operators_1.map(function (resp) {
            _this.guardarToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.nuevoUsuario = function (usuario) {
        var _this = this;
        var authData = {
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
        };
        return this.http.post(this.url + "signUp?key=" + this.apikey, authData).pipe(operators_1.map(function (resp) {
            _this.guardarToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.guardarToken = function (idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
        var hoy = new Date();
        hoy.setSeconds(3600); // por simplificar
        localStorage.setItem('expira', hoy.getTime().toString());
    };
    AuthService.prototype.leerToken = function () {
        if (localStorage.getItem(' token')) {
            this.userToken = localStorage.getItem(' token');
        }
        else {
            this.userToken = '';
        }
    };
    AuthService.prototype.estaAutenticado = function () {
        this.leerToken();
        if (this.userToken.length < 2) {
            return false;
        }
        var expira = Number(localStorage.getItem('expira'));
        var expiraDate = new Date();
        expiraDate.setTime(expira);
        return (expiraDate > new Date());
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
