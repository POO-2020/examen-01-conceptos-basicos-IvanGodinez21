export default class Cantidad {
    /**
     * @param {number} valor 
     * @param {string} unidad 
     */
    constructor(valor, unidad) {
        this.valor = valor
        this.unidad = unidad
    }
    getDescripcion() {
        return `Canitdad: ${this.valor} \nUnidad :${this.unidad}`
    }
}