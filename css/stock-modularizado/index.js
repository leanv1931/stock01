import { agregarTarea } from './tareas.js';

// Obtenemos referencias a los elementos del DOM
const btnAgregar = document.getElementById('btn');

// Agregamos el evento click al botón
btnAgregar.addEventListener('click', agregarTarea);
