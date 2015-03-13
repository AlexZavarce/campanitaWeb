<html>
	<head>
		<title>..:: FORMULARIO ::..</title>
		<link rel="stylesheet" type="text/css" href="../lib/senchaExtjs/resources/css/ext-all.css" />
		<script type="text/javascript" src="../lib/senchaExtjs/ext-all.js"></script>
		<script type="text/javascript" src="../lib/senchaExtjs/locale/ext-lang-es.js"></script>
		<!--script type="text/javascript" src="vista/js/formulario.js"></script-->	
		<link href="css/estilos.css" rel="stylesheet" type="text/css" media="screen" />
		 <script type="text/javascript" src="pantallas/registrarPolla.js"></script>
		 <script type="text/javascript" src="pantallas/grid.js"></script>
		 <script type="text/javascript" src="pantallas/arbol.js"></script>
		
		
				<!--Bloquea el boton derecho del mouse-->
			<script type="text/javascript" language="Javascript">
				document.oncontextmenu = function(){ Ext.Msg.alert("ALERTA", "Lo sentimos, por seguridad el boton derecho del raton esta inhabilitado"); return false; } 
			</script>
	</head>
	<body>
		<table id="estructura">
			<th width="20%">
					<div id="arbol"></div>
			</th>
			<th width="40%">
					<div id="contenido"></div>
			</th>
		</table>
	</body>
</html>