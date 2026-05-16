const titulo = document.querySelector("h1")
console.log(titulo)
titulo.addEventListener("click", function() {
    if (titulo.style.color === "rgb(200, 169, 110)") {
        titulo.style.color = "#F5A623"
    } else {
        titulo.style.color = "#c8a96e"
    }
})