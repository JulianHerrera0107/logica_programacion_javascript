/*Ejercicio 1
Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function saludarPorConsola(){
    console.log('¡Hola, Mundo!');
}
saludarPorConsola();

/*Ejercicio 2
Crear una función que reciba un nombre como parámetro y muestre 
"¡Hola, [nombre]!" en la consola.
*/

function mostrarNombreConsola(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}
mostrarNombreConsola('Julian');

/*Ejercicio 3
Crear una función que reciba un número como parámetro 
y devuelva el doble de ese número.
*/

function devolverDobleNumero(numero){
    return numero * 2;
}
let resultadoNumero = devolverDobleNumero(11);
console.log(resultadoNumero);

/*Ejercicio 4
Crear una función que reciba tres números 
como parámetros y devuelva su promedio
*/

function promedioNumeros(uno, dos, tres){
    return (uno + dos + tres) / 3;
}
let promedio = promedioNumeros(5,4.5,4.5);
console.log(promedio);

/*Ëjercicio 5
Crear una función que reciba dos números como parámetros 
y devuelva el mayor de ellos
*/
function encontrarMayor(a, b) {
    // ( condición ) ? ejecuta este código : ejecuta este código en su lugar
    return a > b ? a : b;
  }
  let numeroMayor = encontrarMayor(15, 96);
  console.log(numeroMayor);

/*Ejercicio 6
Crear una función que reciba un número como parámetro y 
devuelva el resultado de multiplicar ese número por sí mismo.
*/
function multiplicarNumero(numero){
    return numero * numero;
}
let resultado = multiplicarNumero(6);
console.log(resultado);