document.querySelector(".trash").addEventListener("click", mensaje, false);//querySelector permite cojer elementos por su clase como el getElementById. Nos referimos a ella como si fuera css
//Tambien existe getElementByClassName

/*function mensaje(){
    window.alert("Papelera vaciada");
    document.querySelector(".trash").style.display="none";//Desaparecerá al darle a aceptar al alert
}*/

//Mejora del programa. El icono de papelera cambia a una papelera vacia. Las imagenes estan en local
/*function mensaje(){
    //document.querySelector(".trash").style.display="none";//Desaparecerá al darle a aceptar al alert. No ponemos aqui el display none porque si no no sale
    document.querySelector(".trash").style.backgroundImage = "url('papeleraVacia.jpg')";//Usamos rutas relativas para la imagen para que así funcione en cualquier equipo. Las absoultas van a hacer que no funcione en otros equipos
    window.alert("Papelera vaciada");
}*/


//Mejora 2: Vamos a usar una imagen de internet para la palelera vacia, no una imagen en local
function mensaje(){
   
    document.querySelector(".trash").style.backgroundImage = "url('https://i.blogs.es/d7fe1b/papelera/1366_2000.webp')";
    //Lo normal cuando adquirimos una imagen de un http es que nos de un error debido al CORS, que es una proteccion de que las paginas tienen para no acceder a sus elementos desde fuera
    setTimeout(() => {window.alert("Papelera vaciada")}, 100);//retrasamos el alert para que se vea el cambio de la papelera antes de que salga
}

//con funcion anonima
/*const trash = document.querySelector(".trash");
trash.addEventListener("click", function(){
    trash.style.backgroundImage = "none";
    alert("Se ha vaciado la papelera");
})*/