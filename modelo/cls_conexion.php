<?php
class conexion{
	private $servidor="localhost";
	private $usuario="root";
	private $pass="";
	private $base_de_datos="campanita2";
	private $descriptor;
	private $resultado;

	public function __construct($servidor, $usuario, $pass, $base_de_datos){
		$this -> servidor = $servidor;
		$this -> usuario = $usuario;	
		$this -> pass = $pass;
		$this -> base_de_datos = $base_de_datos;
		$this -> conectarse_base_datos();
	}
	public function conectarse_base_datos(){
		$this -> descriptor = mysql_connect($this -> servidor, $this -> usuario, $this -> pass) or die("Error al Seleccionar la BD");
		mysql_select_db($this -> base_de_datos, $this -> descriptor) or die("Error al seleccionar la BD");
	}
}


	if(!isset($base_de_datos))
	{
		$base_de_datos = new conexion("localhost", "root", "", "formulario");
		//echo "Se conecto a la BD <br>";
		
		 
	}
	
?>