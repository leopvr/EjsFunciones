// 1) Crear una función que tome dos parámetros y devuelva un console.log() con el resultado de la suma dentro del bloque de ejecución de la función. Invocar la función al menos tres veces
// function addition(param1, param2) {
//     return param1 + param2;
// }
// console.log(addition(1, 3))
// console.log(addition(4, 6))
// console.log(addition(5, 56))

// 2) Crear una función que tome dos parámetros y devuelva un console.log() con el resultado de la resta dentro del bloque de ejecución de la función. Invocar la función al menos tres veces
// function subtraction(param1, param2) {
//     return param1 - param2;
// }
// console.log(subtraction(1, 3))
// console.log(subtraction(4, 6))
// console.log(subtraction(5, 56))

// 3) Crear una función que tome dos parámetros y devuelva un console.log() con el resultado de la multiplicación dentro del bloque de ejecución de la función. Invocar la función al menos tres veces
// function ej3(param1, param2) {
//     return param1 * param2;
// }
// console.log(ej3(1, 3))
// console.log(ej3(4, 6))
// console.log(ej3(5, 56))

// 4) Crear una función que tome dos parámetros y devuelva un console.log() con el resultado de la división dentro del bloque de ejecución de la función. Invocar la función al menos tres veces
// function ej4(param1, param2) {
//     return param1 / param2;
// }
// console.log(ej4(1, 3))
// console.log(ej4(4, 6))
// console.log(ej4(5, 56))

// 5) Crear un array con al menos cinco frutas y crear una función que recorra el array al ser invocada, devolviendo los nombres de las frutas por consola, dentro del bloque de ejecución.
// const arrayFrutas = ["manzana", "pera", "anana", "banana", "sandia"];
// function ej5() {
//     for (let i = 0; i < arrayFrutas.length; i++) {
//         console.log(arrayFrutas[i]);
//     }
// }
// ej5();

// 6) Crear una función que recorra un array de diez animales y devuelva los nombres por consola dentro del bloque de ejecución
// const arrayAnimales = ["perro", "gato", "zorro", "vaca", "toro", "caballo", "jirafa", "delfin", "elefante", "leon"];
// function ej6() {
//     for (let i = 0; i < arrayAnimales.length; i++) {
//         console.log(arrayAnimales[i]);
//     }
// }
// ej6();

// 7) Crear una función que permite reducir los puntos 1 al 4 en una sola función, por lo cual deberá tomar tres parámetros: Los valores a procesar y la operación aritmética a resolver.
// function ej7(param1, param2) {
//     let suma = param1 + param2;
//     let resta = param1 - param2;
//     let multi = param1 * param2;
//     let divi = param1 / param2;
//     return {suma, resta, multi, divi};
// }
// console.log(ej7(10, 20))

// 8) Crear una función que tome el primer elemento del array obtenido en https: /jsonplaceholder.typicode.com/users y que retorne el nombre del usuario con su correo. La función debe mostrar el resultado por consola al momento de ser invocada.
// const urlAPI = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     function ej8() {
//         console.log(`El nombre del primer usuario es "${users[0].name}" y el mail es "${users[0].email}"`);
//     }
//     ej8();
//   });

// 9) Pedirle cinco números al usuario, almacenarlos para luego crear una función que los ordene de menor a mayor y otra función que los ordene de mayor a menor
//Probando la resolucion de Cata---
// function menAMay(array) {
//   array.sort(function(a, b){return a - b});
//   console.log(array);
// }
// function mayAMen(array) {
//   array.sort(function(a, b){return b - a}); 
//   console.log(array);
// }

// let arrayNumbers = [];
// for (let i=0; i <= 5; i++) {
//   let numbers = parseInt(prompt("Ingrese un numero:"));
//   arrayNumbers.push(numbers);
// }
// console.log(arrayNumbers);
// menAMay(arrayNumbers);
// mayAMen(arrayNumbers);



// 10)¿Qué son los eventos en JS? Buscar información y debatir en el grupo sobre el funcionamiento de:
// onclick
// onchange
// onkeydown
// onmouseover
// onsubmit
// onscroll

// 11) Crear una función que cambie una cadena de texto a minúsculas (sin importar el formato de ingreso)
// function ej11() {
//     let cadText = prompt("Ingrese cualquier frase o palabra");
//     let lowerText = cadText.toLowerCase();
//     console.log(lowerText)
// }
// ej11();

// 12) Crear una función a gusto y que resuelva un problema que gusten.
function ej12() {
  const urlAPI = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })

    .then((users) => {

      let arrayUser = [];
      
      function ej12_1() {
        users.forEach((e) => {
          arrayUser.push(e);
        });
      }
      ej12_1();

      console.table(arrayUser);

    });
}
