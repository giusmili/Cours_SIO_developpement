document.addEventListener("DOMContentLoaded", () => {
    console.log("ok");
    let classicFilm = [{
        photo: "./asset/king-kong.jpg",
        titre: "King Kong",
        date: 1933,
        realisateur: "Merian C. Cooper, Ernest B",
        genre: "Horreur, fantastique",
        sortie: "Novembre 2005"

    }, {
        photo: "./asset/camonte.jpg",
        titre: "Scarface",
        date: 1932,
        realisateur: "Howard Hawks",
        genre: "Policier, action",
        sortie: "Novembre 2006"
    }, {
        photo: "./asset/autant-le-vent-little.png",
        titre: "Autant emporte le vent",
        date: 1939,
        realisateur: "Victor flaming",
        genre: "Drame, guerre",
        sortie: "Novembre 2007"
    }];
    console.table(classicFilm);
    let target = "";
    let el = document.querySelector("section");
    for (data of classicFilm) {
        console.log(`${data.photo} ${data.titre} ${data.date} 
        ${data.realisateur} ${data.genre} ${data.sortie}`);
        //afficher dans le dom
        target += `<figure>
                <img src="${data.photo}" alt="${data.titre}">
                <figcaption>
                    <ul>
                        <li><h2>${data.titre}</h2></li>
                        <li>Date : ${data.date}</li>
                        <li>Réalisateur : ${data.realisateur}</li>
                        <li>Genre : ${data.genre}</li>
                        <li>Sortie dvd : ${data.sortie}</li>
                    </ul>
                </figcaption>
                </figure>
                `;
    }
    el.innerHTML = target;
    //local storage
    let testFilm = JSON.stringify(classicFilm);
    localStorage.setItem("liste", testFilm);
    let stock = localStorage.getItem("liste");
    console.table(JSON.parse(stock));
    //simple

    let user = {
        nom: "Montana",
        prenom: "Tony",
        date: 1980,
        getterPrint() {
            return `Nom : ${this.nom}\n Prénom : ${this.prenom}\n Date : ${this.date}`;
        }
    };
    let affiche = user.getterPrint();
    console.log(affiche);
});