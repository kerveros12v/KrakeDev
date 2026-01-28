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
crearProducto = function () {
    producto1 = {
        nombre: "arroz",
        precio: 0.50,
        stock: 10
    }
    producto2= {
        nombre: "azucar",
        precio: 0.35,
        stock: 10
    }
    console.log(producto1.nombre);
    console.log(producto2.stock);
    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }
    else if(producto1.stock<producto2.stock){
         console.log("Producto 2 tiene mayor stock");
    }
    else{
         console.log("Ambos tienen el mismo stock");
    }
}