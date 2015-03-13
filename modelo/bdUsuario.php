<?php
class bdUsuario{

	function __construct(){	
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
}
?>