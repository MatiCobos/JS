const products = [
    {id: 1, name: "Home Shirt", price: 100, img: "/public/homeShirt.jpg", description: "This product will be available soon", category: "home shirt", stock: 1},
    {id: 2, name: "Away Shirt", price: 100, img: "/public/awayShirt.jpg", description: "This product will be available soon", category: "away shirt", stock: 2},
    {id: 3, name: "Pants", price: 300, img: "/public/sweatPants.jpg", description: "This product will be available soon", category: "pants", stock: 3},
    {id: 4, name: "Jacket", price: 400, img: "/public/jacket.jpg", description: "This product will be available soon", category: "jacket", stock: 4},
];

const cart = []

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

/* const inputSearch = (products)=>{
for (const product of products) {
    let contenedor = document.getElementById("container");
    let card = document.createElement("div");
    
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

} */

const inputSearch = () =>{
    products.filter((product) => {
        let input = document.getElementById("search").value
        if (product.category === input){
            let contenedor = document.getElementById("container");
            contenedor.innerHTML=" "
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
            console.log(product);
        }

    })
}

    let input = document.getElementById("search");
    input.addEventListener("change", inputSearch);

    const addToCart = () => {
        alert(`shopping cart coming soon `)
    }
