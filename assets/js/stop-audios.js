// Variable para almacenar el último audio activo
let ultimoAudioActivo = null;

// Función para detener todos los audios excepto el último activo
function detenerOtrosAudios(audioActivo) {
    // Itera sobre todos los elementos de audio
    document.querySelectorAll('.reproductor-audio').forEach(audio => {
        // Verifica si el audio no es el último activo y está reproduciéndose
        if (audio !== audioActivo && !audio.paused) {
            audio.pause(); // Detiene la reproducción
        }
    });
}

// Escucha el evento 'play' del audio
document.querySelectorAll('.reproductor-audio').forEach(audio => {
    audio.addEventListener('play', function() {
        // Almacena este audio como el último activo
        ultimoAudioActivo = this;
        // Detiene los otros audios
        detenerOtrosAudios(this);
    });
    
    // Agrega un controlador de eventos para el evento 'ended'
    audio.addEventListener('ended', function() {
        // Cuando el audio termina, establece el último audio activo en null
        ultimoAudioActivo = null;
    });
});
