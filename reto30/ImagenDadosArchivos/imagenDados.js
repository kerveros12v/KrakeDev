let puntos = 0;
let lanzamientos = 5;
jugar = function () {
    let resultado;
    resultado = lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
    let opcion=1;
    let edad=18;
    let estatura=1.48;
   if(edad<=14|| estatura<1.5)
    console.log("ingreso");
else console.log("no ingreso");
}

modificarPuntos = function (numero) {
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);
    if (puntos > 20) {
        cambiarTexto("lblResultado", "Ganaste");
        limpiar();
    }else{
         cambiarTexto("lblResultado", "");
    }
}
limpiar = function () {
    cambiarTexto("lblPuntos", "0");
    cambiarTexto("lblLanzamientos", 5);
    puntos=0;
    lanzamientos=5;
    cambiarImagen("imgDado", "");
}
modificarLanzamientos = function () {
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);
     if (lanzamientos == 0) {
        cambiarTexto("lblResultado", "GAME OVER!");
        limpiar();
    }else{
         cambiarTexto("lblResultado", "");
    }
}
mostrarCara = function (numero) {
    if (numero == 1) {
        cambiarImagen("imgDado", "dados1.png");
    }
    else if (numero == 2) {
        cambiarImagen("imgDado", "dados2.png");
    }
    else if (numero == 3) {
        cambiarImagen("imgDado", "dados3.png");
    }
    else if (numero == 4) {
        cambiarImagen("imgDado", "dados4.png");
    }
    else if (numero == 5) {
        cambiarImagen("imgDado", "dados5.png");
    }
    else if (numero == 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
}

lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}