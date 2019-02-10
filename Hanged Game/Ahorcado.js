//document javascript



var letra;
var espacios;
var vidas=5;
var errores = 0;
var total="";
var arrayErrores=[];
var may=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

//var palabras=["linkgl","revolucion","indetectables","cactus"];

window.onload=function(){

	var n=Math.floor(Math.random()*diccionario.length);
	var espacios=diccionario[n].length;

	//pongo todo en Mayuscula para que se vea mejor
	diccionario[n]=diccionario[n].toUpperCase();
	//uso un modo escrito par evitar que me salga el error por no declarar la variable, ya que de tener que declararla
	//lo tendria que hacer en modo global y afectaria mas variables que hay en el codigo, asi ademas la hago más segura(aunque no haga falta hacerla mas segura realmente)
	'use strict';
	
	palabraSeparada=diccionario[n].split("");
	alert(palabraSeparada);

	for (var i = 0; i < espacios; i++) {
		document.getElementById("guiones").innerHTML+="<span id="+i+">_</span>";
	}
	document.getElementById("numLetras").innerHTML=('La palabra tiene ' + espacios + ' letras <br />');
	
	
	document.getElementById("abecedario").innerHTML=may;

}

function validar(e) {
	var arrayRepe=[];
	var bandera =false;
	var contadorRepe=0;
	document.getElementById("textoLetra").value="";

	t = (document.all) ? e.keyCode : e.which;

	letra=String.fromCharCode(t);
	if(letra>='a'|| letra<='z'){
		letra=letra.toUpperCase();
	}
	if ((/[0-9]|[$&#*]/g).test(letra)) {
		document.getElementById("letraErronea").innerHTML=("no puedes introducir este caracter");
	}

	console.log(t);
	for (var i = 0; i < palabraSeparada.length; i++) {

		if(palabraSeparada[i]==letra){
	
			arrayRepe.push(i);
			bandera=true;
			if(may.indexOf(letra)>-1){
				var indice = may.indexOf(letra);
				may.splice(indice,1);
				document.getElementById("abecedario").innerHTML=may;
			}
		}
	}	

	
	//si la letra no esta entre las letras de las palabra aumentar acumulador de errores
	if (arrayErrores.indexOf(letra)==-1 && bandera==false && ((/[0-9]|[$&#*]/g).test(letra))==false) {

		errores++;
		arrayErrores.push(letra);
		document.getElementById("letraErronea").innerHTML=arrayErrores;
		vidas--;
		
		console.log(arrayErrores);
		if(may.indexOf(letra)>-1){
			var indice = may.indexOf(letra);
			may.splice(indice,1);
			document.getElementById("abecedario").innerHTML=may;
		}
	}else{
		bandera=false;
	}

	//sustituyo los guiones por la letra de la palabra
	for (var i = 0; i < arrayRepe.length; i++) {
		document.getElementById(arrayRepe[i]).innerHTML=letra;

	}
	
	if(errores>=5){
		document.getElementById("textoLetra").disabled=true;
		document.getElementById("btnReset").setAttribute("class","btn btn-warning");
		document.getElementById("vidas").style.fontSize="xx-large";
	}

	document.getElementById('vidas').innerHTML=vidas;

	dibujar(errores);

}//fin funcion

function dibujar(caso){
	var galeria=document.getElementById("galeria");
	switch(caso){

	case 1:
	galeria.innerHTML='<img src="imagen/1.png"/>';
	break;

	case 2: 
	galeria.innerHTML='<img src="imagen/2.png"/>';
	break;

	case 3: 
	galeria.innerHTML='<img src="imagen/3.png"/>';
	break;

	case 4: 
	galeria.innerHTML='<img src="imagen/4.png"/>';
	break;

	case 5: 
	galeria.innerHTML='<img src="imagen/5.png"/>';
	break;
	}

}// fin funcion

function reset(){
	errores=0;
	document.getElementById('letraErronea').innerHTML='';
	vidas=5;
	document.getElementById('vidas').innerHTML='5';
	arrayErrores=[];
	var galeria=document.getElementById("galeria").innerHTML='';
	var n=Math.floor(Math.random()*diccionario.length);
	var espacios=diccionario[n].length;
	document.getElementById("guiones").innerHTML="";
	for (var i = 0; i < espacios; i++) {
		document.getElementById("guiones").innerHTML+="<span id="+i+">_</span>";
	}
	document.getElementById("numLetras").innerHTML=('La palabra tiene ' + espacios + ' letras <br />');
	
	'use strict';
	palabraSeparada=diccionario[n].split("");
	var may=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
	document.getElementById("abecedario").innerHTML=may;
	document.getElementById("btnReset").setAttribute("class","btn btn-default");
	document.getElementById("vidas").style.fontSize="initial";
	document.getElementById("textoLetra").disabled=false;

}

