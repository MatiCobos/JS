const products = [
    {id: 1, name: "Product 1", price: 100, img: "/public/awayShirt.jpg", description: "This product will be available soon", stock: 1},
    {id: 2, name: "Product 2", price: 200, img: "/public/awayShirt.jpg", description: "This product will be available soon", stock: 2},
    {id: 3, name: "Product 3", price: 300, img: "/public/awayShirt.jpg", description: "This product will be available soon", stock: 3},
    {id: 4, name: "Product 4", price: 400, img: "/public/awayShirt.jpg", description: "This product will be available soon", stock: 4}
];

for (const product of products) {
    let contenedor = document.getElementById("container");
    let card = document.createElement("div");
    /* card.classList.add() */
    card.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${product.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p>$${product.price}</p>
                            <p class="card-text">${product.description}.</p>
                            <a href="#" class="btn btn-primary" onClick="addToCart()">Add to cart</a>
                        </div>
                    </div>`;
    contenedor.append(card);

}


const addToCart = () => {
    alert(`shopping cart coming soon`)
}



/* class Entradas {
    constructor(nombreValor, precioValor, stockValor) {
        this.nombre = nombreValor;
        this.precio = precioValor;
        this.stock = stockValor;
    }
}


const eventoA = new Entradas("La renga", 1000, 10);
const eventoB = new Entradas("Divididos", 3000, 10);


const listaEntradas = [eventoA, eventoB];
 */



/*let cantidadComprada = 0;
let precioTotal = 0;

let contador = 0;
let listaArtistas = "Hola bienvenido! acá vendemos entradas para estos artistas: ";

 for (const artista of listaEntradas) {
    contador++;
    listaArtistas += "\n" + contador + " " + artista.nombre;
}

function listaEventos() {
    alert(listaArtistas);
}

function sinStock(artista) {
    alert("Solo puede comprar hasta 10 entradas de " + artista);
}

function conStock(precio, artista, stock) {

    precioTotal += cantidadComprada * precio;
    alert("Se agrego al carrito " + cantidadComprada + " entradas para ver a " + artista + " en el Cosquin Rock 2022");
    stock -= cantidadComprada;
    console.log( usuario + " compraro " + cantidadComprada + " entradas de " + artista + " quedando un stock final de: " + stock);
}

function compra(precio, artista, stock) {

    cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"));
    if (cantidadComprada <= 10) {
        conStock(precio, artista, stock);
    }
    else {
        sinStock(artista);
        compra(precio, artista, stock);
    }
}

let usuario = (prompt("Hola, bienvenido! \nIngrese su nombre por favor:"));
listaEventos();
let cantidadDeLaCompra = parseInt(prompt("Ahora pongamos:\n1: Si queres para un artista\n2: Si queres para ambos."));

if (cantidadDeLaCompra <= 2) {

    for (let i = 0; i < cantidadDeLaCompra; i++) {
        let nombreCompra = prompt("Ingrese el nombre del artista que quiere comprar").toLowerCase();

        if ((nombreCompra === listaEntradas[0].nombre) || (nombreCompra === "la renga")) {
            compra(listaEntradas[0].precio, listaEntradas[0].nombre, listaEntradas[0].stock);
        }
        else if ((nombreCompra === eventoB.nombre) || (nombreCompra === "divididos")) {
            compra(listaEntradas[1].precio, listaEntradas[1].nombre, listaEntradas[1].stock);
        }
        else {
            alert("No tenemos entradas para ese artista");
        }
    }
}
else {
    alert("Solo tenemos para dos artistas");

}
alert("Muchas gracias por tu compra! Su saldo a pagar es: \n" + "$" + precioTotal); */