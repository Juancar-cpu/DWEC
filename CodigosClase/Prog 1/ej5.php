<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php 
    $mivar = 123;

    print(gettype($mivar)); //gettype nos dice el tipo de variable que es, pero no la cambia. Solo la hace string para imprimirla, pero la variable sigue siendo del tipo que es 

    echo "<br/> $mivar";

    print(gettype($mivar));

    echo "<br/>";

    $mivar2 = '3'; //string
    echo "<br/> $mivar2 ";

    print(gettype($mivar2));
     
    $mivar2 = 2 + $mivar2; //El operador suma no cambia el tipo de mivar2, solo coge su valor y lo usa para la operación. El operador igual ya si que cambia el tipo de var2 para que se adecúe a la operación. Primero se realiza la suma y luego el igual (asignación)
    
    echo "<br/> $mivar2 <br/>";
    print(gettype($mivar2));

    settype($mivar2, "double"); //La funcion settype se encarga de cambiarle el tipo a las variables
    print(gettype($mivar2));
    echo "<br/> $mivar2 <br/>";


    $x = (string) $mivar; //Con el cast cogemos el valor de una variable, le cambiamos el tipo y se lo asignamos a otra variable. El tipo de la primera variable permanece intacto. Es asignación (el igual) quien cambia el tipo en realidad
    

    //En el cuerpo de un fichero las variable son globales al fichero y ficheros incluidos. En una funcion son locales a esa función


    
    ?>
    
</body>
</html>