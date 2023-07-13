// Definición de la clase Stock
class Stock {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    mostrarProductos() {
      console.log("Productos en stock:");
      this.productos.forEach((producto) => {
        console.log(`ID: ${producto.id}`);
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: ${producto.precio}`);
        console.log("------------------");
      });
    }
  }