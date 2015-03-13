<?php 
include_once("../modelo/Banco.php");
    $start = $_REQUEST['start'];
 	$limit = $_REQUEST['limit'];


$banco = new Banco();
$banco->mostrarGrid("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=banco/todos&start=".$start."&limit=".$limit);

//echo $data;
?>