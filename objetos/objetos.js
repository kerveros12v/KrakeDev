probarAtributos = function () {
    let perosna = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 35,
        estaVivo: true
    }
    console.log(perosna.nombre);
    console.log(perosna.edad);
    if (perosna.estaVivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("si esta vivo");
    }

}
modificarAtributos=function(){
    
}
probarIncrementoSaldo=function(){
    let cta={numero:"23424",saldo:34.0};
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
crearCliente = function () {
    let cliente = {};
    cliente.nombre = "Romeo";
    cliente.apellido = "Salcedo";
    cliente.cedula = "1234556789";

}
incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo = monto;
}
probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
   let mayor= determinarMayor(per1,per2);
   if(mayor!=null)console.log("El mayor es: "+mayor.nombre)
}
determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}