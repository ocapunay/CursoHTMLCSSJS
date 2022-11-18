function mayor(){
	var v1 = document.getElementById('txtval1').value;
	var v2 = document.getElementById('txtval2').value;
	mensaje = ".";
	v1 = parseFloat(v1);
	v2 = parseFloat(v2);
	/*
	if(v1 > v2){
		mensaje = v1 + " es mayor que " + v2;
	}
	if(v2 > v1){
		mensaje = v2 + " es mayor que " + v1;
	}*/

	/*
	if(v1 > v2){
		mensaje = v1 + " es mayor que " + v2;
	} else {
		mensaje = v1 + " no es mayor que " + v2;
	}*/

	if(v1 > v2){
		mensaje = v1 + " es mayor que " + v2;
	} else if (v2 > v1) {
		mensaje = v2 + " es mayor que " + v1;
	} else {
		mensaje = v1 + " es igual a " + v2;
	}
	document.getElementById('txtres').value = mensaje;
}