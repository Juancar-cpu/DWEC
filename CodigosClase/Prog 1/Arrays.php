<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays</title>
</head>
<body>


    <?php 
    /**Se pueden declarar arrays especificando pars clave-valor separados por comas, entre llaves */
    /**Los array en php son asociativos y menos rígidos que en java */

    $arr1= [0=>444, 1=>222, 2=>333, 7=>111, "hola"=>" que tal?"]; //no se pone ==, sino que se pone =>


    $arr1[]="otro"; //otro será añadido en el indice 8. Se añaden tras el último indice, aunque queden zonas de memoria libres antes

    var_dump($arr1); //var_dump muestra el array a lo bruto. muestra los tipos de cada variable y el numero de elementos dentro del array

    $arr1["fin"]="adios";
    echo "<br/>";
    print_r($arr1); //la funcion print_r visualiza en array completo, a lo bruto

    //el bucle foreach permite recorrer un array con mayor control
    foreach($arr1 as $v){
        echo "<br/> $v";
    }

    foreach($arr1 as $k => $v){
        echo "<br/> la clave $k corresponde al valor $v <br/>";
    }

    //se puede declarar un array sin indices


    $a = array("a", 2, "c", true); //se pueden definir arrays de esta forma, usando paréntesis y dando el valor de cada posicion
    echo "<br/>";
    print_r($a);
    echo "<br/>";
    var_dump($a);


    //BORRAR indice del array
    unset($a[0]);
    echo "<br/>";
    var_dump($a);

    echo "<br/>";
    echo "$a[0]"; //sale un warning porque esa posición está borrada

    
    
    ?>
    
</body>
</html>