// Ejercicio 4 - Alumno
// 
// Crear una clase Alumno.
// 
// Propiedades:
// 
// nombre
// curso
// notas
// 
// Notas será un array.
// 
// Métodos:
// 
// agregarNota(nota)
// calcularPromedio()
// aprobo()
// 
// Si promedio >= 6
// 
// Aprobó
// 
// Si no
// 
// Desaprobó

class Alumno {
    constructor(nombre, curso, notas) {
        this.nombre = nombre
        this.curso = curso
        this.notas = []
    }

    agregarNota(nota) {
        this.notas.push(nota)
    }

    calcularPromedio() {
    if (this.notas.length === 0) {
            console.log(`Tienes ${this.nombre} no tiene notas cargadas`)
        } else {
            let suma_notas = 0
            for (let i = 0; i < this.notas.length; i++) {
                suma_notas += this.notas[i]
            }
            const promedio_notas = suma_notas / this.notas.length
            console.log(`El promedio de ${this.nombre} es de :${promedio_notas}`)
            }
        }
}

const alumno1 = new Alumno("Juan", "Javascript")



console.log(alumno1.notas)

alumno1.calcularPromedio()


console.log("-------------------------")
console.log(`\n`)
alumno1.agregarNota(8)
alumno1.agregarNota(7)
alumno1.agregarNota(10)

console.log(alumno1.notas)

alumno1.calcularPromedio()