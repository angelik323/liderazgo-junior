
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
const audiomod3 = document.getElementById('audioPlayer-mod3');
const audio2mod3 = document.getElementById('audioPlayer2-mod3');
const audio3mod3 = document.getElementById('audioPlayer3-mod3');
const audio4mod3 = document.getElementById('audioPlayer4-mod3');
const audio5mod3 = document.getElementById('audioPlayer5-mod3');
const audio6mod3 = document.getElementById('audioPlayer6-mod3');

const visualizermod3 = document.getElementById('visualizer-mod3');
const visualizer2mod3 = document.getElementById('visualizer2-mod3');
const visualizer3mod3 = document.getElementById('visualizer3-mod3');
const visualizer4mod3 = document.getElementById('visualizer4-mod3');
const visualizer5mod3 = document.getElementById('visualizer5-mod3');
const visualizer6mod3 = document.getElementById('visualizer6-mod3');

const textoPersonalizadomod3 = `Tendemos a atribuir tiempos en la realización de determinadas actividades basándonos en experiencias pasadas, pero en muchas ocasiones no evaluamos adecuadamente los requerimientos de determinada actividad o la dependencia de recursos externos y controlados por otros, o la atención a nuestros propios ritmos de trabajo y rendimiento. En ocasiones disponemos.`;

const textoPersonalizado2mod3 = `Las personas nos motivamos porque establecemos metas. Sin metas, la actividad carece de sentido y pierde la capacidad de estimularnos. Sin metas concretas o con plazos demasiado largos, resulta especialmente difícil que las actividades que realizamos, las podamos vincular adecuadamente a objetivos, y los resultados se relacionan entonces con la desmotivación o con el aplazamiento de algunas tareas y la realización de otras que aumentan en nosotros, la percepción de ineficacia personal. 

Los objetivos, por otra parte, han de ser personales e interiorizados por el individuo. Los objetivos de una organización, si no son percibidos como propios, no activarán a las personas. Los individuos se movilizarán entonces por evitar consecuencias negativas para sí mismos, pero no para el logro de metas del equipo.`;

const textoPersonalizado3mod3 = `Las actividades tienden a descontrolarse y dispersarse cuando no se cuenta con indicadores que actúen como referente de que se avanza hacia la meta. Los indicadores se deben establecer en términos de plazos y resultados intermedios que sean útiles para evaluar el progreso.`;


const textoPersonalizado4mod3 = `Las actividades tienden a descontrolarse y dispersarse cuando no se cuenta con indicadores que actúen como referente de que se avanza hacia la meta. Los indicadores se deben establecer en términos de plazos y resultados intermedios que sean útiles para evaluar el progreso.`;

const textoPersonalizado5mod3 = `Cuando fundamentalmente se actúa en función de las demandas exteriores, la primera consecuencia es la pérdida del sentido de propósito. Así mismo, distorsiona el juicio acerca de la importancia de los asuntos pendientes. Inconscientemente, tendemos a considerar como más importante aquello que ejerce una mayor presión temporal sobre nosotros.`;

const textoPersonalizado6mod3 = `La acumulación de poder, y consecuentemente de responsabilidades, sin la incorporación de prácticas adecuadas de delegación conlleva dispersión por sobrecarga, derivada de tener que afrontar actividades muy diferentes y desiguales en importancia y urgencia.`;


// Dividir el texto personalizado en párrafos basados en el salto de línea '\n'
const parrafos = textoPersonalizadomod3.split('\n');

// Escucha el evento 'play' del audio
audiomod3.addEventListener('play', function() {
    debugger;
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizermod3.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio2mod3.addEventListener('play', function() {
    debugger;
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer2mod3.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio3mod3.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer3mod3.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio4mod3.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer4mod3.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio5mod3.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer5mod3.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});

audio6mod3.addEventListener('play', function() {
    // Agrega los párrafos al visualizador cuando se presione el botón de reproducción
    visualizer6mod3.innerHTML = parrafos.map(parrafo => `<p>${parrafo}</p>`).join('');
});


// Escucha el evento 'ended' del audio
audiomod3.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizermod3.innerHTML = "";
});

audio2mod3.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer2mod3.innerHTML = "";
});

audio3mod3.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer3mod3.innerHTML = "";
});

audio4mod3.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer4mod3.innerHTML = "";
});

audio5mod3.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer5mod3.innerHTML = "";
});

audio6mod3.addEventListener('ended', function() {
    // Cuando el audio termina, borra el contenido del visualizador
    visualizer6mod3.innerHTML = "";
});



// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audiomod3.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto = textoPersonalizado;
    visualizer.textContent = texto;

});


// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio2mod3.addEventListener('timeupdate', function() {
    const currentTime = audio2mod3.currentTime;
    const duration = audio2mod3.duration;
    const percentage = (currentTime / duration) * 100;


    const texto2mod3 = textoPersonalizado2mod3;
    visualizer2mod3.textContent = texto2mod3;
    
});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio3mod3.addEventListener('timeupdate', function() {
    const currentTime = audio3mod3.currentTime;
    const duration = audio3mod3.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto3mod3 = textoPersonalizado3mod3;
    visualizer3mod3.textContent = texto3mod3;

});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio4mod3.addEventListener('timeupdate', function() {
    const currentTime = audio4mod3.currentTime;
    const duration = audio4mod3.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto4mod3 = textoPersonalizado4mod3;
    visualizer4mod3.textContent = texto4mod3;
});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio5mod3.addEventListener('timeupdate', function() {
    const currentTime = audio5mod3.currentTime;
    const duration = audio5mod3.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto5mod3 = textoPersonalizado5mod3;
    visualizer5mod3.textContent = texto5mod3;
});

// Escucha el evento 'timeupdate' para actualizar el visualizador de texto
audio6mod3.addEventListener('timeupdate', function() {
    const currentTime = audio6mod3.currentTime;
    const duration = audio6mod3.duration;
    const percentage = (currentTime / duration) * 100;

    // Actualiza el contenido del visualizador con información sobre el tiempo de reproducción
    const texto6mod3 = textoPersonalizado6mod3;
    visualizer6mod3.textContent = texto6mod3;
});


