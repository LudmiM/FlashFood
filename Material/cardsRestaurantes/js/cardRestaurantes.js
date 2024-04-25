document.addEventListener("DOMContentLoaded", function () {
    const stores = [
        {
            nombre: "McDonalds",
            imagenPortada: "assets/01_BannerMCDonnalds.png",
            imagenLogo: "assets/01_LogoMCDonnalds.png",
            tiempoEstimado: 90,
            estadoTienda:true,
            valoracion: 4.7,
            delivery:600,
        },
        {
            nombre: "Burger King",
            imagenPortada: "assets/04_BannerBurgerKing.png",
            imagenLogo: "assets/04_LogoBurgerKing.png",
            tiempoEstimado: 60,
            estadoTienda:true,
            valoracion: 4.3,
            delivery:590,
        },
        {
            nombre: "Mostaza",
            imagenPortada: "assets/05_BannerMostaza.png",
            imagenLogo: "assets/05_LogoMostaza.png",
            tiempoEstimado: 60,
            estadoTienda:true,
            valoracion: 4.2,
            delivery:530,
        },
        {
            nombre: "Wendys",
            imagenPortada: "assets/12_BannerWendys.png",
            imagenLogo: "assets/12_LogoWendys.jpg",
            tiempoEstimado: 60,
            estadoTienda:false,
            valoracion: 3.9,
            delivery:550 ,
        },
        {
            nombre: "Factory",
            imagenPortada: "assets/11_BannerFactory.png",
            imagenLogo: "assets/11_LogoFactory.jpg",
            tiempoEstimado: 45,
            estadoTienda:false,
            valoracion: 3.4,
            delivery:400,
        },
        {
            nombre: "McDonalds Laferrere",
            imagenPortada: "assets/01_BannerMCDonnalds.png",
            imagenLogo: "assets/01_LogoMCDonnalds.png",
            tiempoEstimado: 120,
            estadoTienda:false,
            valoracion: 3,
            delivery:800,
        },
    ];

    const container = document.getElementById("store-container");

    stores.forEach(stores => {   
        container.innerHTML += `${stores.estadoTienda === true ?`
        <a href="#" class="cardStore-link" data-nombre="${stores.nombre}">` : `<a href="#" class="cardStore-linkClosed" data-nombre="${stores.nombre}">`}
        <div class="cardStore-containerBannerImg">
            <img class="cardStore-bannerImg" src="${stores.imagenPortada}" alt="Banner de ${stores.nombre}">
        </div>
        <article class="cardStore">
            <div class="cardStore-containerLogo">
                <img class="cardStore-logoImg" src="${stores.imagenLogo}" alt="Logo de ${stores.nombre}">
            </div>
                <div class="cardStore-storeInfo">
                    <div class="cardStore-firstInfo">
                        <h2 class="cardStore-title">${stores.nombre}</h2>
                        <div class="cardStore-containerDelivery">
                            <img class="cardStore-deliveryIcon" src="assets/icono-envio.svg" alt="Icono de envio">
                            <p class="cardStore-delivery">Delivery: $${stores.delivery}</p>
                        </div>
                        <p class="cardStore-deliveryTime">Tiempo estimado: ${stores.tiempoEstimado} min</p>
                    </div>
                    <div class="cardStore-rateAndState">
                        ${stores.estadoTienda === true ? `<p class="cardStore-stateStoreOpen">Abierto</p>` : `<p class="cardStore-stateStoreClosed">Cerrado</p>`}
                        <div class="cardStore-rate">
                            <p class="cardStore-rateValue">${stores.valoracion}</p>
                            <i class='bx bxs-star cardStore-starRate'></i>
                        </div>
                    </div>
                </div>
        </article>
    </a>`;
    });
});

