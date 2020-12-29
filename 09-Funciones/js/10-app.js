const aprendiendo = function(){
    console.log('Aprendiendo Javascript');
}
aprendiendo(); // < Aprendiendo Javascript

// Arrow Function

// 1
const aprendiendo2 = () => {
    console.log('Aprendiendo Javascript');
}
aprendiendo2(); // < Aprendiendo Javascript

// 2
const aprendiendo3 = () => console.log('Aprendiendo Javascript');
// Cuando tienen una sola linea no hace falta usar llaves

aprendiendo3(); // < Aprendiendo Javascript

// 3
const aprendiendo4 = () => 'Aprendiendo Javascript';
// Cuando tienen una sola linea da por implícito el return.

console.log( aprendiendo4() ); // < Aprendiendo Javascript