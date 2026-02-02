function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function suma(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 + numero2);
}

function resta(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 - numero2);
}

function multiplicacion(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 * numero2);
}

function division(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 / numero2);
}

function raiz(){
    let numero1 = +document.getElementById("campo1").value;
    mostrarResultado(Math.sqrt(numero1));
}

function potencia(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1,numero2));
}

function absoluto(){
    let numero1 = +document.getElementById("campo1").value;
    mostrarResultado(Math.abs(numero1));
}

function aleatorio(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.round(Math.random()*(numero2-numero1)));
}

function redondeo(){
    let numero = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(numero));
}

function piso(){
    let numero = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(numero));
}

function techo(){
    let numero = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(numero));
}

function limpiar(){
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}