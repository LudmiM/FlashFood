document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            nombre: "Super combo Burger King",
            imagen: "assets/04_superComboBurgerKing.png",
            descripcion: "Hamburguesa completa, con cheddar, papas fritas clásicas y gaseosa a elección.",
            precio: 8400
        },
        {
            nombre: "Burger King Classic",
            imagen: "assets/04_burgerKingClassic.png",
            descripcion: "Hamburguesa completa, con papas fritas clásicas y gaseosa a elección.",
            precio: 7400
        },
        {
            nombre: "Mega combo Burger King",
            imagen: "assets/04_megaComboBurgerKing.png",
            descripcion: "Hamburguesa doble completa, con cheddar, papas fritas regilla y gaseosa a elección.",
            precio: 9500
        },
        {
            nombre: "Combo 4",
            imagen: "assets/04_superComboBurgerKing.png",
            descripcion: "Descripción del producto 4",
            precio: 8400
        },
        {
            nombre: "Combo 5",
            imagen: "assets/04_superComboBurgerKing.png",
            descripcion: "Descripción del producto 5",
            precio: 8400
        }
    ];

    const container = document.getElementById("product-container");

    products.forEach(product => {
        container.innerHTML += `
            <article class="productCard">
                <a href="https://www.ejemplo.com" target="_blank" class="productLink" onclick="addToCartLink(event)">
                    <div class="productInformation">
                        <h2 class="productTitle">${product.nombre}</h2>
                        <p class="productDescription">${product.descripcion}</p>
                        <div class="pricesContainer">
                            <p class="productPrice">Precio: $${product.precio.toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="containerImg">
                        <img src="${product.imagen}" alt="${product.nombre}" class="productThumbnail">
                    </div>
                </a>
            </article>`;
    });
});

function addToCartLink(event) {
    // Aquí puedes agregar la lógica para agregar al carrito cuando se hace clic en el enlace
    console.log("Producto agregado al carrito");
    // Evitar que el enlace siga el comportamiento predeterminado
    event.preventDefault();
}