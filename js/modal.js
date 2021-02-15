document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let time, event_appear, modal, closed, el, print_out;
    time = document.querySelector("time");
    event_appear = document.querySelector("header code");
    modal = document.querySelector("section");
    closed = document.querySelector("figure a");
    el = document.querySelector("figure");
    time.setAttribute("datetime", "1966-02-11");
    console.log(time.getAttribute("datetime"));
    time.innerText += ` ${time.getAttribute("datetime")}`;
    //time.innerTchildNodes[0].nodeValue.ext += ""
    //event
    event_appear.addEventListener("click", event => {
        event.stopPropagation();
        modal.classList.add("appear");
    });
    closed.addEventListener("click", event => {
        event.stopPropagation();
        modal.classList.remove("appear");
    });
    modal.addEventListener("click", event => {
        event.stopPropagation();
        modal.classList.remove("appear");
    });
    el.addEventListener("click", event => {
        event.stopPropagation();
    });
});