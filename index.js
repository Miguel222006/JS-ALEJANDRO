const estudiantes = [
 { nombre: "Ana", notas: [3.5, 4.0, 3.8], proyectoEntregado: true },
 { nombre: "Luis", notas: [2.8, 3.0, 2.5], proyectoEntregado: false },
 { nombre: "María", notas: [4.5, 4.2, 4.8], proyectoEntregado: true },
 { nombre: "Carlos", notas: [3.0, 3.1, 2.9], proyectoEntregado: false },
 { nombre: "Sofía", notas: [4.0, 3.9, 4.1], proyectoEntregado: true },
 { nombre: "Diego", notas: [2.0, 2.5, 2.8], proyectoEntregado: false },
 { nombre: "Valentina", notas: [4.8, 4.9, 5.0], proyectoEntregado: true },
 { nombre: "Andrés", notas: [3.2, 3.5, 3.4], proyectoEntregado: true },
 { nombre: "Camila", notas: [3.0, 2.7, 3.1], proyectoEntregado: false },
 { nombre: "Mateo", notas: [4.1, 4.3, 4.2], proyectoEntregado: true },
 { nombre: "Juliana", notas: [2.9, 2.8, 3.0], proyectoEntregado: false },
 { nombre: "Felipe", notas: [3.7, 3.6, 3.8], proyectoEntregado: true },
 { nombre: "Isabela", notas: [4.4, 4.6, 4.7], proyectoEntregado: true },
 { nombre: "Samuel", notas: [3.3, 3.1, 3.2], proyectoEntregado: false },
 { nombre: "Laura", notas: [2.5, 2.9, 2.7], proyectoEntregado: false },
 { nombre: "Tomás", notas: [4.2, 3.9, 4.4], proyectoEntregado: true },
 { nombre: "Natalia", notas: [3.0, 3.2, 3.1], proyectoEntregado: true },
 { nombre: "Esteban", notas: [4.0, 4.1, 4.2], proyectoEntregado: true },
 { nombre: "Daniela", notas: [2.3, 2.8, 2.6], proyectoEntregado: false },
 { nombre: "Julián", notas: [3.4, 3.6, 3.5], proyectoEntregado: true },
 { nombre: "Lucía", notas: [4.8, 4.9, 4.7], proyectoEntregado: true },
 { nombre: "Sebastián", notas: [3.9, 4.0, 3.8], proyectoEntregado: true },
 { nombre: "Carolina", notas: [2.7, 2.9, 3.0], proyectoEntregado: false },
 { nombre: "Pedro", notas: [3.5, 3.7, 3.6], proyectoEntregado: true },
 { nombre: "Martina", notas: [4.1, 4.3, 4.0], proyectoEntregado: true },
 { nombre: "Gabriel", notas: [2.6, 2.5, 2.9], proyectoEntregado: false },
 { nombre: "Sara", notas: [4.0, 3.9, 4.1], proyectoEntregado: true },
 { nombre: "Nicolás", notas: [3.1, 3.2, 3.3], proyectoEntregado: true },
 { nombre: "Elena", notas: [4.5, 4.7, 4.6], proyectoEntregado: true },
 { nombre: "Pablo", notas: [2.4, 2.8, 2.7], proyectoEntregado: false }
];



const estudiantesConPromedio = estudiantes.map(estudiante => {
    const suma = estudiante.notas.reduce((total, nota) => total + nota, 0);
    const promedio = parseFloat((suma / estudiante.notas.length).toFixed(2));
    
    return {
        nombre: estudiante.nombre,
        notas: estudiante.notas,
        proyectoEntregado: estudiante.proyectoEntregado,
        promedio: promedio
    };
});

// 2. Filtrar solo los aprobados (promedio >= 3.0)
const aprobados = estudiantesConPromedio.filter(estudiante => estudiante.promedio >= 3.0);


console.log("--- TODOS LOS ESTUDIANTES ---");
estudiantesConPromedio.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre} - Promedio: ${estudiante.promedio}`);
});

// 2. Mostrar solo los aprobados
console.log("\n--- ESTUDIANTES APROBADOS (Promedio >= 3.0) ---");
aprobados.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre} - Promedio: ${estudiante.promedio}`);
});


console.log(`\nTotal estudiantes: ${estudiantes.length}`);
console.log(`Aprobados: ${aprobados.length}`);
console.log(`Reprobados: ${estudiantes.length - aprobados.length}`);

const nombreBuscado = "Pablo";
const estudianteEncontrado = estudiantesConPromedio.find(estudiante => estudiante.nombre === nombreBuscado);

// Mostrar la información del estudiante encontrado
console.log(`\n--- BÚSQUEDA: ${nombreBuscado} ---`);
if (estudianteEncontrado) {
    console.log(`Nombre: ${estudianteEncontrado.nombre}`);
    console.log(`Notas: ${estudianteEncontrado.notas.join(', ')}`);
    console.log(`Promedio: ${estudianteEncontrado.promedio}`);
    console.log(`Proyecto entregado: ${estudianteEncontrado.proyectoEntregado ? 'Sí' : 'No'}`);
    console.log(`Estado: ${estudianteEncontrado.promedio >= 3.0 ? 'APROBADO ✓' : 'REPROBADO ✗'}`);
} else {
    console.log(`No se encontró ningún estudiante con el nombre "${nombreBuscado}"`);
}

const hayProyectosSinEntregar = estudiantes.some(estudiante => estudiante.proyectoEntregado === false);

console.log(`\n--- VERIFICACIÓN DE PROYECTOS ---`);
if (hayProyectosSinEntregar) {
    console.log("⚠️ Hay estudiantes que NO han entregado su proyecto final");
} else {
    console.log("✓ Todos los estudiantes han entregado su proyecto final");
}

function procesarEstudiantes(listaEstudiantes, callback) {
    // Calculamos los promedios
    const estudiantesConPromedio = listaEstudiantes.map(estudiante => {
        const suma = estudiante.notas.reduce((total, nota) => total + nota, 0);
        const promedio = parseFloat((suma / estudiante.notas.length).toFixed(2));
        
        return {
            nombre: estudiante.nombre,
            notas: estudiante.notas,
            proyectoEntregado: estudiante.proyectoEntregado,
            promedio: promedio
        };
    });
    
    callback(estudiantesConPromedio);
}

function mostrarAprobados(estudiantes) {
    const aprobados = estudiantes.filter(est => est.promedio >= 3.0);
    console.log("\n--- ESTUDIANTES APROBADOS (CALLBACK) ---");
    aprobados.forEach(est => {
        console.log(`${est.nombre}: ${est.promedio}`);
    });
    console.log(`Total aprobados: ${aprobados.length}`);
}

procesarEstudiantes(estudiantes, mostrarAprobados);

console.log("\n--- MOSTRANDO RESULTADOS CON DESESTRUCTURACIÓN ---");

estudiantesConPromedio.forEach(({ nombre, promedio }) => {
    console.log(`${nombre}: ${promedio}`);
});


console.log("\n--- APROBADOS CON DESESTRUCTURACIÓN ---");
estudiantesConPromedio
    .filter(({ promedio }) => promedio >= 3.0)
    .forEach(({ nombre, promedio }) => {
        console.log(`${nombre}: ${promedio}`);
    });