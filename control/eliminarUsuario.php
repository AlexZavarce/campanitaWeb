<?php 
include_once("../modelo/Usuario.php");
   
 $id = $_GET['id'];
$usuario = new Usuario();
$usuario->buscarUsuario("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=usuario/eliminar&id=".$id);

?>