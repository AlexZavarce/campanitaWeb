<?php 
	function conectar_mysql($host,$usuario,$pass,$db)
	{
        $con = mysql_connect($host,$usuario,$pass);
        if(! $con){die ("ERROR AL CONECTAR MYSQL:".mysql_error());}
        $bd = mysql_select_db($db, $con);
         if (! $bd ){die ("ERROR AL CONECTAR CON LA BASE DE DATOS: ".mysql_error() );}
	}
	
	
	function ejecutar_sql($sql){

                $resultado = mysql_query($sql);

                if (! $resultado ) {die("ERROR AL EJECUTAR LA CONSULTA: ".mysql_error());}

                return $resultado;

	}
?>