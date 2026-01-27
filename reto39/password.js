validarPassword = function (password) {
    let tamanio = password.length;
    let contadorMayusculas = 0;
    let contadorDigitos = 0;
    let contadorCaracterEspecial = 0;
    let mensajeError = "";
    if (tamanio >= 8 && tamanio <= 16) {
        for (let i = 0; i < tamanio; i++) {
            if (esMayuscula(password.charAt(i))) contadorMayusculas++;
            if (esDigito(password.charAt(i))) contadorDigitos++;
            if (esCaracterEspecial(password.charAt(i))) contadorCaracterEspecial++;
        }
        if (contadorMayusculas == 0) mensajeError = "No contiene ninguna Mayuscula\n";
        if (contadorDigitos == 0) mensajeError += "No contiene ninguna Digito Numerico\n";
        if (contadorCaracterEspecial == 0) mensajeError += "No contiene ninguna Caracter especial permitido";
    }else mensajeError="No tiele la longitud permitida minimo 8 caracteres y maximo 16 caracteres"
    return mensajeError;
}
ejecutarValidacion = function () {
    let texto = recuperarTexto("txtpassword");
    let resultado = validarPassword(texto);
    if (resultado.length == 0) mostrarTexto("lblresultado", "Password Correcto");
    else mostrarTexto("lblresultado", resultado);
}