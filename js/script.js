
const productos = [
     {nombre: "Puerta", precio: 15000, stock: 12},
     {nombre: "Ventana", precio: 9000, stock: 22},
     {nombre: "Inodoro", precio: 10000, stock: 15},
     {nombre: "Lavamanos", precio: 7000, stock: 16}
];
    let precioTotal = 0

let cantidadCompras = parseInt(prompt("Ingrese la cantidad de productos distintos que quiere comprar: \n-Puerta \n-Ventana \n-Inodoro \n-Lavamanos"))

for(let i = 0; i < cantidadCompras; i++ ){
    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n-Puerta \n-Ventana \n-Inodoro \n-Lavamanos")
    let cantidad1 = parseInt(prompt("Ingrese la cantidad del producto que quiere comprar: "))
    
    if(compra1 == "Puerta"){
        calculoGlobal(compra1, cantidad1)
    }else if(compra1 == "Ventana"){
        calculoGlobal(compra1, cantidad1)
    }else if(compra1 == "Inodoro"){
        calculoGlobal(compra1, cantidad1)
    }else if(compra1 == "Lavamanos"){
        calculoGlobal(compra1, cantidad1)
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

function calculoGlobal(producto, cantidad){

    let productoEncontrado = productos.find(elemento => elemento.nombre === producto)
    
    if(productoEncontrado.stock >= cantidad){
        calcularPrecio(cantidad, productoEncontrado.precio)
        alert("El precio es de: $" + (cantidad * productoEncontrado.precio))
    }else{
        alert("Nuestro stock es de: " + productoEncontrado.stock + ".")
    }
}
function calcularPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}
function precioEnvios(precio){
    return precio + 5000
}





