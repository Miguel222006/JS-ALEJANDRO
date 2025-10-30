function actualizarReloj() {
    const ahora = new Date();
    
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
    
    const horaNum = ahora.getHours();
    const reloj = document.getElementById('reloj');
    
    if (horaNum >= 6 && horaNum < 12) {
        reloj.style.color = '#FF9800';
    } else if (horaNum >= 12 && horaNum < 18) {
        reloj.style.color = '#2196F3';
    } else {
        reloj.style.color = '#9C27B0';
    }
}

function actualizarFecha() {
    const ahora = new Date();
    
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    
    document.getElementById('fecha').textContent = `${diaSemana}, ${dia} de ${mes} de ${año}`;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();
actualizarFecha();