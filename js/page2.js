const userName = document.getElementById("formNombre")
const apellido = document.getElementById("formApellido")
const email = document.getElementById("formEmail")
const password = document.getElementById("formPassword")
const submit = document.getElementById("formSubmit")
const clickHere = document.getElementById("buttonClick")
const aviso = document.createElement("h3")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const card = document.createElement("div")
const text = document.createElement("label")
const paleta = document.getElementById("paleta")
const localItem = localStorage.getItem("classbutton")

localItem != null && paleta.classList.add(localItem)





const productos = [
    {id:0, nombre: "Puerta", precio: 15000, stock: 12},
    {id:1, nombre: "Ventana", precio: 9000, stock: 22},
    {id:2, nombre: "Inodoro", precio: 10000, stock: 15},
    {id:3, nombre: "Lavamanos", precio: 7000, stock: 16}
];




submit.addEventListener("click", (e) => {
    e.preventDefault()
    if(password.value.length < 5) {
        aviso.innerText = "La contraseña debe tener mas de 5 caracteres"
         return document.body.append(aviso)
    }else if(!/[0-9]/.test(password.value)) {
        aviso.innerText = "La contraseña debe tener un numero"
        return document.body.append(aviso)
    }else{
        aviso.innerText = "Contraseña guardada correctamente"
         return document.body.append(aviso)
    }  
})

userName.onchange = () => {
    event.preventDefault()
    let user = userName.value
    return document.body.append(`Bienvenid@ ${user}`)
}


clickHere.addEventListener("click", () => {
    
    if(paleta.classList.contains("class1")){
        paleta.classList.remove("class1")
        paleta.classList.add("class2")
        localStorage.setItem("classbutton", "class2")
    }else if(paleta.classList.contains("class2")){
        paleta.classList.remove("class2")
        localStorage.removeItem("classbutton")
    }else{
        paleta.classList.add("class1")
        localStorage.setItem("classbutton", "class1")
    }
})


    input4.onclick = () =>{
        card.innerHTML=``;
        input1.checked = false
        input2.checked = false
        input3.checked = false

       
        for(let i = 1; i < 5; i++){
            let elemento = document.createElement("div");
            elemento.innerHTML =`<h3>Elija el producto ${i} que quiere comprar</h3>
                                <select id=${'select'+i}>
                                    <option value=0>Puerta</option>
                                    <option value=1>Ventana</option>
                                    <option value=2>Inodoro</option>
                                    <option value=3>Lavamanos</option>
                                </select>
                                <input type="number" id="${'cantidad'+i}"/>`
            card.append(elemento)
        }
        document.body.append(card)
        
        let select1 = document.getElementById('select1');
        let select2 = document.getElementById('select2');
        let select3 = document.getElementById('select3');
        let select4 = document.getElementById('select4');
        let cantidad1 = document.getElementById('cantidad1')
        let cantidad2 = document.getElementById('cantidad2')
        let cantidad3 = document.getElementById('cantidad3')
        let cantidad4 = document.getElementById('cantidad4')
       
        let buttonCalcular = document.createElement("button")
        buttonCalcular.innerText = 'Calcular'
        let elementoAMostar = document.createElement('p');
        buttonCalcular.addEventListener('click', () => {
            let productoEncontrado1 = productos.find(elemento => elemento.id === parseInt(select1.value))
            let productoEncontrado2 = productos.find(elemento => elemento.id === parseInt(select2.value))
            let productoEncontrado3 = productos.find(elemento => elemento.id === parseInt(select3.value))
            let productoEncontrado4 = productos.find(elemento => elemento.id === parseInt(select4.value))
            let {nombre, precio} = productoEncontrado1
            let {nombre:nombre2, precio:precio2} = productoEncontrado2
            let {nombre:nombre3, precio:precio3} = productoEncontrado3
            let {nombre:nombre4, precio:precio4} = productoEncontrado4
            let precioTotal1 = precio * parseInt(cantidad1.value)
            let precioTotal2 = precio2 * parseInt(cantidad2.value)
            let precioTotal3 = precio3 * parseInt(cantidad3.value)
            let precioTotal4 = precio4 * parseInt(cantidad4.value)
            let valorTotal = precioTotal1 + precioTotal2 + precioTotal3 + precioTotal4

           
            elementoAMostar.innerHTML = `
                                        <p>Valor unitario de producto ${nombre}: ${precio}</p>
                                        <p>Valor unitario producto  ${nombre2}: ${precio2}</p>
                                        <p>Valor unitario producto  ${nombre3}: ${precio3}</p>
                                        <p>Valor unitario producto  ${nombre4}: ${precio4}</p>
                                        <p>Valor total ${valorTotal}
                                        `
            card.append(elementoAMostar)
        })
        
        card.append(buttonCalcular);
    }
    
    
    let alerta = () => {
        Swal.fire({
            title: 'Codigo: 09456',
            text: '25% de dto con este codigo en el local',
            icon: 'info',
            confirmButtonText: 'Yendo no, llegando'
        })
    }
    const info = document.getElementById("infoButton")
    info.addEventListener("click",alerta)





