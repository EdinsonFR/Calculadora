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
    pantalla.textContent = pantalla.textContent + ".";
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
