const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');

const errorNombre = document.getElementById('errorNombre');
const errorCorreo = document.getElementById('errorCorreo');
const errorContrasena = document.getElementById('errorContrasena');

const mensajeExito = document.getElementById('mensajeExito');

// Validación en tiempo real
nombre.addEventListener('input', validarNombre);
correo.addEventListener('input', validarCorreo);
contrasena.addEventListener('input', validarContrasena);

// Enviar formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const contrasenaValida = validarContrasena();
    
    if (nombreValido && correoValido && contrasenaValida) {
        formulario.classList.add('oculto');
        mensajeExito.classList.remove('oculto');
        
        // Reiniciar después de 3 segundos
        setTimeout(() => {
            formulario.reset();
            formulario.classList.remove('oculto');
            mensajeExito.classList.add('oculto');
            resetearEstilos();
        }, 3000);
    }
});

function validarNombre() {
    const valor = nombre.value.trim();
    
    if (valor === '') {
        mostrarError(nombre, errorNombre, 'El nombre no puede estar vacío');
        return false;
    } else {
        mostrarExito(nombre, errorNombre);
        return true;
    }
}

function validarCorreo() {
    const valor = correo.value.trim();
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (valor === '') {
        mostrarError(correo, errorCorreo, 'El correo no puede estar vacío');
        return false;
    } else if (!regexCorreo.test(valor)) {
        mostrarError(correo, errorCorreo, 'El correo no es válido');
        return false;
    } else {
        mostrarExito(correo, errorCorreo);
        return true;
    }
}

function validarContrasena() {
    const valor = contrasena.value;
    
    if (valor === '') {
        mostrarError(contrasena, errorContrasena, 'La contraseña no puede estar vacía');
        return false;
    } else if (valor.length < 8) {
        mostrarError(contrasena, errorContrasena, 'La contraseña debe tener al menos 8 caracteres');
        return false;
    } else {
        mostrarExito(contrasena, errorContrasena);
        return true;
    }
}

function mostrarError(input, errorElemento, mensaje) {
    input.classList.add('invalido');
    input.classList.remove('valido');
    errorElemento.textContent = mensaje;
}

function mostrarExito(input, errorElemento) {
    input.classList.add('valido');
    input.classList.remove('invalido');
    errorElemento.textContent = '';
}

function resetearEstilos() {
    nombre.classList.remove('valido', 'invalido');
    correo.classList.remove('valido', 'invalido');
    contrasena.classList.remove('valido', 'invalido');
}