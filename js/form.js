document.addEventListener("DOMContentLoaded", () => {
    let btn, form, submit, warning, email, mdp;
    btn = document.querySelector('.connect');
    form = document.querySelector('.form');
    submit = document.getElementsByTagName("input")[2];
    /* event */
    btn.addEventListener("click", () => {
        form.classList.add("appear");
    });
    /* fonction control */
    let formActive = () => {
        warning = document.querySelector(".warning");
        email = document.getElementsByTagName("input")[0].value;
        mdp = document.getElementsByTagName("input")[1].value;

        if (!email || !mdp) {
            warning.style.display = "block";
            warning.textContent = "les champs sont vides!";
        } else {
            warning.style.display = "block";
            warning.textContent = `Votre mail est : ${email}`;
            warning.classList.add('success');
        }
    };

    submit.addEventListener("click", event => {
        event.preventDefault();
        formActive();
    });
});