<?
class dbPolla
{

	function insertarCampos($id_hipodromo, $id_usuario_creador, $fecha_creacion, $fecha_jugada, $estatus)
	{
		//$sql="INSERT INTO formulario VALUES ('".$nombre."', '".$descripcion."', '".$documento."', '".$genero."', '".$estado"', '".$fecha"')";
		$sql = "INSERT INTO polla (id_hipodromo, id_usuario_creador, fecha_creacion, fecha_jugada, estatus) ".
        "VALUES ('$id_hipodromo', '$id_usuario_creador', '$fecha_creacion', '$fecha_jugada', '$estatus', '$fecha')";
		$resultado=ejecutar_sql($sql);

	}
	
	
	
	function mostrarGrid()
	{		
		$sql="SELECT *
			  FROM polla";
		
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