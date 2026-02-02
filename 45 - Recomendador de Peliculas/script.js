function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");

    switch(genero){
        case 'drama':
            if(edad<13){
                recomendacion.textContent = "Casa Blanca";
            }else if(edad<16){
                recomendacion.textContent = "The Shawshank Redemption";
            }else{
                recomendacion.textContent = "The Godfather";
            }
            break;
        case 'comedia':
            if(edad<13){
                recomendacion.textContent = "Back to the Future";
            }else if(edad<16){
                recomendacion.textContent = "The Truman Show";
            }else{
                recomendacion.textContent = "The Wolf of Wall Street";
            }
            break;
        case 'musical':
            if(edad<13){
                recomendacion.textContent = "Fantasma de la Opera";
            }else if(edad<16){
                recomendacion.textContent = "Thhe Miserables";
            }else{
                recomendacion.textContent = "The Rocky Horror Picture Show";
            }
            break;
        case 'crimen':
            if(edad<13){
                recomendacion.textContent = "No hay recomendaciones para esta edad";
            }else if(edad<16){
                recomendacion.textContent = "Sherlock Holmes";
            }else{
                recomendacion.textContent = "Scare Face";
            }
            break;
    }
}