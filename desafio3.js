/*Ejercicio 1
Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
*/
function calcularIndiceMasaCorporal(altura, peso){
    //Dividir el peso entre la altura por altura
    return peso / (altura * altura);
}
let resultadoIMC = calcularIndiceMasaCorporal(1.77, 68);
console.log(resultadoIMC);

/*Ejercicio 2
Crea una función que calcule el valor del factorial de un número pasado como parámetro
*/
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  

/*Ejercicio 3
Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
*/
function conversionDolaresAReales(valor){
    return valor * 4.80;
}
let resultadoConversion = conversionDolaresAReales(3);
console.log(resultadoConversion);

function conversionPesosColombianosADolares(valor){
    return valor * 0.00025;
}
let resultadoConversionPD = conversionPesosColombianosADolares(12000);
console.log(resultadoConversionPD);

/*Ejercicio 4
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.
*/

function formulasRectangulo(altura,anchura){
    // Area = Altura por Anchura
    var areaRectangulo = altura * anchura;
    // Perímetro = 2 * Altura + Anchura
    var perímetroRectangulo = 2 * (altura + anchura);
    console.log(`El área del rectangulo es de ${areaRectangulo}cm y el Perimetro ${perímetroRectangulo}cm`);
    return;
}
formulasRectangulo(2,10);

/*
function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

*/

/*Ejercicio 5
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
function formulasCirculo(radio){
    var valorPi = 3.14;
    // Area = Pi por Radio al cuadrado
    var areaCirculo = valorPi * (radio * radio);
    // Perimetro = 2 por Pi por Radio
    var perimetroCirculo = (2 * valorPi) * radio;
    console.log(`El área del circulo es de ${areaCirculo}cm y el Perimetro ${perimetroCirculo}cm`);
    return;
}
formulasCirculo(5);

/*Ejercicio 6
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
function tablaMultiplicar(numero){
    let numeroInicial = 1;
    while (numeroInicial <= 10){
        let resultadoOperacion = numeroInicial * numero;
        console.log(`${numeroInicial} * ${numero} = ${resultadoOperacion}`);
        numeroInicial++;
    }
}
tablaMultiplicar(15);

