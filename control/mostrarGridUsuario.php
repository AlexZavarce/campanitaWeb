<?php 
include_once("../modelo/Usuario.php");

$start = $_REQUEST['start'];
$limit = $_REQUEST['limit'];



$usuario = new Usuario();
$usuario->mostrarGrid("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=usuario/todos&start=".$start."&limit=".$limit);

//echo $data;
?>