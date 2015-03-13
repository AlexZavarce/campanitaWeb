<?php
class Hipodromo{

	function __construct(){	
	}

	function mostrarCombo($url){		
		$data = file_get_contents($url);
		
		echo $data;
	}
}
?>
