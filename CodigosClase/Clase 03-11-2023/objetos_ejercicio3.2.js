
        /*Act 3.2 Crea un objeto llamado tvSamsung con las propiedades nombre (TV Samsung 42”), categoría (Televisores), unidades (4), 
        precio (345.95) y con un método llamado importe que devuelve el valor total de las unidades (nº de unidades * precio)

Act 3.1 Crea un objeto Productos con las propiedades y métodos del ejercicio anterior. Además tendrá un método getInfo que devolverá: 
‘Nombre (categoría): unidades uds x precio € = importe €’. Crea 3 productos diferentes.

Act 3.3 Crea un Objeto Televisores que hereda de Productos y que tiene una nueva propiedad llamada tamaño. 
El método getInfo mostrará el tamaño junto al nombre*/

/*Paso 3.2*/function tvSamsung(nombre, categoria, unidades, precio){
            this.nombre = "TV Samsung 42";
            this.categoria = "Televisores";
            this.unidades = 4;
            this.precio = 345.95;

            this.importe = function(){
                return this.unidades * this.precio;
            }
        }

/*Paso 3.1*/function Productos(nombre, categoria, unidades, precio){
            this.nombre = nombre;
            this.categoria = categoria;
            this.unidades = unidades;
            this.precio = precio;
            this.importe = function(){
                return this.unidades * this.precio;
            }

            this.getInfo = function(){
                return this.nombre+"("+this.categoria+") : "+this.unidades+" * "+this.precio+" = "+this.unidades*this.precio+"$";
            }
        }
        //Creamos 3 productos
        let micro = new Productos("Microondas", "Cocina", 1, 58);
        console.log(micro.getInfo());//recuerda poner siempre los () al final de una funcion
        let silla = new Productos("Silla m-19", "Hogar general", 2, 32);
        let cafetera = new Productos("Cafetera GC", "Esparcimiento", 3, 158);

/*Paso 3.3*/function Televisores(nombre, categoria, unidades, precio, tamaño){
            Productos.call(this, nombre, categoria, unidades, precio);
            //La funcion call llama a los atributos de otro objeto, Productos en este caso. Es como el super(); de java en herencia
            this.tamaño = tamaño;

            this.getInfo = function(){
                return this.nombre+"."+this.tamaño+"("+this.categoria+") : "+this.unidades+" * "+this.precio+" = "+this.unidades*this.precio+"$";
            }
        }

       // Televisores.prototype = Object.create(Producto.prototype);

        let tele = new Televisores("TV Samsung 42", "Televisores", 4, 345.95, "180 pulgadas")
        console.log(tele.getInfo());
        //Consultar https://www.w3schools.com/js/js_object_prototypes.asp y https://developer.mozilla.org/es/docs/Web/Javascript/Inheritance and the prototype chain
    
    /*Paso 3.3 usando prototype
    function Televisores(nombre, categoria, unidades, precio){
        this.nombre = nombre;
            this.categoria = categoria;
            this.unidades = unidades;
            this.precio = precio;
        }

        let tele = new Televisores("TV Samsung 42", "Televisores", 4, 345.95);
    Televisores.prototype.tamaño = "180 pulgadas";
    Televisores.prototype.getInfo= function() {
        return this.nombre+"."+this.tamaño+"("+this.categoria+") : "+this.unidades+" * "+this.precio+" = "+this.unidades*this.precio+"$";
    };
    console.log(tele.getInfo());*/

        
    
    /* 2.1 ToString()
 Act 4.1 Modifica los Objetos Productos y Televisores, para que contenga la función ”toString”. 
 Esta función debe devolver una cadena de texto (La que consideres oportuna).*/

 Productos.prototype.toStrig = function(){//Podemos usar prototype para meterle atributos y funciones nuevas a los constructores una vez creados
    return "El producto '"+this.nombre+"' tiene un valor unitario de "+this.precio;
 }
 console.log(silla.toStrig());

 Televisores.prototype.toStrig = function(){
    return "El producto '"+this.nombre+"' tiene un valor unitario de "+this.precio;
 }
 console.log(tele.toStrig());

/* 2.2 valueOf()
Act 4.2 Modifica los Objetos Productos y Televisores, para que contenga la función ”valueOf”. Esta función debe devolver un valor
numérico(El que consideres oportuno).
Act 4.4 Crea 5 productos y guárdalos en un array. Crea las siguientes funciones (todas reciben ese array como parámetro):
• prodOrdenPorNombre() Devuelve un array con los productos ordenados alfabéticamente 
• prodOrdenPorPrecio() devuelve un array con los productos ordenados por importe 
• prodPrecioTotal() Devuelve el importe total del los productos del array, con 2 decimales 
• prodConMenosUnidades() Además del array recibe como segundo parámetro un número y devuelve un array con todos los productos que
tienen menos unidades que las indicadas 
• prodLista() Devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un guión y la información de un producto del array*/

/*Paso 4.2*/
Productos.prototype.valueOf = function(){
    return this.importe();
}
console.log(cafetera.valueOf());

Televisores.prototype.valueOf = function(){
    return this.importe();
}
console.log(tele.valueOf());

/*Paso 4.4*/

var pc = new Productos("Asus gforce", "Gaming", 1, 860);
var lampara = new Productos("Little light", "Hogar", 2, 19.99);
var vaso = new Productos("Cristal", "Cocina", 6, 5.45);
var cojin = new Productos("Puff", "Hogar", 1, 45);
var pastillero = new Productos("Compact", "Drogueria", 3, 2.50);

const newProductos = [pc, lampara, vaso, cojin, pastillero];

const prodOrdenPorNombre = newProductos =>//las funciones flecha se escriben como variables
 (newProductos.sort((p1,p2) => p1.nombre.localeCompare(p2.nombre)));//repasar short en w3. localCompare solo se utiliza para letras, no numeros

console.log(prodOrdenPorNombre(newProductos)); 

const prodOrdenPorPrecio = newProductos =>
    newProductos.sort((p1,p2) => p1.precio - p2.precio);//los mas baratos delante 


console.log(prodOrdenPorPrecio(newProductos)); 


const prodPrecioTotal = newProductos =>
    newProductos.sort((p1,p2) => p1.importe() - p2.importe());//repasar short en w3

console.log(prodPrecioTotal(newProductos)); 



 /*object create
 Es una alternativa a la funcion constructora y permite elegir el prototipo con el que crear el objeto
 Object.create(nombrePrototipo)
 */

 /*call
 Para invocar un metodo pasando un objeto propietario como argumento, es decir, indicando a qué objeto se referirá la palabra clave this

 const persona1 = {nombre:'Pedro', apellido:'Lopez', nombreCompleto:function(){return this.name+" "+this.apellido}}
 const persona2 = {nombre:'Belen', apellido:'Garcia'}
 console.log(persona1.nombreCompleto.call(persona2))
 */

 /*apply
 Es igual que call, pero los parametros se pasan por un array en lugar de separados por comas. Si no recibe un array da error
 const persona1 = {nombre:'Pedro', apellido:'Lopez', nombreCompleto:function(ciudad, pais){return this.name+" "+this.apellido+" "+ciudad+" "+pais}}
 const persona2 = {nombre:'Belen', apellido:'Garcia'}
 console.log(persona1.nombreCompleto.apply(persona2,["Madrid", "España"]))
 */

 /*bind
 bind toma prestados métodos de otros objetos

 <p id="demo"></p>

<script>
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member); //member coge prestado el metodo fullName de person. La sintaxis es al revés

document.getElementById("demo").innerHTML = fullName();*/
