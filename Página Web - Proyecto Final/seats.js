var counter = 0;
var aux = 0;
var price = 0;

function select(id) {

  var element = document.getElementById(id);
  let butacaColor = window.getComputedStyle(element).backgroundColor;

  if(butacaColor == "rgb(55, 55, 55)") {
    document.getElementById(id).style.background = "rgb(94,255, 137)";
    counter++;
    let total = document.getElementById('price');
    aux = price * counter
    total.innerHTML = price * counter;
    console.log("Entradas: " + counter);

  } else {
    document.getElementById(id).style.background = "rgb(55, 55, 55)";
    counter--;
    aux = aux-price;
    let total = document.getElementById('price');
    total.innerHTML = aux;
    console.log("Entradas: " + counter);
  }

}