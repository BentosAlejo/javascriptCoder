const nombre = document.getElementById("formNombre")
const apellido = document.getElementById("formApellido")
const email = document.getElementById("formEmail")
const password = document.getElementById("formPassword")
const submit = document.getElementById("formSubmit")
const clickHere = document.getElementById("buttonClick")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    if(password.value.length < 5) {
         return alert("La contraseña debe tener mas de 5 caracteres")
    }else if(!/[0-9]/.test(password.value)) {
        return alert("La contraseña debe contener un numero")
    }else{
        return alert("Contraseña guardada correctamente")
    }

    
     
})

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


