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
        console.log("-----Ingredientes-----")
        this.ingredientes.forEach((ingrediente, i) => {
            console.log(`${i+1}. ${ingrediente.getDescripcionIng()}`)
        })
    }
    getNumeroIngredientes() {
        return `Numero de Ingredientes: ${this.ingredientes.length}`
    }
    getCosto() {
        return `Costo: ${this.ingredientes}`
        
    }
    imprimirEnConsola() {
        return `${this.nombre}\nAutor: ${this.autor}\nIngredientes: \n${this.ingredientes[0].getDescripcionIng()} \n${this.ingredientes[1].getDescripcionIng()}`

    }
}

