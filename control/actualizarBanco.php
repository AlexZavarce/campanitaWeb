<?php 
include_once("../modelo/Banco.php");

$banco = new Banco();
$id=$_GET['id'];
$nombre=$_GET['nombre'];

$banco->mostrarCombo("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=banco/actualizar&id=".$id."&nombre=".$nombre);


//echo $data;
?>