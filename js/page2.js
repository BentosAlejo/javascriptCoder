const nombre = document.getElementById("formNombre")
const apellido = document.getElementById("formApellido")
const email = document.getElementById("formEmail")
const password = document.getElementById("formPassword")
const submit = document.getElementById("formSubmit")
const clickHere = document.getElementById("buttonClick")
const aviso = document.createElement("h3")

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

nombre.onchange = () => {
    event.preventDefault()
    let user = nombre.value
    return document.body.append(`Bienvenid@ ${user}`)
}


clickHere.addEventListener("click", () => {
    const paleta = document.getElementById("paleta")
    if(paleta.classList.contains("class1")){
        paleta.classList.remove("class1")
        paleta.classList.add("class2")
    }else if(paleta.classList.contains("class2")){
        paleta.classList.remove("class2")
    }else{
        paleta.classList.add("class1")
    }
})




