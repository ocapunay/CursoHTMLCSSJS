function promediar(){
	var n1 = document.getElementById('txtnota1').value;
	var n2 = document.getElementById('txtnota2').value;
	var n3 = document.getElementById('txtnota3').value;
	mensaje = "";
	n1 = parseFloat(n1)*0.2;
	n2 = parseFloat(n2)*0.35;
	n3 = parseFloat(n3)*0.45;
	prom = n1 + n2 + n3;
	document.getElementById('txtprom').value = prom;
	if( prom >= 12){
		mensaje = "APROBADO";
	} else {
		mensaje = "DESAPROBADO";
	}
	document.getElementById('divres').innerHTML = mensaje;
}