document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let parent, el, list, title, superparent;
    superparent = document.querySelector("body");
    parent = document.querySelector("main");
    list = document.querySelector("section ul");
    console.log(parent.parentNode);
    console.log(parent.childNodes);
    console.log(parent.childNodes[5].parentNode);
    console.log(parent.nextSibling);
    console.log(list.childNodes[3].innerText = "Hello");
    title = document.querySelector("title");
    title.childNodes[0].nodeValue = "javascript";
    console.log(title.childNodes[0].nodeValue);
    /* element virtuel */
    el = document.createElement("p");
    //parent.appendChild(el) à la fin de l'élémént parent
    parent.prepend(el); //début de l'élément parent
    el.classList.add("alert_warning");
    el.innerText = "Warning";
    el.style.textAlign = "center";
    el.style.color = "#fff";

    el.addEventListener("click", function () {
        console.log("hello");
        this.remove();
    });

    for (let i = 0; i < parent.childNodes.length; i++) {
        console.log(parent.childNodes[i]);
    }

    superparent.addEventListener("click", () => {
        //parent.remove();
    });
});