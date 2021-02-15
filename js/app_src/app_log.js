document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");
    let btn, form, warning, connect, btn_form, traitement;
    btn = document.querySelector(".connect");
    form = document.querySelector(".form");
    warning = document.querySelector(".warning");
    btn_form = document.getElementsByTagName("input")[4];
    console.log(btn_form);
    /* affectation de valeur et de type */
    console.log(btn.innerText);

    btn.addEventListener("click", () => {
        form.classList.add('appear');
    });

    traitement = e => {
        e.preventDefault();
        let User = {
            nom: document.getElementsByTagName("input")[0].value,
            prenom: document.getElementsByTagName("input")[1].value,
            login: document.getElementsByTagName("input")[2].value,
            mdp: document.getElementsByTagName("input")[3].value
        };
        if (!User.nom || !User.prenom || !User.login || !User.mdp || !isNaN(User.login)) {
            warning.style.display = "block";
            warning.classList.add("warning");
            warning.classList.remove("success");
            warning.textContent = "Champs vides: remplir les champs!";
        } else {
            sessionStorage.setItem("login", User.nom);
            localStorage.setItem("login", User.login);
            localStorage.setItem("mdp", User.mdp);
            /* lien avec la 2ème page */
            window.location.assign("connection.html");
        }
    };

    btn_form.addEventListener("click", traitement);
});