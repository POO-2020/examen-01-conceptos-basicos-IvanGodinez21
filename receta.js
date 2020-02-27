export default class Receta {
    constructor(nombre, autor) {
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = new Array
    }
    registrarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente)
    }
    listarIngredientes() {
        this.ingredientes.forEach((ingrediente, i) => {
            console.log(`${i+1}. ${ingrediente.getDescripcionIng()}`)
        })
    }
    getNumeroIngredientes() {
        return `Numero de Ingredientes: ${this.ingredientes.length}`
    }
    getCosto() {
        let costo = this.ingredientes[0].costo + this.ingredientes[1].costo
        return `Costo total: $${costo}`
        
    }
    imprimirEnConsola() {
        let costo = this.ingredientes[0].costo + this.ingredientes[1].costo
        return `${this.nombre}\nAutor: ${this.autor}\nIngredientes: \n${this.ingredientes[0].getDescripcionIng()} \n${this.ingredientes[1].getDescripcionIng()} \nCosto total: $${costo}`

    }
}

