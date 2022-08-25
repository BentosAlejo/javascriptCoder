input2.onclick = () =>{
    card.innerHTML=``;
    input1.checked = false
    input2.checked = false
    input3.checked = false

   
    for(let i = 1; i < 3; i++){
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
    let cantidad1 = document.getElementById('cantidad1')
    let cantidad2 = document.getElementById('cantidad2')
   
    let buttonCalcular = document.createElement("button")
    buttonCalcular.innerText = 'Calcular'
    let elementoAMostar = document.createElement('p');
    buttonCalcular.addEventListener('click', () => {
        let productoEncontrado1 = productos.find(elemento => elemento.id === parseInt(select1.value))
        let productoEncontrado2 = productos.find(elemento => elemento.id === parseInt(select2.value))
        let {nombre, precio} = productoEncontrado1
        let {nombre:nombre2, precio:precio2} = productoEncontrado2
        let precioTotal1 = precio * parseInt(cantidad1.value) 
        let precioTotal2 = precio2 * parseInt(cantidad2.value)
        let valorTotal = precioTotal1 + precioTotal2
       

       
        elementoAMostar.innerHTML = `
                                    <p>Valor unitario de producto ${nombre}: ${precio}</p>
                                    <p>Valor unitario producto  ${nombre2}: ${precio2}</p>
                                    <p> Valor total: $ ${valorTotal}
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
                },5000)
            })
        })

    })
    
    card.append(buttonCalcular);
}
