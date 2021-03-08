document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    //le nom de la class
    class User {
        //constructeur
        constructor(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }
        //getter
        getOut() {
            return `${this.nom} : ${this.prenom}`;
        }
    }
    let createUser = new User("Montana", "Tony");
    let printOut = createUser.getOut();
    console.log(printOut);
});