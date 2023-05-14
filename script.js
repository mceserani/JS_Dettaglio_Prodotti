let prodotti = [];

// Onload, initialize the array from "prodotti.json" file
window.onload = function(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            prodotti = JSON.parse(xhr.responseText);
            showProducts();
        }
    }
    xhr.open("GET", "prodotti.json", true);
    xhr.send();
}; 

// Save the array to "prodotti.json" file
function saveProducts(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log("Salvataggio effettuato");
        }
    }
    xhr.open("POST", "prodotti.json", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(prodotti));
};


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

function deleteProduct(){
    let id = prompt("Inserisci l'id del prodotto");
    let i = 0;
    for (let prodotto of prodotti){
        if (id == prodotto.id){
            prodotti.splice(i,1);
        }
        i++;
    }
    showProducts();
}

function sortProducts(){
    prodotti.sort(function(a,b){
        if (a.name < b.name){
            return -1;
        }
        if (a.name > b.name){
            return 1;
        }
        return 0;
    });
    showProducts();
}