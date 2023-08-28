import { inventoryListApi } from './common.js';
export let listaProductosApi = [];

// Función para obtener y mostrar todos los productos
export async function mostrarStockApi() {
  if (listaProductosApi.length === 0) {
    const resp = await fetch("./productos.json");
    listaProductosApi = await resp.json();
  }
  inventoryListApi.innerHTML = '';
  listaProductosApi.forEach(producto => {
    if (!producto.eliminado) {
      mostrarProducto(producto);
    }
  });
}

// Función para eliminar un producto del stock
export function eliminarProducto_api(nombre, cantidad) {
  listaProductosApi = listaProductosApi.map(producto => {
    if (producto.nombre === nombre && producto.cantidad === cantidad) {
      producto.eliminado = true;
    }
    return producto;
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
  inventoryListApi.append(nuevoProducto);
  nuevoProducto.querySelector('.delete-btn').addEventListener('click', () => {
    eliminarProducto_api(producto.nombre, producto.cantidad);
  });
}
