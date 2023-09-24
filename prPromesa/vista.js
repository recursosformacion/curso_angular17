"use strict";
setTimeout(function () {
    callApi('url', function (status) {
        saveInDb(status, function (result) {
            console.log("Successfully completed - " + result);
        }, function (error) {
            console.log('something went wrong');
        }); // fin llamada saveInDb(status,result,error)
    }, function (error) {
        console.log("Something went wrong - " + error);
    }); //fin llamada callApi(string,status,error)
}, 5000);
//***************************************************** */
//Alternativa
//***************************************************** */
var aPromise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 5000);
});
aPromise
    .then(function () { return callApi('url'); })
    .then(function (status) { return saveInDb(status); })
    .then(function (result) {
    console.log("Successfully completed - " + result);
})
    .catch(function (error) {
    console.log("Something went wrong - " + error);
});
