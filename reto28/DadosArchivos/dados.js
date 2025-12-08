jugar=function(){
  let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if (aleatorio>3) {
        cambiarTexto("lblresultado","es mayor a 3  ganaste")
    }else{
          cambiarTexto("lblresultado","es menor a 3  estas de malas")
    }
} 
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
}