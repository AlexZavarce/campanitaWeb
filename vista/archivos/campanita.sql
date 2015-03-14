-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-03-2015 a las 04:32:47
-- Versión del servidor: 5.5.25a
-- Versión de PHP: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `campanita`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bancos`
--

CREATE TABLE IF NOT EXISTS `bancos` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `estatus` int(1) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Volcado de datos para la tabla `bancos`
--

INSERT INTO `bancos` (`id`, `nombre`, `estatus`) VALUES
(1, '100% Banco', 1),
(2, 'BanCaribe', 1),
(3, 'Banesco', 1),
(4, 'BFC - Fondo Comun', 1),
(5, 'Bicentenario', 1),
(6, 'BNC - Nacional de Credito', 1),
(7, 'BOD', 1),
(8, 'Citibank', 1),
(9, 'CorpBanca', 1),
(10, 'Del Sur', 1),
(11, 'Del Tesoro', 1),
(12, 'Exterior', 1),
(13, 'Mercantil', 1),
(14, 'Mi Casa EAP', 1),
(16, 'MiBanco', 1),
(17, 'Plaza', 1),
(18, 'Provincial', 1),
(19, 'Sofitasa', 1),
(20, 'Venezolano de Credito', 1),
(21, 'Venezuela', 1),
(22, 'Industrial de Venezuela', 1),
(23, 'Banco Activo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE IF NOT EXISTS `ciudades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_estado` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_estado` (`id_estado`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `id_estado`, `nombre`, `estatus`) VALUES
(1, 1, 'Valencia', 1),
(2, 2, 'Ciudad Bolivar', 1),
(3, 3, 'Caracas', 1),
(4, 4, 'Maracaibo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigo_telefonos`
--

CREATE TABLE IF NOT EXISTS `codigo_telefonos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(4) NOT NULL,
  `estatus` int(11) NOT NULL COMMENT '2 si es código para  moviles, 1 si es un codigo para fijos, 0 para inactivos',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Volcado de datos para la tabla `codigo_telefonos`
--

INSERT INTO `codigo_telefonos` (`id`, `codigo`, `estatus`) VALUES
(1, '0426', 2),
(2, '0424', 2),
(3, '0416', 2),
(4, '0414', 2),
(5, '0412', 2),
(6, '0251', 1),
(7, '0252', 1),
(8, '0253', 1),
(9, '0243', 1),
(10, '0252', 1),
(11, '0295', 1),
(12, '0254', 1),
(13, '0212', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE IF NOT EXISTS `cuentas` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_banco` int(8) NOT NULL,
  `nro_cuenta` int(20) NOT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_banco` (`id_banco`),
  KEY `id_banco_2` (`id_banco`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`id`, `id_banco`, `nro_cuenta`, `estatus`) VALUES
(1, 9, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE IF NOT EXISTS `estados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pais` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estatus` int(1) NOT NULL COMMENT '2 si es nacional, 1 si es internacional, 0 inactivo',
  PRIMARY KEY (`id`),
  KEY `id_pais` (`id_pais`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `id_pais`, `nombre`, `estatus`) VALUES
(1, 1, 'Carabobo', 2),
(2, 1, 'Bolivar', 2),
(3, 1, 'Distrito Capital', 2),
(4, 1, 'Zulia', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE IF NOT EXISTS `grupos` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`id`, `nombre`, `estatus`) VALUES
(1, 'Administrador', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_pantallas`
--

CREATE TABLE IF NOT EXISTS `grupo_pantallas` (
  `id_grupo` int(8) NOT NULL,
  `id_interfaz` int(8) NOT NULL,
  KEY `id_grupo` (`id_grupo`),
  KEY `id_interfaz` (`id_interfaz`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hipodromos`
--

CREATE TABLE IF NOT EXISTS `hipodromos` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_ciudad` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `direccion` text NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ciudad` (`id_ciudad`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `hipodromos`
--

INSERT INTO `hipodromos` (`id`, `id_ciudad`, `nombre`, `direccion`, `estatus`) VALUES
(1, 1, 'Valencia', 'Lejos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulos`
--

CREATE TABLE IF NOT EXISTS `modulos` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo_interfaces`
--

CREATE TABLE IF NOT EXISTS `modulo_interfaces` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_interfaz` int(8) NOT NULL,
  `id_modulo` int(8) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_interfaz` (`id_interfaz`,`id_modulo`),
  KEY `id_modulo` (`id_modulo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paices`
--

CREATE TABLE IF NOT EXISTS `paices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `paices`
--

INSERT INTO `paices` (`id`, `nombre`, `estatus`) VALUES
(1, 'Venezuela', 1),
(2, 'Estados Unidos', 1),
(3, 'España', 1),
(4, 'Mexico', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pantallas`
--

CREATE TABLE IF NOT EXISTS `pantallas` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `url` varchar(50) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pollas`
--

CREATE TABLE IF NOT EXISTS `pollas` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_hipodromo` int(8) DEFAULT NULL,
  `id_usuario_creador` int(8) DEFAULT NULL,
  `fecha_creacion` date NOT NULL,
  `fecha_jugada` date NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_hipodromo` (`id_hipodromo`,`id_usuario_creador`),
  KEY `id_usuario_creador` (`id_usuario_creador`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `pollas`
--

INSERT INTO `pollas` (`id`, `id_hipodromo`, `id_usuario_creador`, `fecha_creacion`, `fecha_jugada`, `estatus`) VALUES
(1, 1, 1, '2015-02-23', '2015-02-26', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `polla_jugadas`
--

CREATE TABLE IF NOT EXISTS `polla_jugadas` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_polla` int(8) DEFAULT NULL,
  `id_puntuacion` int(8) NOT NULL,
  `id_usuario_creador` int(8) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_jugada` date NOT NULL,
  `primero` int(3) NOT NULL,
  `segundo` int(3) NOT NULL,
  `tercero` int(3) NOT NULL,
  `cuarto` int(3) NOT NULL,
  `quinto` int(3) NOT NULL,
  `sexto` int(3) NOT NULL,
  `septimo` int(3) NOT NULL,
  `nro_transaccion` int(20) DEFAULT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_polla` (`id_polla`),
  KEY `id_puntuacion` (`id_puntuacion`),
  KEY `id_usuario_creador` (`id_usuario_creador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE IF NOT EXISTS `preguntas` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `descripcion`, `estatus`) VALUES
(1, 'Libro Favorito', 1),
(2, 'Pelicula Favorita', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_usuarios`
--

CREATE TABLE IF NOT EXISTS `pregunta_usuarios` (
  `id_pregunta` int(8) NOT NULL,
  `id_usuario` int(8) NOT NULL,
  `respuesta` varchar(100) NOT NULL,
  KEY `id_pregunta` (`id_pregunta`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_tipo_producto` int(8) NOT NULL,
  `id_tipo_oferta` int(8) NOT NULL,
  `nombre` text,
  `costo_compra` float DEFAULT NULL,
  `costo_venta` float DEFAULT NULL,
  `disponible` int(20) DEFAULT NULL,
  `stock_minimo` int(10) NOT NULL,
  `stock_maximo` int(10) NOT NULL,
  `foto` longblob NOT NULL,
  `descripcion` text,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_tipo_productos_idx` (`id_tipo_producto`),
  KEY `fk_productos_tipo_ofertas1_idx` (`id_tipo_oferta`),
  KEY `id_tipo_producto` (`id_tipo_producto`),
  KEY `id_tipo_oferta` (`id_tipo_oferta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE IF NOT EXISTS `publicaciones` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(8) NOT NULL,
  `id_tipo_publicacion` int(8) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `contenido` text NOT NULL,
  `archivo` longblob NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_tipo_publicacion` (`id_tipo_publicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuaciones`
--

CREATE TABLE IF NOT EXISTS `puntuaciones` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `lugar` int(2) NOT NULL,
  `punto` int(2) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_ofertas`
--

CREATE TABLE IF NOT EXISTS `tipo_ofertas` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `id_ubicacion` int(11) DEFAULT NULL,
  `descripcion` text,
  `foto` longblob,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ubicacion` (`id_ubicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_productos`
--

CREATE TABLE IF NOT EXISTS `tipo_productos` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` text,
  `descripcion` text,
  `foto` longblob,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_publicaciones`
--

CREATE TABLE IF NOT EXISTS `tipo_publicaciones` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `cedula` int(11) NOT NULL,
  `id_grupo` int(8) DEFAULT NULL,
  `id_cuenta` int(8) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `codigo_area` int(4) DEFAULT NULL,
  `telefono` int(10) DEFAULT NULL,
  `codigo_operadora` int(4) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `correo` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `foto` longblob NOT NULL,
  `pregunta_secreta` varchar(100) NOT NULL,
  `respuesta_secreta` varchar(100) NOT NULL,
  `intentos` int(1) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_grupo` (`id_grupo`),
  KEY `id_cuenta` (`id_cuenta`),
  KEY `codigo_operadora` (`codigo_operadora`),
  KEY `codigo_area` (`codigo_area`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `cedula`, `id_grupo`, `id_cuenta`, `nombre`, `apellido`, `fecha_nacimiento`, `codigo_area`, `telefono`, `codigo_operadora`, `celular`, `correo`, `login`, `password`, `foto`, `pregunta_secreta`, `respuesta_secreta`, `intentos`, `estatus`) VALUES
(1, 0, 1, 1, 'Alexi', 'Barreto', '1990-01-12', 251, 8862000, 0, 0, 'alexizavarce@gmail.com', 'AlexZavarce', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'Nombre de tu madre', 'Damary', 3, 1),
(2, 12345678, 1, 1, 'caro', 'perez', '0000-00-00', 1, 1220155, 1, 53453453, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 1),
(3, 1231231241, 1, 1, 'caro', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 0),
(4, 1231231241, 1, 1, 'caro', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 1),
(5, 1231231241, 1, 1, 'caro', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 0),
(6, 1231231241, 1, 1, 'caro/f', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 0),
(7, 1231231241, 1, 1, 'caro/f', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 1),
(8, 1231231241, 1, 1, 'caro/f', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 0),
(9, 1231231241, 1, 1, 'caro/f', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 0),
(10, 1231243, 1, 1, 'sdfsdf', 'perez', '2013-02-20', 1, 1220155, 1, 123432, 'jeica@got.co', 'ka', '123', 0x89504e470d0a1a0a0000000d4948445200000018000000180806000000e0773df8000004bc4944415478dadd955b6c146514c7cf99dbee76ef6df7d6dd4d4ba172f74628884a4244d44429f80296102bbea83c486a8c84c4c4078231313e1012959892f860a2f11178206824fa60080d97655be882dded6edb2dbbddb2ddcbccec5c8edf4e255c244134bcf84d2699ef32e777feff39df37088fb8e1ff0770f8b70dbb9d5ef153002ab2eef05c5e1d4e8f5487d3c9cac5e3472794ff0478666b08f71c5cda0cdc8a88d4e15a0a04062a7a9514bda2a9467d84c81c2ee5d573992674a49238fef53f835a801d1f2deed9f446744ce00488b89680669a2072d2ed1544806832a80e0ccaee4a43356a49221a9e9d569b2acf659295c4896fb2ea7d0183c79ed8b97ec3aaef24de8d6c805a1d01e0d07aa45beb14bdced4c816ee0e2832685325c87a556b18b5cb16744a1d1e4f56ce7c393872c5027c72a2f7f395dd8f0fdaf81674496e2b280bbf106c210b6c1832c9fa3c8abc8d9ca2cf9a92b53aaa86427f7d48e4398ecaea34d4f459440e8cd294da87fe081f7fffdbc82fc1b8bd9b4701acc4ef535e9aa95834ae79312b3916e1dea69bbaa5ccd04410f476e0393c8caf1ff07eb1e94dd7bee682684b177bcd460bc9df5670c7f39d6377ad11791ed3d5ab6490bea0bf16a2f93cbf17fb0fb50eaddbee1c704b5ef00801f4dbbdc42f64f7508059f926b345a75c2dcd4410a21ca24ba76beb71e7c1d6a1be5dcb06786801a7e4408760bf2b2881097979026bdabc05700a6e0ab774b2c97b93202cd4e748e4118a4a1e2b37c5c6c923052fee38d87e6c5bff93031ec9033641fa9baf53b571e67f03422d71685a37554f83c4d920eaec06a15683502a015eb1c67c27286b4e4876c6c0700930919fbfb07fc3f9a770cf57b1332f6c5ef1bcd7e6038917b16ecc3185263885363498a39767cf42b76739320b08b9060a9c4445791a56b5ad85e08d22c6527952940c688acaea234ac9881dcacb22f8ebe9ecd0d177aebd8dbb0fc74e6d7e69f58b3ebb0f048e87c96ac6ca3ce00859da4767cf83cfde0e717777b3d6ad79a55183e7ea2ee8a02a84858d70fd6a02e666ae40b4eb69284116946e079cfc3e7b64ec4c651ff67d1c1eeaeb5f3bd004341514aa653299f341b7170d53a70b3367a1cd11601b4da1a0db830eae9d0ab973b03da3000a45e4a43095eb0128947218f2b490d39107a4062a25a2d12c3f88af1e883040ef80cfe1b700f756ced5e228845c6164354ebaa9a1c4db4999bc0cfdc20a98cce6b0984b5038be0ab87a1e838f3d4bd9cc2894a65318eeeca562fad267f8cafee8d0b65debdf320c8436a71f045eb87bf3181a8c1553e096dc56bfd29887be992274a00dea5c08c693bf83dbdf05d4158025ce204c8e5f81622e09e1ae5e6814c6b2b8e5c3d8d0ca975b073a3c71561d2e0c7b02f7dd68b2265b656a171d14926bb0f2860aa98ba7d06693c8eff6825c2f60b8a393ea421cfe48fc846e7f2789a2ed47dcb8377664f56b81f79a517a02cb91887be046732915d83a936d9625e6ae9da5f6600f683e0917b575318b52303b3d861d9d6b289d4a1e425fdcbe7ccb81253f78a3f6c5cde35ae4c5079ef11e5383775d8bf84a2621cdcda4c01f5ba7ffcc57b435c165c065ae43792261c47b36a62e8d8c7d70eb4c13e0217f9fec20e31745ec719e54315b825c5d31e55b73412f9a37ca64c0c306fd37ed9103fe04ca7f3f3d31ee1e9b0000000049454e44ae426082, 'sdasdasd', 'gtttttt', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_productos`
--

CREATE TABLE IF NOT EXISTS `usuario_productos` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(8) NOT NULL,
  `id_producto` int(8) NOT NULL,
  `cantidad` int(20) NOT NULL,
  `fecha` date NOT NULL,
  `nro_transaccion` int(20) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_producto` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `validas`
--

CREATE TABLE IF NOT EXISTS `validas` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `id_polla` int(8) DEFAULT NULL,
  `nro_valida` int(1) DEFAULT NULL,
  `primero` int(3) NOT NULL,
  `segundo` int(3) NOT NULL,
  `tercero` int(3) NOT NULL,
  `estatus` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_polla` (`id_polla`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `validas`
--

INSERT INTO `validas` (`id`, `id_polla`, `nro_valida`, `primero`, `segundo`, `tercero`, `estatus`) VALUES
(1, 1, 1, 2, 3, 1, 1),
(2, 1, 2, 3, 1, 8, 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD CONSTRAINT `ciudades_ibfk_1` FOREIGN KEY (`id_estado`) REFERENCES `estados` (`id`);

--
-- Filtros para la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD CONSTRAINT `cuentas_ibfk_1` FOREIGN KEY (`id_banco`) REFERENCES `bancos` (`id`);

--
-- Filtros para la tabla `estados`
--
ALTER TABLE `estados`
  ADD CONSTRAINT `estados_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `paices` (`id`);

--
-- Filtros para la tabla `grupo_pantallas`
--
ALTER TABLE `grupo_pantallas`
  ADD CONSTRAINT `grupo_pantallas_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id`),
  ADD CONSTRAINT `grupo_pantallas_ibfk_2` FOREIGN KEY (`id_interfaz`) REFERENCES `pantallas` (`id`);

--
-- Filtros para la tabla `hipodromos`
--
ALTER TABLE `hipodromos`
  ADD CONSTRAINT `hipodromos_ibfk_1` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudades` (`id`);

--
-- Filtros para la tabla `modulo_interfaces`
--
ALTER TABLE `modulo_interfaces`
  ADD CONSTRAINT `modulo_interfaces_ibfk_1` FOREIGN KEY (`id_interfaz`) REFERENCES `pantallas` (`id`),
  ADD CONSTRAINT `modulo_interfaces_ibfk_2` FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id`);

--
-- Filtros para la tabla `pollas`
--
ALTER TABLE `pollas`
  ADD CONSTRAINT `pollas_ibfk_1` FOREIGN KEY (`id_hipodromo`) REFERENCES `hipodromos` (`id`),
  ADD CONSTRAINT `pollas_ibfk_2` FOREIGN KEY (`id_usuario_creador`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `polla_jugadas`
--
ALTER TABLE `polla_jugadas`
  ADD CONSTRAINT `polla_jugadas_ibfk_1` FOREIGN KEY (`id_polla`) REFERENCES `pollas` (`id`),
  ADD CONSTRAINT `polla_jugadas_ibfk_2` FOREIGN KEY (`id_puntuacion`) REFERENCES `puntuaciones` (`id`),
  ADD CONSTRAINT `polla_jugadas_ibfk_3` FOREIGN KEY (`id_usuario_creador`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `pregunta_usuarios`
--
ALTER TABLE `pregunta_usuarios`
  ADD CONSTRAINT `pregunta_usuarios_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`),
  ADD CONSTRAINT `pregunta_usuarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_productos_tipo_productos` FOREIGN KEY (`id_tipo_producto`) REFERENCES `tipo_productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_tipo_oferta`) REFERENCES `tipo_ofertas` (`id`);

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `publicaciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `publicaciones_ibfk_2` FOREIGN KEY (`id_tipo_publicacion`) REFERENCES `tipo_publicaciones` (`id`);

--
-- Filtros para la tabla `tipo_ofertas`
--
ALTER TABLE `tipo_ofertas`
  ADD CONSTRAINT `tipo_ofertas_ibfk_1` FOREIGN KEY (`id_ubicacion`) REFERENCES `tipo_publicaciones` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`id_cuenta`) REFERENCES `cuentas` (`id`);

--
-- Filtros para la tabla `usuario_productos`
--
ALTER TABLE `usuario_productos`
  ADD CONSTRAINT `usuario_productos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuario_productos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `validas`
--
ALTER TABLE `validas`
  ADD CONSTRAINT `validas_ibfk_1` FOREIGN KEY (`id_polla`) REFERENCES `pollas` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;