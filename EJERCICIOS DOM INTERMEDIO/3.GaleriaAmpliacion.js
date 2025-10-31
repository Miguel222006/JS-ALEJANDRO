const miniaturas = document.querySelectorAll('.miniatura');
const modal = document.getElementById('modal');
const imagenAmpliada = document.getElementById('imagenAmpliada');
const btnCerrar = document.querySelector('.cerrar');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        modal.classList.remove('oculto');
        imagenAmpliada.src = this.src;
        imagenAmpliada.alt = this.alt;
    });
});

btnCerrar.addEventListener('click', cerrarModal);

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        cerrarModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

function cerrarModal() {
    modal.classList.add('oculto');
}