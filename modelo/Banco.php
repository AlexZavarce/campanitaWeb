<?php
class Banco{

	function __construct(){	
	}

	function mostrarCombo($url){		
		$data = file_get_contents($url);
		
		echo $data;
	}

	function mostrarGrid($url){		
		$data = file_get_contents($url);
		echo $data;
	}

	function mostrarComboBancos($url){		
		$data = file_get_contents($url);
		echo $data;
	}
}
?>
