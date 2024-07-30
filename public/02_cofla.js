//para llamar por id se usa así
const nombre = document.getElementById("nombre"); //el value lo que hace es acceder a lo que está escrito en los inputs.
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("boton-enviar");
const resultado = document.querySelector(".resultado");


//evento del botón
boton.addEventListener("click",(e)=>{
    e.preventDefault();//es para quitarle el defaul de lo que hace ese botón (en este caso al ser un "submit" envía la información del formulario)
    let error =validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        
        resultado.classList.add("red"); //añado una clase para pintar este texto de rojo desde el css
    }else{
        resultado.classList.remove("red");
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green"); //añado una clase para pintar este texto de verde desde el css
    }
})

//función para validar
const validarCampos = ()=>{
    let error = [];
    //para error en el nombre
    if (nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es inválido";
        return error;
    }
    //para error en el correo
    else if (email.value.length < 5 ||
            email.value.length > 50 ||
            email.value.indexOf("@") == -1 ||    //si no se encuentra un @ 
            email.value.indexOf(".") == -1 ){
        error[0] = true;
        error[1] = "El email es inválido";
        return error;
    }
    //para validar el campo de materia
    else if(materia.value.length < 4 || materia.value > 40){
        error[0] = true;
        error[1] = "Materia no existe";
        return error;
    }

    error[0] = false;
    return error;
}












