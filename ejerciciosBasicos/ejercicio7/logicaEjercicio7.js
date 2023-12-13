//Primero comprobamos que los dos numeros dados por el usuario son realmente numeros
do{
    var numero = parseInt(prompt("Introduce el primer numero"));
}while(isNaN(numero))

for(let i=0;i<=10;i++){
    console.log(`${numero} X ${i} = ${numero*i}`);
}

