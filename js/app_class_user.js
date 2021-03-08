document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    //le nom de la class
    let nom, prenom, target, footer;
    target = document.querySelector("ul");
    footer = document.querySelector("footer p");

    class User {

        //constructeur
        constructor(nom, prenom) {
            this.nom = prompt("Entrez votre nom");
            this.prenom = prompt("Entrez votre prenom");
        }
        //getter
        getOut() {

            return `${this.nom} : ${this.prenom}`;
        }
        //setter
        verif() {
            if (this.nom && this.prenom) {

                target.innerHTML += `<li>${this.nom} : ${this.prenom}</li>`;
                localStorage.setItem("user", this.nom);
                return this.getOut();
            } else {
                alert("Remplir les champs");
                document.location.reload();
            }
        }
        static phrase() {
            //la propriété static ne permet pas de passer par l'objet mais par la classe
            footer.innerText += " Le monde est à vous";
            console.log("Le monde est à vous");
        }
    }
    //instances
    let createUser = new User(nom, prenom);
    createUser.verif();
    let printOut = createUser.getOut();
    console.log(printOut);
    let phrase = User.phrase();
});