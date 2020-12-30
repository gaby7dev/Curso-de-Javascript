// for in a diferencia de for of, este itera sobre objetos.

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

for(let pendiente in pendientes){
    console.log(pendiente);
} 

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let propiedad in automovil){
    console.log(propiedad);
} 

for(let propiedad in automovil){
    console.log(`${propiedad} : ${automovil[propiedad]}`);
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log(llave);
    console.log(valor);

}