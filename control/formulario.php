<?php 

/***********************************************************
Nombre de archivo:	    formulario.php
Propósito:				Se utiliza insertar nuvos documentos, editarlos y controlar duplicados.
Fecha de Creación:		13 - 07 - 2014
Versión:				1.0.0
Autor:					Morgan Huascar Checa Lopez
***********************************************************/

 $nombre_archivo='formulario.php';

if(isset($_POST['nombre']))
		{	
		
			$nombre=($_POST['nombre']);
			$descripcion=($_POST['descripcion']);
			$genero=($_POST['genero']);
			$estado=($_POST['estado']);
			$fecha=($_POST['fecha']);
			
			// Recibo los datos del archivo
			$archivo_completo=($_FILES['documentoFile']['tmp_name']);
    		$nombre_archivo = ($_FILES['documentoFile']['name']);
    		$tipo = ($_FILES['documentoFile']['type']);
    		$tamano = ($_FILES['documentoFile']['size']);
 	    	$directorio = '../vista/archivos/';
 	    	$extension = strtolower(substr(strrchr($nombre_archivo, '.'), 1)); //Para evitar preguntar pdf  o PDF, toda extension la convierto a minusculas

			//Es neceario pasar por el modelo para realizar las diferentes consultas
			include_once("libModelo.php");
  			$custom = new customEjemplos();
  			
  			/******************************INSERTAR NUEVOS ARCHIVOS*****************************************/

  						//Verifico si el archivo a guardar ya existe almacenada en la BD
						//esta instruccion es solo valida para mysql, en oracle o postgresql no es necesario mandar ninguna variable (mysql_fetch_object)
  						$mostrarRepetido = $custom->mostrarFormulario();
  						foreach($mostrarRepetido as $nombreCampo)
  						{
  							if($nombreCampo['ruta_archivo'] == $nombre_archivo)
  							{
 	    						echo '{success:false, error: '.json_encode("Este archivo YA ESTA REGISTRADO. Favor elija otro").'}';
 	    						exit;
  			     			}
  						}
 	    
		    
 	    				// Muevo el archivo desde su ubicación
   						// temporal al directorio definitivo
  		 					if(move_uploaded_file(($archivo_completo),$directorio.$nombre_archivo))
  		 					{
  			
		   						 $custom->insertarCampos($nombre, $descripcion, $nombre_archivo, $genero, $estado, $fecha);
								echo '{success:true}';	
  		 					}
         
           	   			 	else {echo '{success:false, error: '.json_encode("No se pudo copiar al servidor").'}';} //exit;}
		}
?>
