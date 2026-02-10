let arrayPersonas = [];
ejecutar = function () {
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let personaNueva = {};
    let validoEdad = false;
    let validoNombre = false;
    limpiarError();
    if (esNombreValido(valorNombre)) {
        personaNueva.nombre = valorNombre;
        validoNombre = true;
    } else {
        mostrarTexto("lblError1", "Ingrese un Nombre valido(Solo MAYUSCULAS)")
    }

    if (esCantidadValida(valorEdad)) {
        personaNueva.edad = valorEdad;
        validoEdad = true;
    } else {
        mostrarTexto("lblError2", "Ingrese un numero valido")
    }
    if (validoEdad && validoNombre) {

        let agregadoExitosamente = agregarPersona(personaNueva);
        if (agregadoExitosamente) {
            alert("Registro Exitoso");
        }
        else {
            alert("Registro Fallido");
        }
        mostrarTextoDiv("tablaresultado", dibujarTabla());
        let elMayor = esMayorArray();
        mostrarTextoDiv("lblresultado", elMayor.nombre + " con edad " + elMayor.edad + " es el mayor");
    }
}
agregarPersona = function (persona) {
    let encontrado = false;
    for (let i = 0; i < arrayPersonas.length; i++) {
        if (persona.nombre == arrayPersonas[i].nombre) {
            encontrado = true;
            break;
        } else {
            encontrado = false;
        }
    }
    if (!encontrado) {
        arrayPersonas.push(persona);
        return true;
    }
    return false;
}
dibujarTabla = function () {
    let tabla = "<table><tr><th>Nombre</th><th>Edad</th></tr>";
    for (let i = 0; i < arrayPersonas.length; i++) {
        tabla += "<tr><td>" + arrayPersonas[i].nombre + "</td><td>" + arrayPersonas[i].edad + "</td></tr>";
    }
    tabla += "</table>";
    return tabla;
}
esNombreValido = function (dato) {
    if (dato.length == 0) {
        mostrarTexto("lblError1", "Ingrese el Producto");
        return false;
    }
    if (dato.length > 20) {
        mostrarTexto("lblError1", "Maximo de caracteres 20");
        return false;
    }
    return true;
}
esCantidadValida = function (cantidad) {
    if (isNaN(cantidad)) {
        mostrarTexto("lblError2", "Ingrese un Numero");
        return false;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblError2", "La cantidad valida es de 0 a 100");
        return false;
    }
    return true;
}
esMayorArray = function () {
    let mayor = { nombre: "", edad: 0 };
    let inicio = null;
    let final = null;
    for (let i = 0; i < arrayPersonas.length; i++) {
        inicio = arrayPersonas[i];
        final = arrayPersonas[(arrayPersonas.length - 1) - i];
        if (inicio.edad > mayor.edad) mayor = inicio;
        if (final.edad > mayor.edad) mayor = final;
        if (((arrayPersonas.length % 2 == 0) && (i == (arrayPersonas / 2))) || (((arrayPersonas.length - 1) % 2 == 0) && (i == (((arrayPersonas - 1) / 2) + 1)))) {
            break;
        }
    }
    return mayor;
}
limpiarError = function () {
    mostrarTexto("lblError1", "")
    mostrarTexto("lblError2", "")
}
limpiar = function () {
    limpiarError();
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtEdad", "");

}