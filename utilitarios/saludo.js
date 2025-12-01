saludar=function () {
    let nombre=recuperarTexto("txtNombre")
    let apellido=recuperarTexto("txtApellido")
}
recuperarTexto = function (idcomponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idcomponente);
    valorIngresado = componente.value;
    return valorIngresado;
} 