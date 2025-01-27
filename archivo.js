let numeroSecreto = 0;
let intentos=1;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor((Math.random()*10)+1);
    if (numerosSorteados.length === numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los numeros posibles, recargue la pagina para empezar ajugar de nuevo');
        document.querySelector("#intentar").setAttribute('disabled', true);
    } else {
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function jugar(){
    let numeroUsuario = parseInt(document.getElementById("input-entrada").value);
    if (numeroUsuario === numeroSecreto){
        asignarTexto("p", `Felcidades, acertaste en ${intentos} ${(intentos===1) ? "intento":"intentos"}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if(numeroUsuario>numeroSecreto){
            asignarTexto("p", "El numero secreto es menor");
        } else {
            asignarTexto("p", "El numero secreto es mayor");
        }
        limpiarCaja();
    }
    intentos++;
    return;
}

function limpiarCaja(){
    document.querySelector("#input-entrada").value = "";
}

function condicionesIniciales(){
    asignarTexto("h1","Juego del número secreto");
    asignarTexto("p", `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1; 
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled', true);
}

condicionesIniciales();

