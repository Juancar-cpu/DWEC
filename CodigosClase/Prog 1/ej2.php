<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
Suma de dos variables
    <?php
    
    $n1 = 2;
    $n2 = 3;
    $suma=$n1+$n2;
    echo "<br/>"."suma = ".$suma."<br/>"; //<  /> :autocerrar
    echo $n1+$n2."<br/>";
    echo "$n1+$n2"."<br/>";//dentro de echo las variables simples (que contienen un solo valor) son interpretadas con su valor. Simple puede ser un string, un número, etc. Se llaman comillas mágicas
    echo '$n1+$n2'."<br/>";//Las comillas simples no son mágicas, imprimirá literalmente lo que tiene
    echo "\$n1+\$n2"."<br/>";//backslash (\) hace que, aún dentro de las comillas dobles, el echo interprete de forma literal el elemento al que va asociado
    echo "\"hola\""."<br/>";
    echo "\\"."<br/>";

    echo phpinfo();//función de php que da un montón de información
    
    ?>
    
</body>
</html>