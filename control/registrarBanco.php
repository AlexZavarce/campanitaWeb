<?php 
include_once("../modelo/Banco.php");

$banco = new Banco();
$nombre=$_GET['nombre'];
$estatus=$_GET['estatus'];

$banco->mostrarCombo("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=banco/ingresar&nombre=".$nombre."&estatus=".$estatus);


//echo $data;
?>