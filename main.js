import Cantidad from "./cantidad.js";
import Ingrediente from "./ingrediente.js"

class Main {
    probarCantidad() {
        console.log(`-----Cantidades-----`)
        let receta = new Cantidad(1, "litro")
        console.log(`${receta.getDescripcion()}`)
        
    }
    probarIngrediente() {
        console.log(`-----Ingrediente-----`)
        let ingrediente = new Ingrediente("Leche", new Cantidad(2, "Litros"), 20)
        console.log(`${ingrediente.getDescripcionIng()}`)
    }

}

let app = new Main
app.probarCantidad();
app.probarIngrediente();