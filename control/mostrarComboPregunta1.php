<?php 
include_once("../modelo/Pregunta.php");

$banco = new Pregunta();
$banco->mostrarComboPreguntas1("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=pregunta1/todos");

?>