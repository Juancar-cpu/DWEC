//Primero comprobamos que los dos numeros dados por el usuario son realmente numeros
do{
    var numero1 = parseInt(prompt("Introduce el primer numero", "Escribe aquí"));
}while(isNaN(numero1))

do{
    var numero2 = parseInt(prompt("Introduce el segundo numero", "Escribe aquí"));
}while(isNaN(numero2))


/*Usamos un bucle for para recorrer los numeros que hay entre los dados
  La condicion if hace que, si el numero por el que pasa el bucle es impar(el resto de su division entre 2 no es 0),
   lo saque por consola*/
for(var i=(numero1+1);i<=(numero2-1);i++){
    if(i%2!=0){
        console.log(i);
    }
}