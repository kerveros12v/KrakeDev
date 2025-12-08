calcularPromedioNotas = function () {
    let nota1, nota2, nota3, promedio,resultadoFormateado;
    nota1 = recuperarFlotante("txtNota1");
    nota2 = recuperarFlotante("txtNota2");
    nota3 = recuperarFlotante("txtNota3");
    promedio = calcularPromedio(nota1, nota2, nota3);
    resultadoFormateado=promedio.toFixed(2);
    cambiarTexto("lblpromedio", resultadoFormateado);
    if(promedio>7 && promedio<=10){
      cambiarImagen("imganimacion","exelente.gif");
    }else {
        cambiarImagen("imganimacion","fracaso.gif");
    }
}