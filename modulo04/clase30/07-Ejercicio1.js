// Ejercicio 1
//
// Crear una clase CuentaBancaria.
//
// Propiedades:
//    titular
//    saldo
//
// Métodos:
//
// depositar(monto)
// 
//     Suma dinero al saldo.
// 
// extraer(monto)
// 
//     Resta dinero al saldo si hay suficiente.
// 
// Si no:
// 
//     Fondos insuficientes
// 
// consultarSaldo()
// 
//     Muestra el saldo actual.


class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(saldo) {
        this.saldo += saldo
    }

    extraer(saldo) {
        if (saldo <= this.saldo) {
            this.saldo -= saldo
        } else {
            console.log(`${this.titular}: Sus fondos son insuficientes`)
        }
    }

    consultarSaldo() {
        console.log(`El saldo actual de este usuario es: U$D ${this.saldo}`)
    }
}

const CuentaBancaria1 = new CuentaBancaria("Tim Payne", 1500000)
const CuentaBancaria2 = new CuentaBancaria("Neymar", 9500000)
const CuentaBancaria3 = new CuentaBancaria("Messi", 1500000)
const CuentaBancaria4 = new CuentaBancaria("Mbappé", 9500000)
const CuentaBancaria5 = new CuentaBancaria("Unuario_NN", 9500)



CuentaBancaria1.depositar(5874000)
console.log("-------------------------")
console.log(`Titular: ${CuentaBancaria1.titular}\nSaldo actual: U$D ${CuentaBancaria1.saldo}`)
console.log("-------------------------")
console.log(`\n`)

CuentaBancaria2.extraer(9500)
console.log("-------------------------")
console.log(`Titular: ${CuentaBancaria2.titular}\nSaldo actual: U$D ${CuentaBancaria2.saldo}`)
console.log("-------------------------")
console.log(`\n`)

CuentaBancaria3.consultarSaldo()
console.log("-------------------------")
console.log(`Titular: ${CuentaBancaria3.titular}\nSaldo actual: U$D ${CuentaBancaria3.saldo}`)
console.log("-------------------------")
console.log(`\n`)

CuentaBancaria4.depositar(2500000)
console.log("-------------------------")
console.log(`Titular: ${CuentaBancaria4.titular}\nSaldo actual: U$D ${CuentaBancaria4.saldo}`)
console.log("-------------------------")
console.log(`\n`)

CuentaBancaria5.extraer(10500)
console.log("-------------------------")
console.log(`Titular: ${CuentaBancaria5.titular}\nSaldo actual: U$D ${CuentaBancaria5.saldo}`)
console.log("-------------------------")
console.log(`\n`)

