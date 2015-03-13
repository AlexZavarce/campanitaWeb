-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-09-2014 a las 03:15:09
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE IF NOT EXISTS `administrador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) DEFAULT NULL,
  `email` text,
  `clave` text,
  `estado` int(11) DEFAULT NULL,
  `id_creador` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `usuario`, `email`, `clave`, `estado`, `id_creador`) VALUES
(1, 1, 'admin', 'admin', 1, 1),
(2, 2, 'admin2', 'admin', 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE IF NOT EXISTS `preguntas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `descripcion`, `status`) VALUES
(1, '¿Libro Favorito?', 1),
(2, '¿Película Favorita?', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_productos` int(11) NOT NULL,
  `id_tipo_ofertas` int(11) NOT NULL,
  `nombre` text,
  `costo_compra` float DEFAULT NULL,
  `costo_venta` float DEFAULT NULL,
  `cantidad` int(6) DEFAULT NULL,
  `imagen` longblob NOT NULL,
  `descripcion` text,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_tipo_productos_idx` (`id_tipo_productos`),
  KEY `fk_productos_tipo_ofertas1_idx` (`id_tipo_ofertas`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `id_tipo_productos`, `id_tipo_ofertas`, `nombre`, `costo_compra`, `costo_venta`, `cantidad`, `imagen`, `descripcion`, `status`) VALUES
(1, 1, 1, 'Celular', 100, 1210, 12, '', '123', 1),
(2, 1, 2, 'Powersim', 12, 23, 32, '', 'sda', 1),
(3, 3, 1, 'Xat', 343, 24444, 34, '', 'sddasd', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicidad_principal`
--

CREATE TABLE IF NOT EXISTS `publicidad_principal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_tooltips_principal` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `url` text NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `publicidad_principal`
--

INSERT INTO `publicidad_principal` (`id`, `id_tooltips_principal`, `titulo`, `url`, `status`) VALUES
(1, 1, 'Hola caro', 'data1/images/fondo3.jpg', 1),
(2, 2, 'Holaaaaa', 'data1/images/fondo1.png', 1),
(3, 0, 'Que bonito', 'data1/images/fondo4.png', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_ofertas`
--

CREATE TABLE IF NOT EXISTS `tipo_ofertas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text,
  `descripcion` text,
  `imagen` longblob,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `tipo_ofertas`
--

INSERT INTO `tipo_ofertas` (`id`, `nombre`, `descripcion`, `imagen`, `status`) VALUES
(1, 'Nuevo', 'Son los productos mas recientes para la vender.', NULL, 1),
(2, 'Promociones', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_productos`
--

CREATE TABLE IF NOT EXISTS `tipo_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text,
  `descripcion` text,
  `imagen` longblob,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `tipo_productos`
--

INSERT INTO `tipo_productos` (`id`, `nombre`, `descripcion`, `imagen`, `status`) VALUES
(1, 'Xat', 'Monedas para comprar powers.', NULL, 1),
(2, 'Powers', 'Imagenes ', NULL, 1),
(3, 'Videos', 'Videos', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tooltips_principal`
--

CREATE TABLE IF NOT EXISTS `tooltips_principal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  `url` text NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `tooltips_principal`
--

INSERT INTO `tooltips_principal` (`id`, `titulo`, `url`, `status`) VALUES
(1, 'Holaaadata1/images/karam.jpg', 'data1/tooltips/fondo3.jpg', 1),
(2, 'Hoeee', 'data1/tooltips/fondo2.jpg', 1),
(3, 'Holaaaa', 'data1/tooltips/fondo4.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `nick` text NOT NULL,
  `clave` text NOT NULL,
  `url` text,
  `telefono` int(11) DEFAULT NULL,
  `email` text,
  `id_pregunta_secreta1` int(11) NOT NULL,
  `respuesta_secreta1` text NOT NULL,
  `id_pregunta_secreta2` int(11) NOT NULL,
  `respuesta_secreta2` text NOT NULL,
  `pregunta_secreta3` text NOT NULL,
  `respuesta_secreta3` text NOT NULL,
  `status` int(11) NOT NULL,
  KEY `id` (`id`),
  KEY `id_pregunta_secreta1` (`id_pregunta_secreta1`,`id_pregunta_secreta2`),
  KEY `id_pregunta_secreta2` (`id_pregunta_secreta2`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `nick`, `clave`, `url`, `telefono`, `email`, `id_pregunta_secreta1`, `respuesta_secreta1`, `id_pregunta_secreta2`, `respuesta_secreta2`, `pregunta_secreta3`, `respuesta_secreta3`, `status`) VALUES
(1, 'Carolkis Linares', 'chiquita2705', '123', NULL, NULL, NULL, 1, 'On Fire', 2, 'Tu', 'Nombre de mi mascota', 'Misu misu', 1),
(2, 'Damaris Zavarce', 'Dama', '123', 'images/fotos/favicon[1].ico', 123, 'asdasd@fdsfs', 1, 'ninguno', 2, 'ninguna', 'cual es tu hobby ', 'frodo', 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_tipo_productos`) REFERENCES `tipo_productos` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_tipo_ofertas`) REFERENCES `tipo_ofertas` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`id_pregunta_secreta2`) REFERENCES `preguntas` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_pregunta_secreta1`) REFERENCES `preguntas` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
