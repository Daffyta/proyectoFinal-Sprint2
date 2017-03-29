function pendienteSemana() {
  var nuevoElementoLi = document.getElementById('textoIngresado').value;
  var lista = document.createElement("li");
  var listaCreada = document.createTextNode(nuevoElementoLi);
  lista.appendChild(listaCreada);
  var listaPendientes = document.getElementById('preview').appendChild(lista);
}

// function pendienteOtraSemana() {
//
// }
