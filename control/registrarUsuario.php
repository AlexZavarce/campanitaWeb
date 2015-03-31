<?php 
include_once("../modelo/Usuario.php");

$usuario = new Usuario();


$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$fecha_nacimiento=$_POST['fecha_nacimiento'];
$codigo_area=$_POST['codigo_area'];
$telefono=$_POST['telefono'];
$codigo_operadora=$_POST['codigo_operadora'];
$celular=$_POST['celular'];
$correo =$_POST['correo'];
$login=$_POST['login'];
$password=$_POST['password'];
$correo=$_POST['correo'];
$foto=$_POST['foto'];
$pregunta_secreta=$_POST['pregunta_secreta'];
$respuesta_secreta=$_POST['respuesta_secreta'];
$intentos=$_POST['intentos'];
$estatus=$_POST['estatus'];

//esto es para la tabla relacional pregunta_usuarios
$id_pregunta1=$_POST['pregunta1'];
$respuesta_secreta1=$_POST['respuesta_secreta1'];
$id_pregunta2=$_POST['pregunta2'];
$respuesta_secreta2=$_POST['respuesta_secreta2'];

console.log("Holaaaaaa");

$usuario->nuevoUsuario("http://localhost/backendCampanitaWeb/controller/Broker.php?servicioSolicitado=usuario/ingresar&nombre=".$nombre."&apellido=".$apellido."&fecha_nacimiento=".$fecha_nacimiento."&codigo_area=".$codigo_area."&telefono=".$telefono."&codigo_operadora=".$codigo_operadora."&celular=".$celular."&correo=".$correo."&login=".$login."&password=".$password."&foto=".$foto."&pregunta_secreta=".$pregunta_secreta."&respuesta_secreta=".$respuesta_secreta."&intentos=".$intentos."&pregunta1=".$id_pregunta1."&respuesta_secreta1=".$respuesta_secreta1."&pregunta2=".$id_pregunta2."&respuesta_secreta2=".$respuesta_secreta2."&estatus=".$estatus);


//echo $data;
?>