//Primero comprobamos que los dos numeros dados por el usuario son realmente numeros
do{
    var numero1 = parseInt(prompt("Introduce el primer numero"));
}while(isNaN(numero1))



if(numero1%2==0){
    alert(`${numero1} es par`);
}
else{
    alert(`${numero1} NO es par`);
}