var calculadora = {
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
  init: function(){
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
    var tecla = this.tecla;
    var operandoA = this.operandoA;
    var operandoB = this.operandoB;
    var operacion = this.operacion;
    for(let i = 0; i<tecla.length; i++){
      tecla[i].addEventListener("mousedown", function(){
        tecla[i].style.trasform = "scale(0.90, 0.90);";
      });
      tecla[i].addEventListener("mouseup", function(){
        tecla[i].style.trasform = "scale(1, 1);";
      });
    }
    function down(){
        teclas[i].setAttribute("style", "transform: scale(0.90, 0.90);");

    }
    function up(){
        ac.setAttribute("style", "transform:scale(1,1);");
    }
  }
}
calculadora.init();
