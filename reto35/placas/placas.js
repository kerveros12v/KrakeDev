validarPlaca = function () {
    limpiar();
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEscritura(placa);
    let provincia;
    if (erroresEstructura == null) {
        mostrarTexto("contentPlaca", "ESTRUCTURA VALIDA");
        provincia = obtenerProvincia(placa);
        if (provincia != null) {
            mostrarTexto("lblProvincia", "PROVINCIA: " + provincia);
            mostrarTexto("lblVehiculo", "TIPO DE VEHICULO: " + obtenerTipoVehiculo(placa));
            mostrarTexto("lblPicoYPlaca", "DIA DE PICO Y PLACA: " + obtenerDiaPicoYPlaca(placa));
        } else {
            mostrarTexto("lblProvincia", "Provincia Incorrecta");
        }
    } else {
        mostrarTexto("lblErrores", "ESTRUCTURA INCORRECTA\n" + erroresEstructura);
    }

}
limpiarTodo = function () {
    mostrarTextoEnCaja("txtPlaca", "");
    limpiar();
}
limpiar = function () {
    mostrarTexto("lblErrores", "");
    mostrarTexto("contentPlaca", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblVehiculo", "");
    mostrarTexto("lblPicoYPlaca", "");

}