document.addEventListener("DOMContentLoaded", () => {
    let prod_1, prod_2, total_ht, tva, stock, printout;
    printout = document.querySelector("section > p");
    prod_1 = parseFloat(prompt("Votre prix 1"));
    prod_2 = parseFloat(prompt("Votre prix 2"));
    total_ht = prod_2 + prod_1;
    tva = 0.196;
    stock = [];
    stock.push(prod_1, prod_2);

    console.log(`HT ${total_ht}`);
    console.log(`TVA ${total_ht * tva.toFixed(4)}`);
    console.log(`TTC ${total_ht + total_ht * tva.toFixed(4)}`);
    console.log(`Nombre de produit ${stock.length}`);

    printout.innerHTML += `HT ${total_ht}<br>
                    TVA ${total_ht * tva.toFixed(4)}<br>
                    TTC ${total_ht + total_ht * tva.toFixed(4)}<br>
                    Nombre de produit ${stock.length}
                    `;
    localStorage.setItem("stock", stock.length);
    let x = localStorage.getItem("stock");
    console.log(x);
});