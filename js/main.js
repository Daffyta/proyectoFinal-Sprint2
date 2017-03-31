var section = [];

function componentes(h2,ul,h4,input,button){
 this.h2 = h2;
 this.ul = ul;
 this.h4 = h4;
 this.input = input;
 this.button = button;
}

function crearComponentesSeccion () {
  var h2 = document.getElementById("h2");
  var ul = document.getElementById("ul");
  var h4 = document.getElementById("h4");
  var input = document.getElementById("input");
  var button = document.getElementById("button");

  var componentes = new Componentes (h2.value, ul.value, h4.value, input.value, button.value);
  section.push(componentes);
  agregarLista();
}

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
  var secciones = document.createElement("section");
  secciones.id = "nuevoElemento";
  var crearSeccion = document.createTextNode(nuevaListaPendientes);
  secciones.appendChild(crearSeccion);
  var secctionCreada = document.getElementById('container').appendChild(secciones);
}

var botonBorrar = document.createElement('input');
				botonBorrar.type = "button";
				botonBorrar.value = "Eliminar tarea";
			  botonBorrar.onclick = borrarElemento();
			  nuevaLista.appendChild(botonBorrar);

function borrarElemento(){
		nuevaLista.removeChild(elementoLi);
		nuevaLista.removeChild(botonBorrar);
}

function removerLista(){
		aquiHareOtraLista.removeChild(nuevaLista);
		aquiHareOtraLista.removeChild(botonBorrarLista);
}
