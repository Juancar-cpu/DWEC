//Primero comprobamos que los numeros dados sean realmente numeros
do{
    var numero1 = parseInt(prompt("Introduce el primer numero", "Escribe aquí"));
}while(isNaN(numero1))

do{
    var numero2 = parseInt(prompt("Introduce el segundo numero", "Escribe aquí"));
}while(isNaN(numero2))


//Usamos un bucle for para sacar los numeros que hay entre los dos dados
for(var i=(numero1+1);i<=(numero2-1);i++){
    console.log(i);
}


