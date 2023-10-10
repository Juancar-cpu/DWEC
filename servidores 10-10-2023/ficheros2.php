<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    /**Cojer el ejercicio ficheros1.php y hacer que lea el array, cree una base de datos y lo almacene ahí. Tenemos que usar un insert insert into alumnos*/
    define("BR", "<br/>\n");
    define("nLineas", 4);//definimos el numero de lineas de datos que tendrá cada alumno
    
    $path="data/";
    $nombreFile=$path."alumnos.txt";

    $file=fopen($nombreFile, "r");
    //si el fichero para LECTURA no existe, devuelve false

    if(!$file) echo "No existe el archivo ".$nombreFile; 
    else{
        $numLineas=0;
        $alumnos=array();
        $fout=fopen($path."alumnos.sql", "w");

        //leer el archivo linea a linea
        while(!feof($file)){//Comprobar si no es fin de fichero (eof)
            $s=utf8_encode(fgets($file));//s va conteniendo la linea actual por la que vamos en el fichero.uft8 para que escriba las ñ y tildes
        //$s=mb_convert_encoding(trim(fgets($file)));

            switch($numLineas%nLineas){
        case 0://numexpediente
            $id=substr($s, 0, -1);
            $alumnos[$id]=array();
            break;
        case 1://nombre y apellidos
            $data=explode(" | ", $s);
            $alumnos[$id]["nombre"]=$data[0];
            $alumnos[$id]["ape1"]=$data[1];
            $alumnos[$id]["ape2"]=$data[2];
            break;
        case 2://fecha nacimiento
            
            $alumnos[$id]["fechaNac"]=date("Y-m-d",strtotime($s));
            break;
        case 3:
            $alumnos[$id]["ciclo"]=trim($s);
            break;

        }//switch
        $numLineas++;

        }
            }
            //Empezamos aqui la logica de ficheros2.php
        foreach($alumnos as $alumno=>$valores){
            fwrite($fout, "INSERT INTO ALUMNOS VALUES(" . $alumno . ",'". $valores['nombre'] . "','". $valores["ape1"] . "','". $valores["ape2"] ."','" . 
            $valores["fechaNac"] . "','" . $valores["ciclo"] . "');\n");
           //Como el $fout ya hemos dicho que dará un archivo .sql de escritura, este fwrite crea ese tipo de archivo con esta info dentro. Luego es cuestion de copiarlo 
           //dentro del mysql en la base de datos previamente creada con el archivo ies.sql que hay en el aula virtual y se meten dentro de la base de datos
            
        }
        print_r($alumnos);
    
    ?>
</body>
</html>