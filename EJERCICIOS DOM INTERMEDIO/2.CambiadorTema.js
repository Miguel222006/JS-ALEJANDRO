document.addEventListener('DOMContentLoaded', cargarTema);

const btnCambiarTema = document.getElementById('btnCambiarTema');

btnCambiarTema.addEventListener('click', cambiarTema);

function cambiarTema() {
    document.body.classList.toggle('dark-mode');
    guardarTema();
}

function guardarTema() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'oscuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
}

function cargarTema() {
    const temaGuardado = localStorage.getItem('tema');
    
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('dark-mode');
    }
}