document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn = document.querySelector("button");
    let warning = document.querySelector(".warning");
    /* 
    event 
    1 click
    les états = down, Up, over, outside
    
    */
    let header = document.querySelector("header");
    let html = document.querySelector("html");
    header.addEventListener("click", event => {
        event.stopPropagation();
        //window.location.href="https://www.google.com/search?query=javascript"

    });

    btn.addEventListener("mousedown", event => {
        warning.style.display = "block";
        warning.innerText = "mousedown";
        event.stopPropagation();
    });
    btn.addEventListener("click", event => {
        warning.style.display = "block";
        warning.innerText = "mouseup";
        event.stopPropagation();
    });

    html.addEventListener("click", function () {
        //alert("touché");
        this.classList.toggle("header_class"); // classList.add, classList.remove, classList.toggle
        testBool();
    });
    //gestion d'un boolean
    let x = true; //variable globale

    let testBool = () => {
        x == true ? (x = false, console.log(x)) : (x = true, console.log(x));

        /*if(x==true){
            x=false;
            console.log(x)
        }
        else{
            x=true;
            console.log(x)
        }*/
    };
});