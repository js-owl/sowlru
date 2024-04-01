-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 19 2017 г., 17:16
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
-- Структура таблицы `rashod_users`
--

CREATE TABLE IF NOT EXISTS `rashod_users` (
  `id_user` int(11) NOT NULL,
  `email` varchar(80) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rashod_users`
--

INSERT INTO `rashod_users` (`id_user`, `email`, `pass`, `date_created`) VALUES
(20, 'aklimovskikh@yandex.ru', 'c4ca4238a0b923820dcc509a6f75849b', '2017-02-02 19:41:26');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `rashod_users`
--
ALTER TABLE `rashod_users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `rashod_users`
--
ALTER TABLE `rashod_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
