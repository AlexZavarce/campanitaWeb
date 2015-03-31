<?php 
include_once("../modelo/Pregunta.php");

$id=$_GET['test'];

$pregunta = new Pregunta();
$pregunta->mostrarComboPreguntas1("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=pregunta2/todos&id=".$id);

?>
