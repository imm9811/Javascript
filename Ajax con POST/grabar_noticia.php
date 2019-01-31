<?php 

$c= new Mysqli("localhost","root","","noticia");
if(isset($_POST["texto"]) && !empty($_POST["texto"])){
$texto=$_POST["texto"];
$c-> query("insert noticia (descripcion) values ('$texto')");
echo "ok";
}
else{
	//echo mysql_errno($c) . ": " . mysql_error($c). "\n";
	echo "error";
}
 ?>
