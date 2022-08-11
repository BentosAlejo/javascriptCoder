input3.onclick = () =>{
    card.innerHTML=``;
    input1.checked = false
    input2.checked = false
    input3.checked = false

   
    for(let i = 1; i < 4; i++){
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
    let cantidad1 = document.getElementById('cantidad1')
    let cantidad2 = document.getElementById('cantidad2')
    let cantidad3 = document.getElementById('cantidad3')
    
   
    let buttonCalcular = document.createElement("button")
    buttonCalcular.innerText = 'Calcular'
    let elementoAMostar = document.createElement('p');
    buttonCalcular.addEventListener('click', () => {
        let productoEncontrado1 = productos.find(elemento => elemento.id === parseInt(select1.value))
        let productoEncontrado2 = productos.find(elemento => elemento.id === parseInt(select2.value))
        let productoEncontrado3 = productos.find(elemento => elemento.id === parseInt(select3.value))
        let precioTotal1 = productoEncontrado1.precio * parseInt(cantidad1.value)
        let precioTotal2 = productoEncontrado2.precio * parseInt(cantidad2.value)
        let precioTotal3 = productoEncontrado3.precio * parseInt(cantidad3.value)

       
        elementoAMostar.innerHTML = `
                                    <p>Valor unitario de producto ${productoEncontrado1.nombre}: ${productoEncontrado1.precio}</p>
                                    <p>Valor unitario producto  ${productoEncontrado2.nombre}: ${productoEncontrado2.precio}</p>
                                    <p>Valor unitario producto  ${productoEncontrado3.nombre}: ${productoEncontrado3.precio}</p>
                                    <p>Valor precio total: $ ${precioTotal1 + precioTotal2 + precioTotal3}
                                    `
        card.append(elementoAMostar)
    })
    
    card.append(buttonCalcular);
}


    