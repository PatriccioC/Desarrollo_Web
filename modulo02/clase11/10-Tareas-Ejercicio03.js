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

// Ejercicio 3
// 3️⃣ Mostrar múltiplos de 3
console.log("Mostrar multiplos de 3 del 1 al 100")
for (let i = 1; i <= 100; i++) {
    if (i%3 === 0) {
        console.log(i); 
    }
}

// Ejercicio 3.1
// Lo mismo pero muesta los núneros multiplos de 3 agrupados 
// en filas seoaradas por decenas 
// para poder observarlos en 10 líneas

let fila_multiplo_de_3 = ""; // Definimos una variable vacía

for (let i = 1; i <= 100; i++) {
    // Agregamos el número con 10 espacios a la 
    // izquierda para que siempre ocupe 10 caracteres
    // y un espacio extra para separar las columnas.
    // i%3 === 0 lo usamos para separar solo los multiplos de 3

    if (i%3 === 0) {
        fila_multiplo_de_3 += i.toString().padStart(10, " ") + " "; 
    }


    // Si el número i es múltiplo de 10, imprimimos la fila y la vaciamos
    if (i % 10 === 0) {
        console.log(fila_multiplo_de_3);
        fila_multiplo_de_3 = ""; // Dejamos la variable vacía para iniciar la proxima fila
    }
}

// Ejercicio 3.2
// Lo mismo pero muesta los núneros multiplos de 3 agrupados 
// en filas seoaradas por decenas 
// para poder observarlos en 10 líneas
// a esto le agregamos un separador  "|" 
// y un piso "----------"

for (let i = 1; i <= 100; i += 10) {
    let fila_centrada_con_barras = "|"; // Empezamos la fila con una barra
    
    for (let j = i; j < i + 10; j++) {

        // j%2 === 1 lo usamos para separar solo los impares
        if (j%3 === 0) {
       
            let numStr = j.toString();  //Convertios el número j en string para poder
                                        //  agragarle espacios facilmente
            
            // Ahora el centrado manual:
            // Queremos que cada celda mida 10 espacios. 
            // padStart(6, " ") rellena con 6 espacios y deja el número
            // es el final de esos 6 espacios y
            // padEnd rellena a la derecha para empujar el número al "centro"
            let centrado = numStr.padStart(6, " ").padEnd(10, " ");
            
            // Si es la primer fila imprimimos "-----------------"
            if (j == 9) {
                console.log("-".repeat(fila_centrada_con_barras.length+11)); // El 11 lo usanos para rellenar lo - faltantes
            }
            // Finalmente agregamos el número y la barra divisoria
            fila_centrada_con_barras += centrado + "|"; 
        }
    }

    console.log(fila_centrada_con_barras);
    console.log("-".repeat(fila_centrada_con_barras.length)); // Una línea decorativa debajo de cada fila
}