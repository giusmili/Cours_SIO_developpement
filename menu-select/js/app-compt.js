document.addEventListener("DOMContentLoaded",()=>{
    console.log("ok")

    let nbclick, btn, cible
    nbclick = 0;
    btn = document.getElementsByClassName("btn-activate")[0]
    cible = document.querySelector(".warning")
    
    btn.addEventListener("mousedown",()=>{
        nbclick++
        //console.log(nbclick)
        cible.classList.add("success")
        cible.innerText=nbclick
        
            if(nbclick>=10){
                nbclick=10
                cible.classList.add("alert")
                cible.innerText="Trop de cliques!!!"
                console.log(nbclick)
               
                
            }
        
    })
})