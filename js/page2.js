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
const card = document.getElementById("articleProductos")
const text = document.createElement("label")
const paleta = document.getElementById("paleta")
const localItem = localStorage.getItem("classbutton")
const botonEnvio = document.createElement("button")
const botonRetirar = document.createElement("button")
const info = document.getElementById("infoButton")
const form = document.getElementById("formRegistro")

localItem != null && paleta.classList.add(localItem)





let productos = []


fetch('../js/datos.json')
    .then((response) => response.json())
    .then((data) => {
        productos.push(...data)
    })
    
    


submit.addEventListener("click", (e) => {
    e.preventDefault()
    if(password.value.length < 5) {
        aviso.innerText = "La contraseña debe tener mas de 5 caracteres"
         return form.append(aviso)
    }else if(!/[0-9]/.test(password.value)) {
        aviso.innerText = "La contraseña debe tener un numero"
        return form.append(aviso)
    }else{
        aviso.innerText = "Contraseña guardada correctamente"
         return form.append(aviso)
    }  
})

userName.onchange = () => {
    event.preventDefault()
    let user = userName.value
    return form.append(`Bienvenid@ ${user}`)
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
info.addEventListener("click", () =>{
    Swal.fire({
        title: 'Codigo: 0952',
        text: '25% de dto en herramientas usando este codigo en el local',
        icon: 'info',
        confirmButtonText: 'Continuar'
    })
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

            botonEnvio.innerText = `Envio a domicilio`
        card.append(botonEnvio)

        botonRetirar.innerText = `Retiro en el local`
        card.append(botonRetirar)

        botonRetirar.addEventListener("click", () =>{
            card.innerHTML = ``
            let ubicacion = document.createElement("iframe")
            let retiro = document.createElement("p")
            retiro.innerHTML = `En las proximas 24hs habiles podras pasar por el local a retirar tu pedido, como siempre en Pacheco y Moreno.Zarate`
            
            card.append(retiro, ubicacion)
            setTimeout(()=>{
                Swal.fire({
                    title: 'Te esperamos de lunes a viernes de 8 a 18, Pacheco y Moreno, Zarate',
                    text: 'En preparacion...',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                })
            }, 3000)
            
            
        })
        botonEnvio.addEventListener("click", ()=>{
            card.innerHTML= ``
            let precioEnvio = document.createElement("p")
            let inputEnvio = document.createElement("input")
            let infoEnvio = document.createElement("p")
            let confirm = document.createElement("button")
               
            confirm.innerText = `Confirmar informacion`
            infoEnvio.innerText = `Ingrese email, numero de telefono y horario de contacto para concretar la compra`
            inputEnvio.innerText = `Ingrese ciudad, codigo postal, telefono y direccion`
            precioEnvio.innerText = `El precio total final con envio es: ${valorTotal + 5000}`
            
            card.append(precioEnvio,infoEnvio , inputEnvio, confirm)
            confirm.addEventListener("click", () =>{
                let aviso = document.createElement("p")
                aviso.innerText = `En las proximas horas sera contactado para concretar el pago.Gracias por su compra!`
                card.append(aviso)
                Swal.fire({
                    title: 'Compra concretada',
                    text: 'Gracias por elegirnos!',
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                    timer:10000
                })
                setTimeout(()=>{
                    Swal.fire({
                        title: 'Guardamos tu info correctamente,en tu horario de disponibilidad nos contactaremos para concretar la compra ',
                        text: 'Compra concretada',
                        icon: 'info',
                        confirmButtonText: 'Continuar',
                        timer:10000
                    })
                }, 5000)
            })
        })

        })
        
        card.append(buttonCalcular);
    }
    

    





