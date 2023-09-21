<html>

<body>
    <?php 
    if (Hour(time)>20 || Hour(time)<4)
    {
        echo "<h1>Buenas noches</h1>";
    }
    else{
        echo "<h1>Buenos días</h1>";
    }
    

    
    ?>
</body>
</html>