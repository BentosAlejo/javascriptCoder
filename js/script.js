
const producto1 = {nombre: "Puerta", precio: 15000, stock: 12}
const producto2 = {nombre: "Ventana", precio: 9000, stock: 22}
const producto3 = {nombre: "Inodoro", precio: 10000, stock: 15}
const producto4 = {nombre: "Lavamanos", precio: 7000, stock: 16}
let precioTotal = 0

let cantidadCompras = parseInt(prompt("Ingrese la cantidad de productos distintos que quiere comprar: \n-Puerta \n-Ventana \n-Inodoro \n-Lavamanos"))

for(let i = 0; i < cantidadCompras; i++ ){
    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n-Puerta \n-Ventana \n-Inodoro \n-Lavamanos")
    let cantidad1 = parseInt(prompt("Ingrese la cantidad del producto que quiere comprar: "))
    
    if(compra1 = "Puerta"){
        calculoGlobal(cantidad1, producto1.stock, producto1.precio)
    }else if(compra1 = "Ventana"){
        calculoGlobal(cantidad1, producto2.stock, producto2.precio)
    }else if(compra1 = "Inodoro"){
        calculoGlobal(cantidad1, producto3.stock, producto3.precio)
    }else if(compra1 = "Lavamanos"){
        calculoGlobal(cantidad1, producto4.stock, producto4.precio)
    }else{
        alert("No tenemos ese producto")
    }
}
if(cantidadCompras > 1){
    alert("Este es el precio de sus productos: " + precioTotal)
}
let preccioTotalFinal = precioEnvios(precioTotal)
alert("Este es el precio total final con envio: " + preccioTotalFinal)
let datosEnvio = prompt("Ingrese Ciudad, direccion y horario de disponibilidad para realizar el envio de sus productos")
let datosCliente = prompt("Ingrese su numero de telefono y su mail de contacto")
alert("Muchas gracias por su compra,nos pondremos en contacto a la brevedad para concretar el pago")

function calculoGlobal(cantidad, stock, precio){
    if(stock >= cantidad){
        calcularPrecio(cantidad, precio)
        alert("EL precio es de: $" + (cantidad * precio))
    }else{
        alert("Nuestro stock es de: " + stock + ".")
    }
}
function calcularPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}
function precioEnvios(precio){
    return precio + 5000
}




