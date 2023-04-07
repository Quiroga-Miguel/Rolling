// Dada las revoluciones por minuto de un auto en un juego de carreras, indique si el conductor debe seguir con el mismo cambio, bajarlo o aumentarlo. Sabiendo que:
// Si las RPM son menores a 1000 debe bajar
// Si las RPM están entre 1000 y 3000 debe mantener
// Si las RPM son más de 3000 debe subir

let RPM = prompt(`Ingrese cuanta revoluciones(RPM) va`);

if(RPM == 0){
    alert(`Encede el Vehiculo picaro`)
}

else if(RPM >= 100 && RPM <= 9000){
    if (RPM < 1000){
        alert(`baja cambio`);
    }
    else if(RPM >= 1000 && RPM <= 3000){
        alert(`Manter marcha`)
    }
    
    else if(RPM > 3000 && RPM <= 6000){
        alert(`Subir de marcha`);
    }
    else if(RPM > 6000 ){
        alert(`¡ SUBI DE MARCHA POR FAVOR!`);
    }
}

else{
    alert(`Ingrese un valor correcto`);
}