import { agregarProducto, mostrarStock} from './stock.js';
import { mostrarStockApi } from './stock_api.js';
import { buscarProductoPorNombre } from './buscar_producto.js'

// Referencias a elementos del DOM
// input text
const nombreProductoInput = document.getElementById('nombreProducto');
const cantidadProductoInput = document.getElementById('cantidadProducto');
const precioProductoInput = document.getElementById('precioProducto');
const proveedorProductoInput = document.getElementById('proveedorProducto');
const nombreProductoBusquedaInput = document.getElementById('nombreProductoInput');

// botones
const agregarProductoBtn = document.getElementById('agregarProducto');
const mostrarStockBtn = document.getElementById('mostrarStock');
const buscarProductoBtn = document.getElementById('buscarProducto');

// Agregar evento al botón de "Agregar Producto"
agregarProductoBtn.addEventListener('click', () => {
  const nombre = nombreProductoInput.value;
  const cantidad = parseInt(cantidadProductoInput.value);
  const precio = parseInt(precioProductoInput.value);
  const proveedor = proveedorProductoInput.value;
  agregarProducto(nombre, cantidad, precio, proveedor);
  nombreProductoInput.value = '';
  cantidadProductoInput.value = '';
  precioProductoInput.value = '';
  proveedorProductoInput.value = '';
});

// Agregar evento al botón de "Mostrar Todos"
mostrarStockBtn.addEventListener('click', () => {
  mostrarStock();
  mostrarStockApi();
});

// Evento de clic en el botón "Buscar Producto"
buscarProductoBtn.addEventListener('click', () => {
  const nombreBusqueda = nombreProductoBusquedaInput.value.trim();
  buscarProductoPorNombre(nombreBusqueda);
  nombreProductoBusquedaInput.value = '';
});