<?php 
/***********************************************************
Nombre de archivo:	    dbFormularios.php
Propósito:				Es el script donde se realizaran todas las acciones sobre
						la tabla formulario.
Fecha de Creación:		14 - 07 - 2014
Versión:				1.0.0
Autor:					Morgan Huascar Checa Lopez
***********************************************************/

class dbFormularios
{

	function insertarCampos($nombre, $descripcion, $documento, $genero, $estado, $fecha)
	{
		//$sql="INSERT INTO formulario VALUES ('".$nombre."', '".$descripcion."', '".$documento."', '".$genero."', '".$estado"', '".$fecha"')";
		$sql = "INSERT INTO formulario (nombre, descripcion, ruta_archivo, genero, estado, fecha) ".
        "VALUES ('$nombre', '$descripcion', '$documento', '$genero', '$estado', '$fecha')";
		$resultado=ejecutar_sql($sql);

	}
	
	
	
	function mostrarFormulario()
	{		
		$sql="SELECT *
			  FROM formulario";
		
		$resultado=ejecutar_sql($sql);
		$arregloLista = array(); 	
		while ($fila=mysql_fetch_assoc($resultado))
		{ 
			$arregloLista[] = $fila; 	
		}   	
		return $arregloLista;
	}
	
}
?>