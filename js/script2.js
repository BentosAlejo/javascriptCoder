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

for(let i = 0 ; i < cantidadCompras ; i++ ){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n- Puerta \n- Ventana \n- Inodoro \n- Lavamanos")
    let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

    if(compra1 == "Puerta"){
    if(stockProducto1 >= cantidad1){
        precioTotal += cantidad1 * precioProducto1
        alert("El precio total es de: $" + (cantidad1 * precioProducto1))
    }else{
        alert("Nuesto stock es de: " + stockProducto1 + ".")
    }
    }else if(compra1 == "Ventana"){
    if(stockProducto2 >= cantidad1){
        precioTotal += cantidad1 * precioProducto2
        alert("El precio total es de: $" + (cantidad1 * precioProducto2))
    }else{
        alert("Nuesto stock es de: " + stockProducto2 + ".")
    }
    }else if(compra1 == "Inodoro"){
    if(stockProducto3 >= cantidad1){
        precioTotal += cantidad1 * precioProducto3
        alert("El precio total es de: $" + (cantidad1 * precioProducto3))
    }else{
        alert("Nuesto stock es de: " + stockProducto3 + ".")
    }
    }else if(compra1 == "Lavamanos"){
    if(stockProducto4 >= cantidad1){
        precioTotal += cantidad1 * precioProducto4
        alert("El precio total es de: $" + (cantidad1 * precioProducto4))
    }else{
        alert("Nuesto stock es de: " + stockProducto4 + ".")
    }
    }else{
    alert("No tenemos ese producto")
    }
}
if(cantidadCompras > 1){
    alert("Este es el precio total de tus compras: $" + precioTotal)
}
