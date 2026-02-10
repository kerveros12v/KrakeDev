
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoDiv = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerHTML = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}
recuperarTextoDiv = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.textContent;
    return valorIngresado;
}

recuperarIntDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloatDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}
mostrarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = false;
}
longitudTextoValido = function (texto, minimo, maximo) {
    let tamanio = texto.length;
    if (tamanio >= minimo && tamanio <= maximo) return true;
    return false;

}
valorValido = function (numero, minimo, maximo) {

    if (numero >= minimo && numero <= maximo) return true;
    return false;

}
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 64 && codigo <= 90) return true;
    return false;
}
esDigito = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 48 && codigo <= 57) return true;
    return false;
} 