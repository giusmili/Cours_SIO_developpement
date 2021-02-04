document.addEventListener("DOMContentLoaded",()=>{
    let duck, message, points
    duck = document.querySelector(".icone")
    message = document.querySelector("section p")
    console.log("ok")
    points = 0
    btn = document.querySelector("header")
    
    
    duck.addEventListener("mousedown",function(){
        this.classList.toggle("arret")
        points++
        message.innerText = points+" points"


    })
})