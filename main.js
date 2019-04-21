
var pistas = [
  {goodCode: "21490", newPlace: "En el mueble del Tele."}, 
  {goodCode: "12148", newPlace: "Donde duerme la Lucy"}, 
  {goodCode: "01912", newPlace: "Donde hay una cama grande."},
  {goodCode: "52347", newPlace: "En el baño de los gatos."}, 
  {goodCode: "13654", newPlace: "¿Hay 2 autos?"},
  {goodCode: "84707", newPlace: "Entre las fuentes."}, 
  {goodCode: "23324", newPlace: "¿Te lavaste las manos?"}, 
  {goodCode: "31808", newPlace: "En la mesa de la nona."},
  {goodCode: "97589", newPlace: "En el pasillo."}, 
  {goodCode: "43608", newPlace: "Donde hay dos..."}
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
    document.getElementById('tryAgain').style.display = 'none';
  } else {
    document.getElementById('tryAgain').style.display = 'block';
    document.getElementById('nextCode').style.display = 'none';
  }
}

