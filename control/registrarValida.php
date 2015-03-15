<?php 
include_once("../modelo/Banco.php");

$banco = new Banco();
$id_polla = $_GET['id_polla'];
$nro_valida =  $_GET['nro_valida'];
$primero =  $_GET['primero'];
$segundo =  $_GET['segundo'];
$tercero =  $_GET['tercero'];
$estatus = $_GET['estatus'];

$banco->mostrarCombo("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=valida/ingresar&id_polla=".$id_polla."&nro_valida=".$nro_valida."&primero=".$primero."&segundo=".$segundo."&tercero=".$tercero."&estatus=".$estatus);


//echo $data;
?>