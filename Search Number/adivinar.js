//document javscript

var contadorFallos=0;
//variable global
var longitud=100;
var numAleatorio=Math.round(Math.random()*longitud,0);
console.log(numAleatorio);

function comprobar(numero){


    if(numero==numAleatorio){
        
        document.getElementById(numero).className+="btn-success";

        if(contadorFallos==0){
            document.getElementsByTagName('h1')[0].innerHTML+=("<br>HAS GANADO SIN FALLOS");
            for (var i = 1; i <= 100; i++) {
                document.getElementById(i).disabled = true;   
            }
        }
        else{
             document.getElementsByTagName('h1')[0].innerHTML+=("<br>Has ganado pero con "+contadorFallos+" fallos");
            for (var i = 1; i <= 100; i++) {
                document.getElementById(i).disabled = true;
            }
        }

    //cualquiera vale
    //boton.className+=" btn-success";
    //boton.className+=" btn-danger";
    }
//en caso de que se haya fallado la pregunta
    else if(numero>=numAleatorio){
    	 contadorFallos++;
        while(numero<101){
                //while(!=numAleatorio){
            document.getElementById(numero).className+=" btn-danger";
            numero++;
           
        }
    }else if(numero<=numAleatorio)
        {
        	 contadorFallos++;
        while(numero >= 1){
                //  while(numero>=0){
                document.getElementById(numero).className+=" btn-danger";
                numero--;
        }
	}
}//fin funcion

window.onload=function(){

    var contenedor=document.getElementById('contenedor');

    //for (var i = 0; i <= longitud; i++) {
    var num=0;
    for (var i = 0; i < 10; i++) {

            for (var j = 1; j <= 10; j++) {
                num++;
                 contenedor.innerHTML+="<input type='button' id="+num+" class='btn' value="+num+" onclick='comprobar("+num+")'/>  ";    
            }
             contenedor.innerHTML+="<br>";
        }   
}
