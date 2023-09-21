<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Referencias</title>
</head>
<body>


    <?php 
    /*Copia de variables por valor */
    $v1 = 100;
    $v2 = $v1;//asignacion: copia del valor y el tipo de variable
    echo $v1; //saldrá 100
    echo "<br/>";
    echo $v2; //v2 también saldrá 100

    //modificamos $v1 a ver qué pasa
    $v1 = 500;
    echo "<br/>";
    echo $v1; //saldrá 500
    echo "<br/>";
    echo $v2; //saldrá 100
    //$v2 copió el valor que tenía v1 en su momento pero ahora no

    /*copia de variables por referencia */
    $v2 = &$v1; //La referencia se hace con el caracter uppersun
    echo "<br/>";
    echo $v1; //saldra 500
    echo "<br/>";
    echo $v2; // saldra 100

    $v1 = 375;
    echo "<br/> $v1"; //saldra 375
    echo "<br/> $v2"; //saldra 375

    /**Ahora al cambiar el valor de $v1 cambia tambien el de v2
     * porque el valor de v2 es la refenrencia de v1 (están ligados)
     * ADEMÁS, estás variables quedan ligadas y si cambia una cambia la otra
     */

    $v2=5;    
    echo "<br/> $v1"; //saldra 5
    echo "<br/> $v2"; //saldra 5


    unset($v2);
    echo "<br/> $v1"; //saldra 5
    if (isset($v2)) echo "<br/> $v2";

    else echo "<br/> La variable no existe"; //ahora v2 no existe, la hemos desligado de v1 con unset
    ?>
    
</body>
</html>