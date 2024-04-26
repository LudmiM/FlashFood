function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function renderizarCarrito() {
  const carrito = obtenerCarrito();
  const contenedorCarrito = document.getElementById('carrito');
  const cantidadCarrito = document.getElementById('cantidadCarrito');
  const totalCarrito = document.getElementById('totalCarrito');

  contenedorCarrito.innerHTML = '';
  cantidadCarrito.textContent = carrito.length;

  let total = 0;
  console.log(carrito)

  carrito.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto-carrito');

    const carritoInfo = document.createElement('div')
    carritoInfo.classList.add('carritoInfo')

    const carritoInteraccion = document.createElement('div');
    carritoInteraccion.classList.add('carritoInteraccion')

    const imagenProductoAgregado = document.createElement('img');
    imagenProductoAgregado.src = producto.imgRuta;
    console.log(producto.imgRuta)

    const nombreProducto = document.createElement('span');
    nombreProducto.classList.add('nombreProducto')
    nombreProducto.textContent = producto.nombre;

    const precioProducto = document.createElement('span');
    precioProducto.classList.add('precioProducto')
    precioProducto.textContent = `$${producto.precio}`;

    const restarBtn = document.createElement('button');
    restarBtn.textContent = '-';
    restarBtn.classList.add('btnRestar');
    restarBtn.addEventListener('click', () => restarProducto(producto.id));

    const cantidadProducto = document.createElement('span');
    cantidadProducto.textContent = producto.cantidad;
    cantidadProducto.classList.add('cantidadProducto');

    const sumarBtn = document.createElement('button');
    sumarBtn.textContent = '+';
    sumarBtn.classList.add('btnSumar');
    sumarBtn.addEventListener('click', () => sumarProducto(producto.id));

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.classList.add('btnEliminar')
    eliminarBtn.addEventListener('click', () => eliminarProducto(producto.id));



    carritoInfo.appendChild(imagenProductoAgregado)
    carritoInfo.appendChild(nombreProducto)

    
    carritoInteraccion.appendChild(precioProducto);
    carritoInteraccion.appendChild(restarBtn);
    carritoInteraccion.appendChild(cantidadProducto);
    carritoInteraccion.appendChild(sumarBtn);
    carritoInteraccion.appendChild(eliminarBtn);

    productoDiv.appendChild(carritoInfo);
    productoDiv.appendChild(carritoInteraccion);
    contenedorCarrito.appendChild(productoDiv);

    total += producto.precio * producto.cantidad;
  });


  totalCarrito.textContent = `$${total.toFixed(2)}`;
}


function agregarProductoAlCarrito(id, nombre, precio, imgRuta) {
  const carrito = obtenerCarrito();
  const productoExistente = carrito.find(producto => producto.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1, imgRuta});
  }

  guardarCarrito(carrito);
  renderizarCarrito();
}

function restarProducto(id) {
  const carrito = obtenerCarrito();
  const productoExistente = carrito.find(producto => producto.id === id);

  if (productoExistente && productoExistente.cantidad > 1) {
    productoExistente.cantidad--;
    guardarCarrito(carrito);
    renderizarCarrito();
  }
}

function sumarProducto(id) {
  const carrito = obtenerCarrito();
  const productoExistente = carrito.find(producto => producto.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
    guardarCarrito(carrito);
    renderizarCarrito();
  }
}

function eliminarProducto(id) {
  const carrito = obtenerCarrito();
  const carritoActualizado = carrito.filter(producto => producto.id !== id);
  guardarCarrito(carritoActualizado);
  renderizarCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  renderizarCarrito();
}

function abrirCarrito() {
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  contenedorCarrito.style.display = 'block';
}

function cerrarCarrito() {
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  contenedorCarrito.style.display = 'none';
}

const comprarBtn = document.getElementById('comprar');
comprarBtn.addEventListener('click', () => {
  if (obtenerCarrito().length === 0) {
    alert('El carrito está vacío');
  } else {
    alert('¡Tu pedido se realizó con éxito!');
    vaciarCarrito();
  }
});


const vaciarBtn = document.getElementById('vaciar');
vaciarBtn.addEventListener('click', () => {
  if (obtenerCarrito().length === 0) {
    alert('El carrito ya esta vacio')
  } else {
      vaciarCarrito();
      alert('Carrito vacio');
    }
  }
);

// Evento para abrir el carrito
const abrirCarritoBtn = document.getElementById('abrirCarrito');
abrirCarritoBtn.addEventListener('click', abrirCarrito);

// Evento para cerrar el carrito
const cerrarCarritoBtn = document.getElementById('cerrarCarrito');
cerrarCarritoBtn.addEventListener('click', cerrarCarrito);

// Renderizar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', renderizarCarrito);