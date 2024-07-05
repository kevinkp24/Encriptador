let texto;
let tituloMensaje; 
let parrafoMensaje;
let muñeco;

function encriptar(){
    texto = document.getElementById("texto").value.toLowerCase();
    tituloMensaje = document.getElementById("titulo_mensaje");
    parrafoMensaje = document.getElementById("parrafo_mensaje");
    muñeco = document.getElementById("Muñeco");
   
    let textocifrado = texto
        .replace(/e/img,"enter")
        .replace(/i/img,"imes")
        .replace(/a/img,"ai")
        .replace(/o/img,"ober")
        .replace(/u/img,"ufat");

    if(texto.length != 0){
        document.getElementById("texto").value= textocifrado;
        tituloMensaje.textContent = "Se encripto correctamente";
        parrafoMensaje.textContent = " ";
        muñeco.src = "assets/encriptado.jpg";
        document.getElementById("boton_copiar").style.visibility = "visible";
    }
    else{
        origen();
        alert("Error, debes ingresar algo de texto.");
    }
}

function origen(){
    muñeco.src = "assets/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafoMensaje.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    document.getElementById("boton_copiar").style.visibility = "hidden";
}


function desecriptar(){
    
    texto = document.getElementById("texto").value;
    tituloMensaje = document.getElementById("titulo_mensaje");
    parrafoMensaje = document.getElementById("parrafo_mensaje");
    muñeco = document.getElementById("Muñeco");
    
    let textocifrado = texto
        .replace(/enter/img,"e")
        .replace(/imes/img,"i")
        .replace(/ai/img,"a")
        .replace(/ober/img,"o")
        .replace(/ufat/img,"u");
    
    if(texto.length != 0){
        document.getElementById("texto").value= textocifrado;
        tituloMensaje.textContent = "Se desencripto correctamente";
        parrafoMensaje.textContent = " ";
        muñeco.src = "assets/desencriptado.jpg";
        document.getElementById("boton_copiar").style.visibility = "visible";
    }
    else{
        origen();
        alert("Error, debes ingresar algo de texto.");
    }
}

function copiar(){
    let contenido = document.querySelector("#texto");
    contenido.select();
    document.execCommand("cut");
    origen();
}
