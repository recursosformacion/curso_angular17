"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usuario_model_1 = require("../../models/usuario.model");
// ES6 Modules or TypeScript
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuario = new usuario_model_1.UsuarioModel();
        this.recordarme = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        sweetalert2_1.default.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Realizando la conexion....'
        });
        sweetalert2_1.default.showLoading();
        this.auth.login(this.usuario)
            .subscribe(function (resp) {
            sweetalert2_1.default.close();
            console.log('Respuesta:', resp);
            _this.router.navigateByUrl('/home');
            if (_this.recordarme) {
                localStorage.setItem('email', _this.usuario.email);
            }
            else {
                localStorage.setItem('email', '');
            }
        }, function (err) {
            sweetalert2_1.default.fire({
                type: 'error',
                text: 'ERROR:' + err.error.error.message
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
