const pantalla = document.getElementById('pantalla');
const botonesNumero = document.querySelectorAll('.btn-numero');
const botonesOperador = document.querySelectorAll('.btn-operador');
const btnIgual = document.getElementById('btnIgual');
const btnLimpiar = document.getElementById('btnLimpiar');

let operacionActual = '';
let operadorActual = null;
let numeroAnterior = null;
let reiniciarPantalla = false;

botonesNumero.forEach(btn => {
    btn.addEventListener('click', function() {
        const numero = this.getAttribute('data-numero');
        agregarNumero(numero);
    });
});

botonesOperador.forEach(btn => {
    btn.addEventListener('click', function() {
        const operador = this.getAttribute('data-operador');
        seleccionarOperador(operador);
    });
});

btnIgual.addEventListener('click', calcular);

btnLimpiar.addEventListener('click', limpiar);

document.addEventListener('keydown', function(e) {
    if (e.key >= '0' && e.key <= '9' || e.key === '.') {
        agregarNumero(e.key);
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        seleccionarOperador(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        calcular();
    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        limpiar();
    }
});

function agregarNumero(numero) {
    if (reiniciarPantalla) {
        pantalla.value = '';
        reiniciarPantalla = false;
    }
    
    if (numero === '.' && pantalla.value.includes('.')) {
        return;
    }
    
    pantalla.value += numero;
}

function seleccionarOperador(operador) {
    if (pantalla.value === '') return;
    
    if (numeroAnterior !== null && operadorActual !== null && !reiniciarPantalla) {
        calcular();
    }
    
    numeroAnterior = parseFloat(pantalla.value);
    operadorActual = operador;
    reiniciarPantalla = true;
}

function calcular() {
    if (operadorActual === null || reiniciarPantalla) return;
    
    const numeroActual = parseFloat(pantalla.value);
    let resultado;
    
    try {
        switch (operadorActual) {
            case '+':
                resultado = numeroAnterior + numeroActual;
                break;
            case '-':
                resultado = numeroAnterior - numeroActual;
                break;
            case '*':
                resultado = numeroAnterior * numeroActual;
                break;
            case '/':
                if (numeroActual === 0) {
                    pantalla.value = 'Error';
                    resetear();
                    return;
                }
                resultado = numeroAnterior / numeroActual;
                break;
        }
        
        resultado = Math.round(resultado * 100000000) / 100000000;
        pantalla.value = resultado;
        numeroAnterior = resultado;
        operadorActual = null;
        reiniciarPantalla = true;
        
    } catch (error) {
        pantalla.value = 'Error';
        resetear();
    }
}

function limpiar() {
    pantalla.value = '';
    resetear();
}

function resetear() {
    operadorActual = null;
    numeroAnterior = null;
    reiniciarPantalla = false;
}