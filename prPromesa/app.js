"use strict";
function loadJson(url) {
    return fetch(url)
        .then(function (response) { return response.json(); });
}
function loadGithubUser(name) {
    console.log(name);
    return fetch("https://api.github.com/users/" + name)
        .then(function (response) { return response.json(); });
}
function showAvatar(githubUser) {
    console.log(githubUser);
    return new Promise(function (resolve, reject) {
        var img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(function () {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}
// Use them:
loadGithubUser("migarcia")
    .then(showAvatar)
    .then(function (githubUser) { return alert("Finished showing " + githubUser.name); });
// ...
constructor(private, nombre, string, private, edad, number);
{ }
