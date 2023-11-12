//Primero definimos las variables que vamos a usar y las iniciamos
var suma = 0;
var contador = 0;
var media = 0;

//Como es posible que ejecutemos el programa en multiples ocasiones es mejor meter la logica de las operaciones en una funcion
function calculoSumaMedia(numero) {
    suma = suma + numero;
    contador++;
    media = suma / contador;
    alert("Suma hasta ahora: " + suma);
    alert("Media hasta ahora: " + media);
}

/*Finalmente damos el numero. SI este es un numero y además positivo llamamos a la función. 
  El código se ejecuta en bucle hasta que introduzcamos un numero negativo o algo que no sea un numero*/
do {
    var numero = parseInt(prompt("Introduzca un número", "Escriba aquí"));
        if (!isNaN(numero) && numero >= 0) {
            calculoSumaMedia(numero);
        }
} while (!isNaN(numero) && numero >= 0);

alert("Comando negativo introducido, fin del programa");