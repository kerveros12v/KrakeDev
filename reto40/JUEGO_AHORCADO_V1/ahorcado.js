//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 64 && codigo <= 90) return true;
    return false;
}

longitudTextoValido = function (texto, minimo, maximo) {
    let tamanio = texto.length;
    if (tamanio >= minimo && tamanio <= maximo) return true;
    return false;

}
guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    let sonMayusculas = false;
    if (longitudTextoValido(palabra, 5, 5)) {
        for (let posicion = 0; posicion < palabra.length; posicion++) {
            sonMayusculas = esMayuscula(palabra.charAt(posicion));
            if (sonMayusculas == false) break;
        }
        if (sonMayusculas == true) palabraSecreta = palabra;
        else alert("Debe ingresar una palabra de 5 letras en mayusculas");
    }
}
mostrarLetra = function (letra, posicion) {
    mostrarTexto("div" + posicion, letra);
}
validar = function (letra) {
    let letrasEncontradas = 0;
    let caracter;
    for (let posicion = 0; posicion < palabraSecreta.length; posicion++) {
        caracter = palabraSecreta.charAt(posicion);
        if (caracter === letra) {
            letrasEncontradas++;
            mostrarLetra(letra, posicion);
            coincidencias++;
        }
    }
    if (letrasEncontradas == 0) {
        errores++;
        mostrarAhorcado();
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
    }
}
ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    let sonMayusculas = false;
    sonMayusculas = esMayuscula(letra.charAt(0));

    if (sonMayusculas == false) alert("SOLO SE ACEPTAN MAYUSCULAS");
    else {
        validar(letra);
    }

    intentos++;
    if (coincidencias == 5) mostrarImagen("ahorcadoImagen","ganador.gif");
    if (intentos == 10) mostrarImagen("ahorcadoImagen","gameOver.gif");
}
mostrarAhorcado=function(){
if(errores>0 && errores<10)mostrarImagen("ahorcadoImagen","Ahorcado_0"+errores+".png");
}