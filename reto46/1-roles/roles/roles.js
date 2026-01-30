let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarImagen("imgEmpleado","./imagenes/empleado.jpg");
    mostrarEmpleados();
}
mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
     mostrarImagen("imgRol","./imagenes/rol.jpg");
}
mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
    mostrarImagen("imgResumen","./imagenes/resumen.jpg");
}
mostrarEmpleados=function(){
    let contTabla="<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    let elementoEmpleado;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contTabla+="<tr><td>"+elementoEmpleado.cedula+"</td><td>"+elementoEmpleado.nombre+"</td><td>"+elementoEmpleado.apellido+"</td><td>"+elementoEmpleado.sueldo+"</td></tr>"
    }
    contTabla+="</table>";
    document.getElementById("tablaEmpleados").innerHTML=contTabla;
}