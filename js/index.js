
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

let usuarioRegistrado = 'Fran';
let intentos = 1;

let registro = ()=> {
    for (let i = 0; i < 4; i = i + 1) {
        nombreUsuario = prompt('Ingrese su nombre de usuario');
      
        if (nombreUsuario != usuarioRegistrado && intentos < 3) {
          console.log('Usuario inválido');
          intentos = intentos + 1;
          continue;
        } else if (nombreUsuario != usuarioRegistrado && intentos === 3) {
          console.log('No ha podido ingresar');
          break;
        } else if (nombreUsuario === usuarioRegistrado && intentos < 4) {
          console.log('Bienvenido al sistema:', nombreUsuario);
          alert('Bienvenido a ConcecionariaFranco');
          break;
        }
      }
    if(nombreUsuario == usuarioRegistrado){
        return true
    }
}

let registroUsuario = registro();


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

    seleccion = parseInt(prompt("Ingrese a donde quiere acceder. 1- Vehiculos en Stock. 2- Comprar vehiculo. 3- Buscar vehiculo"));

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


if (registroUsuario == true){
    panelOpciones();
}






  






























