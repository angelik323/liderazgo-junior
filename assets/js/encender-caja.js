// Función para alternar la clase "encendido"
function alternarLuz() {
    var caja = document.getElementById("miCaja");
    caja.classList.toggle("encendido");
}

// Función para alternar automáticamente la luz
function alternarAutomaticamente() {
    var caja = document.getElementById("miCaja");
    setInterval(function () {
        caja.classList.toggle("encendido");
    }, 1000); // Cambia 1000 por el intervalo de tiempo en milisegundos que desees
}

// Llamar a la función para alternar automáticamente al cargar la página
alternarAutomaticamente();
