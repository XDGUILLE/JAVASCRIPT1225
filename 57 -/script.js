function crearTiendas(contenedorID, min, cantidadTiendas){
    let elementoContenedor = document.getElementById(contenedorID);

    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        let textoEtiqueta = "Tienda " + conteoTiendas;

        let parrafoTienda = crearParrafoTiendas(textoEtiqueta, min)
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTiendas(textoLabel, valorMin){
    let elementoParrafo = document.createElement("p");

    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    elementoEtiqueta.setAttribute("for", textoLabel);

    let elementoInput = document.createElement("input");

    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value",0);

    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas =[];
    let posicionVentas = 0;
    let elementoVentas = document.getElementById("itemsTiendas");

    for(let item of elementoVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumaTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementoVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className = "menuNeutro";

        if(valorVenta == ventaMayor){
            item.children[1].className = "menuInputMayor";
        }

        if(valorVenta == ventaMenor){
            item.children[1].className = "menuInputMenor";
        }
    }

    let mensajeSalida = "Total ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}

function sumaTotal(array){
    let total = 0;

    for(let venta of array){
        total = total + venta;
        
    }  
    return total;
} 

function calcularMayor(ventas){
    let maximo = ventas[0];

    for(let venta of ventas){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(ventas){
    let minimo = ventas[0];

    for(let venta of ventas){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}