function calcular(){
	var n = parseFloat(document.getElementById('txtvalor').value);
	suma = 0;
	for(i=1;i<=n;i++){ // i++ ->  i = i + 1 incrementar en 1 el valor de i
		suma = suma + i;
	}
	document.getElementById('spanres').innerHTML = suma;
}