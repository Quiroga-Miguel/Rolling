// Un hospital quiere que le hagamos una aplicación inteligente donde el paciente ponga sus datos, su dolencia y se determine que tipo de estudio debe realizarse
// A tener en cuenta: A las mujeres embarazadas no se les puede hacer una tomografía o una placa porque puede tener efectos teratogénicos.


const Usuario = {   
}

Usuario.ApellidoYNombre = prompt(`Ingrese el Apellido y Nombre`);

while(isNaN(Usuario.ApellidoYNombre) != true ){
    alert(`Ingrese un Apellido y nombre correcto!!!`);
    Usuario.ApellidoYNombre = prompt(`Ingrese el Apellido y Nombre`);
    if(isNaN(Usuario.ApellidoYNombre) == true){
        Usuario.ApellidoYNombre = Usuario.ApellidoYNombre;
        break;
    }
}

Usuario.Genero = (prompt(`Femenino Masculino`, `Femenino o Masculino`)).toLowerCase();
while(isNaN(Usuario.Genero) != true ){
    alert(`Ingrese tu genero Femino o Masculino!!!`);
    Usuario.Genero = (prompt(`Femenino o Masculino`, `Femenino o Masculino`)).toLowerCase();
    if(isNaN(Usuario.Genero) == true){
        Usuario.Genero = (Usuario.Genero);
        break;
    }
}
if (Usuario.Genero == `femenino`){
   Embarazada = confirm(`Estas embarazada`);
   Usuario.Embarazada = Embarazada;
}

let Sintomas = prompt(`Ingrese el dolor`);

if(Sintomas ==`dolor abdominal`){

    if (Usuario.Genero == `masculino`){
        alert(`Realizar tomografia`);
    }
    else if (Usuario.Genero == `femenino`){
        if(Usuario.Embarazada == true){
            alert(`No se puede realizar tomografia`);
        }
        else{
            alert(`Realizar tomografia`);
        }
    }
}
else{
    alert (`Busca en google`);
    alert(`No mentira... consulte medico`);
}

