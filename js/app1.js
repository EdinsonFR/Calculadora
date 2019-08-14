var calculadora = {
  ac: document.getElementById("on"),
  siete: document.getElementById("7"),
  tecla1: document.getElementsByClassName("tecla"),
  init: function(){
    var tecla = this.tecla1;
    for(var i = 0; i<tecla.length; i++){
      tecla[i].addEventListener("mousedown", down);
      tecla[i].addEventListener("mouseup", up);
    }
    function down(){
      for(var i = 0; i<tecla.length; i++){
        tecla[i].setAttribute("style", "transform: scale(0.85, 0.85);");
      }
    }
    function up(){
      for(var i = 0; i<tecla.length; i++){
        tecla[i].setAttribute("style", "transform:scale(1,1);");
      }
    }
  }
}
calculadora.init();
