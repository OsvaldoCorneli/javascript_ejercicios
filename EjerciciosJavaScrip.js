/* 
Declaración de Variables y Constantes

Declara tres variables de diferentes tipos de datos: una cadena, 
un número, y un booleano. Declara también una constante para el 
valor de pi. Imprime el valor de cada uno en la consola.
*/

let cadena = "Esta es una cadena";
let numero = 24;
let booleano = true;
const pi = 3.14;

console.log(cadena , numero, booleano, pi);

/*
Conversión de Tipos de Datos

Crea una variable de tipo cadena con un valor numérico,
y conviértela en un número entero y en un número decimal. 
Imprime los resultados de ambas conversiones.
*/

let cadenaNumerica = "34";

let entero = +cadenaNumerica;

let decimal = parseFloat(entero);

console.log("Entero", entero);

console.log("Decimal",decimal);




/*
Concatenación e Interpolación de Cadenas

Declara dos variables con tu nombre y tu apellido,
y concaténalas en una tercera variable para crear 
tu nombre completo. Luego, utiliza interpolación para
imprimir un mensaje como "Hola, mi nombre es [nombre completo]".
*/

let nombre = "Osvaldo";
let apellido = "Corneli";

let nombreCompleto = `Hola, mi nombre es ${nombre} ${apellido}`;
console.log(nombreCompleto);


/*
Uso de Comillas Dobles y Simples

Crea una cadena que incluya comillas dobles y otra que incluya comillas simples.
Imprime ambas en la consola y explica las diferencias entre ambas en cada lenguaje.
*/

let comillaDoble = 'Este es un "Mensaje" que incluye comillas dobles';
let comillasSimple = "Este es un 'Mensaje' que incluye comillas simple";

console.log(comillaDoble);
console.log(comillasSimple);



/*
Heredoc y Nowdoc (solo en PHP)

Escribe un bloque de texto largo usando Heredoc y Nowdoc en PHP,
 y el equivalente más cercano en Java y JavaScript para almacenar 
 texto largo en una variable.
*/
let variable = "Esto es una variable"
let textoLarge = `Esto es un texto largo donde puedo concatenar variables tambien como por ejemplo '${variable}' `;

console.log(textoLarge);

/*
Extracción y Búsqueda en Cadenas

Declara una cadena que contenga una oración. 
Encuentra la posición de una palabra específica 
en la cadena e imprime su índice. Extrae esa palabra
usando el índice obtenido.
*/

let oracion = "Esto es una oracion donde nesesito buscar una palabra."
let buscar = "buscar";

let existe = oracion.includes(buscar);
let indice = oracion.indexOf(buscar);


let resultado = existe ? `La palabra ${buscar} esta en el indice ${indice}` : "La palabra no esta en la oracion";


console.log(resultado);
/*
Reemplazo y Formato de Texto

Declara una cadena con una frase y reemplaza una palabra específica por otra.
Luego, cambia todo el texto a mayúsculas y minúsculas.
*/




/*
Uso de Operadores Aritméticos

Declara dos números y realiza las operaciones aritméticas básicas: suma, resta,
multiplicación, división y módulo. Imprime los resultados de cada operación.
*/



/*
Operadores de Comparación y Lógicos

Declara dos variables con valores numéricos y compara 
si el primero es mayor que el segundo. Si es así, imprime 
"Es mayor"; si no, imprime "Es menor o igual".
 Añade un operador lógico para verificar si ambos 
 números son mayores que cero antes de hacer la comparación.
*/


/*
Operadores de Comparación y Lógicos
Declara dos variables con valores numéricos y compara si el 
primero es mayor que el segundo. Si es así, imprime "Es mayor"; 
si no, imprime "Es menor o igual". Añade un operador lógico para verificar 
si ambos números son mayores que cero antes de hacer la comparación.
*/


/*
Operador Ternario y Operador de Fusión Nula (o equivalente)

Declara una variable que puede ser nula y usa un operador
 ternario para verificar si es nula. 
 Si es así, asígnale un valor predeterminado; si no, 
 imprime su valor actual.
*/