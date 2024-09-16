const nav= document.getElementById("nav")
const abrir= document.getElementById("abrir")
const cerrar= document.getElementById("cerrar")

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible")
    abrir.classList.add("invisible")
})
cerrar.addEventListener("click", ()=> {
    nav.classList.remove("visible")
    abrir.classList.remove("invisible")
})
