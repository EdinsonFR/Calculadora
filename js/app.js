var calculadora = {//objeto llamado calculadora
  //declaracion de los atributos
  pantalla: document.getElementById("display"),
  masMenos: document.getElementById("sign"),
  suma: document.getElementById("mas"),
  resta: document.getElementById("menos"),
  multiplicacion: document.getElementById("por"),
  division: document.getElementById("dividido"),
  igual: document.getElementById("igual"),
  punto: document.getElementById("punto"),
  ac: document.getElementById("on"),
  uno: document.getElementById("1"),
  dos: document.getElementById("2"),
  tres: document.getElementById("3"),
  cuatro: document.getElementById("4"),
  cinco: document.getElementById("5"),
  seis: document.getElementById("6"),
  siete: document.getElementById("7"),
  ocho: document.getElementById("8"),
  nueve: document.getElementById("9"),
  cero: document.getElementById("0"),
  tecla: document.getElementsByClassName("tecla"),
  operandoA:0,
  operandoB:0,
  operacion:"",
  //los eventos de click sobre las imagenes de botones
  init: function(){
    //declaracion de las variables, usando this ya que son atributos de calculadora
    var pantalla = this.pantalla;
    var masMenos =this.masMenos;
    var suma = this.suma;
    var resta = this.resta;
    var multiplicacion = this.multiplicacion;
    var division = this.division;
    var igual = this.igual;
    var punto = this.punto;
    var ac = this.ac;
    var uno = this.uno;
    var dos = this.dos;
    var tres =this.tres;
    var cuatro = this.cuatro;
    var cinco = this.cinco;
    var seis = this.seis;
    var siete = this.siete;
    var ocho = this.ocho;
    var nueve = this.nueve;
    var cero = this.cero;
    var operandoA = this.operandoA;
    var operandoB = this.operandoB;
    var operacion = this.operacion;
    // la creacion de cada uno de los eventos
    masMenos.addEventListener("click", signo);
    suma.addEventListener("click", sum);
    resta.addEventListener("click", res);
    multiplicacion.addEventListener("click", mul);
    division.addEventListener("click", div);
    igual.addEventListener("click", resultado);
    punto.addEventListener("click", point);
    ac.addEventListener("click", borrar);
    uno.addEventListener("click", num1);
    this.dos.addEventListener("click", num2);
    this.tres.addEventListener("click", num3);
    cuatro.addEventListener("click", num4);
    cinco.addEventListener("click", num5);
    seis.addEventListener("click", num6);
    siete.addEventListener("click", num7);
    ocho.addEventListener("click", num8);
    nueve.addEventListener("click", num9);
    cero.addEventListener("click", num0);
    //las funciones que contienen el procedimiento que raliza cada evento
    function sum(){
      operandoA = pantalla.textContent;
      operacion = "+";
      pantalla.textContent = "";
    }
    function res(){
      operandoA = pantalla.textContent;
      operacion = "-";
      pantalla.textContent = "";
    }
    function mul(){
      operandoA = pantalla.textContent;
      operacion = "*";
      pantalla.textContent = "";
    }
    function div(){
      operandoA = pantalla.textContent;
      operacion = "/";
      pantalla.textContent = "";
    }
    function resultado(){
      operandoB = pantalla.textContent;
      resolver();
    }
    function point(){
      if(pantalla.textContent.indexOf(".") == -1){
        pantalla.textContent = pantalla.textContent + ".";
      }
    }
    function borrar(){
      pantalla.innerHTML = 0;
    }
    function signo(){
      if(pantalla.textContent != 0){
        operandoA = pantalla.textContent;
          pantalla.innerHTML = parseFloat(operandoA) * -1;
      }
    }
    function num1(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 1;
      } else {
          pantalla.textContent = pantalla.textContent + 1;
      }
    }
    function num2(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 2;
      } else {
        pantalla.textContent = pantalla.textContent + 2;
      }
    }
    function num3(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 3;
      } else {
        pantalla.textContent = pantalla.textContent + 3;
      }
    }
    function num4(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 4
      } else {
        pantalla.textContent = pantalla.textContent + 4;
      }
    }
    function num5(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 5;
      } else {
        pantalla.textContent = pantalla.textContent + 5;
      }
    }
    function num6(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 6;
      } else {
        pantalla.textContent = pantalla.textContent + 6;
      }
    }
    function num7(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 7;
      } else {
        pantalla.textContent = pantalla.textContent + 7;
      }
    }
    function num8(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 8;
      } else {
        pantalla.textContent = pantalla.textContent + 8;
      }
    }
    function num9(){
      if(pantalla.textContent == "0"){
        pantalla.innerHTML = 9;
      } else {
        pantalla.textContent = pantalla.textContent + 9;
      }
    }
    function num0(){
      if(pantalla.textContent == 0){
        pantalla.innerHTML = 0;
      } else {
        pantalla.textContent = pantalla.textContent + 0;
      }
    }
    //funciones para resolver cuaquier operacion + - * /
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
      pantalla.textContent = res;
    }
    //funciones que hacen que su telca redusca su tamaño y regrese a su tamaño original
    //ciclo para ir recoriendo el array obtenido por getElementsByClassName

  }
}
calculadora.init();
