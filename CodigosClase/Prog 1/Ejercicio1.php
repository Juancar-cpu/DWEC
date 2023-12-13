<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
<!--comentario XML-->

    <?php 
    /**Ejercicio: Iterar el array $a y visualizarlo en formato tabla
     * En cada linea tendremos tres campos: clave, tipo y valor
     */
    $a= [0=>"false", 1=>222, 2=>true, 7=>111, "hola"=>" que tal?"]; 

    $a []="otro";

    $t="<html><table border=1>\n";//Importante abrir y cerrar un html para la tabla
    $t.="<tr>\n";
    $t.="<th>Clave</th>\n";
    $t.="<th>Tipo</th>\n";
    $t.="<th>Valor</th>\n";
    //Podriamos haber hecho tambien echo "<html><table border='1'> en lugar de meterlo en una variable $t"

    foreach($a as $k => $v){
        $tipo =gettype($v);
        $t.="<tr>
        \n<td>$k</td><td>$tipo</td><td>$v</td>\n
        </tr>"; //No podemos meter el gettype a lo loco, es mejor meterlo antes en una variable. Podemos meterlo escribiento .gettype($v). en lugar de $tipo

    }
    //$t.="<tr>"; //$t=$t."<tr>"; Tambien se podría poner así

    $t.="</table></html>";
    echo $t;
    
    ?>
    
</body>
</html>