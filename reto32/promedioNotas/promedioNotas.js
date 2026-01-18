calcularPromedioNotas = function () {
    let nota1, nota2, nota3, promedio,resultadoFormateado;
    nota1 = recuperarFlotante("txtNota1");
    nota2 = recuperarFlotante("txtNota2");
    nota3 = recuperarFlotante("txtNota3");
    promedio = calcularPromedio(nota1, nota2, nota3);
    resultadoFormateado=promedio.toFixed(2);
    cambiarTexto("lblpromedio", resultadoFormateado);
    if(promedio<5 && promedio>0){
        cambiarTexto("lblmensaje", "REPROBADO");
        cambiarImagen("imganimacion","reprobado.jpg");
    }
    else if(promedio>=5 && promedio<=8){
        
        cambiarTexto("lblmensaje", "BUEN TRABAJO");
        cambiarImagen("imganimacion","buentrabajo.gif");
    }else if(promedio>8 && promedio<=10){
        cambiarTexto("lblmensaje", "EXCELENTE");
        cambiarImagen("imganimacion","exelente.gif");

    }
    else{
        cambiarTexto("lblmensaje", "DATOS INCORRECTOS");
         cambiarImagen("imganimacion","fracaso.gif");
    }
}