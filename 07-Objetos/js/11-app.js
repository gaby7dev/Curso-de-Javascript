// La palabra This para utilizar funciones en objetos y accedeer a sus valores.

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`EL producto: ${this.nombre} tiene un precio de: $${this.precio}`);
    }
}
// This sirve para referirse al objeto mismo.
producto.mostrarInfo();