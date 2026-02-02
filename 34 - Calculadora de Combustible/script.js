function calcularLitros(){
    
    var elementoKm = document.getElementById("textoKm").value;
    var cantKm = Number(elementoKm);

    var cantLitros = Math.ceil(cantKm / 8.8);

    var resultado = document.getElementById("textoResultado");

    resultado.textContent = "Carga " + cantLitros + " Litros de combustible.";
}

