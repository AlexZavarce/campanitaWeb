<?php
class Usuario{

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

	function mostrarComboCodigoArea($url)
	{
		$data = file_get_contents($url);
		echo $data;
	}

	function mostrarComboCodigoOperadoras($url)
	{
		$data = file_get_contents($url);
		echo $data;
	}

	function buscarUsuario($url)
	{
		$data = file_get_contents($url);
		echo $data;
	}

	function nuevoUsuario($url)
	{
		$data = file_get_contents($url);
		echo $data;
	}

	function actualizarUsuario($url)
	{
		$data = file_get_contents($url);
		echo $data;
	}

	function eliminarUsuario($url)
	{
		$data = file_get_contents($url);
		echo $data;
	}
        
        
        function mandarArray($url){		
		$data = file_get_contents($url);
		
                echo $data;
	}

	
}//Fin de la Class Usuario
?>