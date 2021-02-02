document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, message;
    btn = document.querySelector("section > button");
    message = document.querySelector("section > p");

    let translateColor = () => {
        //function fléchée
        let userChoise, warning;
        userChoise = prompt("Choisir une couleur : vert, rouge, bleu");
        warning = document.querySelector(".warning");

        switch (userChoise) {
            case "rouge":
                message.style.display = "block";
                message.style.color = "rgb(200, 0, 0)";
                warning.style.display = "none";
                message.innerText = `La couleur choisi est ${userChoise}. Rouge en gb c'est red`;

                break;
            case "vert":
                message.style.display = "block";
                message.style.color = "rgb(39, 174, 96)";
                warning.style.display = "none";
                message.innerText = `La couleur choisi est ${userChoise}. vert en gb c'est green`;
                break;
            case "bleu":
                message.style.display = "block";
                message.style.color = "rgb(0, 0, 200)";
                warning.style.display = "none";
                message.innerText = `La couleur choisi est ${userChoise}. Bleue en gb c'est bleue`;
                break;
            default:
                warning.style.display = "block";
                message.style.display = "none";
                warning.innerText = "Je ne connais pas la couleur!!!";

        }
    };
    //l'évenement pour le bouton
    //btn.addEventListener("click", translateColor)
    btn.addEventListener("click", event => {
        event.preventDefault();
        translateColor();
    });
});