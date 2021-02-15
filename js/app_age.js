document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let age, confirmer, print_out;
    age = parseInt(prompt("Votre age"));
    confirmer = confirm("Voulez-vous confirmer votre age?");
    print_out = document.querySelector("section h2");
    console.log(typeof age);
    //tester l'age
    if (age >= 18 && age <= 26) {
        if (confirmer) {
            console.log("merci d'avoir confirmé");
            print_out.innerText = `Votre age : ${age} ans vous avez droit à une réduction`;
        } else {
            console.log("Demande annulée");
            print_out.innerText = `Demande annulée`;
        }
    } else if (!age) {
        alert("Attention, veuillez saisir votre age");
        document.location.reload();
    } else {
        alert("Votre age doit être comprise entre 18 et 26 ans!");
        document.location.reload();
    }
});