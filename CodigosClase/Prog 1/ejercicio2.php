<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 php con while</title>
</head>
<body>
    <?php 
    /**Ejercicio 2: Dado un numero  $num, comprobar si es capicúa y mostrar por pantalla un mensaje adecuado
     * ej: El numero 123 no es capicúa
     * ej: El numero 121 es capicúa
     */
   
    //$len=count($num);//count y nombre del array me dan la longitud

    /*Primero declaramos variables: 
        $numInvertido como string vacio para guardar la inversion del numero
        $num para dar el numero
        $i para usarla en el bucle, la iniciamos a 0
        $numString para pasarle la variable $num convertida a string y trabajar más facilmente con ella*/
    $numInvertido='';
    $num=0;
    $i=0;
    $numString=(string)$num;//pasamos el numero de int a string

    /*Usaremos un bucle while. el metodo isset mantendra el bucle en funcionamiento mientras su variable asociada no sea nula
    Así mismo, al haber convertido el num en un string podemos recorrerlo como sis e tratase de un array*/
    while(isset($numString[$i])){
        $numInvertido = $numString[$i].$numInvertido;/*$numInvertido empieza vacío. Le iremos añadiendoel valor de numString que toque gracias a $i.
                                                    El orden en el que añadimos el $numString es importante, debe ser delante para que el numero se invierta*/
        $i++;//$i se actualiza para la siguiente vuelta del bucle
    }
        if($numInvertido == $numString){//Si $numInvertido es igual a $numString significa que es capicua
            echo "El numero $num es capicua";
        }
        else{//else para la otra opción, cuando no es capicua
            echo "El numero $num NO es capicua";
        }
    ?>
</body>
</html>