calcularTasaIntereces = function (ingresoAnual) {
    let tasa = 0;
    if (ingresoAnual < 300000) {
        tasa = 16;
    }
    else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasa = 15;
    }
    else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasa = 14;
    }
    else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasa = 13;
    }
    else if (ingresoAnual <= 2000000) {
        tasa = 12;
    }
    return tasa;
}
calcularCapacidadPago = function (edad, ingresos, egresos) {
    let cuota = 0;
    let sobra = ingresos - egresos;
    if (edad > 50) {
        cuota = (sobra * 30) / 100;
    } else {
        cuota = (sobra * 40) / 100;
    }
    return cuota;
}
calcularDescuento = function (precio, cantidad) {
    let descuento;
    if (cantidad < 3) {
        descuento = 0;
    }
    else if (cantidad >= 3 && cantidad <= 5) {
        descuento = 2;
    }
    else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 3;
    }
    else if (cantidad >= 12) {
        descuento = 4;
    }
    return (precio - ((precio * descuento) / 100)) * cantidad;
}
determinarColesterolLDL = function (nivelColesterol) {
    let colesterol;
    if (nivelColesterol >= 100 && cantidad <= 110) {
        colesterol = "Nivel de Colesterol Bueno"
    }
    else {
        colesterol = "Nivel de Colesterol Malo"
    }
    return colesterol;
}
validarClave = function (clave) {
    let numcaracter = clave.length;
    if (numcaracter >= 8 && numcaracter <= 16) return true;
    return false;
}
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 64 && codigo <= 90) return true;
    return false;
}
esMinuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if ((codigo >= 97 && codigo <= 122)||codigo==130 ||(codigo >= 160 && codigo <= 163) ) return true;
    return false;
}
esDigito= function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 48 && codigo <= 57) return true;
    return false;
}
darPermiso= function (notaMatematica,notaFisica,notaGeometria) {
    
    if (notaMatematica > 90|| notaFisica > 90||notaGeometria > 90 ) return true;
    return false;
}
otorgarPermiso=function (notaMatematica,notaFisica,notaGeometria) {
    
    if (notaMatematica > 90|| notaFisica > 90||notaGeometria > 80 ) return true;
    return false;
}
dejarSalir=function (notaMatematica,notaFisica,notaGeometria) {
    
    if ((notaMatematica > 90|| notaFisica > 90||notaGeometria > 90 )&&(notaMatematica < notaFisica)) {
        return true;
    }
    return false;
}