function encriptar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var textoCifrado = texto.replace(/e/igm,"enter").replace(/o/igm,"ober").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/u/igm,"ufat"); // la i afecta mayúsculas como minusculas // g sirve para toda la linea
	
	document.getElementById("imag").style.display = "none";
	document.getElementById("textoimg").style.display = "none";
	document.getElementById("output").innerHTML = textoCifrado;
	document.getElementById("btnCopiar").style.display = "show";
	document.getElementById("btnCopiar").style.display = "inherit";
	

}


function desencriptar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var textoCifrado = texto.replace(/enter/igm,"e").replace(/ober/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u"); // la i afecta mayúsculas como minusculas // g sirve para toda la linea
	
	document.getElementById("imag").style.display = "none";
	document.getElementById("textoimg").style.display = "none";
	document.getElementById("output").innerHTML = textoCifrado;
	document.getElementById("btnCopiar").style.display = "show";
	document.getElementById("btnCopiar").style.display = "inherit";
	document.getElementById("inputTexto").value="";
}


function copiar(){
	var contenido = document.querySelector("#output");
	contenido.select();
	document.execCommand("copy");
		
}

