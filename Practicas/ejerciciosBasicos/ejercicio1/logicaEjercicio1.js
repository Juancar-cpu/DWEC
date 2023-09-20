//Primero pedimos los numeros y comprobamos que sean numeros o no sean negativos
do{
    var numero1=parseInt(prompt("Introduzca el primer numero", "Escriba aquí"));
}while(isNaN(numero1)||numero1<0)

do{
    var numero2=parseInt(prompt("Introduzca el segundo numero", "Escriba aquí"));
}while(isNaN(numero2)||numero2<0)

//Una vez tenemos los numeros hacemos comparaciones e imprimimos el mensaje apropiado
if(numero1>numero2){
    alert("El numero "+numero1+" es el mayor")
}

else if(numero2>numero1){
    alert("El numero "+numero2+" es el mayor")
}

else{
    alert("Ambos numeros son iguales")
}