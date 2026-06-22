// Ejercicio 2 - Personaje RPG
// 
// Crear una clase Personaje.
// 
// Propiedades:
//     nombre
//     vida
//     ataque
// 
// Métodos:
// 
//     recibirDanio(cantidad)
// 
//     Resta vida.
// 
// Nunca puede quedar debajo de 0.
// 
// curar(cantidad)
// 
//     Suma vida.
// 
// mostrarEstado()
// 
// Muestra:
// 
// Nombre
// Vida
// Ataque

class Personaje {
    constructor(nombre, vida, ataque) {
        this.nombre = nombre
        this.vida = vida
        this.ataque = ataque
    }

    recibirCurar(vida) {
        this.vida += vida
    }

    recibirDanio(vida) {
        if (vida <= this.vida) {
            this.vida -= vida
        } else {
            this.vida = 0
            console.log(`${this.nombre}: Estás muerto`)
        }
    }

    mostrarEstado() {
        console.log(`usuariuo: ${this.nombre}\nVida: ${this.vida}\nAtaque: ${this.ataque}`)
    }
}

const Personaje_01 = new Personaje("Héroe", 100, 75)



Personaje_01.recibirCurar(27)
console.log("-------------------------")
console.log(`Nombre: ${Personaje_01.nombre}\nVida: ${Personaje_01.vida}`)
console.log("-------------------------")
console.log(`\n`)

Personaje_01.recibirDanio(57)
console.log("-------------------------")
console.log(`Nombre: ${Personaje_01.nombre}\nVida: ${Personaje_01.vida}`)
console.log("-------------------------")
console.log(`\n`)

console.log("-------------------------")
Personaje_01.mostrarEstado()
console.log("-------------------------")
console.log(`\n`)

Personaje_01.recibirDanio(87)
console.log("-------------------------")
console.log(`Nombre: ${Personaje_01.nombre}\nVida: ${Personaje_01.vida}`)
console.log("-------------------------")
console.log(`\n`)