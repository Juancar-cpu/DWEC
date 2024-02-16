// 1.- Obtener una referencia al div en el que se quiere agregar el párrafo
var miDiv = document.getElementById('miDiv');

// 2.- Crear un nuevo elemento de párrafo:
var nuevoParrafo = document.createElement('p');

// 3.- Crear un nodo de texto (contenido del párrafo)
var texto = document.createTextNode('Este es el párrafo añadido con appendChild');

// 4.-Agregar el nodo de texto(3) al párrafo(2)
nuevoParrafo.appendChild(texto);

// 5.-Agregar el párrafo como hijo al div
miDiv.appendChild(nuevoParrafo);