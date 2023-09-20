
//Comprobamos que el caracter dado es realmente un numero
do{
    var numero=parseInt(prompt("Introduzca un numero", "Escriba aquí"));
}while(isNaN(numero))

//Revisar, aún no funciona
for(var i=0;i<=numero;i++){
    if(i%numero===0){
        console.log(i);
    }
}