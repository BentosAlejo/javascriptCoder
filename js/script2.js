// let nombreProducto1 = "Puerta"
// let precioProducto1 = 15000
// let stockProducto1 = 5

// let nombreProducto2 = "Ventana"
// let precioProducto2 = 8000
// let stockProducto2 = 10

// let nombreProducto3 = "Inodoro"
// let precioProducto3 = 10000
// let stockProducto3 = 20

// let nombreProducto4 = "Lavamanos"
// let precioProducto4 = 9000
// let stockProducto4 = 6

// let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que desea comprar: \nPuerta \nVentana \nInodoro \nLavamanos")
// let precioTotal = 0 

// function calculoGlobal(cantidad, stock, precio){
//     if(stock >= cantidad){
//         calcularPrecio(cantidad, precio)
//         alert("El precio es de: $" + (cantidad * precio))
//     }else{
//         alert("Nuesto stock es de: " + stock + ".")
//     }
// }
// function calcularPrecio(cantidad, precio){
//     precioTotal += cantidad * precio
// }

// function precioEnvios(precio){
//     return precio + 5000
// }
// for(let i = 0 ; i < cantidadCompras ; i++ ){

//     let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n- Puerta \n- Ventana \n- Inodoro \n- Lavamanos")
//     let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

//     if(compra1 = "Puerta"){
//         calculoGlobal(cantidad1, stockProducto1, precioProducto1)
//     }else if(compra1 = "Ventana"){
//         calculoGlobal(cantidad1, stockProducto2, precioProducto2)
//     }else if(compra1 = "Inodoro"){
//         calculoGlobal(cantidad1, stockProducto3, precioProducto3)
//     }else if(compra1 = "Lavamanos"){
//         calculoGlobal(cantidad1, stockProducto4, precioProducto4)
//     }else{
//     alert("No tenemos ese producto")
//     }
// }
// if(cantidadCompras > 1){
//     alert("Este es el precio total de tus productos: $" + precioTotal)
// }


// let preccioTotalFinal = precioEnvios(precioTotal)

// alert("Este es el precio total final con envio: " + preccioTotalFinal)

// let datosEnvio = prompt("Ingrese Ciudad, direccion y horario de disponibilidad para realizar el envio de sus productos")
// let datosCliente = prompt("Ingrese su nro de telefono y su mail de contacto")

// alert("Muchas gracias por su compra,nos pondremos en contacto a la brevedad para concretar el pago")

// const productoA = {nombre: "Puerta", precio: 15000, stock: 12}


// function producto(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
// }
// const createPerson = (name, price, stock) => ({name, price, stock})
// const producto1 = new producto("Puerta", 15000, 12)
// const producto2 = new producto("Ventana", 9000, 22)
// const producto3 = new producto("Inodoro", 10000, 15)
// const producto4 = new producto("Lavamanos", 7000, 16)


// const persona1 = createPerson("Alejo", 10, 200);
// console.log(persona1)
//arrays
let lista = [23, "Alejo", 99, true, "Sabroso"]
// console.log(lista.length)
// console.log(lista[3])
// console.log(lista[1])
// console.log(lista[-1])
// console.log(lista[4])

// for(let i = 0; i < lista.length; i++){
//     console.log(lista[i])
// }
// let nombre = prompt("Ingrese su nombre: ")
// let apellido = prompt("Pone apelli2")


// const suma = numeros[4] + numeros[1]
// console.log(suma)
// for(let index = 0; index < 5; index++){
    //     alert(numeros[index])
    // }
    
    // lista.push(nombre)
    // lista.unshift(apellido)
    // lista.pop(nombre)
    // lista.shift(apellido)
    // console.log(lista)
    
    // let elementoEliminado = lista.pop()
    // splice elimina 2 elementos de nuesto objeto
    // podemos sacar elemento del medio del objeto
    
    // console.log(lista.join("¬"))
    // const todoJunto = lista.concat(numeros)
    // console.log(todoJunto)
    
    //slice const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
    // const masculinos = nombres.slice(1, 3) - nuevo array desde la posicion 1 a 3
    // masculinos contiene "Pedro", "Miguel"
    const nombres = ["Toto", "Alejo", "Gaston"]
    // console.log(nombres.indexOf("Alejo"))
    // console.log(nombres.includes("Lorenzo")) // .includes devuelve boolean de si existe ese elemento en el array o no
    // nombres.reverse()
    // console.log(nombres) // reverse() invierte el orden de los valores 
    
    const metodosMasComunes = ["length", "(push, unshift)", "(shift, pop, splice)", "join", "concat", "slce", "indexOf", "includes", "reverse"]
    
    let averiguarLongitud = metodosMasComunes[0];
    let agregar = metodosMasComunes[1]
    let quitar = metodosMasComunes[2]
    let juntar = metodosMasComunes[3]
    let combinar = metodosMasComunes[4]
    let cortar = metodosMasComunes[5]
    let obtenerIndice = metodosMasComunes[6]
    let verificarExistencia = metodosMasComunes[7]
    let invertirOrden = metodosMasComunes[8]
    
    // console.log(metodosMasComunes.length)
    const numeros = [1,2,3,4,5]
    
    function porCadaUno(arr, fn){
        for(const el of arr){
            fn(el)
    }
}
porCadaUno(numeros, console.log)

// function porCadaUno(numeros, console.log){
//     for(const elemento of numeros){
//         console.log(elemento)
//     }
// }
function suma(a, b){
    a + b
}
porCadaUno(numeros, suma)
porCadaUno(["Alejo", "Toto", "Gaston"], console.log)

const duplicado = []

porCadaUno(numeros, (el) => {
    duplicado.push(el * 2)
})
console.log(duplicado)
let total = 0

porCadaUno(numeros, (num) => {total += num})
numeros.forEach( (num) =>{
    console.log(num)
})
const cursos = [
    {nombre: "JavaScript", dias: "Martes y Jueves", hora: 19},
    {nombre: "Diseño", dias:"Miercoles", hora:16}
]
const resultado = cursos.find((el) => el.nombre === "JavaScript")
console.log(resultado)

//.filter hace lo mismo pero busca coincidencias en algun elemento del objeto que contenga la palabra clave que pongamos
