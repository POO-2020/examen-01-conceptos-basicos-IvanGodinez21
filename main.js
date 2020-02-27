import Cantidad from "./cantidad.js";
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js";

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
    probarReceta() {
        console.log(`-----Receta-----`)
        let costoh = 100
        let costop = 230
        let harina = new Ingrediente("Harina", new Cantidad(100, "gramos"), costoh)
        let piña = new Ingrediente("Piña", new Cantidad(5, "rebanadas"), costop)
        let total = costoh + costop
        let receta = new Receta(
            "Pizza Hawaiana",
            "Juan Pérez Ingredientes"
        );
        receta.registrarIngrediente(harina);
        receta.registrarIngrediente(piña);
        receta.listarIngredientes();
        console.log(receta.getNumeroIngredientes())
        console.log(receta.getCosto())
        console.log(receta.imprimirEnConsola())
    }
}

let app = new Main
app.probarCantidad();
app.probarIngrediente();
app.probarReceta();