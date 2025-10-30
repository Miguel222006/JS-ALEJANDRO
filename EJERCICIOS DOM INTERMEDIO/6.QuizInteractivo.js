const preguntas = [
    {
        pregunta: "¿Cómo se llama un archivo JavaScript en HTML?",
        opciones: ["<javascript src='archivo.js'>", "<script src='archivo.js'></script>", "<js src='archivo.js'>", "<link src='archivo.js'>"],
        correcta: 1
    },
    {
        pregunta: "¿Qué método se usa para seleccionar un elemento por su ID?",
        opciones: ["getElement()", "getElementById()", "selectId()", "findById()"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se seleccionan todos los elementos con una clase específica?",
        opciones: ["getElementsByClass()", "querySelectorAll('.clase')", "getClass()", "selectClass()"],
        correcta: 1
    },
    {
        pregunta: "¿Qué propiedad se usa para cambiar el texto de un elemento?",
        opciones: ["innerHTML", "textContent", "text", "Todas las anteriores"],
        correcta: 3
    },
    {
        pregunta: "¿Cómo se agrega un evento de clic a un elemento?",
        opciones: ["elemento.click(function)", "elemento.addEventListener('click', function)", "elemento.onClick()", "elemento.addClick()"],
        correcta: 1
    },
    {
        pregunta: "¿Qué método se usa para crear un nuevo elemento en el DOM?",
        opciones: ["createElement()", "newElement()", "createNode()", "addElement()"],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se agrega una clase a un elemento?",
        opciones: ["elemento.class.add()", "elemento.classList.add()", "elemento.addClass()", "elemento.addClassName()"],
        correcta: 1
    },
    {
        pregunta: "¿Qué método elimina un elemento del DOM?",
        opciones: ["elemento.delete()", "elemento.remove()", "elemento.erase()", "elemento.clear()"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se obtiene el valor de un input?",
        opciones: ["input.text", "input.value", "input.getValue()", "input.content"],
        correcta: 1
    },
    {
        pregunta: "¿Qué evento se dispara cuando se carga completamente el DOM?",
        opciones: ["onload", "DOMContentLoaded", "ready", "domReady"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se guarda información en localStorage?",
        opciones: ["localStorage.save()", "localStorage.setItem()", "localStorage.store()", "localStorage.add()"],
        correcta: 1
    },
    {
        pregunta: "¿Qué método se usa para agregar un elemento hijo?",
        opciones: ["addChild()", "appendChild()", "insertChild()", "pushChild()"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se previene el comportamiento por defecto de un evento?",
        opciones: ["event.stop()", "event.preventDefault()", "event.cancel()", "event.block()"],
        correcta: 1
    },
    {
        pregunta: "¿Qué propiedad cambia los estilos CSS de un elemento?",
        opciones: ["elemento.css", "elemento.style", "elemento.setStyle()", "elemento.styles"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se alterna una clase en un elemento?",
        opciones: ["elemento.classList.switch()", "elemento.classList.toggle()", "elemento.toggleClass()", "elemento.switchClass()"],
        correcta: 1
    }
];

let preguntaActual = 0;
let respuestasCorrectas = 0;
let respondida = false;

const numeroPreguntaEl = document.getElementById('numeroPregunta');
const totalPreguntasEl = document.getElementById('totalPreguntas');
const correctasEl = document.getElementById('correctas');
const preguntaEl = document.getElementById('pregunta');
const opcionesEl = document.getElementById('opciones');
const feedbackEl = document.getElementById('feedback');
const btnSiguiente = document.getElementById('btnSiguiente');
const progresoEl = document.getElementById('progreso');
const quizContenedor = document.getElementById('quizContenedor');
const resultadoEl = document.getElementById('resultado');
const resultadoFinalEl = document.getElementById('resultadoFinal');
const porcentajeEl = document.getElementById('porcentaje');
const btnReiniciar = document.getElementById('btnReiniciar');

totalPreguntasEl.textContent = preguntas.length;

function cargarPregunta() {
    respondida = false;
    const preguntaData = preguntas[preguntaActual];
    
    numeroPreguntaEl.textContent = preguntaActual + 1;
    preguntaEl.textContent = preguntaData.pregunta;
    
    opcionesEl.innerHTML = '';
    feedbackEl.classList.add('oculto');
    btnSiguiente.classList.add('oculto');
    
    preguntaData.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'opcion';
        btn.textContent = opcion;
        btn.addEventListener('click', () => seleccionarOpcion(index));
        opcionesEl.appendChild(btn);
    });
    
    actualizarProgreso();
}

function seleccionarOpcion(index) {
    if (respondida) return;
    
    respondida = true;
    const preguntaData = preguntas[preguntaActual];
    const opciones = document.querySelectorAll('.opcion');
    
    if (index === preguntaData.correcta) {
        opciones[index].classList.add('correcta');
        feedbackEl.textContent = '¡Correcto! ✓';
        feedbackEl.className = 'feedback feedback-correcto';
        respuestasCorrectas++;
        correctasEl.textContent = respuestasCorrectas;
    } else {
        opciones[index].classList.add('incorrecta');
        opciones[preguntaData.correcta].classList.add('correcta');
        feedbackEl.textContent = '✗ Incorrecto. La respuesta correcta es: ' + preguntaData.opciones[preguntaData.correcta];
        feedbackEl.className = 'feedback feedback-incorrecto';
    }
    
    feedbackEl.classList.remove('oculto');
    btnSiguiente.classList.remove('oculto');
    
    opciones.forEach(btn => btn.disabled = true);
}

function actualizarProgreso() {
    const porcentaje = ((preguntaActual + 1) / preguntas.length) * 100;
    progresoEl.style.width = porcentaje + '%';
}

btnSiguiente.addEventListener('click', () => {
    preguntaActual++;
    
    if (preguntaActual < preguntas.length) {
        cargarPregunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    quizContenedor.classList.add('oculto');
    resultadoEl.classList.remove('oculto');
    
    resultadoFinalEl.textContent = respuestasCorrectas;
    const porcentaje = Math.round((respuestasCorrectas / preguntas.length) * 100);
    porcentajeEl.textContent = porcentaje;
}

btnReiniciar.addEventListener('click', () => {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    correctasEl.textContent = 0;
    
    resultadoEl.classList.add('oculto');
    quizContenedor.classList.remove('oculto');
    
    cargarPregunta();
});

cargarPregunta();