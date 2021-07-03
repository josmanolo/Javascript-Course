// Ejercicio 1
import * as aboutMe from "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
//Se ejecuta el console.log

// Ejercicio 3
/* 
·Elements: sirve para inspeccionar los elementos HTML y CSS
·Network: srive para Aasegurarse de que los recursos se están cargando o descargando correctamente e inspeccionar las propiedades de un recurso, como sus headers HTTP.
·Device Mode: sirve para la visualización de el contenido en diferentes resoluciones
*/

// Ejercicio 4
for(let i=1; i<=100; i++)
{
    if( i%7==0 )
    {
        console.log(i); 
    }
}

// Ejercicio 5
/*El atributo module especifica que debe ser considerado como un módulo de Javascript*/


// Ejercicio 6

const formatter = {
    prefix: "hello",
    append(str) {
        console.log(`${prefix} ${str}`)
    },
    lowerString(str) {
        console.log(str.toLowerCase());
    }
}

