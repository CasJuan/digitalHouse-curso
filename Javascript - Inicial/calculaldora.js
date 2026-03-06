const prompt = require("prompt-sync")({ sigint: true });

function suma (num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function resta (num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

function mutiplicar (num1, num2){
    return num1 * num2;
}

function division (num1, num2){
    if(num2 === 0){
        return "No se puede dividir por cero";
    }else{
        return num1 / num2;
    }
}

console.log("Bienvenido a la calculadora digital!!");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");
//let opcion = prompt("Indique que operacion desea realizar: "); // Simulamos la opcion del usuario

switch (opcion){
    case "1":
        let num1 = parseInt(prompt("Ingrese el primer numero: "));
        let num2 = parseInt(prompt("Ingrese el segundo numero: "));
        console.log("El resultado de la suma es: " + suma(num1, num2));
        break;
    case "2":
        let num3 = parseInt(prompt("Ingrese el primer numero: "));
        let num4 = parseInt(prompt("Ingrese el segundo numero: "));
        console.log("El resultado de la resta es: " + resta(num3, num4));
        break;
    case "3":
        let num5 = parseInt(prompt("Ingrese el primer numero: "));
        let num6 = parseInt(prompt("Ingrese el segundo numero: "));
        console.log("El resultado de la multiplicacion es: " + mutiplicar(num5, num6));
        break;
    case "4":
        let num7 = parseInt(prompt("Ingrese el primer numero: "));
        let num8 = parseInt(prompt("Ingrese el segundo numero: "));
        console.log("El resultado de la division es: " + division(num7, num8));
        break;
    default:
        console.log("Opcion no valida");
        break;
}


function bubbleSort(arr){
    for(let i = 0; i < arr.length ; i++){
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j + 1] = temp
            }
        }
    }
}

function indicarOrdenado(arr){
    let ordenado  = true;
    for(let i = 0; i < arr.length ; i++){
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]){
                ordenado = false;
            }
        }
    }
    return ordenado;
}

function cantidadVeces (arr,numero){
    let cant = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == numero){
            cant++;
        }
    }
    return cant;
}

function cantVoto(arr){
    for(let j = 0; j < arr.length ; j++){
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i].votos > arr[i + 1].votos){
                let temp = arr[i]
                arr[i] = arr[i+1];
                arr[i + 1] = temp
            }
        }
    }
}



