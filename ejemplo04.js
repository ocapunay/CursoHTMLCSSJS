function analizar(){
	var vocal = document.getElementById('txtvocal').value;
	
	switch(vocal){
		case 'a':
			mensaje = "Ingresó la vocal a";
			break;
		case 'e':
			mensaje = "Escribió la vocal e";
			break;
		case 'i':
			mensaje = "Ud. escribió la vocal i";
			break;
		case 'o':
			mensaje = "Escribió la vocal o";
			break;
		case 'u':
			mensaje = "Ud. ingresó la vocal u";
			break;
		default:
			mensaje = "No se ingresó una vocal";
	}

	document.getElementById('divres').innerHTML = mensaje;
}