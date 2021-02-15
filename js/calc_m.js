document.addEventListener("DOMContentLoaded", () => {
    let print_date, target_date, notes, moyenne, i, printout;

    print_date = new Date();
    target_date = document.querySelector("footer p");
    printout = document.querySelector("section > p");
    console.log(print_date);
    target_date.innerHTML += `&nbsp;${print_date.getFullYear()}`;
    const nombreNote = 6;
    notes = [nombreNote];
    notes[0] = 12.5;
    notes[1] = 9.5;
    notes[2] = 15.5;
    notes[3] = 6.5;
    notes[4] = 10.5;
    notes[5] = 6.5;
    //calculer la moyenne
    moyenne = 0;
    console.log(notes.length);
    //nombreNote = notes.length


    //calculer la largeur du tableau
    for (i = 0; i < nombreNote; i++) {

        //notes[i] > 12.5 ? console.log(`meilleurs notes ${notes[i]}`) : moyenne += notes[i]
        notes[i] > 12.5 ? printout.innerText += ` ${notes[i]}` : moyenne += notes[i];
    }
    moyenne /= nombreNote;
    console.log(`Votre moyenne est : ${parseFloat(moyenne).toFixed(2)}`);
    printout.innerHTML += `<br> Votre moyenne est : ${parseFloat(moyenne).toFixed(2)}`;
});