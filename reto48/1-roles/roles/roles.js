let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]
let esNuevo = false;
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarImagen("imgEmpleado", "./imagenes/empleado.jpg");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    mostrarEmpleados();
}
mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarImagen("imgRol", "./imagenes/rol.jpg");
}
mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
    mostrarImagen("imgResumen", "./imagenes/resumen.jpg");
}
mostrarEmpleados = function () {
    let contTabla = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contTabla += "<tr><td>" + elementoEmpleado.cedula + "</td><td>" + elementoEmpleado.nombre + "</td><td>" + elementoEmpleado.apellido + "</td><td>" + elementoEmpleado.sueldo + "</td></tr>"
    }
    contTabla += "</table>";
    document.getElementById("tablaEmpleados").innerHTML = contTabla;
}

ejecutarNuevo=function(){
     habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) break;
        else elementoEmpleado = null;
    }
    return elementoEmpleado;
}
agregarEmpleado = function (empleado) {
    let elementoEmpleado = buscarEmpleado(empleado.cedula);

    if (elementoEmpleado == null) {
        empleados.push(empleado);
        return true;
    }
    return false;
}
guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let validadoCedula = false;
    let validadonombre = false;
    let validadoApellido = false;
    let validadoSueldo = false;
    let resultado;
    if (longitudTextoValido(valorCedula, 10, 10) == true) {
        for (let i = 0; i < valorCedula.length; i++) {
            if (esDigito(valorCedula[i]) == true) validadoCedula = true;
            else validadoCedula = false;
        }
    } else validadoCedula = false;
    if (longitudTextoValido(valorNombre, 3, 20) == true) {
        for (let i = 0; i < valorNombre.length; i++) {
            if (esMayuscula(valorNombre[i]) == true) validadonombre = true;
            else validadonombre = false;
        }
    } else validadonombre = false;
    if (longitudTextoValido(valorApellido, 3, 20) == true) {
        for (let i = 0; i < valorApellido.length; i++) {
            if (esMayuscula(valorApellido[i]) == true) validadoApellido = true;
            else validadoApellido = false;
        }
    }
    else validadoApellido = false;
    if (valorValido(valorSueldo, 400, 5000) == true) validadoSueldo = true;
    else validadoSueldo = false;
    if (validadoCedula == true && validadonombre == true && validadoApellido == true && validadoSueldo == true) {
        if (esNuevo == true) {
            let empleadoNuevo = { cedula: valorCedula, nombre: valorNombre, apellido: valorApellido, sueldo: valorSueldo }
            resultado = agregarEmpleado(empleadoNuevo);
        }else{
            let tempoempleado=buscarEmpleado(valorCedula);
            tempoempleado.nombre=valorNombre;
            tempoempleado.apellido=valorApellido;
            tempoempleado.sueldo=valorSueldo;
            mostrarOpcionEmpleado();
           
        }
        if (resultado == true) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
        } else {
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
        }
    } else {
        alert("LOS DATOS INGRESADOS NO CUMPLEN CON LOS PARAMETROS");
    }

}
ejecutarBusqueda = function () {
    let valorBusqueda = recuperarTexto('txtBusquedaCedula');
    let empleadoEncontrado = buscarEmpleado(valorBusqueda)
    mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
    mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
    mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
    mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
     habilitarComponente("btnGuardar");
}
limpiar=function(){
     mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    esNuevo=false;

}