function saludar(){
    alert("Hola querida mascota");
}

function presentarse(){
    alert("PATITO PATITO")
}

const botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click", function(){
    console.log("DEBISTE APUNTAR A LA CABEZA");
    presentarse();
});