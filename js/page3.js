const electricidad = document.getElementById("electricidad")
const sanitarios = document.getElementById("sanitarios")
const gas = document.getElementById("gas")
const card2 = document.getElementById("card2")
const sorteo = document.getElementById("sorteo")
const cardSorteo = document.getElementById("divSorteo")
let problema = document.createElement("p")
let divSorteo = document.createElement("div")


let preguntas = []
fetch('../js/preguntas.json')
    .then((response) => response.json())
    .then((data) => {
        preguntas.push(...data)
    })

electricidad.addEventListener('click', ()=>{
        card2.innerHTML=``
        let problemaEncontrado = preguntas.find(elemento => elemento.id === "electricidad")
        problema.innerHTML= `${problemaEncontrado.contenido}`
        card2.append(problema)                      
})
gas.addEventListener("click",() =>{
        card2.innerHTML=``
        let problemaEncontrado= preguntas.find(elemento => elemento.id === "gas")
        problema.innerHTML= `${problemaEncontrado.contenido}`
        card2.append(problema)
})   
sanitarios.addEventListener("click", () => {
        card2.innerHTML= ``
        let problemaEncontrado = preguntas.find(elemento => elemento.id === "sanitarios")
        problema.innerHTML = `${problemaEncontrado.contenido}`
        card2.append(problema)
})
sorteo.addEventListener("click", () =>{
    divSorteo.innerHTML=`
                        <div id="carouselExampleFade" class="carousel slide carousel-fade mt-5" data-bs-ride="carousel w-50">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/media/insta.webp" class="d-block w-100" alt="...">
                                    <p class="parraf">Seguinos en @coderSolutionszte</p>
                                </div>
                                <div class="carousel-item">
                                    <img src="/media/comentario.jpeg" class="d-block w-100" alt="...">
                                    <p class="parraf">Comenta la publicacion del perfil que mas te guste!</p>
                                </div>
                                <div class="carousel-item">
                                    <img src="/media/likes.gif" class="d-block w-100" alt="...">
                                    <p class="parraf">Dale like a nuestra ultima publicacion!
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <button id="close" class="mx-3 mt-5">Cerrar</button>
                        `
    cardSorteo.append(divSorteo)
    setTimeout(()=>{
        Swal.fire({
            title: 'Segui los pasos de las imagenes y ya estas participando!!',
            text: 'Go for it',
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
    }, 3000)
    let cerrar = document.getElementById("close")
    cerrar.addEventListener("click",()=>{
        divSorteo.innerHTML=``
    })
})


