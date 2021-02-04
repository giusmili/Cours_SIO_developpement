document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    console.log("chargé");
    let btn, lampe, x, bgdark, slide;

    btn = document.querySelector("figure figcaption h2");
    lampe = document.querySelector("figure img");
    bgdark = document.querySelector("body");
    slide = document.querySelector("section");
    btn.textContent = "on";

    x = false;
    btn.addEventListener("click", function () {
        console.log(this.tagName);
        //x==true ? (x=false, lampe.style.filter = "grayscale(100%)", this.textContent ="off") : (x=true, lampe.style.filter = "grayscale(0)", this.textContent ="on")
        lampe.classList.toggle("light");
        this.textContent == "on" ? this.textContent = "off" : this.textContent = "on";
        bgdark.classList.toggle("bgdark");
        slide.classList.toggle("slide-on");
    });
});