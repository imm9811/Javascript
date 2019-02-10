//document javascript

//variables y cosntantes globales
var contador=0;
var contadorIntentos=0;
const PUNTOSTOTAL=4;
var corregido="<img src='bien.png' width='50' heigth='50'>";


//cada vez que se le da al boton enviar se cambian su visibilidad segun vaya avanzando
function pasar(){

	try{

	//ocultar
	document.getElementsByClassName("hidden")[contador].className = "show";
	
	//mostrar
	document.getElementsByClassName("show")[0].className = "hidden";

	contador++;

	}catch(e){
	
		formulario();

	}

}//fin pasar

var puntosConseguidos=0;
function formulario(){


	//para la pregunta 1
		//si una de las dos opciones esta bien la marca
		if(document.getElementsByName('p1')[0].checked==true){ 
			puntosConseguidos=puntosConseguidos+0.5;
			console.log("entra"+puntosConseguidos);
		}
		if (document.getElementsByName('p1')[2].checked==true){
			puntosConseguidos=puntosConseguidos+0.5;
				console.log("entra"+puntosConseguidos);
		}
		if (document.getElementsByName('p1')[0].checked==true) {
			document.getElementsByName('p1')[0].disabled=true;
		}
		if (document.getElementsByName('p1')[2].checked==true) {
			document.getElementsByName('p1')[2].disabled=true;
		}
		//si ambas opciones estan ya marcadas, marca todas
		if (document.getElementsByName('p1')[0].disabled==true && document.getElementsByName('p1')[2].disabled==true) {
			for(i=0;i<4;i++){
				document.getElementsByName('p1')[i].disabled=true;
			}
			document.getElementById("foto1").innerHTML=corregido;
		}	

	//para la pregunta 2
	for(i=0;i<4;i++){
		
		if(document.getElementsByName('p2')[i].checked==true){
			puntosConseguidos=puntosConseguidos+parseFloat(document.getElementsByName('p2')[i].value);
			for(i=0;i<4;i++){
				document.getElementsByName('p2')[i].disabled=true;
			}
			document.getElementById("foto2").innerHTML=corregido;
		}
	}

	//para la pregunta 3
	var p3 = document.getElementById('p3');
	if(p3.options[p3.selectedIndex].value == "1"){
	  puntosConseguidos=puntosConseguidos+1;
	  p3.disabled=true;
	  document.getElementById("foto3").innerHTML=corregido;
	}

	//para la pregunta 4
	if((/Structured Query Language/i).test(document.getElementById('p4').value)){
		puntosConseguidos=puntosConseguidos+1;
		document.getElementById('p4').disabled=true;
		document.getElementById("foto4").innerHTML=corregido;
	}

	comprobar(puntosConseguidos);
}

	
function comprobar(puntosConseguidos){
var boton=document.getElementById("boton");

	//si tiene algun fallo se reinician los botones y reestablezco val
	if(puntosConseguidos<PUNTOSTOTAL){
		contadorIntentos++;

		var texto="Has acertado un total de "+puntosConseguidos+"/4" ;

		var texto1=document.createTextNode(texto);
		var div=document.createElement('div');
		div.setAttribute("id","hijo");
		div.appendChild(texto1);
		document.getElementById("otro").appendChild(div);

		
		boton.setAttribute("value","Reintentar");
		boton.setAttribute("onclick","reintentar()");
		
		document.getElementsByClassName("show")[0].className = "hidden";
		document.getElementsByTagName("form")[0].reset();
		contador=0;
	}	
	//se bloquean los botones, y salta el aviso de ganador
	if(puntosConseguidos==PUNTOSTOTAL){
		document.getElementsByClassName("show")[0].className = "hidden";
		boton.setAttribute("value","Fin");
		boton.disabled=true;

		if(contadorIntentos==0){
			document.getElementById("otro").innerHTML=("<h2>!Enhorabuena ganaste sin ningun fallo¡</h2> <br>");
		}
		else
		{
			document.getElementById("otro").innerHTML=("<h2>has pasado tras: "+contadorIntentos+" intentos</h2> <br>");
		}
		document.getElementById("otro").innerHTML+="<img src='fin.gif' width='100' heigth='100' >";
	}
}

function reintentar(){
	
	document.getElementsByClassName("hidden")[0].className = "show";
	document.getElementById('otro').removeChild(otro.childNodes[0]);
	var boton=document.getElementById("boton");
	boton.setAttribute("value","Enviar");
	boton.setAttribute("onclick","pasar()");


}
