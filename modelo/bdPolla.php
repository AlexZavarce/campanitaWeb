<?php
class bdPolla{

	function __construct(){	
	}

	function mostrarGrid($url){		
		$data = file_get_contents($url);
		// $array = json_decode($data);
		// $date = new DateTime($array[0]->fecha_creacion);
		// $date->format('d-m-Y');
		// $array[0]->fecha_creacion;
		// echo $array[0]->fecha_creacion;
		echo $data;
	}
}
?>