const respuestas = ["Sarmiento", "Bolivia", "Seis horas", "Michael Douglas", "A Jack Nicholson", "Cuatro"]

function evaluar(evento) {
    let btn = evento.srcElement;

    for (let i = 0; i < respuestas.length; i++) {
        if (btn.innerHTML === respuestas[i]) {
            btn.style.backgroundColor = 'green';
            btn.style.color = "white";
            break;
        } 
        btn.style.backgroundColor = 'red';
        btn.style.color = "white";
    }
};
