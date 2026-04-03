/*
1️⃣ Mostrar números del 1 al 100
2️⃣ Mostrar solo impares
3️⃣ Mostrar múltiplos de 3
4️⃣ Calcular suma del 1 al 10


Desafio Extra (Solo por diversion, este si no les sale, esta bien, es DIFICIL):

con bucles (Y sin poner cosas obvias, que sea escalable)
que recorra numeros hasta mostrar:
1
22
333
4444
*/
// Expresines matemáticas,
// **   elevado a ; cuadrado = 5 ** 2 = 25
// **   Tambien sirve para raices  ; raizCuarta = 16 ** (1/4) = 2 


// Ejercicio 5 - Desafío
// Desafio Extra (Solo por diversion, este si no les sale, esta bien, es DIFICIL)
// Para camos a usar la expresión de 10 elevado a la potencia i
// con esto vamos a saber cuantos dígitos tenemos

// variables
let secuencia_solicitada = "";
let contador_potencia = 0;
let contador_de_igualdad_str = "";
let contador_de_igualdad_num = 1;
let valor_de_la_cuenta = "";
let valor_buscado = "";
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // definicón de constante de tiempo

for (let i = 1; i <= 123459; i++) {
    
    
    
    if (i === 10**contador_potencia) {
        
        contador_potencia = contador_potencia + 1;
        contador_de_igualdad_str =  contador_de_igualdad_str + contador_potencia.toString()
        let contador_de_igualdad_num = +contador_de_igualdad_str // con esto convierto en string en número
        
    }

    console.log(" ");
    valor_de_la_cuenta = "Valor de la cuenta: " + i.toString()
    console.log(valor_de_la_cuenta);
    valor_buscado = "Valor que se desea ancontrar: " + contador_de_igualdad_str
    console.log(valor_buscado);

    if (i.toString() === contador_de_igualdad_str) {

        console.log("******************************************************************"); 
        console.log("Felicidades !!!"); 
        console.log("La cuenta es igual al número buscado " + contador_de_igualdad_str); 
        console.log("******************************************************************"); 
        await esperar(3000); // Espero 3 segundos para poder ver el resultado de coincidencia
        
    } else {
        console.log("La cuenta no es igual al número buscado: " + contador_de_igualdad_str);     
    }

}
console.log("**********************************************************************************"); 
console.log("Felicidades !!!"); 
console.log("Has llegado al final de las cuentas y has encontrado todos los números buscados"); 
console.log("**********************************************************************************"); 
