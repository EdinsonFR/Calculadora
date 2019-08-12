ac.onclick = function(e){
  function borrar(){
    pantalla.innerHTML = 0
  }
  borrar();
}


function init(){
  //variables
  var resultado = document.getElementById('display');
  var reset = document.getElementById('on');
  var raiz = document.getElementById('raiz');
  var dividido = document.getElementById('dividido');
  var multiplicacion = document.getElementById('por');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var igual = document.getElementById('igual');
  var punto = document.getElementById('punto');
  var cero = document.getElementById('0');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');

  //los eventos (cuando se presione un numero se muestre en id="display")
  uno.onclick = function(e){
    resultado = resultado.innerHTML;
  }
  dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
  }
  tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
  }
  cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
  }
  cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
  }
  seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
  }
  siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
  }
  ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
  }
  nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
  }
  cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
  }

function resetear(){
  resultado.textContent = " ";
  operandoA = 0;
  operandoB = 0;
  operacion = "";
}




function resolver(){
  var result = 0;
  switch (operacion) {
    case "+":
      result = parseFloat(operandoA) + parseFloat(operandoB);
      break;
    case "-":
      result = parseFloat(operandoA) - parseFloat(operandoB);
      break;
    case "*":
      result = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case "/":
      result = parseFloat(operandoA) / parseFloat(operandoB);
      break;
  }
  resetear();
  resultado.textContent = result;
}

resert.onclick = function(e){
  resetear();
}
suma.onclick = function(e){
  operandoA = resultado.textContent;
  operacion = "+";
  limpiar();
}
resta.onclick = function(e){
  operandoA = resultado.textContent;
  operacion = "-";
  limpiar();
}
multiplicacion.onclick = function(e){
  operandoA = resultado.textContent;
  operacion = "*";
  limpiar();
}
division.onclick = function(e){
  operandoA = resultado.textContent;
  operacion = "/";
  limpiar();
}
igual.onclick = function(e){
  operandoB = resultado.textContent;
  resolver();
}
}
//funcion de limpiar
function limpiar(){
resultado.textContent = "";
}
