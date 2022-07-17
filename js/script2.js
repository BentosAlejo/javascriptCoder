let nombreProducto1 = "Puerta"
let precioProducto1 = 15000
let stockProducto1 = 5

let nombreProducto2 = "Ventana"
let precioProducto2 = 8000
let stockProducto2 = 10

let nombreProducto3 = "Inodoro"
let precioProducto3 = 10000
let stockProducto3 = 20

let nombreProducto4 = "Lavamanos"
let precioProducto4 = 9000
let stockProducto4 = 6

let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que desea comprar: \nPuerta \nVentana \nInodoro \nLavamanos")
let precioTotal = 0 

function calculoGlobal(cantidad, stock, precio){
    if(stock >= cantidad){
        calcularPrecio(cantidad, precio)
        alert("El precio es de: $" + (cantidad * precio))
    }else{
        alert("Nuesto stock es de: " + stock + ".")
    }
}
function calcularPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function precioEnvios(precio){
    return precio + 5000
}
for(let i = 0 ; i < cantidadCompras ; i++ ){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n- Puerta \n- Ventana \n- Inodoro \n- Lavamanos")
    let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

    if(compra1 = "Puerta"){
        calculoGlobal(cantidad1, stockProducto1, precioProducto1)
    }else if(compra1 = "Ventana"){
        calculoGlobal(cantidad1, stockProducto2, precioProducto2)
    }else if(compra1 = "Inodoro"){
        calculoGlobal(cantidad1, stockProducto3, precioProducto3)
    }else if(compra1 = "Lavamanos"){
        calculoGlobal(cantidad1, stockProducto4, precioProducto4)
    }else{
    alert("No tenemos ese producto")
    }
}
if(cantidadCompras > 1){
    alert("Este es el precio total de tus productos: $" + precioTotal)
}


let preccioTotalFinal = precioEnvios(precioTotal)

alert("Este es el precio total final con envio: " + preccioTotalFinal)

let datosEnvio = prompt("Ingrese Ciudad, direccion y horario de disponibilidad para realizar el envio de sus productos")
let datosCliente = prompt("Ingrese su nro de telefono y su mail de contacto")

alert("Muchas gracias por su compra,nos pondremos en contacto a la brevedad para concretar el pago")


