document.addEventListener("DOMContentLoaded", () => {
    let printout = document.querySelector("section p");
    let note_1, note_2, note_3, notes, moyenne, totalNotes;
    note_1 = parseFloat(prompt("Entrez votre première note"));
    note_2 = parseFloat(prompt("Entrez votre deuxième note"));
    note_3 = parseFloat(prompt("Entrez votre troisième note"));
    notes = [];
    notes.push(note_1, note_2, note_3);
    console.table(notes);
    moyenne = 0;
    totalNotes = notes.length;

    for (let i = 0; i < totalNotes; i++) {
        console.log(notes[i]);
        moyenne += notes[i];
    }
    moyenne /= totalNotes;
    printout.innerText += `Votre moyenne est de ${moyenne.toFixed(2)}`;
});