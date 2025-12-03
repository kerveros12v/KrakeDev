saludar=function () {
    let nombre=recuperarTexto("txtNombre")
    let apellido=recuperarTexto("txtApellido")
    let edad=recuperarInt("txtEdad")
    let altura=recuperarFloat("txtEstatura")
    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido
    mostrarTexto("lblResultado",mensajeBienvenida)
    mostrarImagen("imgSaludo","imagenes/fracaso.gif")
    mostrarTextoEnCaja("txtNombre","")
}
