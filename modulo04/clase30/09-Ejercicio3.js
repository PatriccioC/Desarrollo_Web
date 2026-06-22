//  Ejercicio 3 - Auto
// 
// Crear una clase Auto.
// 
// Propiedades:
// 
//     marca
//     modelo
//     combustible
// 
// Métodos:
// 
// conducir(km)
// 
//     Cada 10 km consume 1 litro.
// 
// cargarCombustible(litros)
// 
//     Agrega combustible.
// 
// mostrarInfo()
// Ejemplo
// auto.conducir(50)
// 
// Consume:
// 
// 5 litros

class Auto {
    constructor(marca, modelo, combustible, kilometros) {
        this.marca = marca
        this.modelo = modelo
        this.combustible = combustible
        this.kilometros = kilometros
    }

    conducir(kilometros) {
        this.kilometros += kilometros
        const combustible = kilometros / 10

        if (this.combustible >= combustible) {
            this.combustible -= combustible
        } else {
            this.combustible = 0
            console.log(`${this.marca}: Te quedaste sin combustible`)
        }
        const autonomia =  this.combustible * 10
        console.log(`Tienes una autonomia de: ${autonomia} km`)
        
        if (this.combustible <= 5) {
            console.log(`Tienes ${this.combustible} litros en tu auto, debes cargar combustible!!!`)
        }
    }

    cargarCombustible(litros) {
        this.combustible += litros
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nCombustible: ${this.combutible}\nKilometros recorridos: ${this.kilometros}`)
    }
}

const Auto_01 = new Auto("Fiat", "Sedan",10, 0)

Auto_01.conducir(40)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)

Auto_01.conducir(30)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)

Auto_01.cargarCombustible(25)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)

console.log("-------------------------")
Auto_01. mostrarInfo()
console.log("-------------------------")

Auto_01.conducir(100)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)

Auto_01.conducir(130)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)

Auto_01.conducir(60)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)

Auto_01.cargarCombustible(50)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)

Auto_01.conducir(200)
console.log("-------------------------")
console.log(`Nombre: ${Auto_01.marca}\nkilometros: ${Auto_01.kilometros}\nCombustible en tanque: ${Auto_01.combustible}`)
console.log("-------------------------")
console.log(`\n`)