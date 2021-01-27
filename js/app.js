//la fonction principale
document.addEventListener("DOMContentLoaded", () => {
    // fonction main
    //DOM Document Objet Model => html BOM
    console.log("loaded!!!");
    const version = "ES6";

    let nom, prenom, nombre, versions;
    nom = "Eich";
    nombre = 140;
    user = new String("Brandan");
    status = Boolean(true);
    versions = 7.5;
    let afficherReel = parseFloat(versions.toFixed(2));

    //function 
    let calc = n => {
        return n * n;
    };
    let out_put = calc(nombre);
    console.log(`le résultat est : ${out_put}`);
    console.log(` Résultat => ${nombre} : 
                            ${typeof nom} ${typeof user} ${afficherReel}
                            `);
    //code...
    /*
    opérateurs
     =
     -
     +
     *
     /
     index = 0
     index = index + 1 incrémentation de 1
     ++
     --
     ==
     === type et une valeur "100" == 100
     += 
     -=
     %
     && 
     || ou
     >
     <
     >=
     <=
      */
    let chiffre = 145;
    chiffre % 2 ? console.log("impaire") : console.log("paire"); //condition ternaire
    let lang = ["html", "css", true];
    lang.push("Java", "Python"); // largeur
    let annee = [1990, 1998, false];
    let groupe = [...lang, ...annee]; // pread Opérateur
    // destructuring table
    let [a, b, c] = lang;
    console.log(a, c);
    //console.table(groupe)
    groupe.includes("php") ? console.log("bonne réponse") : console.log("mauvaise réponse");

    //objet
    let Produit = { //index clé valeur
        type: "pc",
        marque: "Azus",
        ram: "64Go",
        prix: 1500
        /*getout(){
            console.log(this.type)
        }*/


        //Produit.getout()
    };for (index in Produit) {
        let value = Produit[index];
        console.log(`${index} : ${value}`);
    }
    //déclaration du DOM
    let element = document.getElementsByTagName('title')[0];
    console.log(element.childNodes[0].nodeValue);
    element.innerText = "ECMAscript 6";
});