//Ejercicio 1

let pregunta1 = parseInt(prompt("Dame un numero"));
let numero1 = 1;

while (numero1 <= pregunta1) {
    while (numero1 % 5 == 0){
        alert(`El ${numero1} es divisible entre 5`)
        numero1 += 1;
    }
    console.log(numero1);
    numero1 += 1;
    
}

//Ejercicio 2

let pregunta2 = parseInt(prompt("Dame un numero entre el 1 al 50"));
let pregunta2_1 = parseInt(prompt("Dame un otro numero entre el 1 al 50"));
let numero2 = 1;

while (numero2 <= 50) {
    while (numero2 == pregunta2 || numero2 == pregunta2_1){
        console.log(`Loteria`);
        numero2 += 1;
    } 
    console.log(numero2);
    numero2 += 1;
}

//Ejercicio 3
const arreglo_numero = [];
let pregunta3 = parseInt(prompt("Dame un numero para guardarlo, escribe 0 para mostrar los numeros guardados"));
arreglo_numero.push(pregunta3);

while (typeof(pregunta3) == "number" && pregunta3 != 0){
    pregunta3 = parseInt(prompt("Dame un numero para guardarlo, escribe 0 para mostrar los numeros guardados"));
    arreglo_numero.push(pregunta3);
    while (pregunta3 == 0){
        console.log(arreglo_numero);
        pregunta3 = null;
    }
}

//Ejercicio 4
const arreglo_palabras = [];
let pregunta4 = prompt("Escribe palabras para guardarlas, si no quieres guardar mas palabras no escribas nada");
arreglo_palabras.push(pregunta4);

while (typeof(pregunta4) == "string" && pregunta4 != ""){
    pregunta4 = prompt("Escribe palabras para guardarlas, si no quieres guardar mas palabras no escribas nada");
    arreglo_palabras.push(pregunta4);
    while (pregunta4 == ""){
        console.log(arreglo_palabras.toString());
        pregunta4 = null;
    }
}

//Ejercicio 5
let pregunta5 = prompt("Escribe un dia de la semana?")

while (typeof(pregunta5) == "string" && pregunta5 != null){
    while(pregunta5 == "Lunes" || pregunta5 == "lunes"){
        alert("Feliz comienzo de semana");
        pregunta5 = prompt("Escribe otro dia de la semana?")
    }
    while(pregunta5 == "Martes" || pregunta5 == "martes"){
        alert("Segundo dia de la semana, aun te quedan dias para que se termines tus deberes");
        pregunta5 = prompt("Escribe otro dia de la semana?")
    }
    while(pregunta5 == "Miercoles" || pregunta5 == "miercoles"){
        alert("Es la mitad de la semana, aun te quedan dos dias para terminar tus deberes");
        pregunta5 = prompt("Escribe otro dia de la semana?")
    }
    while(pregunta5 == "Jueves" || pregunta5 == "jueves"){
        alert("Te queda un dia para terminar tus deberes");
        pregunta5 = prompt("Escribe otro dia de la semana?")
    }
    while(pregunta5 == "Viernes" || pregunta5 == "viernes"){
        alert("Espero que hayas terminado tus deberes antes de que comienze el sabado");
        pregunta5 = prompt("Escribe otro dia de la semana?")
    }
    while(pregunta5 == "Sabado" || pregunta5 == "sabado"){
        alert("Aunque hoy puedes descansar debes terminar tus deberes");
        pregunta5 = prompt("Escribe otro dia de la semana?")
    }
    while(pregunta5 == "Domingo" || pregunta5 == "domingo"){
        alert("Ve a descansar");
        pregunta5 = null;
    }
}








