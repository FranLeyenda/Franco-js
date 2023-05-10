let usuario_registrado = 'Fran';
let intentos = 0;

for( i = 0; i < 4; i++) {
    
    let nombre_usuario = prompt('Ingrese su usuario');

    if ( nombre_usuario == usuario_registrado) {
        console.log('Bienvenido al sistema: ', usuario_registrado);
        alert('Usted ingreso en ConsecionariaFranco');
        let vehiculo = prompt('Ingrese el vehiculo que desea comprar.(Auto o Moto)');

        if ( vehiculo == 'Auto' || vehiculo == 'Moto') {
            let prestamo = parseInt(prompt('Ingrese el monto del prestamo:'))
            let cuotas = parseInt(prompt('Ingrese como quiere financiar el vehiculo: (6, 12 o 24 cuotas.)'))

            let interes = 0;

            if ( cuotas === 6 ) {
                interes = 0.3;
            }
            else if ( cuotas === 12 ) {
                interes = 0.6;
            }
            else if ( cuotas === 24 ) {
                interes = 0.12;
            }
            else {
                alert('Cantidad de cuotas invalidas');
            }

            let valor_cuota = prestamo / cuotas

            let valor_interes = valor_cuota * interes

            console.log(`El valor de la cuota es de: ${valor_cuota + valor_interes}`);

        }

        break
    }

    if ( nombre_usuario != usuario_registrado && intentos < 3) {
        console.log('Usuario incorrecto');
        intentos = intentos + 1;
        continue
    }

    if ( intentos == 3 ) {
        console.log('No ha podido ingresar.');
        break
    }
    
}


