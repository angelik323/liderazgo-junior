function toggleContenido(idContenido) {
    var contenido = document.getElementById(idContenido);

    // Verificar si el contenido está oculto
    var estaOculto = contenido.style.display === "none" || contenido.style.display === "";

    // Ocultar o mostrar el contenido según su estado actual
    contenido.style.display = estaOculto ? "block" : "none";
}

// Puedes mantener la función ocultarTodosContenidos si deseas cerrar todos los contenidos al mismo tiempo
function ocultarTodosContenidos() {
    var contenidos = document.getElementsByClassName('contenido');
    for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
    }
}