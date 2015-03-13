<?php
class Pregunta{

	function __construct(){	
	}

	function mostrarComboPreguntas1($url){		
		$data = file_get_contents($url);
		echo $data;
	}
}
?>
