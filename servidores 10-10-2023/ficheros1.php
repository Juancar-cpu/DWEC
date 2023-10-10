<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    define("BR", "<br/>\n");
    define("nLineas", 4);//definimos el numero de lineas de datos que tendrá cada alumno
    //define("estructura_alumno", ["id"=>"/^[0-9]+$/", "nombreCompleto"=>"/[A-Za-z] | [A-Za-z] | [A-Za-z]/", "fechaNac"=>"/[0-9]*-[0-9]*-[0-9]*/", "modulo"=>"/DAM|DAW/"]);
    //puede venir de un $_PSOT, 4_FILES...
    $path="data";
    $nombreFile=$path."/alumnos.txt";

    $file=fopen($nombreFile, "r");
    ////Mejora, vamos a añadirle un array de alumnos. Queremos un formato tipo [3345 => ['nombre=>Juan, apellido1=>"", apellido2=>"", fecha nacimiento=>"19-04-2000", ciclo=>"DAM"]]
    //Vamos a definir aqui el patron de cada campo y el array vacio
    
    //si el fichero para LECTURA no existe, devuelve false

    if(!$file) echo "No existe el archivo ".$nombreFile; 
    else{
        $numLineas=0;
        $alumnos=array();
        //$alumnos=array();
        //leer el archivo linea a linea
        while(!feof($file)){//Comprobar si no es fin de fichero (eof)
            $s=utf8_encode(fgets($file));//s va conteniendo la linea actual por la que vamos en el fichero.uft8 para que escriba las ñ y tildes
        //$s=mb_convert_encoding(trim(fgets($file)));

            switch($numLineas%nLineas){
        case 0://numexpediente
            $id=substr($s, 0, -1);//eliminamos el salto de linea
            $alumnos[$id]=array();
            break;
        case 1://nombre y apellidos
            $data=explode(" | ", $s);//muy importante poner los espacios junto a la |
            $alumnos[$id]["nombre"]=$data[0];
            $alumnos[$id]["ape1"]=$data[1];
            $alumnos[$id]["ape2"]=$data[2];
            break;
        case 2://fecha nacimiento
            //$data=explode("-", substr($s, 0, -1));
            //$alumnos[$id]["fechaNac"]=substr($s, 0, -1);//vale porque estamos metiendo la fecha como un string, pero es más correcto meterlo como fecha
            $alumnos[$id]["fechaNac"]=date("Y-m-d",strtotime($s));//Año mes día es un formato internacional, mejor. Así hay que dar las fechas y no necesitamos el explode
                                                                    //Si puisera "d \d\e m \d\e Y" sale dia de mes de año, con letras
            break;
        case 3:
            $alumnos[$id]["ciclo"]=trim($s);//aqui usamos trim en lugar de substr porque si no la ultima letra del fichero se borra
            break;

        }//switch
        $numLineas++;
        
            //$idAlumno;
        //$linea=trim(fgets($file));
            //$c=fgets($file);//fgetc es lectura caracter a caracter. fgets es lectura linea a linea
            //echo $c.BR;
           
            /*if(preg_match(estructura_alumno["id"], $linea)){//Los preg_match siempre van entre barras
               $idAlumno=$linea;
               $alumnos[]=$idAlumno;
            }
            if(preg_match(estructura_alumno["nombreCompleto"], $linea)){
                $nombrePorPartes=explode("|", $linea);
                $alumnos["idAlumno"]["nombre"]=$nombrePorPartes[0];
                $alumnos["idAlumno"]["apellido1"]=$nombrePorPartes[1];
                $alumnos["idAlumno"]["apellido2"]=$nombrePorPartes[2];
            }
            if(preg_match(estructura_alumno["fechaNac"], $linea)){
                $alumnos["idAlumno"]["fechaNac"]=$linea;
            }
            if(preg_match(estructura_alumno["modulo"], $linea)){
                $alumnos["idAlumno"]["modulo"]=$linea;
            }*/

            //If esta bien, pero es hardcodeo. La mejora será hacerlo mediante un foreach y un switch
            /*foreach(estructura_alumno as $clave=>$valor){
                if(preg_match($valor, $linea)){
                    
                    switch($clave){
                        case "id":
                            $idAlumno=$linea;
                            $alumnos[]=$idAlumno;
                            break;
                        case "nombreCompleto":
                            $nombrePorPartes=explode("|", $linea);
                            $alumnos["idAlumno"]["nombre"]=$nombrePorPartes[0];
                            $alumnos["idAlumno"]["apellido1"]=$nombrePorPartes[1];
                            $alumnos["idAlumno"]["apellido2"]=$nombrePorPartes[2];
                            break;

                        default:
                        $alumnos[$idAlumno][$clave]=$linea;
                        break;    
            }   
                    }
                }*/
            }
            print_r($alumnos);

            
        }
        //print_r($alumnos);
    ?>
</body>
</html>