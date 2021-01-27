document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    //DOM vs BOM
    /*
    Document
    Object
    Model
      ***********************
      Broswer
    Object
    Model
    */

    const title_primary = "ECMAScript 6";
    console.log(title_primary);
    let el = document.getElementsByTagName("title");
    console.log(el);
    //console.log(el[0].childNodes[0].nodeValue=title_primary)
    console.log(el[0].innerText = title_primary);

    let header_title = document.querySelector("h1");
    console.log(header_title.innerText = title_primary);

    let footer = document.getElementsByClassName("footer")[0];
    let dateCopy = new Date().getFullYear();
    footer.innerHTML = `&copy; - ITIC - ${dateCopy}`;
    let sub_title = document.querySelector("section > h2");
    sub_title.innerText += " langage de programmation";
    let title_content = document.getElementsByTagName("h2")[1];
    title_content.innerHTML = "html<sup>5</sup>";

    /* user bom */
    let nom, prenom, ville, target, user;
    nom = prompt(String("Entrez votre nom"));
    prenom = prompt(String("Entrez votre prenom"));
    ville = prompt(String("Entrez votre ville"));
    user = [];
    /*if(prenom && nom && ville){
        user.push(prenom, nom, ville)
    }
    else{
        alert("ajouter vos informations")
        location.reload()
    }*/

    //prenom && nom && ville ? user.push(prenom, nom, ville) : (alert("ajouter vos informations"), location.reload());
    let warning = document.getElementsByClassName("warning")[0];
    prenom && nom && ville ? user.push(prenom, nom, ville) : warning.innerHTML = "<p>* remplir les champs. Cliquez ici</p>";
    /* btn */
    warning.addEventListener('click', () => {
        location.reload();
    });

    console.table(JSON.stringify(user)); /* transforme le flux en json */
    target = document.querySelector("ul");
    for (index in user) {
        target.innerHTML += `<li> ${index} : ${user[index]}</li>`;
    }
});