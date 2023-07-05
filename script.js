const textoIngresado = document.querySelector(".espacioTexto")
const textoEncriptado = document.querySelector(".espacioResultado")

function encriptarTexto(){
    const texto = document.querySelector(".espacioTexto").value
    if (texto.trim() === "") {
        alert("Tienes que ingresar un mensaje para encriptar.");
        return;
      }
    const textoEncriptado = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat")
    document.querySelector(".espacioResultado").value = textoEncriptado
    document.querySelector(".espacioTexto").value = ""
}

function desencriptarTexto(){
    const texto = document.querySelector(".espacioTexto").value
    if (texto.trim() === "") {
        alert("Tienes que ingresar un mensaje para desencriptar.");
        return;
      }
    const textoEncriptado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u")
    document.querySelector(".espacioResultado").value = textoEncriptado
    document.querySelector(".espacioTexto").value = ""
}

function btnEncriptar(){
    const textoEncriptado = encriptarTexto()
    textoEncriptado.value = textoEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptarTexto()
    textoEncriptado.value = textoEncriptado     
}

function copiarTexto() {
    const resultado = document.querySelector(".espacioResultado")
    const campoTemporal = document.createElement("textarea")
    campoTemporal.value = resultado.value
    document.body.appendChild(campoTemporal)
    campoTemporal.select()
    campoTemporal.setSelectionRange(0, 99999)
    document.execCommand("copy")
    document.body.removeChild(campoTemporal);
  
    alert("Texto copiado correctamente al portapapeles :)")
  }
  