obtenerAleatorio = function () {
    return parseInt(Math.random() * 100);
}
generarAleatorios = function () {
    let aleatorios = [];
    let numero = recuperarInt("txtnumero");
    if (validarNumero(numero, 5, 20)) {
        for (let i = 0; i < numero; i++) {
            console.log(i);
            aleatorios.push(obtenerAleatorio());
           
        }
         mostrarResultados(aleatorios);
    }
}
validarNumero = function (numero, minimo, maximo) {
    if (numero >= minimo && numero <= maximo) return true;
    return false;
}
mostrarResultados = function (lista) {
    let tabla = "<table>"
    let componente = document.getElementById("divTabla");
    for (let i = 0; i < lista.length; i++) {
        tabla += "<tr><td>" + lista[i] + "</td></tr>";
    }
    tabla += "</table>"
    componente.innerHTML = tabla;
}