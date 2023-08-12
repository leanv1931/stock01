const inventoryList = document.getElementById('inventory-list');
const listaProductos = [];


export function agregarProducto(nombre, cantidad) {
  if (nombre.trim() !== '' && !isNaN(cantidad) && cantidad > 0) {
    const nuevoProducto = { nombre, cantidad, eliminado: false };
    listaProductos.push(nuevoProducto);
    mostrarUltimo();
  }
}

// Función para mostrar stock
export function mostrarStock() {
  inventoryList.innerHTML = '';

  listaProductos.forEach(producto => {
    if (!producto.eliminado) {
      mostrarProducto(producto);
    }
  });
}

// Función para mostrar un producto en la lista
function mostrarProducto(producto) {
  const nuevoProducto = document.createElement('li');
  nuevoProducto.innerHTML = `
    ${producto.nombre} - ${producto.cantidad} unidades
    <button class="delete-btn">Eliminar</button>
  `;
  inventoryList.appendChild(nuevoProducto);

  // Agregar evento al botón de eliminar
  nuevoProducto.querySelector('.delete-btn').addEventListener('click', () => {
    eliminarProducto(producto.nombre, producto.cantidad);
  });
}

// Función para eliminar un producto del stock
export function eliminarProducto(nombre, cantidad) {
  const producto = listaProductos.find(producto => producto.nombre === nombre && producto.cantidad === cantidad);
  if (producto) {
    producto.eliminado = true;
    mostrarStock();
  }
}

function mostrarUltimo(){
  inventoryList.innerHTML = '';
  if (listaProductos.length > 0) {
    mostrarProducto(listaProductos[listaProductos.length - 1]);
  }
}
