document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    let btn, form, warning, connect, btn_form, traitement;
    /* 
    ouvrir le formulaire
    bouton 
    */
    btn = document.querySelector(".connect");
    form = document.querySelector(".form");
    warning = document.querySelector(".warning");
    btn_form = document.getElementsByTagName("input")[2];
    console.log(btn_form);
    /* affectation de valeur et de type */
    console.log(btn.innerText);

    btn.addEventListener("click", () => {
        form.classList.add('appear');
    });
    /* 
    vérifier les champs  avec une fonction
      */
    traitement = event => {
        event.preventDefault();
        /* objet */
        let User = {
            nom: document.getElementsByTagName("input")[0].value,
            mdp: document.getElementsByTagName("input")[1].value,
            login: "julien@gmail.com",
            password: 2021
            //console.log(User.login) API Application Programming Interface
            /* vérifier les champs par la fonction */
            //console.log(!User.nom)
        };if (!User.nom || !isNaN(User.nom) || !User.mdp) {
            warning.style.display = "block";
            warning.classList.add("warning");
            warning.classList.remove("success");
            warning.textContent = "Champs vides: saisissez votre login et mot de passe";
        } else if (User.nom == User.login && User.mdp == User.password) {
            warning.style.display = "block";
            warning.classList.add("success");
            warning.textContent = `Votre login est: ${User.nom} et votre mot de passe est : ${User.mdp}`;
            sessionStorage.setItem("login", User.nom);
            /* lien avec la 2ème page */
            window.location.assign("connection.html");
        } else {
            warning.style.display = "block";
            warning.classList.add("warning");
            warning.classList.remove("success");
            warning.textContent = `Login ou mot de passe pas corrects`;
        }
    };

    btn_form.addEventListener("click", traitement);
});