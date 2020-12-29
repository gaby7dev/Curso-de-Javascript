// Como se Comunican la funciones

iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');

    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`El usuario ${usuario} ha sido autenticado exitosamente.`);
}
 