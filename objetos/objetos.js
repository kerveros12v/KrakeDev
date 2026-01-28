probarAtributos=function(){
    let perosna={
        nombre:"Pedro",
        apellido:"Morales",
        edad:35,
        estaVivo:true
    }
    console.log(perosna.nombre);
    console.log(perosna.edad);
    if(perosna.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
    
}