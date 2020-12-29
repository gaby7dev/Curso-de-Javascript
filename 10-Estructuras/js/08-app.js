//  Buenas prácticas

const autenticado = true;

// if(autenticado == true){
//     console.log('El usuario está autenticado');
// }

if(autenticado){
    console.log('El usuario está autenticado');
}

const puntaje = 450;

// if(puntaje > 300){
//     console.log('Buen puntaje... Felicidades');
// } else if(puntaje > 400){
//     console.log('Exelente!!');
// }

function revisarPuntaje(){
    if(puntaje >= 400){
        console.log('Exelente!!');
        return;
    }
    if(puntaje > 300){
        console.log('Buen puntaje... Felicidades');
        return;
    }
}

revisarPuntaje();