obtenerAleatorio = function () {
    return parseInt(Math.random() * 3);
}
generarElemento = function () {
    let numaleatorio = obtenerAleatorio();
    let lstopcion = ["piedra", "papel", "tijera"];
    return lstopcion[numaleatorio];
}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let jugador1, jugador2;
    jugador1 = eleccion(eleccionJugador1);
    jugador2 = eleccion(eleccionJugador2);
    if (jugador1 == jugador2) {
        return 0;
    }
    else if ((jugador2 == 1 && jugador1 == 3) ||
        (jugador2 == 2 && jugador1 == 1) ||
        (jugador2 == 3 && jugador1 == 2)) {
        return 2;
    } else {
        return 1;
    }
}
eleccion = function (opcion) {
    let resultado;
    switch (opcion) {
        case "piedra":
            resultado = 1;
            break;
        case "papel":
            resultado = 2;
            break;
        case "tijera":
            resultado = 3;
            break;

    }
    return resultado;
}
generarRuta = function (nombre) {
    return "./imagenes/" + nombre + ".png";
}
