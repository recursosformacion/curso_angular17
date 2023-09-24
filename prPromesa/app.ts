function loadJson(url:string) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name:string):Promise {
    console.log(name)
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    console.log(githubUser);
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// Use them:
loadGithubUser("migarcia")
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));
    // ...


    constructor(private nombre:string, private edad:number){}