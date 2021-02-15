document.addEventListener("DOMContentLoaded", () => {
    let message, login, data, btn;
    message = document.querySelector("h1");
    login = sessionStorage.getItem("login");
    message.innerHTML += `&nbsp;${login}`;
    btn = document.querySelector(".connect");
    data = [];
    data.push(login);
    console.table(data);
    /* se déconnecter */
    btn.addEventListener("click", () => {

        window.location.assign("form_log.html");
        sessionStorage.clear();
    });
});