import { agregarProducto, mostrarStock } from './stock.js';

// Referencias a elementos del DOM
const nombreProductoInput = document.getElementById('nombreProducto');
const cantidadProductoInput = document.getElementById('cantidadProducto');
const agregarProductoBtn = document.getElementById('agregarProducto');
const mostrarStockBtn = document.getElementById('mostrarStock');

// Agregar evento al botón de "Agregar Producto"
agregarProductoBtn.addEventListener('click', () => {
  const nombre = nombreProductoInput.value;
  const cantidad = parseInt(cantidadProductoInput.value);
  agregarProducto(nombre, cantidad);
  nombreProductoInput.value = '';
  cantidadProductoInput.value = '';
});

// Agregar evento al botón de "Mostrar Inventario"
mostrarStockBtn.addEventListener('click', () => {
  mostrarStock();
});
