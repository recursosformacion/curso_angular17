"use strict";
var subirImagen = function (estadoImagen) {
    return new Promise(function (resolve) {
        console.log("Estado: " + estadoImagen);
        setTimeout(function () {
            resolve({ estadoImagen: estadoImagen });
        }, 1000);
    });
};
var subir;
var comprimir;
var transferir;
console.log("Empieza..::");
subirImagen('subiendo.....')
    .then(function (res) {
    subir = res;
    return subirImagen('comprimiendo.....');
})
    .then(function (res) {
    comprimir = res;
    return subirImagen('Transfiriendo.....');
})
    .then(function (res) {
    transferir = res;
    return subirImagen('Proceso finalizado.....');
});
console.log("Termina.....");
