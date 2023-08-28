import { mostrarStockApi } from './stock_api.js';
import { inventoryList, inventoryListApi} from './common.js'; // Importa las listas
export let listaProductos = [];

export function agregarProducto(nombre, cantidad, precio, nombre_proveedor) {
  if (nombre.trim() !== '' && nombre_proveedor.trim() !== '' && !isNaN(cantidad) && cantidad > 0 && precio > 0) {
    const nuevoProducto = { nombre, cantidad, precio, nombre_proveedor, eliminado: false };
    listaProductos.push(nuevoProducto);
    mostrarUltimo();
  }
}

// Función para mostrar stock
export function mostrarStock() {
  inventoryList.innerHTML = '';
  inventoryListApi.innerHTML = '';
  listaProductos.forEach(producto => {
    if (!producto.eliminado) {
      mostrarProducto(producto);
    }
  });
  mostrarStockApi();
}

// Función para mostrar un producto en la lista
function mostrarProducto(producto) {
  const nuevoProducto = document.createElement('li');
  nuevoProducto.innerHTML = `
    ${producto.nombre} - ${producto.cantidad} -  ${producto.precio} - ${producto.nombre_proveedor}
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
  inventoryListApi.innerHTML = '';
  if (listaProductos.length > 0) {
    mostrarProducto(listaProductos[listaProductos.length - 1]);
  }
}
