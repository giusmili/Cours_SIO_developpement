document.addEventListener("DOMContentLoaded", () => {
    let message, login, data, btn_back;
    message = document.querySelector("h1");
    login_connect = localStorage.getItem("login");
    message.innerHTML += `&nbsp;${login_connect}`;
    btn_back = document.querySelector(".connect");
    data = [];
    data.push(login_connect);
    console.table(data);
    /* se déconnecter */
    btn_back.addEventListener("click", () => {

        window.location.assign("index.html");
        localStorage.clear();
    });
});