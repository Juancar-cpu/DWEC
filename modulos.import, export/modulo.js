import { cadenaMayuscula } from "./funciones.js";//importamos una de las funciones del modulo

const saludo = cadenaMayuscula("hola mundo");
console.log(saludo);
//Nos va a dar fallo porque no tenemos un servidor
//Si copiamos el modulo funciones en una carpeta del xampp y lo llamamos desde ahi ya funciona

import { NUMEROCERO } from "./funciones.js";
import { NUMEROE } from "./funciones.js";
import { NUMEROPI } from "./funciones.js";
console.log(`Los numeros importados son ${NUMEROPI}, ${NUMEROE} y ${NUMEROCERO}`);