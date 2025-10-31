document.addEventListener('DOMContentLoaded', cargarTareas);

const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
const mensajeVacio = document.getElementById('mensajeVacio');

btnAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

function agregarTarea() {
    const textoTarea = inputTarea.value.trim();
    
    if (textoTarea === '') {
        alert('Por favor escribe una tarea');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${textoTarea}</span>
        <button class="btnEliminar">Eliminar</button>
    `;
    
    li.querySelector('.btnEliminar').addEventListener('click', function() {
        li.remove();
        guardarTareas();
        verificarListaVacia();
    });
    
    listaTareas.appendChild(li);
    inputTarea.value = '';
    
    guardarTareas();
    verificarListaVacia();
}

function verificarListaVacia() {
    if (listaTareas.children.length === 0) {
        mensajeVacio.classList.remove('oculto');
    } else {
        mensajeVacio.classList.add('oculto');
    }
}

function guardarTareas() {
    const tareas = [];
    listaTareas.querySelectorAll('li span').forEach(span => {
        tareas.push(span.textContent);
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    
    if (tareasGuardadas) {
        const tareas = JSON.parse(tareasGuardadas);
        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${tarea}</span>
                <button class="btnEliminar">Eliminar</button>
            `;
            
            li.querySelector('.btnEliminar').addEventListener('click', function() {
                li.remove();
                guardarTareas();
                verificarListaVacia();
            });
            
            listaTareas.appendChild(li);
        });
    }
    
    verificarListaVacia();
}