<?php 
include_once("../modelo/Banco.php");
    $start = $_REQUEST['start'];
    $limit = $_REQUEST['limit'];
    $estatus = 2; //este estatus dice que se esta jugando en el momento

$banco = new Banco();
$banco->mostrarGrid("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=polla/todos&estatus=".$estatus."&start=".$start."&limit=".$limit);

//echo $data;
?>