// -Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y escriba el mayor, el menor y la media aritmética.

// -Se recuerda que la media aritmética de un conjunto de valores es la suma de esos valores dividida por la cantidad de valores.

let cantidadNumero = prompt(`Cuantos numeros quieres ingresar distinto de cero`);
let numerosIngresados = [];
let suma = 0;
let contador = 0;
let mayor;
let menor;

if(isNaN(cantidadNumero) != true && cantidadNumero > 0){
    do{
        for (let i=0 ; i < cantidadNumero ; i++ ){
            let numero = parseInt(prompt(`Ingrese numero`));
            if (isNaN(numero) != true ){   //comprueba si se ingreso numero
                numerosIngresados.push(numero)
                suma = suma + numero;
            }
            else{ //en el caso de caracter no se agrega en el Array y se resta el contador
                alert(`ERROR!!! ingrese numero`);
                i--;
            }
        }

        let promedio = (suma / cantidadNumero).toFixed(2);
        console.log(`el mayor numero ingresado es: ${Math.max(...numerosIngresados)} `);
        console.log(`el menor numero ingresado es: ${Math.min(...numerosIngresados)}`);
        console.log(`el promedio es: ${promedio}`);
        document.write(numerosIngresados);
    }while(contador < i)
    
}

else{
    console.log(`Ingresa numero para la cantidad que deseas ingresar`);
}

