estudiantes = [];
cursos = [];
asistencias = [];
let cursoActual = null;
//Funciones de Validacion

esCorreoValido = function (dato) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(dato)) {
        mostrarTexto("lblError2", "El correo no parece válido");

        return false;
    }

    return true;
}
esNombreValido = function (dato, iderror) {
    if (dato.length == 0) {
        mostrarTexto(iderror, "El nombre es obligatorio");
        return false;
    }
    if (dato.length < 3) {
        mostrarTexto(iderror, "Ingrese un minimo de 3 caracteres");
        return false;
    } else {
        if (!esMayuscula(dato.charAt(0))) {
            mostrarTexto(iderror, "El Nombre debe empezar con mayusculas");
            return false;
        } else {
            let caracter;
            let validado = false;
            for (let i = 0; i < dato.length; i++) {
                caracter = dato.charAt(i);
                if (esMayuscula(caracter) || esMinuscula(caracter) || esCaracterEspecial(caracter, " ")) {
                    validado = true;
                } else {
                    mostrarTexto(iderror, "Se permite solo letras y especios");
                    validado = false;
                    break;
                }

            }
            return validado;
        }
    }

}

esCedulaValida = function (cedula, iderror) {
    let esNumero = false;
    if (cedula.length > 0) {
        for (let i = 0; i < cedula.length; i++) {
            let caracter = cedula.charAt(i);
            if (esDigito(caracter)) esNumero = true;
            else {
                mostrarTexto(iderror, "Ingrese una cedula valida");
                esNumero = false;
                break;
            }
        }
    } else {
        mostrarTexto(iderror, "El campo esta vacio Ingrese una cedula valida");
    }
    return esNumero;
}
//Funciones de Control de Vista atraves del menu

cargar = function () {
    ocultarComponente("notificacion");
    mostrarComponente("estudiante");
    ocultarComponente("listaEstudiantes");
    ocultarComponente("cursos");
    ocultarComponente("asistencia");
    ocultarComponente("resumen");
    limpiarErrores();
}
mostrarListaEstudiantes = function () {
    ocultarComponente("notificacion");
    ocultarComponente("estudiante");
    mostrarComponente("listaEstudiantes");
    ocultarComponente("cursos");
    ocultarComponente("asistencia");
    ocultarComponente("resumen");
    mostrarTablaEstudiante();
    limpiarErrores();
}
mostrarCursos = function () {
    ocultarComponente("notificacion");
    ocultarComponente("estudiante");
    ocultarComponente("listaEstudiantes");
    mostrarComponente("cursos");
    ocultarComponente("asistencia");
    ocultarComponente("resumen");
    limpiarErrores();
}
mostrarAsistencia = function () {
    ocultarComponente("notificacion");
    ocultarComponente("estudiante");
    ocultarComponente("listaEstudiantes");
    ocultarComponente("cursos");
    mostrarComponente("asistencia");
    ocultarComponente("resumen");

    limpiarErrores();
    mostrarTablaAsistencia();
}
mostrarResumen = function () {
    ocultarComponente("notificacion");
    ocultarComponente("estudiante");
    ocultarComponente("listaEstudiantes");
    ocultarComponente("cursos");
    ocultarComponente("asistencia");
    mostrarComponente("resumen");

    limpiarErrores();
    mostrarTablaResumen();

}
//Funciones de Limpieza
limpiar = function () {
    mostrarTextoEnCaja("txtCedulaEliminar", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtCorreo", "");
    mostrarTextoEnCaja("txtCedula", "");

    mostrarTextoEnCaja("txtCurso", "");
    mostrarTextoEnCaja("txtDocente", "");

    mostrarTextoEnCaja("txtCedulaAsistencia", "");
}
limpiarErrores = function () {
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
    mostrarTexto("lblError4", "");
    mostrarTexto("lblError5", "");
    mostrarTexto("lblError6", "");
    mostrarTexto("lblError7", "");
    ocultarComponente("notificacion");
    ocultarComponente("notificacionErrorRegistro");
    ocultarComponente("notificacionError");
    ocultarComponente("notificacionTabla");

}
//seccion Estudiantes
ejecutarGuardarEstudiante = function () {
    limpiarErrores();
    let campoNombre = recuperarTexto("txtNombre");
    let campoCorreo = recuperarTexto("txtCorreo");
    let campoCedula = recuperarTexto("txtCedula");
    let cedulaValida = esCedulaValida(campoCedula, "lblError3");
    let nombreValido = esNombreValido(campoNombre, "lblError1");
    let correoValido = esCorreoValido(campoCorreo);
    if (cedulaValida && correoValido && nombreValido) {
        estudianteRegistrado = buscarEstudiante(campoCedula);
        if (estudianteRegistrado != null) {
            estudianteRegistrado.nombre = campoNombre;
            estudianteRegistrado.correo = campoCorreo;
            mostrarTextoDiv("notificacion", "<h1>Registro Actualizado</h1>");
            mostrarComponente("notificacion");
        } else {
            estudiante = { nombre: campoNombre, correo: campoCorreo, cedula: campoCedula };
            guardarEstudiante(estudiante);
            mostrarTextoDiv("notificacion", "<h1>Registro Exitoso</h1>");
            mostrarComponente("notificacion");
        }

        limpiar();
    }

    mostrarTablaEstudiante();
}
guardarEstudiante = function (estudiante) {
    estudiantes.push(estudiante);

}
buscarEstudiante = function (cedula) {
    let estudianteEncontrado = null;
    for (let i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i].cedula == cedula) {
            estudianteEncontrado = estudiantes[i];
            break;
        }
    }
    return estudianteEncontrado;
}
mostrarTablaEstudiante = function (cedula) {
    let tabla = "<table ><tr><th>Cedula</th><th>Nombres y Apellidos</th><th>Correo</th></tr>";
    for (let i = 0; i < estudiantes.length; i++) {
        tabla += "<tr><td>" + estudiantes[i].cedula + "</td><td>" + estudiantes[i].nombre + "</td><td>" + estudiantes[i].correo + "</td></tr>";
    }
    tabla += "</table>";
    mostrarTextoDiv("infoTabla", tabla);
}

ejecutarEliminarEstudiante = function () {
    limpiarErrores();

    let campoCedulaError = recuperarTexto("txtCedulaEliminar");
    let cedulaErrorValida = esCedulaValida(campoCedulaError, "lblError4");

    if (cedulaErrorValida) {
        estudianteRegistrado = buscarEstudiante(campoCedulaError);
        if (estudianteRegistrado != null) {
            eliminarEstudiante(campoCedulaError);
            mostrarTextoDiv("notificacionTabla", "<h1>Estudiante Eliminado Correctamente</h1>");
            mostrarComponente("notificacionTabla");
        } else {
            mostrarTextoDiv("notificacionError", "<h2>No se encotro un estudiante con ese ID</h2>");
            mostrarComponente("notificacionError");

        }


    }
    limpiar();
    mostrarTablaEstudiante();
}
eliminarEstudiante = function (cedula) {
    let estudianteEncontrado = false;
    for (let i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i].cedula == cedula) {
            estudiantes.splice(i, 1);
            estudianteEncontrado = true;
            break;
        }
    }

    return estudianteEncontrado;
}
//Seccion Cursos
ejecutarGuardarCurso = function () {
    limpiarErrores();
    let campoCurso = recuperarTexto("txtCurso");
    let campoDocente = recuperarTexto("txtDocente");

    let cursoValido = esNombreValido(campoCurso, "lblError5");
    let docenteValido = esNombreValido(campoDocente, "lblError6");
    if (cursoValido && docenteValido) {
        cursoRegistrado = buscarCurso(campoCurso, campoDocente);
        if (cursoRegistrado != null) {
            cursoRegistrado.curso = campoCurso;
            cursoRegistrado.docente = campoDocente;
            mostrarTextoDiv("notificacion", "<h1>Registro Actualizado</h1>");
            mostrarComponente("notificacion");
        } else {
            let auxcurso = { curso: campoCurso, docente: campoDocente };
            guardarCurso(auxcurso);
            mostrarTextoDiv("notificacion", "<h1>Registro Exitoso</h1>");
            mostrarComponente("notificacion");
        }
        limpiar();
        mostrarAsistencia();
        mostrarTablaAsistencia();
    }
}
guardarCurso = function (dato) {
    cursos.push(dato);
    cursoActual = cursos[cursos.length - 1];

}
buscarCurso = function (curso, docente) {
    let cursoEncontrado = null;
    for (let i = 0; i < cursos.length; i++) {

        if (cursos[i].curso == curso && cursos[i].docente == docente) {
            cursoEncontrado = cursos[i];
            break;
        }
    }
    return cursoEncontrado;
}
//Seccion de Asistencia
ejecutarRegistroAsistencia = function () {
    let campoAsistencia = document.querySelector('input[name="rbtAsistencia"]:checked');
    let campoCedulaAsistencia = recuperarTexto("txtCedulaAsistencia");
    let estudianteExiste = buscarEstudiante(campoCedulaAsistencia);
    if (estudianteExiste != null) {
        let asistenciaEncontrada = buscarAsistencia(campoCedulaAsistencia, cursoActual.curso, cursoActual.docente);
        if (asistenciaEncontrada == null) {
            asistencia = { cedula: campoCedulaAsistencia, estado: campoAsistencia.value, curso: cursoActual.curso, docente: cursoActual.docente };
            guardarAsistencia(asistencia);
        }
        else {
            asistenciaEncontrada.estado = campoAsistencia;

        }
    } else {
        mostrarTexto("lblError7", "No Existe el estudiante");
    }
    mostrarTablaAsistencia();
}
guardarAsistencia = function (asistencia) {
    asistencias.push(asistencia);
    console.log(asistencias);
}
buscarAsistencia = function (cedula, curso, docente) {
    let asistenciaEncontrado = null;
    for (let i = 0; i < asistencias.length; i++) {

        if (asistencias[i].cedula == cedula && asistencias[i].curso == curso && asistencias[i].docente == docente) {
            asistenciaEncontrado = asistencias[i];
            break;
        }
    }
    return asistenciaEncontrado;
}
mostrarTablaAsistencia = function () {

    mostrarTexto("lblasistencia", "Asistencia del curso " + cursoActual.curso + ", pasada por " + cursoActual.docente)
    let tabla = "<table ><tr><th>Cedula</th><th>Nombres y Apellidos</th><th>Asistencia</th></tr>";
    for (let i = 0; i < asistencias.length; i++) {
        let auxEst = buscarEstudiante(asistencias[i].cedula);
        if (asistencias[i].curso == cursoActual.curso && asistencias[i].docente == cursoActual.docente)
            tabla += "<tr><td>" + asistencias[i].cedula + "</td><td>" + auxEst.nombre + "</td><td>" + asistencias[i].estado + "</td></tr>";
    }
    tabla += "</table>";
    mostrarTextoDiv("infoTablaAsistencia", tabla);
}
//Seccion Resumen del dia
mostrarTablaResumen = function () {
    console.log(cursos);
    let tabla = "<table >    <tr><th>Nombre del Curso</th><th>Nombre del Docente</th><th>Registrados</th><th>Presentes</th><th>Ausentes</th></tr>";
    let registrados = 0;
    let presentes = 0;
    let ausentes = 0;
    for (let i = 0; i < cursos.length; i++) {
        registrados = 0;
        presentes = 0;
        ausentes = 0;
        for (let j = 0; j < asistencias.length; j++) {
            if (cursos[i].curso == asistencias[j].curso && cursos[i].docente == asistencias[j].docente) {
                registrados++;
                if (asistencias[i].estado == "Presente") presentes++;
                if (asistencias[i].estado == "Ausente") ausentes++;
            }
        }
        tabla += "<tr><td>" + cursos[i].curso + "</td><td>" + cursos[i].docente + "</td><td>" + registrados + "</td><td>" + presentes + "</td><td>" + ausentes + "</td></tr>";
    }

    tabla += "</table>";
    mostrarTextoDiv("infoTablaResumen", tabla);
    mostrarTexto("lbltotalestudiantes",estudiantes.length);
}