calcularValorDescuento = function (monto, porcentajeDescuento) {
   return (monto * porcentajeDescuento) / 100
}
calcularIVA = function (monto) {
   return (monto * 12) / 100
}
calcularSubtotal = function (precio, cantidad) {
   return precio * cantidad
}
calcularTotal = function (subtotal, descuento, iva) {
   return subtotal + iva - descuento
}
calcularDescuentoPorVolumen = function (subtotal, cantidad) {
   let descuento = 0;
   if (cantidad >= 3 && cantidad <= 5) {
      descuento = 3;
   }
   if (cantidad >= 6 && cantidad <= 11){
      descuento = 4;
   }
    if (cantidad >= 12){
      descuento = 5;
   }
   return (subtotal/100)*descuento
}
