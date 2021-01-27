document.addEventListener("DOMContentLoaded", () => {
    //function main
    console.log("chargé");

    //objet => une méthode + propriétés
    const version = parseFloat(7.5);
    let nombre = 20;
    var nom = "Eich"; // version 5 de js
    let prenom, ville, status, tab_lang; //contexte de varaibles
    prenom = "Tom", ville = "Rome", status = true;
    console.log(`Nom ${prenom} Ville 
                ${ville} Status ${true}`); //concatener

    //type de variable 
    console.log(`Type ${typeof version} : ${version}`);
    // number, string, boolean
    tab_lang = ["html", "css", "js", true]; //index  0 1 2
    console.log(tab_lang.length);
    tab_lang.push(nom);
    console.table(tab_lang); /* 
                             push() add, shift() supprimer le 1er
                             pop() supprime le dernierè
                             */
    let tab_lang_add = ["Java", "Python"];
    let tab_gen = [...tab_lang, ...tab_lang_add];
    console.table(tab_gen);

    //destructuring table
    // destructuring table
    let [a, b, c] = tab_gen;
    console.log(a, b, c); //html js
    //console.table(groupe)
    console.log(tab_gen.includes("toto"));
    // Asynchrone vs Synchrone
    /*
    Javascript
    Object
    Notation
      Asynchrone
    Javascript
    And
    XML
      jQUERY
      */
    // objet js = objet : propriétés et méthode
    const UserWeb = {
        nom: "Montana",
        prenom: "Tony",
        surnom: "Scarface",
        arme: "Mitrailleuse",
        statut: false,
        getUserWeb() {
            return this.nom;
        }

    };
    console.table(UserWeb);
    let printOut = UserWeb.getUserWeb();
    console.log(printOut);

    // méthode => fonction
    let calc = n => {
        return n * n / 2;
    };

    let person = (nom, prenom, surnom) => {
        return `${nom} : ${prenom} : ${surnom}`;
    };
    let calcPrint = person(UserWeb.nom, UserWeb.prenom, UserWeb.surnom);
    console.log(calcPrint);

    let eleve = () => {
        return UserWeb.surnom;
    };

    console.log(eleve()); // callBack

    //itération => boucle
    let i;
    /*while(i < 10){
        i++;
        
    }
    console.log(i)
    */
    /*for(i = 0; i < 10; i++){
        console.log('passage de i = '+i);
    }*/
    /*for(i = 0; i < tab_lang.length; i++){
        console.log(tab_lang[i])
    }*/
    let produit = {
        marque: "apple",
        prix: 1200,
        etat: "neuf"
    };
    for (index in produit) {
        console.log(index + ' ' + produit[index]); //clé et valeur
    }
});