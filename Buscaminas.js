//Vamos a colocar 20 filas y columnas por defecto.
let filas = 20;
let columnas = 20;
let lado = 30;//Ancho de cada fila
let html="";//Para poner etiquetas html

//Generador el tablero de forma dinamica
for(let f=0;f< filas; f++){//Primero recorremos el numero de filas
    html += "<tr>";//V a iniciar cada columna
    for(let c=0; c<columnas;c++){//Por cada fila sacamos sus columnas
        html += "<td>";
        html += "</td>";

    }
    html += `</tr>`;//Importante no olvidarse del /

}

let tableroHTML = document.getElementById("tablero");//Capturamos todo el tablero dentro de una variable
tableroHTML.innerHTML = html;//Le metemos al tablero todo el html formado en los bucles for
tableroHTML.style.width = columnas *lado+"px";
tableroHTML.style.height = filas *lado+"px";
