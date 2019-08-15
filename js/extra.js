
function condiciones(){
  if (pantalla.textContent.indexOf(".") == -1){}
    if(pantalla.textContent.length < 10){
      pantalla.textContent = pantalla.textContent + 1;
    }
  }


function down(){
  for(var i = 0; i<tecla.length; i++){
    tecla[i].setAttribute("style", "transform: scale(0.90, 0.90);");
  }
}
function up(){
  for(var i = 0; i<tecla.length; i++){
    tecla[i].setAttribute("style", "transform:scale(1,1);");
  }
}
function ciclo(){
  for(var i = 0; i<tecla.length; i++){
    tecla[i].addEventListener("mousedown", down);
    tecla[i].addEventListener("mouseup", up);
  }
}

  tecla[i].setAttribute("style","transform:scale(0.85,0.85)");
  tecla[i].setAttribute("style","transform:scale(1,1)");

  var Calculadora = (
  function iniciar(){
  //variables
  var uno = document.getElementById('1')

  //Efecto al presionar las teclas
  uno.addEventListener("mousedown", function(){
  uno.setAttribute("style", "transform:scale(0.85,0.85)")
  })
  uno.addEventListener("mouseup", function(){
  uno.setAttribute("style", "transform:scale(1,1)")
  })
  }
  )();



  var calculadora = {
  ac: document.getElementById("on"),
  siete: document.getElementById("7"),
  tecla1: document.getElementsByClassName("tecla"),
  init: function(){
  var tecla = this.tecla1[0];
  tecla.addEventListener("mousedown", down);
  tecla.addEventListener("mouseup", up);
  function down(){
  tecla.setAttribute("style","transform:scale(0.85,0.85)");
  }
  function up(){
  tecla.setAttribute("style","transform:scale(1,1)");
  }
  }
  }
  calculadora.init();


var calculadora = (function(){
  //declaracion de las variables a usar en la calculadora
  var pantalla = document.getElementById("display");
  var masMenos = document.getElementById("sign");
  var suma = document.getElementById("mas");
  var resta = document.getElementById("menos");
  var multiplicacion = document.getElementById("por");
  var division = document.getElementById("dividido");
  var igual = document.getElementById("igual");
  var punto = document.getElementById("punto");
  var ac = document.getElementById("on");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var cero = document.getElementById("0");
  var teclado = document.getElementsByClassName("tecla");
  var operandoA;
  var operandoB;
  var operacion;
  //los eventos de click sobre las imagenes de botones

  masMenos.onclick = function(e){
    if(pantalla.textContent != 0){
      operandoA = pantalla.textContent;
        pantalla.innerHTML = parseFloat(operandoA) * -1;
    }
  }
  punto.onclick = function(e){
    if(pantalla.textContent.indexOf(".") == -1){
      pantalla.textContent = pantalla.textContent + ".";
    }
  }
  suma.onclick = function(e){
    operandoA = pantalla.textContent;
    operacion = "+"
    limpiar();
  }
  resta.onclick = function(e){
    operandoA = pantalla.textContent;
    operacion = "-"
    limpiar();
  }
  multiplicacion.onclick = function(e){
    operandoA = pantalla.textContent;
    operacion = "*"
    limpiar();
  }
  division.onclick = function(e){
    operandoA = pantalla.textContent;
    operacion = "/"
    limpiar();
  }
  igual.onclick = function(e){
    operandoB = pantalla.textContent;
    resolver();
  }
  ac.onclick = function(e){
    function borrar(){
      pantalla.innerHTML = 0
    }
    borrar();
  }

  uno.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 1;
    } else {
        pantalla.textContent = pantalla.textContent + 1;
    }
  }
  dos.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 2;
    } else {
      pantalla.textContent = pantalla.textContent + 2;
    }
  }
  tres.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 3;
    } else {
      pantalla.textContent = pantalla.textContent + 3;
    }
  }
  cuatro.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 4
    } else {
      pantalla.textContent = pantalla.textContent + 4;
    }
  }
  cinco.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 5;
    } else {
      pantalla.textContent = pantalla.textContent + 5;
    }
  }
  seis.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 6;
    } else {
      pantalla.textContent = pantalla.textContent + 6;
    }
  }
  siete.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 7;
    } else {
      pantalla.textContent = pantalla.textContent + 7;
    }
  }
  ocho.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 8;
    } else {
      pantalla.textContent = pantalla.textContent + 8;
    }
  }
  nueve.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.innerHTML = 9;
    } else {
      pantalla.textContent = pantalla.textContent + 9;
    }
  }
  cero.onclick = function(e){
    if(pantalla.textContent == 0){
      pantalla.innerHTML = 0;
    } else {
      pantalla.textContent = pantalla.textContent + 0;
    }
  }

  function resolver(){
    var cont = 0;
    switch (operacion) {
      case "+":
        res = parseFloat(operandoA) + parseFloat(operandoB);
        break;
      case "-":
        res = parseFloat(operandoA) - parseFloat(operandoB);
        break;
      case "*":
        res = parseFloat(operandoA) * parseFloat(operandoB);
        break;
      case "/":
        res = parseFloat(operandoA) / parseFloat(operandoB);
        break;
    }
    limpiar();
    pantalla.textContent = res;
  }


  function limpiar(){
    pantalla.textContent = "";
  }

})();


function extras(){
tecla1.addEventListener("onmousedown", function(){
  tecla1.ssetAttribute("style","transform:scale(0.85,0.85)")
})
tecla1.addEventListener("onmouseup", function(){
  tecla1.setAttribute("style","transform:scale(1,1)")
})

teclado.addEventListener("onmousedown", function(){
  teclado.style="padding:2%;";
})
teclado.addEventListener("onmouseup", function(){
  teclado.style="padding:0%;";
})



function tam(){
  tecla1.setAttribute("style","transform:scale(1,1)");
}
function tam2(){
  tecla1[0].ssetAttribute("style","transform:scale(0.85,0.85)");
}
function clickevento(elEvento){
  var evento = elEvento || window.event;
  switch (evento.type) {
    case 'mousedown':
      this.style.padding = '5%';
      break;
  }
}
window.onload = function(){
  document.getElementsByClassName('mousedown')[0] = tam;
}

function longclick(){
  var uno = document.getElementById("1")
  var time = null;
  uno.onmousedown = function(){
    time = setTimeout(imgTamaño,2000);
  };
  uno.onmouseup = function(){
    clearTimeout(time);
  };
  function imgTamaño(){
    document.getElementById("1").style="width:20%;";
  }
}

masMenos.onclick = function(e){
  if(pantalla.textContent != 0){
    pantalla.textContent = "-" + pantalla.textContent;
  }
}
punto.onclick = function(e){
  pantalla.textContent = pantalla.textContent + ".";
}

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
}
