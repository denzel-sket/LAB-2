// script.js

// Función para cambiar el texto de los botones al hacer clic
function changeButtonText() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = "¡Haz clic!";
    }
  }
  
  // Función para cambiar el color de fondo de la página
  function changeBackgroundColor() {
    var body = document.body;
    body.style.backgroundColor = getRandomColor();
  }
  
  // Función auxiliar para generar un color aleatorio en formato hexadecimal
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Asociar eventos a los botones
  var myButton = document.getElementById("myButton");
  myButton.addEventListener("click", changeButtonText);
  
  var myBackgroundButton = document.getElementById("myBackgroundButton");
  myBackgroundButton.addEventListener("click", changeBackgroundColor);