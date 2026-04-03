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

// Ejercicio 4
// 4️⃣ Calcular suma del 1 al 10
console.log("Calcula la suma del 1 al 10")
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma +=  i;

}
console.log(suma);

// Ejercicio 4.1
// Lo mismo pero mostrando el paso a paso 
console.log("Calcula la suma del 1 al 10 de a pasos")
let suma_ = 0;
let paso = "";
let i=0;

for (i = 1; i <= 10; i++) {
    suma_ +=  i
    paso = "Paso " + i.toString() + ": " + (suma_.toString()-i).toString() + " + " + i.toString() + " = " + suma_.toString(); 
    

    console.log(paso);

}
//console.log(suma);
