const mensaje = document.querySelector("#texto");
const encriptado = document.querySelector("#encriptacion");

function fEncriptar (){
    var primerPaso = mensaje.value;
    primerPaso = primerPaso.toLowerCase();

    if(primerPaso == ""){
        alert("Escribe algo antes de encriptar")
        document.getElementById('historial').style.display = 'block';
        document.getElementById('traduccion').style.display = 'none';
    }
    else if ((primerPaso.includes("à")) || (primerPaso.includes("è")) || (primerPaso.includes("ì")) || (primerPaso.includes("ò")) || (primerPaso.includes("ù")) ){
        alert ("no se permiten acentos")
        mensaje.value = "";
    }
    else{
        document.getElementById('historial').style.display = 'none';
        document.getElementById('traduccion').style.display = 'block';
        mensaje.value = "";
        encriptado.value = encriptar(primerPaso)
    }
    
}
function fDesencriptar (){
    var primerPaso = mensaje.value;
if(mensaje.value == ""){
    alert("Escribe algo antes de encriptar");
    document.getElementById('historial').style.display = 'block';
    document.getElementById('traduccion').style.display = 'none';
}
else{
    encriptado.value=Desencriptar(primerPaso);
    mensaje.value = ("");
    document.getElementById('historial').style.display = 'none';
    document.getElementById('traduccion').style.display = 'block';
    
}
  
}

function encriptar(mensaje){
  var mensajeAct = mensaje.replace(/e/g,'enter');
  mensajeAct = mensajeAct.replace(/i/g,'imes');
  mensajeAct = mensajeAct.replace(/a/g,'ai');
  mensajeAct = mensajeAct.replace(/o/g,'ober');
  mensajeAct = mensajeAct.replace(/u/g,'ufat');

  return mensajeAct;
}

function Desencriptar(mensaje){
    var mensajeAct = mensaje;
    mensajeAct = mensaje.replace(/enter/g,'e');
    mensajeAct = mensajeAct.replace(/imes/g,'i');
    mensajeAct = mensajeAct.replace(/ai/g,'a');
    mensajeAct = mensajeAct.replace(/ober/g,'o');
    mensajeAct = mensajeAct.replace(/ufat/g,'u');
    return mensajeAct;
}

function fCopiar(){
var contenido = document.querySelector("#encriptacion");
contenido.select();
document.execCommand("copy");
}