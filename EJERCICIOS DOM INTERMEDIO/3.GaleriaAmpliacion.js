const miniaturas = document.querySelectorAll('.miniatura');
const modal = document.getElementById('modal');
const imagenAmpliada = document.getElementById('imagenAmpliada');
const btnCerrar = document.querySelector('.cerrar');

// Agregar evento a cada miniatura
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        modal.classList.remove('oculto');
        imagenAmpliada.src = this.src;
        imagenAmpliada.alt = this.alt;
    });
});

// Cerrar con el botón X
btnCerrar.addEventListener('click', cerrarModal);

// Cerrar al hacer clic fuera de la imagen
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        cerrarModal();
    }
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

function cerrarModal() {
    modal.classList.add('oculto');
}