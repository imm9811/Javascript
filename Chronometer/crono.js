//document javascript


var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var paseTexto=document.getElementById('Vuelta');
var contadorVueltas=0;
var arrayVueltas=[];
var mejorTiempo;
var peorTiempo;
var vuelta="";
var tiempoPase=0;


function Inicio () {
	control = setInterval(Cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
	document.getElementById("pase").disabled= false;
}

function Parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
	document.getElementById("pase").disabled = true;
}

function Reinicio () {
 	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("pase").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;

	document.getElementById("mostrarTablaVuelta").lastChild.innerHTML="<table border='2' id='mostrarTablaVuelta'><tr><th>Vuelta</th> <th>Tiempo</th><th>Pase</th></tr>";
	contadorVueltas=0;
	tiempoPase=0;
	//arrayVueltas=[]; asi elimino la instac
	while(arrayVueltas.length) {
    arrayVueltas.pop();
	}
	document.getElementById("mejorVuelta").innerHTML="";
	document.getElementById("peorVuelta").innerHTML="";

}


function Pase(){
	++contadorVueltas
	
	arrayVueltas.push(tiempoPase)

	vuelta=horas+" : "+minutos+" : "+segundos+" : "+centesimas;
	var filaAdicional="<tr><td>"+contadorVueltas+"</td><td>"+vuelta+"</td><td>"+tiempoPase+"</td></tr>";
	document.getElementById("mostrarTablaVuelta").lastChild.innerHTML+= filaAdicional;

	if(contadorVueltas==1){
	mejorTiempo=tiempoPase;
	peorTiempo=tiempoPase;
	document.getElementById("mejorVuelta").innerHTML="vuelta nº "+contadorVueltas+" con pase de "+Math.min.apply(null,arrayVueltas);
document.getElementById("peorVuelta").innerHTML="vuelta nº "+contadorVueltas+" con pase de "+Math.max.apply(null,arrayVueltas);
	}
	if(mejorTiempo>tiempoPase){

	document.getElementById("mejorVuelta").innerHTML="vuelta nº "+contadorVueltas+" con pase de "+Math.min.apply(null,arrayVueltas);
	}
	if (peorTiempo<tiempoPase) {
	document.getElementById("peorVuelta").innerHTML="vuelta nº "+contadorVueltas+" con pase de "+Math.max.apply(null,arrayVueltas);
	}
	
	//esta instruccion debe de ir al final del proceso
	tiempoPase=0;
}


function Cronometro () {
	if (centesimas < 99) {
		centesimas++;
		tiempoPase++;
		//para que me escriba las dos cifras por ejmplo 08 tengo qur controlar que en el numero sea menor de 10 y en el moomento en que lo sea ya hara falta simular el 0
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	//cuando centesimas sea 99 se reiniciara a 0 y se procede a la proxima instruccciones que sera los segundos y asi consecutivamente
	if (centesimas == 99) {
		centesimas =  0;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = 0;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = 0;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}
