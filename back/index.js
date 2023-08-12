const stock = new Stock();

// Obtener datos del usuario usando prompt
const id = prompt("INICIO : Ingrese el ID del producto:");
const nombre = prompt("Ingrese el nombre del producto:");
const precio = parseFloat(prompt("Ingrese el precio del producto:"));

// Crear una instancia de la clase Producto
const producto = new Producto(id, nombre, precio);


// Agregar el producto al stock
stock.agregarProducto(producto);

// Mostrar los productos en stock por consola
stock.mostrarProductos();

let respuesta = prompt("¿Deseas continuar modificando (si/no)").toLowerCase();

if(respuesta === "no"){
  stock.mostrarHTML();
}else{
  stock.mostrarMenuPrincipal(respuesta);
}
