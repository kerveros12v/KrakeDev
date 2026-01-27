ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtcadena");
    recorrerCadena(mensaje);
}
ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtcadena");
    mostrarTexto("lblresultado",invertirCadena(mensaje));
}
recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion)
    }
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion)
    }
}
invertirCadena = function (cadena) {
    let textoInvertido = "";

    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {

        textoInvertido += cadena.charAt(posicion);

    }
    return textoInvertido;
}