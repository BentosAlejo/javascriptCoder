function producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
const producto1 = new producto("Puerta", 15000, 12)
const producto2 = new producto("Ventana", 9000, 22)
const producto3 = new producto("Inodoro", 10000, 15)
const producto4 = new producto("Lavamanos", 7000, 16)

let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar: \n-Puerta \n-Ventana \n-Inodoro \n-Lavamanos")
let precioTotal = 0

function calculoGlobal(cantidad, stock, precio){
    if(stock >= cantidad){
        calcularPrecio(cantidad, precio)
        alert("EL precio es de: $" + (cantidad * precio))
    }else{
        alert("Nuestro stock es de: " + strock + ".")
    }
}
function calcularPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}
function precioEnvios(precio){
    return precio + 5000
}
for(i = 0; i < cantidadCompras; i++ ){
    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n-Puerta \n-Ventana \n-Inodoro \n-Lavamanos")
    let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar: ")

    if(compra1 == "Puerta"){
        calculoGlobal(cantidad1, producto1.stock, producto1.precio)
    }else if(compra1 == "Ventana"){
        calculoGlobal(cantidad1, producto2.stock, producto2.precio)
    }else if(compra1 == "Inodoro"){
        calculoGlobal(cantidad1, producto3.stock, producto3.precio)
    }else if(compra1 == "Lavamanos"){
        calculoGlobal(cantidad1, producto4.stock, producto4.precio)
    }else{
        alert("No tenemos ese producto")
    }
}
if(cantidadCompras = 1){
    alert("Este es el precio de sus productos: " + precioTotal)
}
let preccioTotalFinal = precioEnvios(precioTotal)
alert("Este es el precio total final con envio: " + preccioTotalFinal)
let datosEnvio = prompt("Ingrese Ciudad, direccion y horario de disponibilidad para realizar el envio de sus productos")
let datosCliente = prompt("Ingrese su numero de telefono y su mail de contacto")
alert("Muchas gracias por su compra,nos pondremos en contacto a la brevedad para concretar el pago")





