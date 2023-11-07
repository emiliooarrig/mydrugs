//obtenemos el id del elemento y asignamos una lista de colores
var miParrafo = document.getElementById("miParrafo");
var vendido = document.getElementById("mejorVendido2");
var colores = ["red", "blue", "green", "orange", "purple"];
var div = document.getElementById("nuevo-marco");
var div2 = document.getElementById("marco2");

// Creamos una función para cambiar el color del párrafo
function cambiarColor() {

  var colorAleatorio = Math.floor(Math.random() * colores.length);
  // Asignamos el color aleatorio al estilo de fondo del párrafo
  miParrafo.style.color = colores[colorAleatorio];
  vendido.style.color = colores[colorAleatorio];
}

function cambiarColorBorde() {
  var aleatorio = Math.floor(Math.random()* colores.length);
  div.style.border = "5px solid " + colores[aleatorio];
  div2.style.border = "5px solid " + colores[aleatorio];
}


// Cambia el color del párrafo cada 2 segundos
setInterval(cambiarColor, 750);
setInterval(cambiarColorBorde, 750);