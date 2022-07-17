// let nombre = prompt("Ingrese su nombre")
// alert("Bienvenido " + nombre)
// let edad = parseInt(prompt("ingrese su edad "))
// if(edad >= 18) {
//     alert("sos mayor de edad");
// }else{
//     alert("no sos mayor de edad!");
// // }
// let precio = parseInt(prompt("ingrese el precio"))

// if (precio < 20){
//     alert("el precio es menor que 20");
// }else if(precio <50){
//     alert("el precio es menor que 50");
// }else if(precio < 100){
//     alert("el precio es menor que 100");
// }else {
//     alert("el precio es mayor que 100");
// }
// let nombreIngresado = prompt("Ingrese su nombre")

// if((nombreIngresado != "") && (nombreIngresado == "EMA") || (nombreIngresado == "ema")){
//     alert("Hola ema");
// }else{
//     alert("nombre invalido");
// }
let numero = 0

function suma(num1, num2){
     numero = num1 + num2
}
function mensaje(resultado){
    alert("El resultado es: " + resultado)
}

let numeroA = parseInt(prompt("Ingrese el primer numero: "))
let numeroB = parseInt(prompt("Ingrese el segundo numero: "))

suma(numeroA, numeroB)
mensaje(numero)
