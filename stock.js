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
      return  this.productos.forEach((producto) => {
        console.log(`ID: ${producto.id}`);
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: ${producto.precio}`);
        console.log("------------------");
      });
    }

    mostrarHTML() {  
      this.productos.forEach((producto)=> {
        let productosArray;
        let id =  producto.id
        let nombre =  producto.nombre
        let precio =  producto.precio
        productosArray = [id ,nombre, precio];
        let container = document.getElementById("contenedor");
        container.className = "container row";
        container.innerHTML = `<h2>${productosArray}</h2>`;
        // Crear un Elemento, etiqueta p
        let parrafo = document.createElement("p");
        // Insertar HTML interno
        parrafo.innerText = "FIN DEL PROGRAMA";
        // Añadir etiqueta p como hijo de body
        document.body.append(parrafo);
        parrafo.className="container row";
      });
    }

    mostrarMenu(respuesta){  
      while (respuesta === "si") {
        const id = prompt("Ingrese el ID del producto:");
        if(producto.id == id) {
          const nuevoPrecio = parseInt(prompt("Ingrese el nuevo precio:"));  
          producto.precio = nuevoPrecio;
          console.log(`Precio actualizado para el producto :  ${nombre} con ID ${id} con nuevo precio ${producto.precio}` );
          respuesta = "no";
        }else{
          console.log(`No se encontró ningún producto con el ID ${id}`);
          prompt(`No se encontró ningún producto con el ID ${id} : presione ACEPTAR`);  
          respuesta = "si";
        }
      }  
    }


    mostrarMenuPrincipal(respuesta){   
      this.mostrarMenu(respuesta);
      this.mostrarHTML();  
    }
}