const caracteres = [
    { codigo: 1, tipo: 'numeros', caracteres: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] },
    { codigo: 2, tipo: 'alfabeto', caracteres: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] },
    { codigo: 3, tipo: 'simbolos', caracteres: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "{", "}", "[", "]", ",", ".", "/", ";", ":", "'", "\"", "<", ">", "?", "¡", "¿", "ç"]}
];

function generarContraseña(tipoContraseña, cantCaracteres) {
    let caracteresDisponibles = [];

    if (tipoContraseña === 1) {
        caracteresDisponibles = caracteres[0].caracteres; // Números
    } else if (tipoContraseña === 2) {
        caracteresDisponibles = caracteres[1].caracteres.concat(caracteres[0].caracteres) //Alfanumérica
    } else if (tipoContraseña === 3) {
        caracteresDisponibles = caracteres[1].caracteres.concat(caracteres[0].caracteres, caracteres[2].caracteres); // Alfanumérica y símbolos
    } else {
        console.log("Opción no válida.");
        return; // Terminar la función si la opción no es válida.
    }

    let contraseña = "";
    for (let i = 0; i < cantCaracteres; i++) {
        const nRandom = Math.floor(Math.random() * caracteresDisponibles.length);
        contraseña += caracteresDisponibles[nRandom];
    }
    return contraseña;
}

function generadorDeContraseñas(){
    while (true) {
        const cantCaracteres = parseInt(prompt('Ingrese la cantidad de caracteres a generar: '));
        const tipoContraseña = parseInt(prompt('Ingrese 1 para contraseña alfabetica, ingrese 2 para contraseña alfanumnerica o ingrese 3 para contraseña alfanumerica y simbolos.'));
    
        if (tipoContraseña >= 1 && tipoContraseña <= 3) {
            const contraseña = generarContraseña(tipoContraseña, cantCaracteres);
            console.log(contraseña);
            alert('Su Contraseña generada es: ' + contraseña)
            break;
        } else {
            console.log("Ingrese una opción válida.");
    
        }
    }
}

