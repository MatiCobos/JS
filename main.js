const products = [
    {id: 1, name: "Home Shirt", price: 100, img: "/public/homeShirt.jpg", description: "This product will be available soon", category: "home shirt", quantity: 1},
    {id: 2, name: "Away Shirt", price: 100, img: "/public/awayShirt.jpg", description: "This product will be available soon", category: "away shirt", quantity: 1},
    {id: 3, name: "Pants", price: 300, img: "/public/sweatPants.jpg", description: "This product will be available soon", category: "pants",  quantity: 1},
    {id: 4, name: "Jacket", price: 400, img: "/public/jacket.jpg", description: "This product will be available soon", category: "jacket",  quantity: 1},
];

const cart = [];

//Vacio el carrito
const deleteButon = document.getElementById("deleteButon");
deleteButon.addEventListener("click", ()=>{
    cart.length = 0;
    Swal.fire(
    'SHOPPING CART',
    'Your cart is empty. If you see something you would like to add to your bag while shopping, click Add to cart',
    'success'
)
    updateCart();
});


//Tratando de guardar en el local storage (no me salió, no entendi)
/* document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem("cart")){
        cart = JSON.parse(localStorage.getItem("cart"))
        updateCart()
    }
})
 */


// Pinto todos los productos en la Home
const container = document.getElementById("container");

products.forEach((product) => {
    let card = document.createElement("div");
    /* card.classList.add() me guardo esto para cuando estile asi no me olvido la sintaxis */
    card.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${product.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p>$${product.price}</p>
                            <p class="card-text">${product.description}.</p>
                            <button id="add${product.id}">Add to cart</button>
                        </div>
                    </div>`;
    container.append(card);

    const button = document.getElementById(`add${product.id}`);
    button.addEventListener("click", () => {
        addToCart(product.id);
    });
});

//Boton agregar al carrito
const addToCart = (prodId) => {
    const exist = cart.some (product => product.id === prodId);
    if (exist){
        const prod = cart.map (product => {
            if (product.id === prodId){
                product.quantity++
            };
        });
    }
    else{
        const item = products.find ((product) => product.id === prodId);
        cart.push(item);
        console.log(cart); 
    };

    updateCart();
}

//Boton borrar item del carrito
const deleteItem = (prodId)=>{
    const item = cart.find ((product)=> product.id === prodId);
    const indice = cart.indexOf(item);
    cart.splice(indice, 1);
    updateCart();
};

//Pinto todos los productos en el carrito
const cartContainer = document.getElementById("cartContainer");
const totalPrice = document.getElementById("totalPrice");

const updateCart = () =>{
cartContainer.innerHTML =""

    cart.forEach((product)=>{
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${product.name}</p>
            <p>Quantity: <span id="quantity">${product.quantity}</span></p>
            <button onclick="deleteItem (${product.id})">Delete</button>
        `
        cartContainer.appendChild(div);

        //Tratando de guardar en el local storage (no me salió, no entendi)
        //localStorage.setItem("cart", JSON.stringify(cart))
    })
    totalPrice.innerText = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
};


//Barra de busqueda
let input = document.getElementById("search");

input.addEventListener('keyup', e => {
    if (e.target.matches("#search")){ //busca el id search
        //Selecciona todas los productos
        document.querySelectorAll(".card").forEach(product => { //recorremos los productos
            //convertimos a minuscula para evitar errores en la busqueda
            product.textContent.toLowerCase().includes(e.target.value.toLowerCase()) //busca el caracter ingresado
                //Si esta se quita la clase filtro definida en css
                ?product.classList.remove("filtro")
                //Si no esta la agrega
            :product.classList.add("filtro")
        })
    }
})