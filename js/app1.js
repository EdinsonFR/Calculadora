var calculadora = {
  init: function(){
    this.Efecto();
  },
  Efecto: function() {
    var teclas = document.getElementsByClassName("tecla");
    for(let i = 0; i < teclas.length; i++){
      teclas[i].addEventListener("mousedown", function(){
        teclas[i].style.transform = "scale(0.90, 0.90)";
      });
      teclas[i].addEventListener("mouseup", function(){
        teclas[i].style.transform = "scale(1, 1)";
      });
    }
  }
}
calculadora.init();
