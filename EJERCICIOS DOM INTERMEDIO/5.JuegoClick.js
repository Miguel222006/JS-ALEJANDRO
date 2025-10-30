const btnIniciar = document.getElementById('btnIniciar');
const btnReiniciar = document.getElementById('btnReiniciar');
const objetivo = document.getElementById('objetivo');
const areaJuego = document.getElementById('areaJuego');
const resultado = document.getElementById('resultado');
const puntosElemento = document.getElementById('puntos');
const tiempoElemento = document.getElementById('tiempo');
const puntosFinalElemento = document.getElementById('puntosFinal');

let puntos = 0;
let tiempoRestante = 30;
let juegoActivo = false;
let temporizador;

// Iniciar juego
btnIniciar.addEventListener('click', iniciarJuego);
btnReiniciar.addEventListener('click', reiniciarJuego);

// Clic en el objetivo
objetivo.addEventListener('click', function() {
    if (juegoActivo) {
        puntos++;
        puntosElemento.textContent = puntos;
        moverObjetivo();
    }
});

function iniciarJuego() {
    puntos = 0;
    tiempoRestante = 30;
    juegoActivo = true;
    
    puntosElemento.textContent = puntos;
    tiempoElemento.textContent = tiempoRestante;
    
    btnIniciar.classList.add('oculto');
    resultado.classList.add('oculto');
    objetivo.classList.remove('oculto');
    
    moverObjetivo();
    
    temporizador = setInterval(function() {
        tiempoRestante--;
        tiempoElemento.textContent = tiempoRestante;
        
        if (tiempoRestante <= 0) {
            terminarJuego();
        }
    }, 1000);
}

function moverObjetivo() {
    const areaAncho = areaJuego.offsetWidth - 50;
    const areaAlto = areaJuego.offsetHeight - 50;
    
    const nuevaX = Math.random() * areaAncho;
    const nuevaY = Math.random() * areaAlto;
    
    objetivo.style.left = nuevaX + 'px';
    objetivo.style.top = nuevaY + 'px';
}

function terminarJuego() {
    juegoActivo = false;
    clearInterval(temporizador);
    
    objetivo.classList.add('oculto');
    resultado.classList.remove('oculto');
    puntosFinalElemento.textContent = puntos;
}

function reiniciarJuego() {
    resultado.classList.add('oculto');
    btnIniciar.classList.remove('oculto');
}