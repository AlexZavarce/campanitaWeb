<?php 
include_once("../modelo/Usuario.php");
   
$id_polla = $_GET['id_polla'];
$usuario = new Usuario();
$usuario->mandarArray("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=valida/buscarPolla&id_polla=".$id_polla);

?>