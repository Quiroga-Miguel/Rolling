// Realice un programa que dada la vida de un personaje, indique una acción: ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// ∙ la poción de vida chica cura 25 y la grande 50.
let vida = parseInt(prompt(`Ingrese la vida del personaje`))

if(vida <= 0){
    alert(`Esta Muertisimo!!!`);
} 
else if (vida > 0 && vida < 50){
    let VidaNueva = vida + 50;
    alert(`Pocion grande Utilizada`);
    alert(`Posee ${VidaNueva} de vida actualmente`);
}

else if (vida >= 50 && vida < 75){
    let VidaNueva = vida + 25;
    alert(`Pocion pequeña Utilizada`);
    alert(`Posee ${VidaNueva} de vida actualmente`);
}

else if (vida >= 75 && vida <= 100){
    alert(`Posee ${vida} de vida `);
}
else{
    alert(`Introduzca un valor correcto`);
}