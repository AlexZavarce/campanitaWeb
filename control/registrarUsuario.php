<?php 
include_once("../modelo/Usuario.php");

$Usuario = new Usuario();




$cedula=$_GET['cedula'];
$nombre=$_GET['nombre'];
$apellido=$_GET['apellido'];
$fecha_nacimiento=$_GET['fecha_nacimiento'];
$codigo_area=$_GET['codigo_area'];
$telefono=$_GET['telefono'];
$codigo_operadora=$_GET['codigo_operadora'];
$celular=$_GET['celular'];
$correo =$_GET['correo'];
$login=$_GET['login'];
$password=$_GET['password'];
$foto=$_GET['foto'];
$pregunta_secreta=$_GET['pregunta_secreta'];
$respuesta_secreta=$_GET['respuesta_secreta'];
$intentos=$_GET['intentos'];
$estatus=$_GET['estatus'];

//esto es para la tabla relacional pregunta_usuarios
$id_pregunta1=$_GET['pregunta1'];
$respuesta_secreta1=$_GET['respuesta_secreta1'];
$id_pregunta2=$_GET['pregunta1'];
$respuesta_secreta2=$_GET['respuesta_secreta1'];



$banco->nuevoUsuario("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=usuario/ingresar&cedula=".$cedula."&nombre=".$nombre."&apellido=".$apellido."&fecha_nacimiento=".$fecha_nacimiento."&codigo_area=".$codigo_area."&telefono=".$telefono."&codigo_operadora=".$codigo_operadora."&celular=".$celular."&correo=".$correo."&login=".$login."&password=".$password."&foto=".$foto."&pregunta_secreta=".$pregunta_secreta."&respuesta_secreta=".$respuesta_secreta."&intentos=".$intentos."&pregunta1=".$id_pregunta1."&respuesta_secreta1=".$respuesta_secreta1."&pregunta2=".$id_pregunta2."&respuesta_secreta2=".$respuesta_secreta2."&estatus=".$estatus);


//echo $data;
?>