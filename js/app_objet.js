document.addEventListener("DOMContentLoaded", () => {
    console.log("ok");
    /*
    un objet   
    Personnage
        Nom: string
        Prenom: string
        Status: string
        age: number
         methode(){}
    */
    let el = document.querySelector("section ul");
    const Personnage = {
        nom: "Montana",
        prenom: "Tony",
        status: "Boss",
        age: 30,
        photo: "./asset/scarface.jpg",
        getOut() {
            el.innerHTML += `<li>Nom : ${this.nom}</li>
            <li>Prénom : ${this.prenom}</li>
            <li>Status : ${this.status}</li>Age : ${this.age} ans </li>
            <li> <img src="${this.photo}" alt="${this.prenom}"></li>
            `;
            return `${this.nom} ${this.prenom} ${this.status} ${this.age} ans`;
        }
    };
    let personnage_1 = Personnage.getOut();
    console.log(personnage_1);
    let personnage_2 = Object.create(Personnage);
    personnage_2.nom = "Wayne";
    personnage_2.prenom = "Bruce";
    personnage_2.status = "Batman";
    personnage_2.age = 35;
    personnage_2.photo = "./asset/batman.jpg";
    let afficher = personnage_2.getOut();
    //console.log()
    let table = [];
    table.push(personnage_2);
    console.table(table);
    for (index in table) {
        console.log(index + " " + table[index].nom + " " + table[index].status);
    }
});