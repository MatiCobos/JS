let cart = [];

// Pinto todos los productos en la Home
fetch('./data.json')
.then((resp)=>resp.json())
.then((data) => {
    const container = document.getElementById("container");
    data.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add( "col-sm-6", "col-lg-4")
    card.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${product.img}" class="card-img-top">
                        <hr>
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <div class="price-container">
                                <p>$${product.price}</p> <p class="through">$${product.before}</p>
                            </div>
                            <p class="card-text">${product.description}.</p>
                            <hr>
                            <button type="button" class="btn btn-primary" id="add${product.id}">Add to cart</button>
                        </div>
                    </div>`;
    container.append(card);

    const button = document.getElementById(`add${product.id}`);
    button.addEventListener("click", () => {
        addToCart(product.id);
    });
});

});

//Boton agregar al carrito
const addToCart = (prodId) => {
    Toastify({

        text: `You added the product to the cart`,
        position: "right",
        gravity: "bottom",
        duration: 3000

    }).showToast();

    const exist = cart.some (product => product.id === prodId);
    if (exist){
        const prod = cart.map (product => {
            if (product.id === prodId){
                product.quantity++
                renderCart();
            };

        });
    }

    else{
        fetch('./data.json')
        .then((resp)=>resp.json())  
        .then((data) => {
        const item = data.find ((product) => product.id === prodId);
        cart.push(item);
        renderCart();
        });
    };   
};

//Pinto todos los productos en el carrito
const cartContainer = document.getElementById("cartContainer");
const totalPrice = document.getElementById("totalPrice");

const renderCart = () =>{
cartContainer.innerHTML ="";

    cart.forEach((product)=>{
        const div = document.createElement("div");
        div.innerHTML = `
        <img src="${product.img}" class="img-thumbnail">        
            <p>${product.name}</p>
            <p>Quantity: <span id="quantity">${product.quantity}</span></p>
            <button type="button" class="btn btn-danger" onclick="deleteItem (${product.id})">Delete</button>
        `
        cartContainer.appendChild(div);

        localStorage.setItem("cart", JSON.stringify(cart));
    })
    totalPrice.innerText = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
};

//Boton borrar item del carrito
const deleteItem = (prodId)=>{
    const item = cart.find ((product)=> product.id === prodId);
    const indice = cart.indexOf(item);
    cart.splice(indice, 1);
    renderCart();
    
};

//Vacio el carrito
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    cart.length = 0;
    Swal.fire(
        'SHOPPING CART',
        'Your cart is empty. If you see something you would like to add to your bag while shopping, click Add to cart',
        'success'
    );
    renderCart();

    //Vacia el carrito en el storage al presionar vaciar carrito
    localStorage.clear("cart");
     
});

//Boton Checkout
const checkOutButton = document.getElementById("Checkout");
checkOutButton.addEventListener("click", ()=>{
        Swal.fire(
        'SHOPPING CART',
        'Your purchase is being processed, you will soon receive the instructions',
        'success'
    );
});

//Barra de busqueda
let input = document.getElementById("search");

input.addEventListener('keyup', e => {
    if (e.target.matches("#search")){
        document.querySelectorAll(".card").forEach(product => {
            product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?product.classList.remove("filtro")
            :product.classList.add("filtro")
        });
    };
});

//Al recargar la pagina actualiza el carro con los datos del storage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        renderCart();
    };
});