
//------------------------------ LIST SLIDER -------------------------
if (document.querySelector('.listslider')) {
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            fntExecuteSlide(arrItem[1]);
            return false;
        });
    });
}

function fntExecuteSlide(side) {
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    for (var i = 0; i < elements.length; i++) {

        if (elements[i].style.opacity == 1) {
            curElement = i;
            break;
        }
    }
    if (side == 'prev' || side == 'next') {

        if (side == "prev") {
            nextElement = (curElement == 0) ? elements.length - 1 : curElement - 1;
        } else {
            nextElement = (curElement == elements.length - 1) ? 0 : curElement + 1;
        }
    } else {
        nextElement = side;
        side = (curElement > nextElement) ? 'prev' : 'next';

    }
    //RESALTA LOS PUNTOS
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");
    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[nextElement].style.opacity = 1;
    elements[nextElement].style.zIndex = 1;
}


// Obtener el elemento donde se mostrará el año actual
const anioElemento = document.getElementById("anio");

// Obtener el año actual
const anioActual = new Date().getFullYear();

// Mostrar el año actual en el elemento
anioElemento.textContent = anioActual;


//7 podcast
const audio = document.getElementById('audioPlayer');
const audio2 = document.getElementById('audioPlayer2');
const audio3 = document.getElementById('audioPlayer3');
const audio4 = document.getElementById('audioPlayer4');
const audio5 = document.getElementById('audioPlayer5');
const audio6 = document.getElementById('audioPlayer6');
const audio7 = document.getElementById('audioPlayer7');

const visualizer = document.getElementById('visualizer');
const visualizer2 = document.getElementById('visualizer2');
const visualizer3 = document.getElementById('visualizer3');
const visualizer4 = document.getElementById('visualizer4');
const visualizer5 = document.getElementById('visualizer5');
const visualizer6 = document.getElementById('visualizer6');
const visualizer7 = document.getElementById('visualizer7');
const textoPersonalizado = `Es muy importante a la hora de expresarte con los demás seas tu mismo, que hables con pasión y enuncies tus valores propios expresando claramente tus convicciones.

Recuerda que es fundamental trasmitir confianza y credibilidad a tu equipo, es esencial que tengas presente que cada uno de ellos es único y diferente.`;

const textoPersonalizado2 = `Esto ayudará a tus colaboradores a hacer conciencia de cómo lo que hacen es parte de algo muy importante, inspirador y que produce cambios, esto los orienta a la toma de decisiones más acertadas y contribuye con el crecimiento de todos los integrantes de tu equipo.`;

const textoPersonalizado3 = `Utiliza el futuro para impulsar el presente, muéstrale a tus colaboradores ese futuro exitoso deseado y descríbelo en términos racionales y más importante aún, en términos emotivos para demostrar más cercanía y confianza alentando su desempeño.`;


const textoPersonalizado4 = `Comprender cómo las personas piensan, sienten y actúan facilita crear las condiciones para que se sientan motivadas a pensar y actuar diferente, el resultado de las palabras con las que te refieres, ten siempre presente que todos son diferentes, aprende a reconocer que hace valioso a cada integrante de tu equipo.`;

const textoPersonalizado5 = `Genera apertura y realiza encuentros que estimulen la creatividad, la construcción en conjunto y la discusión argumentada.

Permite le a tu equipo construir rutas en conjunto para que puedan cumplir todos los objetivos y así multiplicar las posibilidades de éxito.`;

const textoPersonalizado6 = `Tener buenas relaciones los ayudará a ampliar el círculo de influencia, a disponer de mayor información, anticiparse y actuar con mayor rapidez. Con humildad puedes conectar y hacer mover más fácil a tu equipo facilitando el avance de todos.`;

const textoPersonalizado7 = `Asegúrate que tu equipo conoce los comportamientos que se esperan ver reflejados en las interacciones y los beneficios que se derivan de ello.
Es muy importante que ellos tengan claridad de Cuáles son los comportamientos que quieres que se vean reflejados para que no quede sujeto a interpretaciones, por ejemplo:
Es ideal que tengas conversaciones abiertas, donde los reconozcas y siempre prime el respeto para que ellos sientan la seguridad de contar con un líder y compañeros que brinden la mano en el momento que necesiten de su apoyo.`;
// Dividir el texto personalizado en párrafos basados en el salto de línea '\n'
const parrafos = textoPersonalizado.split('\n');

// Escucha el evento 'play' del audio
audio.addEventListener('play', function() {
    debugger;
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio2.addEventListener('play', function() {
    debugger;
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer2.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio3.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer3.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio4.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer4.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio5.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer5.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio6.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer6.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio7.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer7.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

// Escucha el evento 'ended' del audio
audio.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer.innerHTML = "";
});

audio2.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer2.innerHTML = "";
});

audio3.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer3.innerHTML = "";
});

audio4.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer4.innerHTML = "";
});

audio5.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer5.innerHTML = "";
});

audio6.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer6.innerHTML = "";
});

audio7.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer7.innerHTML = "";
});


// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto = textoPersonalizado;
    visualizer.textContent = texto;

});


// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio2.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;


    const texto2 = textoPersonalizado2;
    visualizer2.textContent = texto2;
    
});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio3.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto3 = textoPersonalizado3;
    visualizer3.textContent = texto3;

});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio4.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto4 = textoPersonalizado4;
    visualizer4.textContent = texto4;
});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio5.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto5 = textoPersonalizado5;
    visualizer5.textContent = texto5;
});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio6.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto6 = textoPersonalizado6;
    visualizer6.textContent = texto6;
});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio7.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto7 = textoPersonalizado7;
    visualizer7.textContent = texto7;
});

