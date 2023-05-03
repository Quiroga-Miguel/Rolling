// Realizar un programa que dada la vida de un personaje, realice una acción. 

//  Si la vida está entre 0 y 20 que el personaje huya (escribir)
//  Si la vida está entre 21 y 50 que el personaje se ponga en modo defensivo
//  Si la vida está entre 51 y 80 que el personje se ponga en modo moderado
//  Si la vida está entre 81 y 100 que el personaje se ponga en modo ofensivo

//  a. Resolverlo sin conectores lógicos

let vida = parseInt(prompt(`Ingrese la vida del personaje`))

if(isNaN(vida)!= true && vida <= 100){
    if(vida <= 0){
        alert(`Esta Muertisimo!!!`);
    } 
    else if (vida <= 20){
        alert(`HUYE!!!`);
    }
    
    else if (vida <=50){
        alert(`Modo Defensa`);
    }
    
    else if (vida <=80){
        alert(`Modo moderado`);
    }
    else if (vida <= 100){
        alert(`Modo Ataque`);
    }
}

else{
    alert(`Introduzca un valor ente 0 a 100`);
}

//  b. Resolverlo con conectores lógicos (contemplar que tanto valores menores a cero y mayores a cien no pueden ser validados)

let vida = parseInt(prompt(`Ingrese la vida del personaje`))
f(isNaN(vida)!= true && vida <= 100){
    if(vida <= 0){
    alert(`Esta Muertisimo!!!`);
    } 
    else if (vida > 0 && vida <=20){
    alert(`HUYE!!!`);
    }

    else if (vida >20 && vida <= 50){
        alert(`Modo Defensa`);
    }

    else if (vida > 50 && vida <= 80){
        alert(`Modo moderado`);
    }
    else if (vida > 80 && vida <= 100){
        alert(`Modo Ataque`);
    }
}

else{
    alert(`Introduzca un valor ente 0 a 100`);
}