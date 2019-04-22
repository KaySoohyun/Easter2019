
var pistas = [
  {goodCode: "24190", newPlace: "En el mueble del Tele."}, 
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

// La primer pista es 0
var i = -1;

// Refresca la pantalla de juego
function reset() {
  i = i + 1; /* Avanzo en las pistas */
  document.getElementById('saludo').style.display = 'none'; /* Oculto la pantalla inicial */
  document.getElementById('app').style.display = 'block'; /* Muestro la pantalla de juego */
  document.getElementById('nPista').innerHTML = "Pista " + (i + 1); /* Titulo que muestra el numero de la pista actualizado */
  document.getElementById('place').innerHTML = pistas[i].newPlace; /* Muestra el lugar donde se encuentra la nueva pista */
  document.getElementById('nextCode').style.display = 'none'; /* Oculta la pista anterior */
  document.form.pista.value = ''; /* Borra el campo escrito*/
  if(i == (pistas.length - 1)) {
    document.getElementById('next').style.display = 'none'; /* Si es la ultima pista, no muestra el boton siguiente */
  }
}

// Comprueba si el codigo es correcto y muestra solo el bloque correspondiente
function CheckPassword(inputtxt) {
  if(inputtxt.value == pistas[i].goodCode) {
    document.getElementById('nextCode').style.display = 'block';
    document.getElementById('tryAgain').style.display = 'none';
  } else {
    document.getElementById('tryAgain').style.display = 'block';
    document.getElementById('nextCode').style.display = 'none';
  }
}
