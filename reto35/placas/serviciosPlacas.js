obtenerProvincia = function (placa) {
    let primerCaracter, provincia = null;
    primerCaracter = placa.charAt(0);

    switch (primerCaracter) {
        case "A":
            provincia = "Azuay";
            break;
        case "B":
            provincia = "Bolívar";
            break;
        case "U":
            provincia = "Cañar";

            break;
        case "C":
            provincia = "Carchi";

            break;
        case "X":
            provincia = "Cotopaxi";

            break;
        case "H":
            provincia = "Chimborazo";

            break;
        case "O":
            provincia = "El Oro";

            break;
        case "E":
            provincia = "Esmeraldas";

            break;
        case "W":
            provincia = "Galápagos";

            break;
        case "G":
            provincia = "Guayas";

            break;
        case "I":
            provincia = "Imbabura";

            break;
        case "L":
            provincia = "Loja";

            break;
        case "R":
            provincia = "Los Ríos";

            break;
        case "M":
            provincia = "Manabí";

            break;
        case "V":
            provincia = "Morona Santiago";

            break;
        case "N":
            provincia = "Napo";

            break;
        case "S":
            provincia = "Pastaza";
            break;
        case "P":
            provincia = "Pichincha";

            break;
        case "K":
            provincia = "Sucumbíos";

            break;
        case "Q":
            provincia = "Orellana";

            break;
        case "T":
            provincia = "Tungurahua";

            break;
        case "Z":
            provincia = "Zamora Chinchipe";

            break;
        case "Y":
            provincia = "Santa Elena";

            break;
        case "J":
            provincia = "Santo Domingo de los Tsáchilas";

            break;
        default:
            provincia = null;
            break;
    }
    return provincia;
}
obtenerTipoVehiculo = function (placa) {
    let segundoCaracter = placa.charAt(1);
    let lstTipoVehiculos = ["Vehiculo comercial(Taxi ,Autobuse)", "Vehiculo Gubernamental", "Vehiculo de uso oficial", "Vehiculo del Gobierno Provincial", "Vehiculo Municipal", "Vehiculo Particular"]
    let tipoVehiculo;
    switch (segundoCaracter) {
        case "A":
            tipoVehiculo = lstTipoVehiculos[0];
            break;
        case "B":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "U":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "C":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "X":
            tipoVehiculo = lstTipoVehiculos[2];
            break;
        case "H":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "O":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "E":
            tipoVehiculo = lstTipoVehiculos[1];
            break;
        case "W":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "G":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "I":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "L":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "R":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "M":
            tipoVehiculo = lstTipoVehiculos[4];
            break;
        case "V":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "N":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "S":
            tipoVehiculo = lstTipoVehiculos[3];
            break;
        case "P":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "K":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "Q":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "T":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "Z":
            tipoVehiculo = lstTipoVehiculos[0];
            break;
        case "Y":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        case "J":
            tipoVehiculo = lstTipoVehiculos[5];
            break;
        default:
            tipoVehiculo = null;
            break;
    }
    return tipoVehiculo;
}
obtenerDiaPicoYPlaca = function (placa) {
    let caracter = placa.charAt(placa.length - 1);
    let dia;
    switch (parseInt(caracter)) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Lunes";
            break;
        case 3 :
            dia = "Martes";
            break;
        case 4:
            dia = "Martes";
            break;
        case 5 :
            dia = "Miercoles";
            break;
        case 6:
            dia = "Miercoles";
            break;
        case 7 :
            dia = "Jueves";
            break;
        case 8:
            dia = "Jueves";
            break;
        case 9 :
            dia = "Viernes";
            break;
        case 0:
            dia = "Viernes";
            break;
        default:
            dia = "Sabado ,Domingo y Feriados";
            break;
    }
    return dia;
}