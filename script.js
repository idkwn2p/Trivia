const respuestas = [
    "Sarmiento",
    "Bolivia", 
    "Seis horas", 
    "Michael Douglas", 
    "A Jack Nicholson", 
    "Cuatro",
    "Dos ratas",
    "Arquímedes",
    "Vitamina C",
    "Dos",
    "Remo",
    "Con el 23",
    "Rembrandt",
    "Evita",
    "Los acordes",
    "In God We Trust",
    "Sputnik",
    "Ocho"
]

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
