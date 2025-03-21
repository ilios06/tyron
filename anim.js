// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No me olvides que yo me muero", time: 28 },
  { text: "Amor, mi vida es sufrimiento", time: 35 },
  { text: "Yo te quiero en mi camino", time: 43 },
  { text: "Por vos cambiaba mi destino", time: 49.5 },
  { text: "Ay, abrázame esta noche", time: 58 },
  { text: "Y aunque no tengas ganas", time: 63 },
  { text: "Prefiero que me mientas", time: 66 },
  { text: "Tristes, breves, nuestras vidas", time: 69 },
  { text: "Acércate a mí", time: 72 },
  { text: "Abrázame a ti, por Dios", time: 76 },
  { text: "Entrégate a mis brazos", time: 80 },
  { text: "Tengo un corazón penando ", time: 118 },
  { text: "Yo sé qué voz lo está escuchando", time: 121 },
  { text: "Con mil lágrimas te quiero", time: 124 },
  { text: "Pasión, sos mi amor sincero", time: 127 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 1;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);