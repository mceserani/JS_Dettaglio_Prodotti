let prodotti = [];

window.addEventListener('load',() => {
    // Open the file "prodotti" and read it in the vector prodotti
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            prodotti = JSON.parse(xhr.responseText);
            showProducts();
        }
    };
    xhr.open("GET", "prodotti", true);
    xhr.send();
});

window.addEventListener('beforeunload',() => {
    // Save the vector prodotti in the file "prodotti" 
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "prodotti", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(prodotti));
});

function addProduct(){
    // Acquire id from a prompt box
    let id_prodotto = prompt("Inserisci l'id del prodotto");
    // Acquire name from a prompt box
    let nome_prodotto = prompt("Inserisci il nome del prodotto");
    // Acquire price from a prompt box
    let prezzo_prodotto = prompt("Inserisci il prezzo del prodotto");
    // Acquire description from a prompt box
    let descrizione_prodotto = prompt("Inserisci la descrizione del prodotto");
    let prodotto = {
        id: id_prodotto,
        name: nome_prodotto,
        price: prezzo_prodotto,
        description: descrizione_prodotto
    };
    prodotti.push(prodotto);
    showProducts();
}

function showProducts(){
    let listaHTML= "<ul>";
    let pl = document.getElementById("product-list");
    for (let prodotto of prodotti){
        listaHTML = listaHTML + "<li>" + prodotto.id + " - " + prodotto.name + " - " + prodotto.price + " - " + prodotto.description + "</li>";
    }
    listaHTML = listaHTML + "</ul>";
    pl.innerHTML=listaHTML;
}