document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            nombre: "Super combo Burger King",
            imagen: "assets/04_superComboBurgerKing.png",
            descripcion: "Hamburguesa completa, con cheddar, papas fritas clásicas y gaseosa a elección.",
            precio: 8400,
            descuento:10
        },
        {
            nombre: "Burger King Classic",
            imagen: "assets/04_burgerKingClassic.png",
            descripcion: "Hamburguesa completa, con papas fritas clásicas y gaseosa a elección.",
            precio: 7400,
            descuento:20
        },
        {
            nombre: "Mega combo Burger King",
            imagen: "assets/04_megaComboBurgerKing.png",
            descripcion: "Hamburguesa doble completa, con cheddar, papas fritas regilla y gaseosa a elección.",
            precio: 9500,
            descuento:0
        },
        {
            nombre: "Super Combo 4 Genérico",
            imagen: "assets/04_superComboBurgerKing.png",
            descripcion: "Descripción genérica del producto 4, lo que contiene y lo que no este combo.",
            precio: 8400,
            descuento:0
        },
        {
            nombre: "Mega Combo 5 Genérico",
            imagen: "assets/04_superComboBurgerKing.png",
            descripcion: "Descripción genérica del producto 4, lo que contiene y lo que no este combo.",
            precio: 8400,
            descuento:0
        },
        {
            nombre: "Ultra Combo 4 Genérico",
            imagen: "assets/04_superComboBurgerKing.png",
            descripcion: "Descripción genérica del producto 4, lo que contiene y lo que no este combo.",
            precio: 9999,
            descuento:50
        }
    ];

    const container = document.getElementById("product-container");

    products.forEach(product => {
        let calculatedPrice;
    
        if (product.descuento <= 0) {
            calculatedPrice = product.precio;
        } else {
            calculatedPrice = product.precio - (product.precio * product.descuento / 100);
        }
    
        container.innerHTML += `
            <article class="cardMenu">
                <a href="#" class="cardMenu-link" data-nombre="${product.nombre}">
                    <div class="productInformation">
                        <h2 class="cardMenu-title">${product.nombre}</h2>
                        <p class="cardMenu-description">${product.descripcion}</p>
                        <div class="cardMenu-pricesContainer">
                            ${product.descuento > 0 ? `<p class="cardMenu-discountPrice">- ${product.descuento} %OFF</p>` : ''}
                            <p class="cardMenu-finalPrice">$${calculatedPrice}</p>
                            ${product.descuento > 0 ? `<p class="cardMenu-initialPrice">$${product.precio}</p>` : ''}
                        </div>
                    </div>
                    <div class="cardMenu-containerThumbnail">
                        <img src="${product.imagen}" alt="${product.nombre}" class="cardMenu-thumbnail">
                    </div>
                </a>
            </article>`;
    });
    document.querySelectorAll('.cardMenu-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var nombreProducto = this.dataset.nombre;
            alert(`Se agrego correctamente el producto: ${nombreProducto} al carrito.`);
        });
    });
});

