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
esGuion = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo == 45) return true;
    return false;
}
validarEscritura = function (placa) {
    let primerCaracter;
    let segundoCaracter;
    let terceroCaracter;
    let cuartoCaracter;
    let quintoCaracter;
    let sextoCaracter;
    let septimoCaracter;
    let octavoCaracter;
    let errorres = null;
    if (placa.length == 7 || placa.length == 8) {
        primerCaracter = placa.charAt(0);
        if (!esMayuscula(primerCaracter)) errorres = "El primer Caracter debe ser una letra Mayuscula\n";
        segundoCaracter = placa.charAt(1);
        if (!esMayuscula(segundoCaracter)) errorres +="El segundo Caracter debe ser una letra Mayuscula\n";
        terceroCaracter = placa.charAt(2);
        if (!esMayuscula(terceroCaracter)) errorres += "El tercer Caracter debe ser una letra Mayuscula\n";
        cuartoCaracter = placa.charAt(3);
        if (!esGuion(cuartoCaracter)) errorres +="El cuarto Caracter debe ser un guion\n";
        quintoCaracter = placa.charAt(4);
        if (!esDigito(quintoCaracter)) errorres += "El quinto Caracter debe ser un digito\n";
        sextoCaracter = placa.charAt(5);
        if (!esDigito(sextoCaracter)) errorres += "El sexto Caracter debe ser un digito\n";
        septimoCaracter = placa.charAt(6);
        if (!esDigito(septimoCaracter)) errorres += "El septimo Caracter debe ser un digito\n";
        if (placa.length == 8) {
            octavoCaracter = placa.charAt(7);
             if (!esDigito(octavoCaracter)) errorres +="El octavo Caracter debe ser un digito\n";
        }

    } else {
        errorres= "La longitud de la placa no es correcta\n";
    }
return errorres;
}