//Primero comprobamos que los dos numeros dados por el usuario son realmente numeros
do{
    var numero1 = parseInt(prompt("Introduce el primer numero", "Escribe aquí"));
}while(isNaN(numero1))

do{
    var numero2 = parseInt(prompt("Introduce el segundo numero", "Escribe aquí"));
}while(isNaN(numero2))


//Sacamos las operaciones por alert
alert(`Suma: ${numero1+numero2} | Resta: ${numero1-numero2} | Multiplicación: ${numero1*numero2} | Division: ${numero1/numero2}`);

//Sacamos las operaciones por consola
console.log(`Suma: ${numero1+numero2} | Resta: ${numero1-numero2} | Multiplicación: ${numero1*numero2} | Division: ${numero1/numero2}`);

//Sacamos operaciones por body
const BODY=document.body;
const LIENZO=document.createElement("p");
LIENZO.innerHTML=`Suma: ${numero1+numero2} | Resta: ${numero1-numero2} | Multiplicación: ${numero1*numero2} | Division: ${numero1/numero2}`;
BODY.append(LIENZO);//append es añadir
