calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let erroresExistentes = false;
    limpiarErrores();
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto")
  
    //2. Recuperar el precio como float
    precioProducto = parseFloat(recuperarTexto("txtPrecio"))
    
    //3. Recuperar cantidad como int
    cantidad = parseInt(recuperarTexto("txtCantidad"))
   
    //4. Recuperar el porcentaje de descuento como int
    //porcentajeDescuento=parseInt(recuperarTexto("txtPorcentajeDescuento"))
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubtotal(precioProducto, cantidad)
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
    /*
    Caso de prueba: 
        - cantidad: 10
        - precioProducto: 5.4  
        Subtotal esperado: 54
    Si el caso de prueba es exitoso, hacer un commit
 */
    if (!esCantidadValida(cantidad)& !esPrecioValido(precioProducto)& !esproductoValido(nombreProducto)) {
        mostrarTexto("lblSubtotal", valorSubtotal)
        //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad)
        //7. Mostrar el resultado en el componente lblDescuento
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10
                - Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
        mostrarTexto("lblDescuento", valorDescuento)
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
        // El IVA debe calcularse sobre el valor del subtotal menos el descuento
        valorIVA = calcularIVA(precioProducto)
        //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10
    
                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6
    
                IVA esperado: 5.832
    
            Si el caso de prueba es exitoso, hacer un commit
        */
        mostrarTexto("lblValorIVA", valorIVA)
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA)
        //11. Mostrar el resultado en el componente lblTotal
        /*
            Caso de prueba: 
                - cantidad: 10
                - precioProducto: 5.4 
                - descuento: 10
    
                    --valorSubtotal: 5.4
                    --descuento: 5.4
                    --IVA: 5.832
    
                    Total esperado: 54.432
    
                    Si el caso de prueba es exitoso, hacer un commit
           */
        mostrarTexto("lblTotal", valorTotal)
        //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */
       // mostrarTexto("lblResumen", " Valor a pagar por " + cantidad + " " + nombreProducto + " con " +
       //     porcentajeDescuento + "% de descuento:" + valorDescuento)
    }
}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTexto("lblSubtotal", "0.0")
    mostrarTexto("lblDescuento", "0.0")
    mostrarTexto("lblValorIVA", "0.0")
    //  mostrarTexto("lblResumen","")
    mostrarTexto("lblTotal", "0.0")
    mostrarTextoEnCaja("txtProducto", "")
    mostrarTextoEnCaja("txtPrecio", "")
    mostrarTextoEnCaja("txtCantidad", "")
    //mostrarTextoEnCaja("txtPorcentajeDescuento","")
}
limpiarErrores = function () {
    mostrarTexto("lblError1", "")
    mostrarTexto("lblError2", "")
    mostrarTexto("lblError3", "")
}
esproductoValido=function(nombreProducto){
      if (nombreProducto.length == 0) {
        mostrarTexto("lblError1", "Ingrese el Producto");
      return false;
    }
    if (nombreProducto.length > 10) {
        mostrarTexto("lblError1", "Maximo de caracteres 10");
       return false;
    }
}
esCantidadValida=function(cantidad){
 if (isNaN(cantidad)) {
        mostrarTexto("lblError2", "Ingrese un Numero");
        return  false;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblError2", "La cantidad valida es de 0 a 100");
       return  false;
    }
}
esPrecioValido=function(precioProducto){
    if (isNaN(precioProducto)) {
        mostrarTexto("lblError3", "Ingrese un Numero");
        return  false;
    }else
    if (precioProducto < 0 || precioProducto > 50 ) {
        mostrarTexto("lblError3", "El precio valido es de 0 a 50");
       return  false;;
    }
}
/* SI TODO FUNCIONA, HACER UN PUSH */