import Cantidad from "./cantidad.js";

class Main {
    probarCantidad() {
        console.log(`-----Cantidades-----`)
        let receta = new Cantidad(1, "litro")
        console.log(`${receta.getDescripcion()}`)
        
    }
}

let app = new Main
app.probarCantidad();