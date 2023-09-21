<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 con string</title>
</head>
<body>
    <?php 
    //strrev da la vuelta a un string
    $n=1210;
    $nString=(string)$n;//convertimos la variable $n de tipo int a tipo string
    //$nInvertido=strrev($nString);//le damos la vuelta al string $n


    $mensaje = "El numero $n ";
    if($nString != strrev($nString)) $mensaje.=" NO ";//le damos la vuelta al string $n y comparamos
    $mensaje.=" es capicúa";
    echo $mensaje;


    //Otra forma de hacerlo
    $resto=$n;
    $s='';

    do{
        $s.=$resto%10;
        $resto=($resto-$resto%10)/10;
    }while ($resto>9);
    $s=$resto;

    $capicua=($s!=strrev($s))? "NO":"";
    print("El numero $n $c es capicua", $n, $capicua);
    
    
    ?>
</body>
</html>