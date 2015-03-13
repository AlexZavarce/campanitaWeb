<?php 
include_once("../modelo/Banco.php");

$banco = new Banco();
$banco->mostrarComboBancos("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=banco/todos&start=0&limit=0");

?>