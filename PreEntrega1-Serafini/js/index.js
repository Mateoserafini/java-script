function generadoRandom(cifras) {
    if (cifras == 1) {
      // Generar un número aleatorio con 1 cifra (0-9)
      return Math.floor(Math.random() * 10);
    }
    else if (cifras == 2) {
      // Generar un número aleatorio con 2 cifras (10-99)
      return Math.floor(Math.random() * 90) + 10;
    }
    else if (cifras == 3) {
      // Generar un número aleatorio con 3 cifras (100-999)
      return Math.floor(Math.random() * 900) + 100;
    }
    else if (cifras == 4) {
      // Generar un número aleatorio con 4 cifras (1000-9999)
      return Math.floor(Math.random() * 9000) + 1000;
    }
    else {
      return 0; // Devuelve 0 si la cifra no es válida
    }
}

function adivinar() {
    console.log('Bienvenido al juego de adivinanzas');
    console.log('Las instrucciones del juego son las siguientes:');
    console.log('Podrás ingresar números y se te avisará si es mayor o menor.');
    console.log('También puedes seleccionar la dificultad antes de empezar.');
    console.log('En caso de no poder adivinarlo y querer salir, ingresa el siguiente código: 0');

    while (true) {
        nMenu = parseInt(prompt('Ingresa 1 para jugar (por favor, lee las instrucciones en la consola): '));

        if (nMenu == 1) {
            cifras = parseInt(prompt('Ingresa 1 para un número de una cifra, 2 para un número de dos cifras, 3 para un número de tres cifras, o 4 para un número de cuatro cifras: '));
            const nGenerado = generadoRandom(cifras);
            var intentos = 1;
            
            while (true) {
                var nUsuario = parseInt(prompt('Ingresa tu intento número ' + intentos + ': '));

                if (nUsuario > nGenerado) {
                    alert('El número ingresado es mayor.');
                } else if (nUsuario < nGenerado) {
                    alert('El número ingresado es menor.');
                } else if (nUsuario == nGenerado) {
                    alert('¡Has ganado en tu intento número ' + intentos + '! ¡Felicitaciones!');
                    break;
                } else if (nUsuario === 0) {
                    alert('Saliste del juego.');
                    break;
                } else {
                    alert('Ingresa un número válido.');
                }
                
                intentos++;
            }
            break;
        }
    }
}

alert('Abre la consola para leer las instrucciones e información.');
adivinar();
