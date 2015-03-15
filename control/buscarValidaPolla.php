<?php 
include_once("../modelo/Usuario.php");
   
$id_polla = $_GET['id_polla'];
$nro_valida = $_GET['nro_valida'];
$usuario = new Usuario();
$usuario->mostrarCombo("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=valida/buscarPollaValida&id_polla=".$id_polla."&nro_valida=".$nro_valida);

?>


