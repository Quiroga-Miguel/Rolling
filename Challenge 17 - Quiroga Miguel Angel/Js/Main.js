//El Usuario ingresa 3 notas.
//Por consola o alerta le mostramos el promedio y el mensaje si esta
//aprobado o desaproba.

alert(`Promedio de la materia`);
let Materia = prompt(`Nombre de la Materia`);
let Nota1 = parseInt(prompt(`ingrese primera nota`));
let Nota2 = parseInt(prompt(`Ingrese segunda nota`));
let Nota3 = parseInt(prompt(`Ingrese tercera nota`));

if (Nota1 < 0 || Nota1 >10 || isNaN(Nota1)){
    alert(`Primera nota no aceptable, ¡Por favor Ingrese una nota aceptable!`);
}
if (Nota2 < 0 || Nota2 >10 || isNaN(Nota2)){
    alert(`Segunda nota no es aceptable, ¡Por favor Ingrese una nota aceptable!`);
}

if (Nota3 < 0 || Nota3 >10 || isNaN(Nota3) ){
    alert(`Tercera nota no es aceptable, ¡Por favor Ingrese una nota aceptable!`);
}
let NotaSuma = Nota1 + Nota2 + Nota3;
let NotaFinal = NotaSuma / 3;
if(NotaFinal >= 0 && NotaFinal <= 10){
        if ( NotaFinal >= 0 && NotaFinal < 6 ){
            alert(`Desaprobado ${Math.round(NotaFinal)}`);
            document.write(`${Materia}<br>`)
            document.write(`Nota Final es:  ${Math.round(NotaFinal)} Desaprobado `);
        }
        else if(NotaFinal >=6 && NotaFinal <= 10 ){
        alert(`Aprobado ${NotaFinal}`);
        document.write(`${Materia}<br>`)
        document.write(`Nota Final es: ${Math.round(NotaFinal)} Aprobado `);
        }
}




