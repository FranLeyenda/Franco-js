/* 
//FUNCION CALCULAR LA CUOTA

function calcularCuota(precio, imprimirValores) {
    let monto = precio;
    let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas: 6, 12 o 24'));
  
    let interes = 0;
  
    while (cuotas !== 6 && cuotas !== 12 && cuotas !== 24) {
      console.log('Cantidad de cuotas inválida');
      cuotas = parseInt(prompt('Ingrese la cantidad de cuotas: 6, 12 o 24'));
    }
  
    if (cuotas === 6) {
      interes = 0.5;
    } else if (cuotas === 12) {
      interes = 10;
    } else if (cuotas === 24) {
      interes = 20;
    }
  
    let valorInteres = (monto * interes) / 100;
    let valorCuota = (monto + valorInteres) / cuotas;
  
    imprimirCuota(monto, cuotas, interes, valorCuota);
}
  
  // FUNCION IMPRIMIR LA CUOTA CALCULADA
  
  function imprimirCuota(monto, cuotas, interes, valorCuota) {
    console.log('Monto:', monto);
    console.log('Cuotas:', cuotas);
    console.log('Interés:', interes + '%');
    console.log('Valor de las cuotas:', valorCuota);
}
  

//FUNCION FIND

function buscarVehiculo() {
    return ()=>{
        let marcaBuscada = prompt("Ingrese la marca del vehículo a buscar:");
  
        let vehiculoEncontrado = vehiculosArr.find(function(vehiculo) {
        return vehiculo.marca === marcaBuscada;
    });
    
    if (vehiculoEncontrado) {
        console.log("Vehículo encontrado:");
        console.log(vehiculoEncontrado);
    } else {
        console.log("Vehículo no encontrado");
    }   
    }
}

let buscarVehiculoFun = buscarVehiculo()

//BUCLE DE REGISTRO


let intentos = 0;

function registrarse() {
  let nombre = nombreUsuario.value;
  let apellido = apellidoUsuario.value;
  
  let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

  let nuevoUsuario = {
    nombre: nombre,
    apellido: apellido
  };

  usuariosRegistrados.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

  console.log("Usuario registrado exitosamente:", nombre, apellido);
}

function logueo() {
  let nombre = nombreUsuario.value;
  let apellido = apellidoUsuario.value;

  let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  let usuarioEncontrado = false;

  for (let i = 0; i < usuariosRegistrados.length; i++) {
    let usuario = usuariosRegistrados[i];
    if (nombre === usuario.nombre && apellido === usuario.apellido) {
      console.log("Bienvenido al sistema:", nombre, apellido);
      usuarioEncontrado = true;
      break;
    }
  }

  if (!usuarioEncontrado) {
    console.log("Usuario incorrecto o no registrado.");
  }
}

botonRegistro.addEventListener("click", registrarse);
botonIniciar.addEventListener("click", logueo);









//CLASS


class Vehiculos {
    constructor(marca, modelo, precio, stock) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.precioNumerico = parseFloat(precio.replace('$', ''));
    }

    datosVehiculo() {
        console.log("<--------DATOS DEL VEHICULO--------->");
        console.log("Marca: ", this.marca);
        console.log("Modelo: ", this.modelo);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
    }

    ventaVehiculo(cantidad) {
        if (this.stock >= cantidad) {
            console.log("¡Felicidades por su compra!");
            this.stock = this.stock - cantidad;
            calcularCuota(this.precioNumerico);
        }
        else if (this.stock < cantidad) {
            console.log("No hay esa cantidad en stock");
        }
    }


}

let vehiculoUno = new Vehiculos("Fiat", "Cronos", "$2110200", 5);
let vehiculoDos = new Vehiculos("Ford", "Shelby", "$4023000", 2);
let vehiculoTres = new Vehiculos("Nissan", "Skyline", "$4859000", 1);

//ARRAY VEHICULOS

let vehiculosArr = [
    vehiculoUno, 
    vehiculoDos, 
    vehiculoTres
];

//PANEL DE OPCIONES

let cantidad = 0;

let panelOpciones = ()=>{
    while (true) {
    seleccion = parseInt(prompt("Ingrese a donde quiere acceder. 1- Vehiculos en Stock. 2- Comprar vehiculo. 3- Buscar vehiculo"));

    if(seleccion == 1){
        console.log(vehiculosArr[0]);
        console.log(vehiculosArr[1]);
        console.log(vehiculosArr[2]);
    }

    if (seleccion === 2) {
        seleccion = parseInt(prompt("¿Qué vehiculo desea comprar?, 1, 2 o 3."));

        if (seleccion === 1) {
            alert("DATOS DEL VEHICULO", vehiculoUno.datosVehiculo())
            cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
            vehiculoUno.ventaVehiculo(cantidad);
            seleccion = parseInt(prompt("Oprima 1 para volver o 2 para salir."));
            if (seleccion == 2) {
                break
            }
        }
        else if (seleccion === 2) {
            alert("DATOS DEL VEHICULO", vehiculoDos.datosVehiculo());
            cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
            vehiculoDos.ventaVehiculo(cantidad);
            seleccion = parseInt(prompt("Oprima 1 para volver o 2 para salir."));
            if (seleccion == 2) {
                break
            }
        }
        else if (seleccion === 3) {
            alert("DATOS DEL VEHICULO", vehiculoTres.datosVehiculo());
            cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
            vehiculoTres.ventaVehiculo(cantidad);
            seleccion = parseInt(prompt("Oprima 1 para volver. 2 para salir."));
            if (seleccion == 2) {
                break
            }
        }
    }
    else if (seleccion === 3) {
        buscarVehiculoFun();
        seleccion = parseInt(prompt("Oprima 1 para comprar. 2 para salir."))
        if (seleccion == 1) {
            alert("DATOS DEL VEHICULO", vehiculoDos.datosVehiculo());
            cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
            vehiculoDos.ventaVehiculo(cantidad);
            break
        }
    }
} 
}   
 */





//COTIZACION

let botonesCotizar = document.getElementsByClassName("botonCotizar");

for (let i = 0; i < botonesCotizar.length; i++) {
  botonesCotizar[i].addEventListener("click", function() {
    let imagen = this.parentNode.parentNode.querySelector(".card-img-top");
    let contenedorPadre = document.querySelector(".contenedorPadre");
    contenedorPadre.innerHTML = "";
    let nuevoContenedor = document.createElement("div");
    contenedorPadre.appendChild(nuevoContenedor);
    let nuevoContenedorHTML = `
      <div class="nuevoContenedorEstilos">
        <img src="${imagen.src}">
        <h2 class="tituloH2">Cotizar</h2>
        <p class="textoJs">Accedé a comprarte el vehículo que querés a través de una financiación a tasa competitiva,<br>
        con preaprobación inmediata y sin necesidad de ir a una entidad bancaria.</p>
        <table class="tablaJs">
            <tr class="filasJs">
                <td class="columnas">Plazos(MESES)</td>
                <td>INTERES</td>
                <td>MONTO A FINANCIAR</td>
            </tr>
            <tr>
                <td>12</td>
                <td>49.90%</td>
                <td>Hasta $3.000.000</td>
            </tr>
            <tr class="filasJs">
                <td>24</td>
                <td>69.90%</td>
                <td></td>
            </tr>
            <tr>
                <td>36</td>
                <td>79.90%</td>
                <td>Hasta un 40% del valor del vehiculo</td>
            </tr>
        </table>
        <br>
        <h3>MONTO LIMITE DE 1500000</h3>
        <div class="nuevoBox">
            <label class="labelJs">Ingrese monto que desea financiar: $</label>
            <input type="text" id="inputMonto" class="inputJs">
        </div>
        <table class="tablaJs">
            <tr class="filasJs">
                <td class="columnas">Plazos(MESES)</td>
                <td>INTERES</td>
                <td>TOTAL A PAGAR</td>
            </tr>
            <tr class="fila-plazo-x">
                <td>12</td>
                <td>49.90%</td>
                <td  id="montoCotizado"></td>
            </tr>
            <tr class="filasJs fila-plazo-x">
                <td>24</td>
                <td>69.90%</td>
                <td id="montoCotizado"></td>
            </tr>
            <tr class="fila-plazo-x">
                <td>36</td>
                <td>79.90%</td>
                <td id="montoCotizado"></td>
            </tr>
        </table>
        <div>
          <button class="botonVolver">Volver</button>
          <button class="botonVolver" id="btnVender">Solicitar prestamo</button>
        </div>
      </div>`;

    contenedorPadre.insertAdjacentHTML("beforeend", nuevoContenedorHTML);

    let botonVolver = contenedorPadre.querySelector(".botonVolver");
    botonVolver.addEventListener("click", function() {  
      window.location.href = "./index.html";
    });

    let inputMonto = contenedorPadre.querySelector("#inputMonto");
    inputMonto.addEventListener("input", cotizarVehiculo);
  });
}

function cotizarVehiculo() {
  let inputMonto = document.getElementById('inputMonto');

  inputMonto.addEventListener('input', function() {
  let valorInput = inputMonto.value.trim();

  if (valorInput === '') {
    let filasPlazos = document.querySelectorAll('.fila-plazo-x');
    filasPlazos.forEach(function(fila) {
      let tdMontoCotizado = fila.querySelector('#montoCotizado');
      tdMontoCotizado.textContent = '0';
    });
    return; 
  }

  let monto = parseFloat(valorInput);

  if (isNaN(monto)) {
    document.getElementById('resultado').innerHTML = 'Por favor, ingrese un monto válido.';
    return;
  }

  let filasPlazos = document.querySelectorAll('.fila-plazo-x');

  filasPlazos.forEach(function(fila) {
    let plazo = parseInt(fila.querySelector('td:first-child').textContent);
    let tna = parseFloat(fila.querySelector('td:nth-child(2)').textContent.replace('%', ''));

    let interes = monto * (tna / 100);
    let total = monto + interes;

    let interesFormateado = interes.toLocaleString();
    let totalFormateado = total.toLocaleString();

    let tdMontoCotizado = fila.querySelector('#montoCotizado');
    tdMontoCotizado.textContent = '$' + totalFormateado;
  });

  let btnVender = document.getElementById("btnVender");
  btnVender.addEventListener("click", finalizarVenta);
});


}

function finalizarVenta() {
  let monto = parseFloat(document.getElementById('inputMonto').value);
  if (monto > 1500000) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    }).then(()=>{
      return new Promise((resolve)=>{
        setTimeout(resolve, 2000)
      }).then(()=>{
        window.location.href = './index.html';
      })
    })
  }
}


fetch("https://api.bluelytics.com.ar/v2/latest")
  .then((response) => response.json())
  .then((data) => {
    const dolarOficial = data.oficial.value_avg;
    const dolarBlue = data.blue.value_avg;

    const dolarDiv = document.getElementById("dolar");

    const dolarOficialElement = document.createElement("span");
    dolarOficialElement.textContent = `Valor del dolar oficial: $${dolarOficial}`;
    dolarOficialElement.classList.add("dolarOficial");
    dolarDiv.appendChild(dolarOficialElement);

    const dolarBlueElement = document.createElement("span");
    dolarBlueElement.textContent = `Valor del dolar blue: $${dolarBlue}`;
    dolarBlueElement.classList.add("dolarBlue");
    dolarDiv.appendChild(dolarBlueElement);    
  })
  .catch(error => {
    document.getElementById('dolar').textContent = 'Ocurrió un error al obtener la cotización.';
    console.log('Ocurrió un error al obtener la cotización:', error);
  });

























  






























