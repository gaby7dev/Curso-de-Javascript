
const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('Javascript', 'Node.js'); 
// < Aprendiendo Javascript y Node.js

// Parámetros en Arrow Function

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log( aprendiendo2('Javascript', 'Node.js') ); 
// < Aprendiendo Javascript y Node.js