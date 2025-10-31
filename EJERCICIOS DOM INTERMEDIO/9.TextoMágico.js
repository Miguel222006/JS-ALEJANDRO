const campoTexto = document.getElementById('campoTexto');
const textoReflejado = document.getElementById('textoReflejado');

campoTexto.addEventListener('input', function() {
    const texto = this.value;
    
    if (texto === '') {
        textoReflejado.innerHTML = '';
        return;
    }
    
    const textoTransformado = transformarTexto(texto);
    textoReflejado.innerHTML = textoTransformado;
});

function transformarTexto(texto) {
    let resultado = '';
    
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        let claseLetra = '';
        
        if ('aeiouAEIOUáéíóúÁÉÍÓÚ'.includes(caracter)) {
            claseLetra = 'vocal';
        }
        else if (/[a-záéíóúñ]/i.test(caracter)) {
            claseLetra = 'consonante';
        }
        else if (/[0-9]/.test(caracter)) {
            claseLetra = 'numero';
        }
        else {
            claseLetra = 'otro';
        }
        
        resultado += `<span class="${claseLetra}">${caracter}</span>`;
    }
    
    return resultado;
}