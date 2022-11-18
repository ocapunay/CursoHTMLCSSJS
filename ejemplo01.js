function sumar(){
	var v1 = document.getElementById('txtval1').value;
	var v2 = document.getElementById('txtval2').value;
	suma = parseFloat(v1) + parseFloat(v2);
	document.getElementById('divres').innerHTML = suma;
}