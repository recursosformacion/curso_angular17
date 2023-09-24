"use strict";
//Las funciones
function siFunciona() {
    console.log("Esto funciono de pelicula");
}
function siFalla() {
    console.log("Y no funcionooooo");
}
console.log("Antes de definicion");
// creacion del objeto "promesa"
var pro = Promise(function (resolve, reject) {
    //accion a controlar con promesa (acceso remoto, ....)
    setTimeout(function () {
        var numero = Math.round(Math.random() * 1000);
        var par = (numero % 2) == 0; //indicara si termina bien o mal
        if (par) {
            console.log("Funcionalidad terminada. Ya tengo los datos");
            //Si termina bien...
            resolve();
        }
        else {
            //si termina mal...
            reject();
        }
    }, 1500);
});
console.log("Despues de definicion");
//usando la promesa
pro.then(siFunciona, siFalla)
    .catch;
console.log("acabando el programa");
