input1.onclick = () =>{
    card.innerHTML=``;
    input1.checked = false
    input2.checked = false
    input3.checked = false

   
    for(let i = 1; i < 2; i++){
        let elemento = document.createElement("div");
        elemento.innerHTML =`<h3>Elija el producto ${i} que quiere comprar</h3>
                            <select id=${'select'+i}>
                                <option value=0>Puerta</option>
                                <option value=1>Ventana</option>
                                <option value=2>Inodoro</option>
                                <option value=3>Lavamanos</option>
                            </select>
                            <input type="number" id="cantidad1"/>`
        card.append(elemento)
    }
    document.body.append(card)
    
    let select1 = document.getElementById('select1');
    let select2 = document.getElementById('select2');
    let select3 = document.getElementById('select3');
    let select4 = document.getElementById('select4');
    let cantidad = document.getElementById('cantidad1')
   
    let buttonCalcular = document.createElement("button")
    buttonCalcular.innerText = 'Calcular'
    let elementoAMostar = document.createElement('p');
    buttonCalcular.addEventListener('click', () => {
        let productoEncontrado1 = productos.find(elemento => elemento.id === parseInt(select1.value))
        let precioTotal  = productoEncontrado1.precio * parseInt(cantidad.value)
    

        
        elementoAMostar.innerHTML = `
                                    <p>Valor unitario de producto ${productoEncontrado1.nombre}: ${productoEncontrado1.precio}</p>
                                    <p>Valor de tu compra: $ ${precioTotal}
                                    `
        card.append(elementoAMostar)
    })
    
    card.append(buttonCalcular);
}
