<?php 
include_once("../modelo/Usuario.php");

$bdUsuario = new Usuario();
$bdUsuario-> mostrarComboCodigoOperadoras("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=codigo_celular/todos");


?>