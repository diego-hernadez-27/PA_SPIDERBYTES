
    expresion = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/;
    letras = /[a-zA-Z]/;
    num = /[0-9]/;

function validar(){
    var nombre, appat, apmat, correo, edad, contraseña, r_contraseña, usuario;
    nombre = document.getElementById("nombre").value;
    appat = document.getElementById("appat").value;
    apmat = document.getElementById("apmat").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    contraseña = document.getElementById("contraseña").value;
    r_contraseña = document.getElementById("r_contraseña").value;
    usuario = document.getElementById("usuario").value;
    
    
    if(nombre === "" || apmat === "" || appat === "" || edad === "" || correo === "" ||
     contraseña === "" || r_contraseña === "" || usuario === ""){
        alert("Algun campo esta vacio");
        return false;
    }else if(nombre.length > 20){
        alert("Nombre demasiado largo ");
        return false;
    }else if(appat.length > 20 || apmat.length > 20){
        alert("Appelidos demasiado largos ");
        return false;
    }else if(correo.length > 30){
        alert("Correo demasiado largo ");
        return false;
    }else if(isNaN(edad)){
        alert("La edad ingresada no es un numero");
        return false;    
    }else if(!expresion.test(correo)){
        alert("Corrreo no valido");
        return false;    
    }else if(!letras.test(nombre) || !letras.test(appat) || !letras.test(apmat)){
        alert("Nombre o apellidos contienen letras");
        return false;
    }else if(!num.test(edad)){
        alert("Edad debe contener solo numeros");
        return false;
    }else if (usuario.length > 20){
        alert("Usuario muy largo");
        return false;
    }else if (contraseña.length > 20){
        alert("Contraseña muy larga");
        return false;
    }else if (r_contraseña != contraseña){
        alert("Contrseñas desiguales");
        return false;
    }
    
}


function validar2(){
        
    var usuario, correo, contraseña;
    usuario = document.getElementById("usuario2").value;
    correo = document.getElementById("correo2").value;
    contraseña = document.getElementById("contraseña2").value;
        
    if(correo === "" || contraseña === "" || usuario === ""){
        alert("Algun campo esta vacio");
        return false;
    }else if (usuario.length > 20){
        alert("Usuario muy largo");
        return false;
    }else if (contraseña.length > 20){
        alert("Contraseña muy larga");
        return false;
    }else if(!expresion.test(correo)){
        alert("Corrreo no valido");
        return false;    
    }else if(correo.length > 30){
        alert("Correo demasiado largo ");
        return false;
    }
             
}

function formu(){
    var entrada;
    entrada = document.getElementById("1").value;
    
    if(entrada === ""){
        alert("Algun campo esta vacio");
        return false;
    }else if(entrada.length > 2){
        alert("Valores muy grandes demasiado largo ");
        return false;
    }else if(!num.test(entrada)){
        alert("Estos no son numeros");
        return false;
    }
    
}