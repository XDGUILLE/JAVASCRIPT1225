let tiempoTerminado;
let intervaloDeTiempo;

function comenzarCuentaRegresiva(){
    tiempoTerminado = setTimeout(tiempoCumplido, 31000);
    intervaloDeTiempo = setInterval(ticTac, 1000);

    document.getElementById("cuentaRegresiva").textContent = 30;
}

function ticTac(){
    let tiempo = document.getElementById("cuentaRegresiva").textContent;
    document.getElementById("cuentaRegresiva").textContent = tiempo - 1;
}

function tiempoCumplido(){
    clearInterval(intervaloDeTiempo);
    document.getElementById("cuentaRegresiva").textContent = 0;
    document.getElementById("audioFinal").play();
    alert("GAME OVER: Se acabo el Tiempo, intenta nuevamente");
}

function finalizado(){
    clearInterval(intervaloDeTiempo);
    clearInterval(tiempoTerminado);

    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;
    let respuesta5 = document.getElementById("respuesta5").value;

    let mensaje = "1." + respuesta1 + "\n" +
                  "2." + respuesta2 + "\n" +
                  "3." + respuesta3 + "\n" +
                  "4." + respuesta4 + "\n" +
                  "5." + respuesta5;
    alert(mensaje);
}

function reiniciar(){

}

