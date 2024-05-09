
fetch('./assets/productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudieron cargar los productos');
    }
    return response.json();
  })
  .then(productos => {
    renderizarProductos(productos);
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });

function renderizarProductos(productos) {
  const contenedorProductos = document.getElementById('contenedorProductos');

  contenedorProductos.innerHTML = '';

  productos.forEach(producto => {
    const productoCard = document.createElement('div');
    productoCard.classList.add('producto');

    const nombreProducto = document.createElement('h3');
    nombreProducto.textContent = producto.nombre;

    const precioProducto = document.createElement('p');
    precioProducto.classList.add('precio')
    precioProducto.textContent = `Precio: ${producto.precio}`;

    const btnAgregar = document.createElement('button');
    btnAgregar.classList.add('agregar-al-carrito')
    btnAgregar.textContent = 'Agregar al carrito';

    const imagenProducto = document.createElement('img');
    imagenProducto.src = producto.imgRuta;

    btnAgregar.addEventListener('click', () => {
      agregarProductoAlCarrito(producto.id, producto.nombre, producto.precio, producto.imgRuta);
    });

    productoCard.appendChild(nombreProducto);
    productoCard.appendChild(imagenProducto);
    productoCard.appendChild(precioProducto);
    productoCard.appendChild(btnAgregar);

    contenedorProductos.appendChild(productoCard);

  });
};
