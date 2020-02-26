export default class Ingrediente {
    /**
     * @param {string} nombre 
     * @param {number} cantidad 
     * @param {number} costo 
     */
    constructor(nombre, cantidad, costo) {
        this.nombre = nombre
        this.cantidad = cantidad
        this.costo = costo
    }
    getDescripcionIng() {
        return `${this.cantidad.getDescripcion()} de ${this.nombre} \nCosto: $${this.costo}`
    }
}