document.addEventListener("DOMContentLoaded",()=>{
    console.log("ok")
    let btn, form, warning, email, mdp, formActive, submit, parents /* portée des variables globales */
    parents = document.querySelector(".form")
    warning = document.createElement("p")
    parents.prepend(warning)
    warning.innerText = "warning"



    btn = document.querySelector("section a")
        form = document.getElementsByClassName("form")[0]
        //console.log(form.getAttribute("class"))
        btn.addEventListener("click",(e)=>{
            e.preventDefault()
            form.classList.add("appear")
        })
        /* methode */
        formActive =()=>{
            /* portée locale */
            /*email = document.getElementsByTagName("input")[0].value*/
            email = document.getElementsByName("mail")[0].value
            mdp = document.getElementsByTagName("input")[1].value
            let expr = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
            let nombre = Number(8)

           /* email && mdp ?(warning.classList.add("success"),warning.innerText="Vous êtes logué"): 
            (warning.style.display="block"),(warning.innerText="Remplir les champs")*/

            if(email && mdp && expr.test(email) && mdp.length===nombre){
                warning.classList.add("success")
                warning.innerText="Vous êtes logué"
                localStorage.setItem("user",email)/* stocker le login */
                sessionStorage.setItem("session",true)
                document.location.assign("formulaire_base_membre.html")
               
            }
            else if(!expr.test(email)){
                warning.style.display="block"
                warning.innerText="Mail invalide!!!"
                warning.classList.remove("success")
            }
          
           
            else{
                warning.style.display="block"
                warning.innerText="Remplir les champs ou nombre de caractères pour le mot de passe trop élévé"
                warning.classList.remove("success")
            }
        }
        /* appel de la fonction */
        submit = document.getElementsByTagName("input")[2]
        /* bouton valider */
        submit.addEventListener("click",(e)=>{
            e.preventDefault()
            formActive()
        })
        

})