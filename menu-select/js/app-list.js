document.addEventListener("DOMContentLoaded",()=>{
    console.log("ok")
    let select_country = document.querySelector("select")
    let activate_form = document.querySelector("fieldset")
    let header = document.querySelector("header h1")
    let footer = document.querySelector("footer p")
    activate_form.setAttribute("disabled","true")
    /* tester le DOM concernant la liste déroulante */
    console.log(select_country)
    console.log(select_country.options[0].value)
    /* créer un élément dans main */
    let el = document.querySelector("main")
    let elements = document.createElement("p")
    el.prepend(elements) /* l'élément se places au dessus */
    elements.innerText = "warning"
    /* ajouter une classe à l'élémént */
    elements.classList.add("warning")

    /* bouton d'activation */
    header.addEventListener("click",()=>{
        activate_form.removeAttribute("disabled") /* supprime un attribute de la balise html */
    })
    /* itération option par option */

   for(let i = 0; i<select_country.options.length; i++){
        console.log("Pays : "+select_country.options[i].value)
    }
    //console.log(select_country.innerText)
    
    select_country.addEventListener("change",()=>{
        
       if(!select_country.value){
            //alert("Faites votre choix")
            elements.classList.add("alert")
            elements.classList.remove("success")
            elements.innerText = "Faites votre choix"
        }
        else if(select_country.value===select_country.options[1].value){
            //alert("Hello la : "+select_country.options[1].value);
            elements.classList.add("success")
            elements.classList.remove("alert")
            elements.innerText = "Hello la : "+select_country.options[1].value
        }
        else{
            //alert("Votre pays est : "+select_country.value)
            elements.classList.add("success")
            elements.classList.remove("alert")
            elements.innerText = "Votre pays est : "+select_country.value
            
        }
    })
    /* objet date */
     let dates = {
            years: new Date().getFullYear(),
            days : new Date().getMonth()
    }
     console.log(dates.years)
     footer.innerText+=` ${dates.years}`
    
})