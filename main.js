//Variables
let entradasEventoA = "la renga"
let precioEntradasEventoA = 1000
let stockEntradasEventoA = 10

let entradasEventoB = "divididos"
let precioEntradasEventoB = 3000
let stockEntradasEventoB = 10
let cantidadComprada  //?
let precioTotal = 0
//Fin variables

//Funciones
function sinStock (artista){
    alert("Solo puede comprar hasta 10 entradas de " + artista)
} 

function conStock(precio, artista, stock){

    precioTotal += cantidadComprada * precio
    alert("Se agrego al carrito " + cantidadComprada + " entradas para ver a " + artista + " en el Cosquin Rock 2022")
    stock -= cantidadComprada
    console.log(nombreUsuario + " compró " + cantidadComprada + " entradas de " + artista + " quedando un stock final de: " + stock);
}

function compra(precio, artista, stock){
    
    cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"))
    if (cantidadComprada <= 10){
        conStock(precio, artista, stock)
    }
    else{
        sinStock(artista)
    }
}
//Fin funciones

let nombreUsuario = prompt("Hola, bienvenido! \nIngrese su nombre por favor:")

let cantidadDeLaCompra = parseInt(prompt("Hola " + nombreUsuario + "! indique de cuantos artistas diferentes quiere las entradas, en este sitio vendemos entradas para Divididos y La renga"))
if (cantidadDeLaCompra <= 2){

for(let i = 0; i < cantidadDeLaCompra; i++){
    let nombreCompra = prompt("Ingrese el nombre del artista que quiere comprar").toLowerCase()
    if (nombreCompra === entradasEventoA){
        compra (precioEntradasEventoA, entradasEventoA, stockEntradasEventoA)
    }
    else if (nombreCompra === entradasEventoB){
        compra (precioEntradasEventoB, entradasEventoB, stockEntradasEventoB)
    }
    else{
        alert("No tenemos entradas para ese artista")
    }

}
}
else{
    alert("Solo tenemos para dos artistas")
}
alert(nombreUsuario + " muchas gracias por tu compra! Su saldo a pagar es: \n" + "$" + precioTotal)