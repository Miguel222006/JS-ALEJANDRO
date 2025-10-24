// const campoTexto = document.getElementById('campoTexto');
//         const btnAgregar = document.getElementById('btnAgregar');
//         const listaTareas = document.getElementById('listaTareas');
//         const mensajeError = document.getElementById('mensajeError');

//         function agregarTarea() {
//             const texto = campoTexto.value;
//             if (texto === '') {
//                 mensajeError.textContent = 'Error: La tarea está vacía';
//                 return; 
//             }
            
//             mensajeError.textContent = '';
            
//             const nuevaTarea = document.createElement('li');
//             nuevaTarea.textContent = texto;
//             const btnEliminar = document.createElement('button');
//             btnEliminar.textContent = 'Eliminar';
//             nuevaTarea.appendChild(btnEliminar);
//             listaTareas.appendChild(nuevaTarea);
//             campoTexto.value = '';
//             nuevaTarea.addEventListener('click', function() {
//                 if (nuevaTarea.style.textDecoration === 'line-through') {
//                     nuevaTarea.style.textDecoration = 'none';
//                 } else {
//                     nuevaTarea.style.textDecoration = 'line-through';
//                 }
//             });
//             btnEliminar.addEventListener('click', function() {
//                 listaTareas.removeChild(nuevaTarea);
//             });
//         }
//         btnAgregar.addEventListener('click', agregarTarea);


//         const numeroContador = document.getElementById('numeroContador');
//         const btnIncrementar = document.getElementById('btnIncrementar');
//         const btnDecrementar = document.getElementById('btnDecrementar');
//         const btnReset = document.getElementById('btnReset');
//         let numero = 0;
//         function actualizarColor() {
//             if (numero > 0) {
//                 numeroContador.style.color = 'green';
//             } else if (numero < 0) {
//                 numeroContador.style.color = 'red';
//             } else {
//                 numeroContador.style.color = 'black';
//             }
//         }
//         btnIncrementar.addEventListener('click', function() {
//             numero = numero + 1; 
//             numeroContador.textContent = numero;
//             actualizarColor();
//         });
//         btnDecrementar.addEventListener('click', function() {
//             numero = numero - 1; 
//             numeroContador.textContent = numero;
//             actualizarColor();
//         });
//         btnReset.addEventListener('click', function() {
//             numero = 0;
//             numeroContador.textContent = numero;
//             actualizarColor();
//         });

        
//         const productos = [
//             { nombre: 'Laptop', precio: 1200, imagen: '💻' },
//             { nombre: 'Mouse', precio: 25, imagen: '🖱️' },
//             { nombre: 'Teclado', precio: 80, imagen: '⌨️' },
//             { nombre: 'Monitor', precio: 300, imagen: '🖥️' },
//             { nombre: 'Audifonos', precio: 50, imagen: '🎧' }
//         ];
        
//         const filtroProducto = document.getElementById('filtroProducto');
//         const btnAgregarCarrito = document.getElementById('btnAgregarCarrito');
//         const contadorCarrito = document.getElementById('contadorCarrito');
//         const mensajeSinResultados = document.getElementById('mensajeSinResultados');
//         const mensajeCarrito = document.getElementById('mensajeCarrito');
//         const listaProductos = document.getElementById('listaProductos');
//         let productosEnCarrito = 0;
//         let productosFiltradosActuales = productos;
        
//         function mostrarProductos(productosFiltrados) {
//             listaProductos.innerHTML = '';
//             productosFiltradosActuales = productosFiltrados;
            
//             if (productosFiltrados.length === 0) {
//                 mensajeSinResultados.textContent = 'Producto no encontrado';
//                 return;
//             } else {
//                 mensajeSinResultados.textContent = '';
//             }
            
//             for (let i = 0; i < productosFiltrados.length; i++) {
//                 const producto = productosFiltrados[i];
//                 const divProducto = document.createElement('div');
//                 divProducto.innerHTML = 
//                     '<h3>' + producto.imagen + ' ' + producto.nombre + '</h3>' +
//                     '<p>Precio: $' + producto.precio + '</p>' +
//                     '<hr>';
//                 listaProductos.appendChild(divProducto);
//             }
//         }
//         mostrarProductos(productos);
//         filtroProducto.addEventListener('input', function() {
//             const textoBusqueda = filtroProducto.value.toLowerCase();
//             const productosFiltrados = [];
            
//             for (let i = 0; i < productos.length; i++) {
//                 const nombreProducto = productos[i].nombre.toLowerCase();
//                 if (nombreProducto.includes(textoBusqueda)) {
//                     productosFiltrados.push(productos[i]);
//                 }
//             }
//             mostrarProductos(productosFiltrados);
//         });
//         btnAgregarCarrito.addEventListener('click', function() {
//             const textoBusqueda = filtroProducto.value.trim();
            
//             if (textoBusqueda === '') {
//                 mensajeCarrito.textContent = 'No has buscado ningun producto';
//                 return;
//             }
            
//             if (productosFiltradosActuales.length === 0) {
//                 mensajeCarrito.textContent = 'Producto no encontrado';
//                 return;
//             }
            
//             if (productosFiltradosActuales.length > 0) {
//                 const primerProducto = productosFiltradosActuales[0];
//                 productosEnCarrito = productosEnCarrito + 1;
//                 mensajeCarrito.textContent = 'Producto ' + primerProducto.nombre + ' agregado, total en carrito: ' + productosEnCarrito;
//                 contadorCarrito.textContent = 'Productos en el carrito: ' + productosEnCarrito;
//             }
//         });

const campoTexto = document.getElementById('campoTexto');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
const mensajeError = document.getElementById('mensajeError');

function agregarTarea() {
    const texto = campoTexto.value;
    if (texto === '') {
        mensajeError.textContent = 'Error: La tarea está vacía';
        return; 
    }
    
    mensajeError.textContent = '';
    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = texto;
    listaTareas.appendChild(nuevaTarea);
    campoTexto.value = '';
    
    let clickCount = 0;
    nuevaTarea.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 1) {
            nuevaTarea.style.textDecoration = 'line-through';
            nuevaTarea.style.opacity = '0.6';
        } else if (clickCount === 2) {
            listaTareas.removeChild(nuevaTarea);
        }
    });
}
btnAgregar.addEventListener('click', agregarTarea);

const numeroContador = document.getElementById('numeroContador');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');
const btnReset = document.getElementById('btnReset');
let numero = 0;

function actualizarColor() {
    if (numero > 0) {
        numeroContador.style.color = 'green';
    } else if (numero < 0) {
        numeroContador.style.color = 'red';
    } else {
        numeroContador.style.color = 'black';
    }
}

btnIncrementar.addEventListener('click', function() {
    numero = numero + 1; 
    numeroContador.textContent = numero;
    actualizarColor();
});

btnDecrementar.addEventListener('click', function() {
    numero = numero - 1; 
    numeroContador.textContent = numero;
    actualizarColor();
});

btnReset.addEventListener('click', function() {
    numero = 0;
    numeroContador.textContent = numero;
    actualizarColor();
});

const productos = [
    { nombre: 'Laptop', precio: 1200, imagen: '💻' },
    { nombre: 'Mouse', precio: 25, imagen: '🖱️' },
    { nombre: 'Teclado', precio: 80, imagen: '⌨️' },
    { nombre: 'Monitor', precio: 300, imagen: '🖥️' },
    { nombre: 'Audifonos', precio: 50, imagen: '🎧' },
    { nombre: 'Silla Gamer', precio: 350, imagen: '🪑' }
];

const filtroProducto = document.getElementById('filtroProducto');
const mensajeSinResultados = document.getElementById('mensajeSinResultados');
const mensajeCarrito = document.getElementById('mensajeCarrito');
const listaProductos = document.getElementById('listaProductos');
const contadorCarrito = document.getElementById('contadorCarrito');

let carrito = {};
let totalProductos = 0;
let precioTotal = 0;

function mostrarProductos(productosFiltrados) {
    listaProductos.innerHTML = '';
    
    if (productosFiltrados.length === 0) {
        mensajeSinResultados.textContent = 'Producto no encontrado';
        return;
    } else {
        mensajeSinResultados.textContent = '';
    }
    
    for (let i = 0; i < productosFiltrados.length; i++) {
        const producto = productosFiltrados[i];
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';
        divProducto.innerHTML = 
            '<span class="emoji">' + producto.imagen + '</span>' +
            '<h3>' + producto.nombre + '</h3>' +
            '<p>Precio: $' + producto.precio + '</p>' +
            '<button onclick="agregarAlCarrito(\'' + producto.nombre + '\')">Agregar producto</button>';
        listaProductos.appendChild(divProducto);
    }
}

function agregarAlCarrito(nombreProducto) {
    const producto = productos.find(p => p.nombre === nombreProducto);
    
    if (!carrito[nombreProducto]) {
        carrito[nombreProducto] = { cantidad: 0, precio: producto.precio };
    }
    
    carrito[nombreProducto].cantidad++;
    totalProductos++;
    precioTotal += producto.precio;
    
    mensajeCarrito.textContent = 'Producto ' + nombreProducto + ' agregado al carrito';
    actualizarCarrito();
}

function actualizarCarrito() {
    contadorCarrito.innerHTML = '<strong>Total de productos: ' + totalProductos + '</strong><br>';
    
    let carritoHTML = '<div id="carritoDetalle"><h3>Carrito de Compras:</h3>';
    
    for (let nombreProducto in carrito) {
        const item = carrito[nombreProducto];
        carritoHTML += '<div class="item-carrito">';
        carritoHTML += '<span>' + nombreProducto + ': ' + item.cantidad + ' (x $' + item.precio + ')</span>';
        carritoHTML += '<button onclick="eliminarDelCarrito(\'' + nombreProducto + '\')">Eliminar</button>';
        carritoHTML += '</div>';
    }
    
    carritoHTML += '<div id="totalCarrito">Total: $' + precioTotal + '</div>';
    carritoHTML += '<button class="btn-vaciar" onclick="vaciarCarrito()">Vaciar carrito</button>';
    carritoHTML += '</div>';
    
    contadorCarrito.innerHTML += carritoHTML;
}

function eliminarDelCarrito(nombreProducto) {
    if (carrito[nombreProducto]) {
        totalProductos -= carrito[nombreProducto].cantidad;
        precioTotal -= carrito[nombreProducto].precio * carrito[nombreProducto].cantidad;
        delete carrito[nombreProducto];
        actualizarCarrito();
        mensajeCarrito.textContent = 'Producto ' + nombreProducto + ' eliminado del carrito';
    }
}

function vaciarCarrito() {
    carrito = {};
    totalProductos = 0;
    precioTotal = 0;
    contadorCarrito.innerHTML = '<strong>Total de productos: 0</strong>';
    mensajeCarrito.textContent = 'Carrito vaciado';
}

mostrarProductos(productos);

filtroProducto.addEventListener('input', function() {
    const textoBusqueda = filtroProducto.value.toLowerCase().trim();
    
    if (textoBusqueda === '') {
        mostrarProductos(productos);
        return;
    }
    
    const productosFiltrados = [];
    
    for (let i = 0; i < productos.length; i++) {
        const nombreProducto = productos[i].nombre.toLowerCase();
        if (nombreProducto.includes(textoBusqueda)) {  // CAMBIADO AQUÍ
            productosFiltrados.push(productos[i]);
        }
    }
    
    mostrarProductos(productosFiltrados);
});