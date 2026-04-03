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

// Ejercicio 1
// 1️⃣ Mostrar números del 1 al 100
console.log("Mostrar del 1 al 100")
for (let i = 1; i <= 100; i++) {
    console.log(i)
}

// Ejercicio 1.1
// Lo mismo pero muesta los núneros agrupados de 10
// para poder observar los 100

let fila_de_a_10 = ""; // Definimos una variable vacía

for (let i = 1; i <= 100; i++) {
    // Agregamos el número con 10 espacios a la 
    // izquierda para que siempre ocupe 10 caracteres
    // y un espacio extra para separar las columnas.
    fila_de_a_10 += i.toString().padStart(10, " ") + " ";

    // Si el número es múltiplo de 10, imprimimos la fila y la vaciamos
    if (i % 10 === 0) {
        console.log(fila_de_a_10);
        fila_de_a_10 = ""; // Dejamos la variable vacía para iniciar la proxima fila
    }
}

// Ejercicio 1.2
// Lo mismo pero muesta los núneros agrupados de 10
// para poder observar los 100
// a esto le agregamos un separador  "|" 
// y un piso "----------"
for (let i = 1; i <= 100; i += 10) {
    let fila_centrada_con_barras = "|"; // Empezamos la fila con una barra
    
    for (let j = i; j < i + 10; j++) {
        let numStr = j.toString();  //Convertios el número j en string para poder
                                    //  agragarle espacios facilmente
        
        // Ahora el centrado manual:
        // Queremos que cada celda mida 10 espacios. 
        // padStart(6, " ") rellena con 6 espacios y deja el número
        // es el final de esos 6 espacios y
        // padEnd rellena a la derecha para empujar el número al "centro"
        let centrado = numStr.padStart(6, " ").padEnd(10, " ");
        
        // Si es la primer fila imprimimos "-----------------"
        if (j == 10) {
            console.log("-".repeat(fila_centrada_con_barras.length+11)); // El 11 lo usanos para rellenar lo - faltantes
        }
        // Finalmente agregamos el número y la barra divisoria
        fila_centrada_con_barras += centrado + "|"; 
    }

    console.log(fila_centrada_con_barras);
    console.log("-".repeat(fila_centrada_con_barras.length)); // Una línea decorativa debajo de cada fila
}