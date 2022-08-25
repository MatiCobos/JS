let entradasEventoA = "la renga"
let precioEntradasEventoA = 1000
let stockEntradasEventoA = 10

let entradasEventoB = "divididos"
let precioEntradasEventoB = 3000
let stockEntradasEventoB = 10

let cantidadComprada //?
let precioTotal = 0


let nombreUsuario = prompt("Hola, bienvenido! \n Ingrese su nombre por favor:")
let cantidadDeLaCompra = parseInt(prompt(`Hola ${nombreUsuario}! Indique de cuantos artistas diferentes quiere las entradas. En este sitio vendemos entradas para Divididos y La Renga`))

if (cantidadDeLaCompra <= 2){
    for(let i = 0; i < cantidadDeLaCompra; i++){
        let nombreCompra = prompt("Ingrese el nombre del artista que quiere comprar").toLowerCase()

        if (nombreCompra === entradasEventoA){
            cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"))

            if (cantidadComprada <= stockEntradasEventoA){
                precioTotal += cantidadComprada * precioEntradasEventoA
                alert(`Se agrego al carrito ${cantidadComprada} entradas para ver a ${entradasEventoA}`)
                stockEntradasEventoA = stockEntradasEventoA - cantidadComprada

                console.log(`${nombreUsuario} compro ${cantidadComprada} entradas de ${entradasEventoA} quedando un stock final de: ${stockEntradasEventoA}`);
                precioTotal += cantidadComprada * precioEntradasEventoA

            }
            else{
                alert("Solo puede comprar hasta 10 entradas")
            }
        }
        else if (nombreCompra === entradasEventoB){

            cantidadComprada = parseInt(prompt("Ingrese la cantidad de entradas que quiere"))

            if (cantidadComprada <= stockEntradasEventoB){

                precioTotal += cantidadComprada * precioEntradasEventoB
                alert(`Se agrego al carrito ${cantidadComprada} entradas para ver a ${entradasEventoB}`)
                stockEntradasEventoB = stockEntradasEventoB - cantidadComprada
                console.log(`${nombreUsuario} compro ${cantidadComprada} entradas de ${entradasEventoB} quedando un stock final de: ${stockEntradasEventoB}`)
                precioTotal += cantidadComprada * precioEntradasEventoB
            }
            else{
                alert("Solo puede comprar hasta 10 entradas")
            }
        }
        else{
            alert("No tenemos entradas para ese artista")
        }
    }
}

else{
    alert("Solo tenemos para dos artistas")
}

alert(`${nombreUsuario} muchas gracias por tu compra! Su saldo a pagar es: $${precioTotal}`)