-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 18 2017 г., 19:08
-- Версия сервера: 5.5.50
-- Версия PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `gb_x_sowl`
--

-- --------------------------------------------------------

--
-- Структура таблицы `ashan_basket`
--

CREATE TABLE IF NOT EXISTS `ashan_basket` (
  `id_basket` int(11) NOT NULL,
  `goodsid` int(11) NOT NULL DEFAULT '0',
  `quantity` int(4) NOT NULL DEFAULT '0',
  `datetime` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ashan_basket`
--

INSERT INTO `ashan_basket` (`id_basket`, `goodsid`, `quantity`, `datetime`) VALUES
(1, 1, 1, 1492456476),
(3, 1, 1, 1492531530),
(4, 1, 1, 1492531531),
(5, 2, 1, 1492531544);

-- --------------------------------------------------------

--
-- Структура таблицы `ashan_catalog`
--

CREATE TABLE IF NOT EXISTS `ashan_catalog` (
  `id_catalog` int(11) NOT NULL,
  `product` varchar(50) NOT NULL DEFAULT '',
  `price` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ashan_catalog`
--

INSERT INTO `ashan_catalog` (`id_catalog`, `product`, `price`) VALUES
(1, 'Хлеб', 1),
(2, 'Картошка', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `ashan_basket`
--
ALTER TABLE `ashan_basket`
  ADD PRIMARY KEY (`id_basket`);

--
-- Индексы таблицы `ashan_catalog`
--
ALTER TABLE `ashan_catalog`
  ADD PRIMARY KEY (`id_catalog`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `ashan_basket`
--
ALTER TABLE `ashan_basket`
  MODIFY `id_basket` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `ashan_catalog`
--
ALTER TABLE `ashan_catalog`
  MODIFY `id_catalog` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
