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
        let precioTotal1 = productoEncontrado1.precio * parseInt(cantidad1.value) 
        let precioTotal2 = productoEncontrado2.precio * parseInt(cantidad2.value)
       

       
        elementoAMostar.innerHTML = `
                                    <p>Valor unitario de producto ${productoEncontrado1.nombre}: ${productoEncontrado1.precio}</p>
                                    <p>Valor unitario producto  ${productoEncontrado2.nombre}: ${productoEncontrado2.precio}</p>
                                    <p> Valor total: $ ${precioTotal1 + precioTotal2}
                                    `
        card.append(elementoAMostar)
    })
    
    card.append(buttonCalcular);
}
