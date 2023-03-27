let prodotti = [];


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
}