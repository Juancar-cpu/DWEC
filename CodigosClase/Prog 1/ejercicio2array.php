<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 con array</title>
</head>
<body>
   <?php 
    $n=122222222;
    $resto=$n;
    $num=array();//$num = array vacio
    

    //Primero, extraer las cifras del numero y meterlas en un array. Usar metodo while
    do{
        $num[]=$resto%10;//Ponemos la ultima cifra del numero dentro del array
        $resto=($resto-$resto%10)/10;//Quitamos esa ultima cifra del numero
    }while($resto>9);
    $num[]=$resto;
    //var_dump($num);
    
    //Segundo, iterar el array hasta la mitad. usar count
   $medio=count($num)/2;
   $marca=0;
   for($i=0, $f=count($num)-1;$i<=$medio;$i++, $f--){//Empezamos for por el principio y el final del array y vamos comparando conforme nos acercamos al medio
        if($num[$i] != $num[$f]){
            $marca++;//Si en algun punto los numeros comparados no son iguales la marca deja de ser 0
            break;//break para salir del for si ya se ha activado la marca
        }
   }
   //Tercero, dar el mensaje apropiado
   /*if($marca !=0){
    echo "El numero $n NO es capicua";
   }
   else{
    echo "El numero $n es capicua";
   } */ 
   $mensaje="El numero $n ";
   if($marca!=0)$mensaje.="NO ";//Si la marca ha sumado 1 en algun momento significa que el numero no es capicua
   $mensaje.="es capicúa";
   echo $mensaje;


   /*Otra forma, a partir del segundo paso
   $capicua=true;
   for ($i=0; $i<$medio;$i++){
    if($num[$i] != $num [count($num)-1-$i]) {
        $capicua=false;
        break;
    }
   }
   $mensaje="El numero $n ";
   if(!$capicua)$mensaje.="NO ";
   $mensaje.="es capicúa";

   echo $mensaje;*/

   ?>
</body>
</html>