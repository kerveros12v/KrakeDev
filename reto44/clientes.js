let clientes = [
    { cedula: "123456", nombre: "Juan", edad: 20 },
    { cedula: "222222", nombre: "Mario", edad: 50 },
    { cedula: "333333", nombre: "Pepe", edad: 22 }];
mostrarClientes = function () {
    let contenidoTabla = "<table><tr><th>Cedula</th><th>Nombre</th><th>Edad</th></tr>";
    let elementoCliente;
    let componente = document.getElementById("tablaClientes");
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla += "<tr><td>" + elementoCliente.cedula + "</td><td>" + elementoCliente.nombre + "</td><td>" + elementoCliente.edad + "</td></tr>"
    }
    contenidoTabla += "</table>"
    componente.innerHTML = contenidoTabla;
}
crearCliente = function () {
    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarTexto("txtEdad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    agregarCliente(nuevoCliente);
}
agregarCliente = function (cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
    } else {
        alert("ya existe el cliente con la cedula " + cliente.cedula);
    }
}
guardarCambios = function () {
    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarTexto("txtEdad");
    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}
ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let respuesta = buscarCliente(valorCedula);
    if (respuesta == null) {
        alert("Cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", respuesta.cedula);
        mostrarTextoEnCaja("txtNombre", respuesta.nombre);
        mostrarTextoEnCaja("txtEdad", respuesta.edad);
    }
}
modificarCliente = function (cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}
buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}