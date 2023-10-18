//Primero comprobamos que los dos numeros dados por el usuario son realmente numeros
do{
    var numero1 = parseInt(prompt("Introduce el primer numero"));
}while(isNaN(numero1))

do{
    var numero2 = parseInt(prompt("Introduce el segundo numero"));
}while(isNaN(numero2))

if(numero1%numero2==0){
    alert(`${numero1} y ${numero2} son multiplos`);
}
else{
    alert(`${numero1} y ${numero2} NO son multiplos`);
}
