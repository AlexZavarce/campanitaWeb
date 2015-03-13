<?php 
include_once("../modelo/bdPolla.php");

$bdPolla = new bdPolla();
$bdPolla->mostrarGrid("http://localhost:3000/polla/todos");


//echo $data;
?>