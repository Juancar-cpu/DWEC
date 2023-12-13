<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    define("BR", "<br/>\n");

    $v1=1;
    $v2=0;
    $v3=-5;
    $s="";
    $s1="gvg";
    $a=array();
    $n = null;
    $s0="0";

    if($v1) echo "\$v1 es TRUE".BR;
    if(!$s) echo "String vacío".BR;//Cualquier string con contenido es true, una vacio es false
    if($s1===true) echo "String es TRUE".BR;//No se imprimiria
    if($v3) echo "$v3 es TRUE".BR;
    if($v2) echo "$v2 es TRUE".BR;
    if(!$a) echo "Array vacío es FALSE".BR;
    if(!$n) echo " NULL es False";
    if(!$s0) echo "0 es FALSE".BR;//0 da false porque lo pasa a integer y lo interpreta como el 0

    ?>
</body>
</html>