//  El operador && para revisar si se cumplen 2 o más condiciones.

const usuario = true;
const puedePagar = false;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else if(!puedePagar && !usuario){
    console.log('No puedes comprar.');
} else if(!usuario){
    console.log('Inicia sesión o saca una cuenta');
}else if(!puedePagar){
    console.log('Fondos insuficientes');
}