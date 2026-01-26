let puntosUsuario = 0, puntosComputador = 0;
jugar = function (seleccionado) {
   if(puntosComputador<5 && puntosUsuario<5){
    let elemento = generarElemento();
    mostrarImagen("seleccionPC", generarRuta(elemento));
    let ganandor = determinarGanador(elemento, seleccionado);
    switch (ganandor) {
        case 0:
            mostrarTexto("lblganador", "EMPATE");
            break;
        case 1: {
            mostrarTexto("lblganador", "GANA EL COMPUTADOR");
            puntosComputador += 1;
        }

            break;
        case 2: {
            mostrarTexto("lblganador", "GANASTE");
            puntosUsuario += 1;
        }
            break;
        default:
            break;
    }
    mostrarTexto("lblusuario", puntosUsuario);
    mostrarTexto("lblcomputador", puntosComputador);
    if (puntosComputador == 5) mostrarTexto("lblganador", "EL COMPUTADOR TE HA VENCIDO");
    if (puntosUsuario == 5) mostrarTexto("lblganador", "HAS GANADO EL JUEGO");
    }
}
limpiar = function () {
    mostrarTexto("lblusuario", "0");
    mostrarTexto("lblcomputador", "0");
    mostrarTexto("lblganador", "");
     mostrarImagen("seleccionPC", "");
    puntosUsuario = 0;
    puntosComputador = 0;
}