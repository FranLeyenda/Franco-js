function agregar() {
    let lista = document.getElementById("lista");
    let nombreProducto = document.getElementById("nombreProducto");
    let cantidadProducto = document.getElementById("cantidadProducto");
  
    let itemLista = document.createElement("li");
  
    itemLista.innerText = `${nombreProducto.value}, ${cantidadProducto.value}`;
    itemLista.innerText = nombreProducto.value + " - " + cantidadProducto.value;
    itemLista.classList.add("itemLista")
  
    lista.appendChild(itemLista);

    nombreProducto.value = "";
    cantidadProducto.value = "";
}

let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", agregar);

let miDiv = document.getElementById("miDiv");

miDiv.addEventListener("dragstart", dragStart);
miDiv.addEventListener("dragend", dragEnd);
document.addEventListener("dragover", dragOver);

let offsetX, offsetY;

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.classList.add("dragging");

  offsetX = event.clientX - miDiv.offsetLeft;
  offsetY = event.clientY - miDiv.offsetTop;
}

function dragEnd(event) {
  event.target.classList.remove("dragging");
}

function dragOver(event) {
  event.preventDefault();

  if (event.target === miDiv) {
    return;
  }

  let left = event.clientX - offsetX;
  let top = event.clientY - offsetY;

  miDiv.style.left = left + "px";
  miDiv.style.top = top + "px";
}


  
  