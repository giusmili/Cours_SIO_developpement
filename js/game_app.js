document.addEventListener("DOMContentLoaded",()=>{
    console.log("chargé")
    let el = document.querySelector(".picture")
    let winner = document.querySelector(".picture img")
    let target = document.querySelector("section p")
    //winner.setAttribute("src","./asset/boom.jpg")
    let bool = winner.getAttribute("src")
    let question_1, points
    //console.log(winner.src.name)
    points = 0;
    //question_1 = parseInt(prompt("Découverte de l'amérique"))
     switch(question_1){
        case 1492 :
             alert("Bonne réponse")
             points++
             target.innerText = "Bonne réponse vous avez "+points+" points"
             console.log("Bonne réponse vous avez "+points)
        break;
        default :
            alert("mauvaise réponse")
            target.innerText = "Mauvaise réponse vous avez "+points+" points"

            console.log("Bonne réponse vous avez "+points)
            
     }

     if(points == 1){
         winner.setAttribute("src","./asset/boom.jpg")
     }

     winner.addEventListener("click",function(){
        if(bool == this.getAttribute("src")){
            this.setAttribute("src","./asset/boom.jpg")
            target.textContent = this.getAttribute("src")
        }
        else{
            this.setAttribute("src","./asset/lampe.png")
            target.textContent = this.getAttribute("src")
        }
        
    })


})