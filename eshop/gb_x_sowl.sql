-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 30 2017 г., 12:46
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
-- Структура таблицы `balance`
--

CREATE TABLE IF NOT EXISTS `balance` (
  `id_balance` int(9) NOT NULL,
  `month` varchar(10) NOT NULL,
  `date` varchar(10) NOT NULL,
  `prihod` varchar(20) NOT NULL,
  `summa` decimal(10,0) NOT NULL,
  `ostatok` decimal(10,0) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `balance`
--

INSERT INTO `balance` (`id_balance`, `month`, `date`, `prihod`, `summa`, `ostatok`) VALUES
(34, 'Январь', '22', 'вася', '18000', '18000'),
(35, 'Январь', '23', 'алекс', '30000', '48000'),
(36, 'Январь', '23', 'коммуналка', '-9000', '39000');

-- --------------------------------------------------------

--
-- Структура таблицы `basket`
--

CREATE TABLE IF NOT EXISTS `basket` (
  `id_busket` int(11) NOT NULL,
  `customer` varchar(32) NOT NULL DEFAULT '',
  `goodsid` int(11) NOT NULL DEFAULT '0',
  `quantity` int(4) NOT NULL DEFAULT '0',
  `datetime` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `basket`
--

INSERT INTO `basket` (`id_busket`, `customer`, `goodsid`, `quantity`, `datetime`) VALUES
(3, '0tl46953hnrrdaaj34podrper4', 1, 1, 1485678335),
(4, '0tl46953hnrrdaaj34podrper4', 2, 1, 1485678385),
(5, '0tl46953hnrrdaaj34podrper4', 1, 1, 1485686173),
(6, '0tl46953hnrrdaaj34podrper4', 1, 1, 1485707833),
(7, '0tl46953hnrrdaaj34podrper4', 1, 1, 1485707919),
(8, '0tl46953hnrrdaaj34podrper4', 1, 1, 1485708182),
(9, '0tl46953hnrrdaaj34podrper4', 2, 1, 1485708389),
(10, '0tl46953hnrrdaaj34podrper4', 1, 1, 1485708391),
(11, '0tl46953hnrrdaaj34podrper4', 3, 1, 1485708393),
(12, '0tl46953hnrrdaaj34podrper4', 1, 1, 1485716649);

-- --------------------------------------------------------

--
-- Структура таблицы `catalog`
--

CREATE TABLE IF NOT EXISTS `catalog` (
  `id_catalog` int(11) NOT NULL,
  `author` varchar(50) NOT NULL DEFAULT '',
  `title` varchar(50) NOT NULL DEFAULT '',
  `pubyear` int(4) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog`
--

INSERT INTO `catalog` (`id_catalog`, `author`, `title`, `pubyear`, `price`) VALUES
(1, 'John Smith', 'PHP 5', 2009, 760),
(2, 'Mike Doe', 'PHP and XML', 2008, 650),
(3, 'Иван Петров', 'ASP.net', 2007, 420);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id_orders` int(11) NOT NULL,
  `author` varchar(50) NOT NULL DEFAULT '',
  `title` varchar(50) NOT NULL DEFAULT '',
  `pubyear` int(4) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT '0',
  `customer` varchar(32) NOT NULL DEFAULT '',
  `quantity` int(4) NOT NULL DEFAULT '0',
  `datetime` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `balance`
--
ALTER TABLE `balance`
  ADD PRIMARY KEY (`id_balance`);

--
-- Индексы таблицы `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`id_busket`);

--
-- Индексы таблицы `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id_catalog`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_orders`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `balance`
--
ALTER TABLE `balance`
  MODIFY `id_balance` int(9) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT для таблицы `basket`
--
ALTER TABLE `basket`
  MODIFY `id_busket` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT для таблицы `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id_catalog` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id_orders` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
