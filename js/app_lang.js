document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    //element virtuel
    let lang_list, languages, years, year, parent, target;
    parent = document.querySelector("section");
    lang_list = document.createElement("ul");
    target = document.querySelector("p");
    parent.appendChild(lang_list);
    //tableaux
    languages = ["html", "php", "css", "ajax", "jQuery"];
    years = [1990, 1994, 1998, 2000, 2006];
    year = parseInt(prompt("saisir une date"));
    target.innerText = `Résultat pour ${year}`;
    //target.style.display ="none"

    //une boucle
    //des conditions


    for (let i = 0; i < languages.length; i++) {
        //console.table(languages[i])
        if (years[i] >= year) {
            lang_list.style.display = "block";
            target.style.display = "none";
            lang_list.innerHTML += `<li>${languages[i]} : ${years[i]}</li>`;
        }
    }
    //condition
    if (year < years[0] || year > years[4]) {
        target.style.display = "block";
        target.innerText = "Aucun résultat pour cette date : " + year + " cliquer pour chosir";
        lang_list.style.display = "none";
    } else {
        target.innerText = "Cliquez ici pour saisir une date";
    }

    //relancer la recherche
    let x = 7.5;
    console.log(Math.round(x));

    target.addEventListener("click", () => {
        document.location.reload();
    });
    parent.addEventListener("click", () => {
        document.location.reload();
    });
});