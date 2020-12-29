// switch case 

const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'chueque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Método de pago no soportado');
        break;
}