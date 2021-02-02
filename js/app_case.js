document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    /* 
    expression conditionnelle switch 
      if expression ? test : else
      if expression
        test 1
    else if expression
        test 2
    else if expression
        test 3
    else
        test 4
    ************************************
    number = 10
    switch(number){
        case 10: 'bonne réponse'
        break;
        case 0: 'mauvaise réponse'
        break;
        case 2: 'mauvaise réponse'
        break;
    default : 
        message "pas de points"
      }
    */
    const expr = prompt("Cherchez un fruit");

    let response = document.getElementsByTagName("div")[0];
    let points = 0;

    switch (expr) {
        case 'orange':
            response.innerText = `Bonne réponse : ${expr} points ${points += 1}`, response.classList.add("success");
            break;
        case 'kiwi':
            alert("ce n'est pas ça!!!"), location.reload();
            break;
        default:
            response.innerText = `Je n'ai rien trouvé : ${expr}`, response.classList.remove("success");
    }
});