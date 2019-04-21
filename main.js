
var pistas = [
  {goodCode: "Poteto", newPlace: "Perro"}, 
  {goodCode: "Toshi", newPlace: "Gato"}, 
  {goodCode: "Luci", newPlace: "Gato"}
]

var i = -1;

function reset() {
  i = i + 1;
  document.getElementById('saludo').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  document.getElementById('nPista').innerHTML = "Pista " + (i + 1);
  document.getElementById('place').innerHTML = pistas[i].newPlace;
  document.getElementById('nextCode').style.display = 'none';
  document.form.pista.value = '';
  if(i == (pistas.length - 1)) {
    document.getElementById('next').style.display = 'none';
  }
}

function CheckPassword(inputtxt) {
  if(inputtxt.value == pistas[i].goodCode) { 
    document.getElementById('nextCode').style.display = 'block';
  } else {
    document.getElementById('tryAgain').style.display = 'block';
  }
}

