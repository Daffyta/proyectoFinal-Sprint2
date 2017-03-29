// function seccion(){
//   for (var i = 0; i < listaPendientes.length; i++) {
//     var secciones = document.createElement("secction");
//       for (var j = 0; j < listaPendientes.length; i++) {
//         var nuevoElemento = document.createElement("section")
//         var nombreSeccion = document.createElement
//     }
//   }
// }
function pendienteSemana() {
  var nuevoElementoPendienteSemana = document.getElementById('textoIngresadoPendienteSemana').value;
  var listaPendienteSemana = document.createElement("li");
  var listaCreadaPendienteSemana = document.createTextNode(nuevoElementoPendienteSemana);
  listaPendienteSemana.appendChild(listaCreadaPendienteSemana);
  var listaPendientesSemana = document.getElementById('visualizandoPendienteSemana').appendChild(listaPendienteSemana);
}

// function pendienteOtraSemana() {
//   var nuevoElementoPendienteOtraSemana = document.getElementById('textoIngresadoPendienteOtraSemana').value;
//   var listaPendienteOtraSemana = document.createElement("li");
//   var listaCreadaPendienteOtraSemana = document.createTextNode(nuevoElementoPendienteOtraSemana);
//   listaPendienteOtraSemana.appendChild(listaCreadaPendienteOtraSemana);
//   var listaPendientesOtraSemana = document.getElementById('visualizandoPendienteOtraSemana').appendChild(listaPendienteOtraSemana);
// }

function agregarLista() {
  var nuevaListaPendientes = document.getElementById('listaPendientes').value;
  console.log(nuevaListaPendientes);
  var secciones = document.createElement("section");
  secciones.id = "nuevoElemento";
  console.log(secciones);
  var crearSeccion = document.createTextNode(nuevaListaPendientes);
  console.log(crearSeccion);
  secciones.appendChild(crearSeccion);
  var secctionCreada = document.getElementById('container').appendChild(secciones);
  console.log(secctionCreada);
}

//
// <p>Click the button to create a "class" attribute with the value "democlass" and insert it to the H1 element above.</p>
//
// <button onclick="myFunction()">Try it</button>
//
// <script>
// function myFunction() {
//     var h1 = document.getElementsByTagName("H1")[0];
//     var att = document.createAttribute("class");
//     att.value = "democlass";
//     h1.setAttributeNode(att);
// }
// </script>

// <button onclick="myFunction()">Try it</button>
//
// <script>
// function myFunction() {
//     var btn = document.createElement("BUTTON");
//     var t = document.createTextNode("CLICK ME");
//     btn.appendChild(t);
//     document.body.appendChild(btn);
// }
// </script>
