recuperarTexto = function (idcomponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idcomponente);
    valorIngresado = componente.value;
    return valorIngresado;
} 
recuperarInt = function (idcomponente) {
    let valorCaja = recuperarTexto(idcomponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat = function (idcomponente) {
    let valorCaja = recuperarTexto(idcomponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat;
}
mostrarTexto = function (idcomponente, mensaje) {
    let componente;
    componente = document.getElementById(idcomponente);
    componente.innerText = mensaje;
}
mostrarImagen = function (idcomponente, rutaimagen) {
    let componente;
    componente = document.getElementById(idcomponente);
    componente.src = rutaimagen;
} 
mostrarTextoEnCaja = function (idcomponente, mensaje) {
    let componente;
    componente = document.getElementById(idcomponente);
    componente.value = mensaje;
}