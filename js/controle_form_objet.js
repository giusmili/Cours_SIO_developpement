document.addEventListener("DOMContentLoaded", () => {
    console.log(200);

    const user = {
        nom: document.getElementsByTagName("input")[0].value,
        prenom: document.getElementsByTagName("input")[1].value,
        validate: document.getElementsByTagName("input")[2],
        getOut() {

            return this.validate;
        }
    };
    let prints = user.getOut();

    user.validate.addEventListener("click", e => {
        e.preventDefault();
        console.log(prints);
    });
});