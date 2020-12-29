// comparando Mayor que y Menor que.

let dinero = 500;
const totalAPagar = 300;

if( dinero > totalAPagar){
    console.log('Si podemos pagar.');
} else{
    console.log('Dinero insuficiente.');
}

dinero = 200; 
if( dinero < totalAPagar){
    console.log('Dinero insuficiente.');
} else{
    console.log('Si podemos pagar.');
}

dinero = 300; 
if( dinero >= totalAPagar){
    console.log('Si podemos pagar.');
} else{
    console.log('Dinero insuficiente.');
}