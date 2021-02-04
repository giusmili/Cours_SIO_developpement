document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");

    let led, random, compte, target;
    led = document.querySelector("figure img");
    random = document.querySelector("body");
    target = document.querySelector("section p");
    console.log(led);

    compte = 0; //variable global
    point = 0;

    led.addEventListener("click", () => {
        compte = compte + 1;
        target.innerText = compte;
        console.log(led.tagName);
        led.classList.toggle("anim");
        random.classList.toggle("random");

        if (compte >= 10) {
            led.classList.remove("anim");
            random.classList.remove("random");
            compte = 0; //reset compte
            //led.setAttribute("src","asset/boom.jpg")
        }
    });
});