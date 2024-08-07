function validarFomrulario(){
    var nombreUsuario = document.getElementById("Usuario").value;
    var contraseñaUsuario = document.getElementById("Contraseña").value;
    var formulario = document.getElementById("Fomrulario");
    var validador = true;
    if (nombreUsuario.length>1) {
        alert("Nombre correcto");
        document.getElementById("errorNombre").style="visibility:hidden";
    } else {
        validador = false;
        document.getElementById("errorNombre").style="visibility:visible";
    }
    if (validador==true) {
        formulario.submit();
    }
}