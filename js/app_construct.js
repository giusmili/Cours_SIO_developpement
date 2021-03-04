document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let Personnage, userNom, userPrenom;
    userNom = prompt("Ajouter un nom");
    userPrenom = prompt("Ajouter un prenom");

    Personnage = function (nom, prenom) {
        //constructeur
        this.nom = nom;
        this.prenom = prenom;
    };
    let newPersonnage_1 = new Personnage("Montana", "Tony");
    let newPersonnage_2 = new Personnage("Wayne", "Bruce");
    let newPersonnage_3 = new Personnage(userNom, userPrenom);

    let personnages = [];
    personnages.push(newPersonnage_1, newPersonnage_2);
    console.table(personnages);
    for (index in personnages) {
        console.log(index + ' ' + personnages[index].nom);
    }
    //function getter
    let el = document.querySelector("ul");
    let printout = () => {
        el.innerHTML += `<li>${newPersonnage_1.nom} : ${newPersonnage_1.prenom}</li>
               <li> ${newPersonnage_2.nom} : ${newPersonnage_2.prenom}</li>
               <li> ${newPersonnage_3.nom} : ${newPersonnage_3.prenom}</li>
                `;
    };
    let afficher = printout();
    console.log(afficher);
});