<?php 
/***********************************************************
Nombre de archivo:	    customEjemplos.php
Propósito:				Es la interfaz del modelo todos los metodos existentes 
						pasan por aqui.
Fecha de Creación:		14 - 07 - 2014
Versión:				1.0.0
Autor:					Morgan Huascar Checa Lopez
***********************************************************/
class customEjemplos
{
	function __construct()
	{	
		include_once('ejemplos/dbPolla.php');
		/*include_once('accionesBaseDeDatos/dbInformacionCompartida.php');
		include_once('accionesBaseDeDatos/dbNormativaInterna.php');
		include_once('accionesBaseDeDatos/dbPublicaciones.php');
	    include_once('accionesBaseDeDatos/dbListarEmpleado.php');
	    include_once('accionesBaseDeDatos/dbAvisosRRHH.php');
		include_once('accionesBaseDeDatos/dbPensamientoDia.php');
		include_once('accionesBaseDeDatos/dbSistemaInformatico.php');
		include_once('accionesBaseDeDatos/dbFotosPortada.php');
		include_once('accionesBaseDeDatos/dbGuiaTelefonica.php');*/
		
	}
	
	/**********Todo sobre la autentificacion del usuario**********/
	function mostrarFormulario ()
    {
    	$dbListaFormulario = new dbFormularios();
	    $res = $dbListaFormulario->mostrarFormulario();
		return $res;    	
    }
   

	function insertarCampos ($nombre, $descripcion, $documento, $genero, $estado, $fecha)
    {
	$dbInsertar = new dbFormularios();	 
	$dbInsertar->insertarCampos ($nombre, $descripcion, $documento, $genero, $estado, $fecha);
    }
}
    
	/***************Fin Autentificacion***************/
?>