 // Creación de una instancia de la clase Stock
const stock = new Stock();

// Obtener datos del usuario usando prompt
const id = prompt("INICIO : Ingrese el ID del producto:");
const nombre = prompt("Ingrese el nombre del producto:");
const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

// Crear una instancia de la clase Producto
const producto = new Producto(id, nombre, precio, cantidad);


// Agregar el producto al stock
stock.agregarProducto(producto);

// Mostrar los productos en stock
stock.mostrarProductos();


  
let respuesta = prompt("¿Deseas actualizar el precio? (si/no)").toLowerCase();

  while (respuesta === "si") {
    const id = prompt("Ingrese el ID del producto:");
    if (producto.id == id) {
      const nuevoPrecio = parseInt(prompt("Ingrese el nuevo precio:"));  
      producto.precio = nuevoPrecio;
      console.log(`Precio actualizado para el producto :  ${nombre} con ID ${id}`);
    } else {
      console.log(`No se encontró ningún producto con el ID ${id}`);
    }
    respuesta = prompt("¿Deseas actualizar otro precio? (si/no)").toLowerCase();
  }
console.log("Fin del programa");
  
