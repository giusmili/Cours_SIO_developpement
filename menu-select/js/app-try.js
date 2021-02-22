document.addEventListener("DOMContentLoaded",()=>{
    console.log("ok")
    let testValue
        const btn = document.getElementById("test")

        testValue = ()=>{

            let test={
                warning: document.getElementsByClassName("warning")[0],
                result: document.getElementById("nb").value
            }
            //console.log(test.warning.innerText)
            //tester le try
            try{
                if((isNaN(test.result)) || (!test.result)){
                    test.warning.classList.add("alert")
                    test.warning.classList.remove("success")
                    //throw "Vous devez mettre des chiffre ou champ vide!!!"
                    throw test.warning.innerText=test.result+" Vous devez mettre des chiffre ou champ vide!!!"
                }
                else if((test.result < 1 ) || (test.result > 10)){
                    test.warning.classList.add("alert")
                    test.warning.classList.remove("success")
                    //throw "Valeur trop grande ou trop petite"
                    throw test.warning.innerText=test.result+" Valeur trop grande ou trop petit"
                    
                }
                else{
                    test.warning.classList.add("success")
                    test.warning.classList.remove("alert")
                    throw test.warning.innerText=test.result+" nombre valide"
                }
            }
            
            //catch
            
            catch(e){
                console.log(e)
                test.warning.innerText = e
            }
        
        }
        
        //window.addEventListener("load",testValue)

            btn.addEventListener("click", (e)=>{
                e.preventDefault()
                testValue()

            })
        

     

})