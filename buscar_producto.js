import { inventoryList, inventoryListApi,  } from './common.js'; // Importa las listas
import {  listaProductosApi, eliminarProducto_api } from './stock_api.js'
import {  eliminarProducto, listaProductos } from './stock.js'


// Función para buscar y mostrar productos por nombre
export function buscarProductoPorNombre(nombre) {
  // Vaciar las listas antes de mostrar los resultados
  inventoryList.innerHTML = '';
  inventoryListApi.innerHTML = '';
  const nombreBusqueda = nombre.toLowerCase();

  // Buscar y mostrar productos coincidentes en la lista "inventoryList"
  listaProductos.forEach(producto => {
    if (!producto.eliminado && producto.nombre.toLowerCase().includes(nombreBusqueda)) {
      mostrarProducto(producto, inventoryList);
    }
  });

  listaProductosApi.forEach(producto => {
    if (!producto.eliminado && producto.nombre.toLowerCase().includes(nombreBusqueda)) {
      mostrarProducto(producto, inventoryListApi);
    }
  });
}

// Función para mostrar un producto en la lista especificada
function mostrarProducto(producto, lista) {
  const nuevoProducto = document.createElement('li');
  nuevoProducto.innerHTML = `
  ${producto.nombre} - ${producto.cantidad} -  ${producto.precio} - ${producto.nombre_proveedor}
    <button class="delete-btn">Eliminar</button>
  `;
  lista.appendChild(nuevoProducto);

  // Agregar evento al botón de eliminar
  nuevoProducto.querySelector('.delete-btn').addEventListener('click', () => {
    eliminarProducto(producto.nombre, producto.cantidad);
    eliminarProducto_api(producto.nombre, producto.cantidad);
  });
}
