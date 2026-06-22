// Ejercicio 5 - Carrito de Compras
// 
// Crear una clase Carrito.
// 
// Propiedad:
// 
// productos
// 
// (Array)
// 
// Métodos:
// 
// agregarProducto(producto)
// eliminarProducto(nombre)
// mostrarProductos()
// calcularTotal()

class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(producto) {
        this.productos.push(producto)
        console.log(`Se agregó "${producto.nombre}" al carrito.`)
    }

    eliminarProducto(nombre) {
        this.productos = this.productos.filter(prod => prod.nombre !== nombre)
        console.log(`Se eliminó "${nombre}" del carrito.`)
    }

    mostrarProductos() {
        if (this.productos.length === 0) {
            console.log("El carrito está vacío.")
            return
        }
        console.log("--- Productos en tu Carrito ---")
        for (let prod of this.productos) {
            console.log(`- ${prod.nombre}: $${prod.precio}`)
        }
    }

    calcularTotal() {
        let total = 0
        for (let prod of this.productos) {
            total += prod.precio
        }
        console.log(`El total de la compra es: $${total}`)
        return total
    }
}


const miCarrito = new Carrito()


miCarrito.agregarProducto({ nombre: "Monitor 32'", precio: 420000 })
miCarrito.agregarProducto({ nombre: "Mouse", precio: 15000 })
miCarrito.agregarProducto({ nombre: "Auriculares", precio: 35000 })


console.log("-------------------------")
console.log(`\n`)
console.log(`\n`)
console.log(`\n`)
console.log("Contenido de mi carrito")
console.log("-------------------------")
console.log(miCarrito)
console.log("-------------------------")
console.log(`\n`)


console.log("-------------------------")
miCarrito.mostrarProductos()
console.log("-------------------------")
console.log(`\n`)

console.log("-------------------------")
miCarrito.calcularTotal()
console.log("-------------------------")
console.log(`\n`)

console.log("-------------------------")



miCarrito.eliminarProducto("Auriculares")
console.log("-------------------------")
console.log(`\n`)

console.log("-------------------------")
miCarrito.mostrarProductos()
miCarrito.calcularTotal()
console.log("-------------------------")
console.log(`\n`)