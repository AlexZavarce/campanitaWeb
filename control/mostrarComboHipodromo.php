<?php 
include_once("../modelo/Usuario.php");

$bdUsuario = new Usuario();
$bdUsuario-> mostrarComboCodigoArea("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=hipodromo/todos");

?>