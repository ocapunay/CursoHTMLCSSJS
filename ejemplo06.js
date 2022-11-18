function validar(){
	var codigo = document.getElementById('txtcodigo').value;
	while(codigo != "certus"){
		document.getElementById('spanres').innerHTML = "código incorrecto";
		var codigo = prompt("Ingrese el código de verificación");
	}
	document.getElementById('txtcodigo').value = codigo;
	document.getElementById('spanres').innerHTML = "código correcto. Bienvenido!";
}