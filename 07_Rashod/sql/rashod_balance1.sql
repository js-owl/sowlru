-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 19 2017 г., 17:00
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
-- Структура таблицы `rashod_balance1`
--

CREATE TABLE IF NOT EXISTS `rashod_balance1` (
  `id_balance` int(11) NOT NULL,
  `prihod` varchar(40) NOT NULL,
  `summa` int(11) NOT NULL,
  `ostatok` int(11) NOT NULL,
  `dt` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rashod_balance1`
--

INSERT INTO `rashod_balance1` (`id_balance`, `prihod`, `summa`, `ostatok`, `dt`) VALUES
(20, '1. Витя', 30000, 30000, 1487509032),
(26, '3. Изя', 34000, 64000, 1487510334);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `rashod_balance1`
--
ALTER TABLE `rashod_balance1`
  ADD PRIMARY KEY (`id_balance`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `rashod_balance1`
--
ALTER TABLE `rashod_balance1`
  MODIFY `id_balance` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
