




<html>
	<head>
		<title>..:: FORMULARIO ::..</title>
		<link rel="stylesheet" type="text/css" href="lib/senchaExtjs/resources/css/ext-all.css" />
		<script type="text/javascript" src="lib/senchaExtjs/ext-all.js"></script>
		<script type="text/javascript" src="lib/senchaExtjs/locale/ext-lang-es.js"></script>
		<!--script type="text/javascript" src="vista/js/formulario.js"></script-->	
		<link href="vista/css/estilos.css" rel="stylesheet" type="text/css" media="screen" />
		 <script type="text/javascript" src="vista/js/registrarPolla.js"></script>
		 <script type="text/javascript" src="vista/js/grid.js"></script>
		 <script type="text/javascript" src="vista/js/arbol.js"></script>
		
		
				<!--Bloquea el boton derecho del mouse-->
			<script type="text/javascript" language="Javascript">
				document.oncontextmenu = function(){ Ext.Msg.alert("ALERTA", "Lo sentimos, por seguridad el boton derecho del raton esta inhabilitado"); return false; } 
			</script>
	</head>
	<body>
		<img class="banner" src="vista/img/banner1.jpg" hei width="100%">
		<div id="encabezado">
			
		</div>
		<table id="estructura">
			<td width="20%">
					<div id="arbol"></div>
			</td>
			<td>
					<div id="contenido"></div>
			</td>
			<td width="20%">
			
			</td>
		</table>
	</body>
</html>