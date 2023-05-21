/* function calcular_cuota () {
    let prestamo = parseInt(prompt('Ingrese el monto del prestamo'));
    let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas: 6, 12 o 24'));

    let interes = 0;

    while (cuotas !== 6 && cuotas !== 12 && cuotas !== 24) {
        console.log('Cantidad de cuotas inválida');
        cuotas = parseInt(prompt('Ingrese la cantidad de cuotas: 6, 12 o 24'));
    }

    if ( cuotas == 6 ) {
        interes = cuotas * 0.5;
    }
    else if ( cuotas == 12 ) {
            interes = cuotas * 0.10
    }
    else if ( cuotas == 24 ) {
        interes = cuotas * 0.20;
    }

    let valor_cuota = prestamo / cuotas;
    let valor_interes = valor_cuota * interes;

    console.log(prestamo , '+' , interes , '%');
    console.log('El valor de las cuotas es de: ', valor_interes);

}



let usuario_registrado = 'Fran';
let intentos = 1;

for ( let i = 0; i < 4; i = i + 1 ) {

    let nombre_usuario = prompt('Ingrese su nombre de usuario');

    if ( nombre_usuario != usuario_registrado && intentos < 3 ) {
        console.log('Usuario invalido');
        intentos = intentos + 1;
        continue
    }
    else if ( intentos == 3 ) {
        console.log('Chau tarjeta');
        break
    }
    else if ( nombre_usuario == usuario_registrado ) {
        console.log('Bienvenido al sistema: ', nombre_usuario )
        alert('Bienvenido a ConcecionariaFranco');
        break
    }
}

calcular_cuota()
 */


/* 
function alumno ( nombre , apellido , edad ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

let alumno_uno = new alumno('Franco' , 'Acuña' , 19)
console.log(alumno_uno); */



class Vehiculos {
    constructor( marca, modelo, precio, stock ) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    datos_vehiculo(){
        console.log("<--------DATOS DEL VEHICULO--------->");
        console.log("Marca: ",this.marca);
        console.log("Modelo: ",this.modelo);
        console.log("Precio: ",this.precio);
        console.log("Stock: ",this.stock);
    }

    venta_vehiculo( cantidad ) {
        if ( this.stock >= cantidad ) {
            console.log("¡Felicidades por su compra!");
            this.stock = this.stock - cantidad;
        }
        else if ( this.stock < cantidad ) {
            console.log("No hay esa cantidad en stock");
        }
    }

    
}

let vehiculo_uno = new Vehiculos("Fiat", "Cronos", "$2110200", 5);
let vehiculo_dos = new Vehiculos("Ford", "Shelby", "$4023000", 2);
let vehiculo_tres = new Vehiculos("Nissan", "Skyline", "$4859000", 1);

let seleccion = parseInt(prompt("Ingrese a donde quiere acceder. 1-Vehiculos en Stock."));

while (seleccion === 1) {
  console.log(vehiculo_uno);
  console.log(vehiculo_dos);
  console.log(vehiculo_tres);
  
  seleccion = parseInt(prompt("Ingrese a donde quiere acceder. 1-Vehiculos en Stock. 2-Comprar vehiculo."));
  
  if (seleccion === 2) {
    seleccion = parseInt(prompt("¿Qué vehiculo desea comprar?, 1, 2 o 3."));
    
    if (seleccion === 1) {
        alert("DATOS DEL VEHICULO", vehiculo_uno.datos_vehiculo())
        let cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
        vehiculo_uno.venta_vehiculo(cantidad);
        seleccion = parseInt(prompt("Oprima 1 para volver o 2 para salir."));
        if ( seleccion == 2 ) {
        break
        }
    }
    else if ( seleccion === 2 ) {
        alert("DATOS DEL VEHICULO", vehiculo_dos.datos_vehiculo());
        let cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
        vehiculo_dos.venta_vehiculo(cantidad);
        seleccion = parseInt(prompt("Oprima 1 para volver o 2 para salir."));
        if ( seleccion == 2 ) {
        break
        }
    }
    else if ( seleccion === 3 ) {
        alert("DATOS DEL VEHICULO", vehiculo_tres.datos_vehiculo());
        let cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
        vehiculo_tres.venta_vehiculo(cantidad);
        seleccion = parseInt(prompt("Oprima 1 para volver o 2 para salir."));
        if ( seleccion == 2 ) {
        break
        }
    }
  }
}
















