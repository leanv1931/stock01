
export function agregarTarea() {
  const tareaInput = document.getElementById('tarea');
  const tareaTexto = tareaInput.value;
  const listaTareas = document.getElementById('list');

  if (tareaTexto.trim() !== '') {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerText = tareaTexto;
    listaTareas.appendChild(nuevaTarea);
    tareaInput.value = ''; // Limpiamos el campo de entrada
  }
}
