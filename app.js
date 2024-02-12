//Variables
let numeroMaximoUtilizado = 0;
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 0;


numeroMaximoUtilizado = prompt('Entre 1 y que número maximo te gustaria Jugar:');
maximosIntentos = prompt('En cuantos intentos quieres encontrar el número secreto: ')

//Bucle de desarrollo del juego
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoUtilizado} por favor:`));

    console.log(typeof (numeroUsuario)); //Este muestra el numero del usuario en la consola y typeof es el que dice el tipo de dato proporcionado

    //Este código realiza la comparación:
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : "veces"}.`); //Template Strings ${numeroUsuario}
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        //Incrementamos el contador cuando no aciertas 

        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVez = "veces";

        if (intentos > maximosIntentos) {
            alert(`Has llegado al  máximo número de ${maximosIntentos} intetos.`);
            break;
        }

        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
