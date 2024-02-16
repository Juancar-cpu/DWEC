
    document.getElementById("enviar").addEventListener("click", validar, false);
    document.getElementById("reset").addEventListener("click", reset, false);
    document.getElementById("añadir").addEventListener("click", añade, false);
    document.getElementById("google").addEventListener("click", function(){
        window.location.href="https://www.google.com";
    });


function validarNombre(){
    let nombre=document.getElementById("nombre");

    if(!nombre.checkValidity()){
        error(nombre);
        document.getElementById('mensajeNombre').innerHTML="Por favor, introduce un nombre válido, de entre 2 y 15 caracteres";
        return false;
    } 

    else{ 
        document.getElementById('mensajeNombre').innerHTML="";
        return true};
}

function validarDNI(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];//Todas las posibles letras de un dni
    var dni = document.getElementById("dni").value;//Cogemos el dni
    let letra1 = dni.charAt(dni.length-1).toUpperCase();//Sacamos la letra del dni y la pasamos a mayuscula
    var cupo = "";

    for(var i=0;i<dni.length-1;i++){
        cupo += dni[i];//cupo lleva el dni sin la letra
    }

    var letra2 = letras[parseInt(cupo)%23];//PASAMOS CUPO A INT Y COGEMOS EL RESTO DE SU DIVISION ENTRE 23

    if(letra1!=letra2){
        error(document.getElementById("dni"));
        document.getElementById('mensajeDNI').innerHTML="El DNI introducido no es válido";
        return false;
    }
    else{
        document.getElementById('mensajeDNI').innerHTML="";
        return true;  
    } 
    

}

function validarDias(){
    let dias = document.querySelectorAll("input[name='dia']:checked")//dias va a tener todos los elementos input de nombre dia que esten checked
    if(dias.length<2){
        document.getElementById('mensajeDias').innerHTML="Se deben escoger al menos 2 días";
        return false;
    }
    else {
        document.getElementById('mensajeDias').innerHTML="";
        return true;}
}

function validarFecha(){
let fecha = document.getElementById("fechaMatricula");

if(fecha.value==""){
    document.getElementById('mensajeFecha').innerHTML="Introduce una fecha";
    error(fecha);
    return false;
}
else{
    document.getElementById('mensajeFecha').innerHTML="";
    return true;
}
}

function validarMensaje(){
    var mensaje = document.getElementById("mensaje");
    var contenidoMensaje = mensaje.value.trim();//Usamos trim para eliminar posibles espacios en blanco al principio y al final

    if(contenidoMensaje.length>=2){
        document.getElementById("mensajeArea").innerHTML="";
        return true;
    }
    else{
        document.getElementById("mensajeArea").innerHTML="El mensaje debe contener al menos 2 caracteres";
        error(mensaje);
        return false;
    }
}

function validar(e){
    console.log(document.getElementById("fechaMatricula").value)
    borrarError();//Primero quitamos todos los errores del formulario
    if(validarNombre() && validarDNI() && validarMensaje() && validarFecha() && validarDias()){//Si todos devuelven true...
        e.preventDefault();//se previenete el envio normal
        alert("Formulario enviado");// se lanza un mensaje
        //document.forms[0][0].focus();//Llevamos el foco al principio del formulario
        location.reload();//Para recargar la pagina para limpiar los input 
        document.getElementById("nombre").focus();
        return true;
    }
    else{
        e.preventDefault();
        return false;
    }

}

function reset(){
   var borra =  document.getElementsByClassName("mensajeError")
    for(var i=0;i < borra.length;i++){
        borra[i].innerHTML="";//no podemos manipular el innerHTML de la coleccion entera, debemos hacer un bucle y cambiarlo 1 por 1
    }
    borrarError();
    document.getElementById("nombre").focus();//devolvemos el foco al primer elemento   
}


function error(elemento){
    elemento.className="error";//el elemento gana la clase error
    elemento.focus();//hacemos foco al elemento que da el error
}


function borrarError(){
    var form = document.forms[0];
    for(var i=0;i<form.length;i++){
        form.elements[i].className="";//le quitamos la clase error al elemento actual
    }
    
}

function añade(){//funcion para añadir nuevos cursos
    console.log("hola")
    const listaCursos = document.getElementById("listaCursos");
    const newOp = document.createElement("option");//creamos el nuevo elemento option
    newOp.innerHTML = document.getElementById("newCurso").value;//le damos su contenido al nuevo option

    listaCursos.appendChild(newOp);//Metemos la nueva opcion dentro de la lista de cursos
}




//Para medir las palabras en el textarea
const textArea = document.getElementById("mensaje");
const contador = document.getElementById("contador");

textArea.addEventListener("input", () => {
    // Obtener el texto del área de texto
    var texto = textArea.value;
    // Contar los caracteres
    var caracteres = texto.length;
    // Actualizar el contador de caracteres
    contador.textContent = caracteres + (caracteres === 1 ? " /500" : " /500");
});