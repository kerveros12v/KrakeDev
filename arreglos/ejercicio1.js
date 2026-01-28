let notas=[];
agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
probarAgregar=function(){
   let notarecuperada=recuperarInt("txtNota");
   agregarNota(notarecuperada);
}
agregarNota=function(nota){
    notas.push(nota);
}
recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}
generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}
mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table>";
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</td></tr>";
    }
     contenidoTabla+="</table>";
     cmpTabla.innerHTML=contenidoTabla;
}