/* Ejercicio 1
Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];

/* Ejercicio 2
Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
console.log(lenguajesDeProgramacion.length);

/* Ejercicio 3
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.
*/
lenguajesDeProgramacion.push("Java","Ruby","GoLang");
console.log(lenguajesDeProgramacion);

/* Ejercicio 4
Crea una función que muestre en la consola 
todos los elementos de la lista "lenguagesDeProgramacion.
*/

function mostrarElementosLista (){
    console.log(lenguajesDeProgramacion);
    return;
}
mostrarElementosLista();

/*¨Ejercicio 5
Crea una función que muestre en la consola 
todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/

function mostrarOrdenInverso (){
    let inverso = lenguajesDeProgramacion.reverse();
    console.log(inverso);
    return;
}
mostrarOrdenInverso();

/*Ejercicio 6
Crea una función que calcule el promedio de los elementos en una lista de números.
*/

let listaNumeros = [10,9,8,7.5];
let segundaListaNumeros = [20,57,5,13,9];

function calcularPromedioLista (listaNumerica){
    //Llamar la función de Suma y dividirla por los elementos de la Lista
    return sumarElementosLista() / (listaNumerica.length);
}
console.log(calcularPromedioLista(listaNumeros));

/*Ejercicio 7
Crea una función que muestre en la consola 
el número más grande y el número más pequeño en una lista.
*/

//Utilizar el spreadOperator -> ...

function numeroMasGrandeYPequeño(lista){
    let valorMinimo = Math.min(...lista);
    let valorMaximo = Math.max(...lista);
    console.log(`El valor Minimo es ${valorMinimo}`);
    console.log(`El valor Máximo es ${valorMaximo}`);
    return;
}
numeroMasGrandeYPequeño(segundaListaNumeros);

/*Ejercicio 8
Crea una función que devuelva la suma de todos los elementos en una lista.
*/

function sumarElementosLista (){
    let sumaElementos = listaNumeros.reduce((valorSumaAnterior, valorActualLista) => valorSumaAnterior + valorActualLista, 0);
    return sumaElementos;
}
console.log(sumarElementosLista());

/*Ejercicio 9
Crea una función que devuelva la posición en la lista 
donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
*/

/*Ejercicio 10
Crea una función que reciba dos listas de números del mismo tamaño 
y devuelva una nueva lista con la suma de los elementos uno a uno.
*/
function sumarDosListasNumeros (lista1, lista2){
    //Utilizamos la opción .map (Transforma un arreglo en una lista nueva)
    return lista1.map((valorAnterior, indexLista) => valorAnterior + lista2[indexLista]);
}
let resultadoListas = sumarDosListasNumeros(listaNumeros, segundaListaNumeros);
console.log(resultadoListas);

/*
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

*/

/*Ejercicio 11
Crea una función que reciba una lista de números y 
devuelva una nueva lista con el cuadrado de cada número.
*/

function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}
const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);  