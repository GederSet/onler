-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 02 2024 г., 14:00
-- Версия сервера: 8.0.30
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `onler`
--

-- --------------------------------------------------------

--
-- Структура таблицы `basket`
--

CREATE TABLE `basket` (
  `id_user` bigint UNSIGNED NOT NULL,
  `id_product` bigint UNSIGNED NOT NULL,
  `count` smallint NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `basket`
--

INSERT INTO `basket` (`id_user`, `id_product`, `count`) VALUES
(239, 10, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `delivery`
--

CREATE TABLE `delivery` (
  `id` bigint UNSIGNED NOT NULL,
  `order_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `arrival_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `purchase_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `count` tinyint NOT NULL,
  `code` int DEFAULT '1',
  `id_status` bigint UNSIGNED NOT NULL DEFAULT '1',
  `id_purchase_status` bigint UNSIGNED NOT NULL DEFAULT '1',
  `id_user` bigint UNSIGNED NOT NULL,
  `id_product` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `delivery`
--

INSERT INTO `delivery` (`id`, `order_date`, `arrival_date`, `purchase_date`, `count`, `code`, `id_status`, `id_purchase_status`, `id_user`, `id_product`) VALUES
(1415392017101890, '22.12.2023, 10:42:50', '22.12.2023, 10:43:20', '25.12.2023, 10:42:50', 2, 648091, 5, 1, 253, 1),
(2287220167431350, '20.12.2023, 22:46:35', '20.12.2023, 22:47:05', '23.12.2023, 22:46:35', 1, 556660, 5, 1, 239, 364),
(2440420554940319, '18.01.2024, 08:41:05', '18.01.2024, 08:41:35', '21.01.2024, 08:41:05', 1, 556660, 5, 1, 239, 2),
(5516844800698383, '18.01.2024, 08:41:05', '18.01.2024, 08:41:35', '21.01.2024, 08:41:05', 5, 556660, 5, 1, 239, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `delivery_status`
--

CREATE TABLE `delivery_status` (
  `id` bigint UNSIGNED NOT NULL,
  `status` varchar(30) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `delivery_status`
--

INSERT INTO `delivery_status` (`id`, `status`) VALUES
(1, 'Оформлен'),
(2, 'Упакован'),
(3, 'Доставлен'),
(4, 'Принят'),
(5, 'Готов к выдаче');

-- --------------------------------------------------------

--
-- Структура таблицы `gender`
--

CREATE TABLE `gender` (
  `id` bigint UNSIGNED NOT NULL,
  `gender` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `gender`
--

INSERT INTO `gender` (`id`, `gender`) VALUES
(1, 'Мужской'),
(2, 'Женский');

-- --------------------------------------------------------

--
-- Структура таблицы `history`
--

CREATE TABLE `history` (
  `id` bigint UNSIGNED NOT NULL,
  `order_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `arrival_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `purchase_date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `count` tinyint NOT NULL,
  `comment` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date_message` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_rating` tinyint(1) DEFAULT NULL,
  `is_return` tinyint NOT NULL DEFAULT '0',
  `id_status` bigint UNSIGNED NOT NULL,
  `id_user` bigint UNSIGNED NOT NULL,
  `id_product` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `history`
--

INSERT INTO `history` (`id`, `order_date`, `arrival_date`, `purchase_date`, `count`, `comment`, `date_message`, `user_rating`, `is_return`, `id_status`, `id_user`, `id_product`) VALUES
(33, '20.12.2023, 15:51:11', '20.12.2023, 15:51:41', '23.12.2023, 15:51:11', 1, 'Часы огонь 🔥🔥🔥', '15.12.2023, 15:51:33', 5, 0, 2, 246, 1),
(34, '20.12.2023, 15:52:35', '20.12.2023, 15:53:05', '23.12.2023, 15:52:35', 1, 'Часы впечатлили, однако браслет как дешевый гремит как пустышка и не разбирается как на картинке, пришлось приложить усилие, чтобы разогнуть звенья.', '16.12.2023, 15:52:51', 4, 0, 2, 243, 1),
(35, '20.12.2023, 15:54:00', '20.12.2023, 15:54:30', '23.12.2023, 15:54:00', 1, 'Качество плохое, через час носки сломался ремешок, + стекло выпирало из корпуса, не советую данного продавца', '17.12.2023, 15:54:41', 2, 0, 2, 247, 1),
(36, '20.12.2023, 15:55:50', '20.12.2023, 15:56:20', '23.12.2023, 15:55:50', 1, 'Так себе, но неплохо за эти деньги', '17.12.2023, 15:56:14', 3, 0, 2, 248, 1),
(37, '20.12.2023, 15:59:03', '20.12.2023, 15:59:33', '23.12.2023, 15:59:03', 1, 'по моему мнению можете брать смело!!рекомендую!! я долго сомневался, думал будет выглядеть как дешевка (начитавшись отзывов), но часы отличные, к тому же за эту цену.  из-за того что он тонкий, ремень гремит в расстегнутом состоянии. всё. это единственное, за что я смог придраться. в остальном эти часы офигенные, выглядят порядочно, никаких претензий!!! брал на один день в загс, но теперь буду носить ежедневно.', '17.12.2023, 16:00:23', 5, 0, 2, 244, 1),
(38, '20.12.2023, 16:03:11', '20.12.2023, 16:03:41', '23.12.2023, 16:03:11', 1, 'Заказывала в подарок парню на Новый Год, но... Не выдержала и подарила сегодня) ☺ Потому что не смогла устоять перед красотой и качествством этих часов❤️‍🔥 И поскорее хотелось увидеть реакцию парня на них!!! Они ему очень сильно понравились и он сказал, что мечтал о таких))) Коробка, в котой пришли часы, тоже прекрасна, идеально подходит для подарка😍 Я ни капли не пожалела, что заказала именно их! Спасибо большое прадовцу, за такой чудесный товар❤🥺', '18.12.2023, 16:03:45', 5, 0, 2, 241, 1),
(39, '20.12.2023, 16:04:45', '20.12.2023, 16:05:15', '23.12.2023, 16:04:45', 1, 'Часы просто ужасны, не рекомендую 👎👎👎', '18.12.2023, 16:05:35', 1, 0, 2, 242, 1),
(40, '20.12.2023, 16:07:11', '20.12.2023, 16:07:41', '23.12.2023, 16:07:11', 1, 'Циферблат очень маленький и качество ремешка оставляет желать лучшего', '19.12.2023, 16:07:24', 2, 0, 2, 251, 1),
(41, '20.12.2023, 16:08:18', '20.12.2023, 16:08:48', '23.12.2023, 16:08:18', 1, 'Хорошие часы, работают, только вот большиваты, меньше не делаются.', '19.12.2023, 16:10:00', 4, 0, 2, 238, 1),
(42, '20.12.2023, 16:11:02', '20.12.2023, 16:11:32', '23.12.2023, 16:11:02', 1, 'Хорошие качественные часы, соответствует описанию. доволен)', '20.12.2023, 16:11:19', 5, 0, 2, 249, 1),
(43, '20.12.2023, 16:26:59', '20.12.2023, 16:27:29', '23.12.2023, 16:26:59', 1, 'Мне понравились👍🙂', '16.12.2023, 15:53:00', 5, 1, 2, 239, 1),
(44, '20.12.2023, 16:37:02', '20.12.2023, 16:37:32', '23.12.2023, 16:37:02', 1, '', '20.12.2023, 16:37:14', 1, 0, 2, 250, 1),
(45, '20.12.2023, 16:37:52', '20.12.2023, 16:38:22', '23.12.2023, 16:37:52', 1, '', '20.12.2023, 16:38:12', 1, 0, 2, 252, 1),
(46, '20.12.2023, 16:39:38', '20.12.2023, 16:40:08', '23.12.2023, 16:39:38', 1, '', '20.12.2023, 16:40:00', 2, 0, 2, 245, 1),
(47, '20.12.2023, 16:41:11', '20.12.2023, 16:41:41', '23.12.2023, 16:41:11', 1, '', '20.12.2023, 16:41:23', 5, 0, 2, 240, 1),
(48, '20.12.2023, 16:42:12', '20.12.2023, 16:42:42', '23.12.2023, 16:42:12', 1, 'Часы не понравились, не подошли', '20.12.2023, 16:42:45', 2, 0, 2, 240, 2),
(49, '20.12.2023, 16:43:05', '20.12.2023, 16:43:35', '23.12.2023, 16:43:05', 1, 'Отличные часы 👍👍👍', '17.12.2023, 16:43:41', 5, 1, 2, 239, 2),
(50, '20.12.2023, 19:20:04', '20.12.2023, 19:20:34', '23.12.2023, 19:20:04', 5, NULL, NULL, NULL, 0, 2, 239, 2),
(51, '20.12.2023, 19:20:04', '20.12.2023, 19:20:34', '23.12.2023, 19:20:04', 2, NULL, NULL, NULL, 0, 3, 239, 10),
(52, '20.12.2023, 19:20:04', '20.12.2023, 19:20:34', '23.12.2023, 19:20:04', 1, NULL, NULL, NULL, 0, 4, 239, 8),
(53, '20.12.2023, 19:20:04', '20.12.2023, 19:20:34', '23.12.2023, 19:20:04', 1, NULL, NULL, NULL, 1, 2, 239, 6),
(54, '20.12.2023, 19:23:08', '20.12.2023, 19:23:38', '23.12.2023, 19:23:08', 1, NULL, NULL, NULL, 0, 2, 239, 77),
(55, '20.12.2023, 19:23:08', '20.12.2023, 19:23:38', '23.12.2023, 19:23:08', 1, NULL, NULL, NULL, 1, 2, 239, 7),
(57, '20.12.2023, 19:24:58', '20.12.2023, 19:25:28', '23.12.2023, 19:24:58', 1, 'cool', '18.01.2024, 08:47:11', 5, 1, 2, 239, 5),
(58, '20.12.2023, 19:24:58', '20.12.2023, 19:25:28', '23.12.2023, 19:24:58', 2, NULL, NULL, NULL, 1, 2, 239, 1),
(59, '20.12.2023, 19:24:58', '20.12.2023, 19:25:28', '23.12.2023, 19:24:58', 1, NULL, NULL, NULL, 0, 3, 239, 11),
(60, '21.12.2023, 12:19:52', '21.12.2023, 12:20:22', '24.12.2023, 12:19:52', 4, NULL, NULL, NULL, 1, 2, 239, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `img`
--

CREATE TABLE `img` (
  `id` bigint UNSIGNED NOT NULL,
  `url` varchar(400) COLLATE utf8mb4_general_ci NOT NULL,
  `order_img` bigint UNSIGNED NOT NULL,
  `id_product` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `img`
--

INSERT INTO `img` (`id`, `url`, `order_img`, `id_product`) VALUES
(1, 'TISSOT CHRONO XL CLASSIC 01.png', 1, 1),
(2, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 42 MM 01.png', 1, 2),
(3, 'TISSOT TRADITION 01.png', 1, 3),
(4, 'TISSOT-PR-100-CHRONOGRAPH 01.png', 1, 4),
(5, 'TISSOT-SEASTAR-1000-40MM 01.png', 1, 50),
(6, 'TISSOT-LOVELY 01.png', 1, 60),
(7, 'TISSOT-FLAMINGO 01.png', 1, 6),
(8, 'TISSOT-LE-LOCLE-AUTOMATIC-LADY-_29.00_ 01.png', 1, 80),
(9, 'TISSOT T-COMPLICATION MECHANICAL COSC 01.png', 1, 90),
(10, 'TISSOT PR 100 SPORT CHIC 01.png', 1, 100),
(11, 'TISSOT T-MY LADY AUTOMATIC 01.png', 1, 110),
(12, 'TISSOT-PRX-POWERMATIC-80 01.png', 1, 120),
(13, 'TISSOT CHRONO XL CLASSIC 02.png', 2, 1),
(14, 'TISSOT CHRONO XL CLASSIC 03.png', 3, 1),
(15, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 42 MM 02.png', 2, 2),
(16, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 42 MM 03.png', 3, 2),
(17, 'TISSOT TRADITION 03.png', 3, 3),
(18, 'TISSOT-PR-100-CHRONOGRAPH 03.png', 3, 4),
(19, 'TISSOT-SEASTAR-1000-40MM 02.png', 2, 50),
(20, 'TISSOT-SEASTAR-1000-40MM 03.png', 3, 50),
(21, 'TISSOT-LOVELY 02.png', 2, 60),
(22, 'TISSOT-LOVELY 03.png', 3, 60),
(23, 'TISSOT-FLAMINGO 03.png', 3, 6),
(24, 'TISSOT-LE-LOCLE-AUTOMATIC-LADY-_29.00_ 03.png', 3, 80),
(25, 'TISSOT T-COMPLICATION MECHANICAL COSC 03.png', 3, 90),
(26, 'TISSOT PR 100 SPORT CHIC 03.png', 3, 100),
(27, 'TISSOT T-MY LADY AUTOMATIC 02.png', 2, 110),
(28, 'TISSOT T-MY LADY AUTOMATIC 03.png', 3, 110),
(29, 'TISSOT-PRX-POWERMATIC-80 02.png', 2, 120),
(30, 'TISSOT-PRX-POWERMATIC-80 03.png', 3, 120),
(82, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80_blue 01.png', 1, 11),
(83, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80_blue 02.png', 2, 11),
(84, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80_blue 03.png', 3, 11),
(85, 'TISSOT CHRONO XL CLASSIC green 01.png', 1, 7),
(86, 'TISSOT CHRONO XL CLASSIC green 02.png', 2, 7),
(87, 'TISSOT CHRONO XL CLASSIC green 03.png', 3, 7),
(88, 'TISSOT CHRONO XL blue 01.png', 1, 10),
(89, 'TISSOT CHRONO XL blue 02.png', 2, 10),
(90, 'TISSOT CHRONO XL blue 03.png', 3, 10),
(91, 'TISSOT BALLADE POWERMATIC 80 SILICIUM 01.png', 1, 77),
(92, 'TISSOT BALLADE POWERMATIC 80 SILICIUM 02.png', 2, 77),
(93, 'TISSOT BALLADE POWERMATIC 80 SILICIUM 03.png', 3, 77),
(94, 'TISSOT SUPERSPORT CHRONO 01.png', 1, 130),
(95, 'TISSOT SUPERSPORT CHRONO 02.png', 2, 130),
(96, 'TISSOT SUPERSPORT CHRONO 03.png', 3, 130),
(97, 'TISSOT T-RACE AUTOMATIC CHRONOGRAPH 01.png', 1, 140),
(98, 'TISSOT T-RACE AUTOMATIC CHRONOGRAPH 02.png', 2, 140),
(99, 'TISSOT T-RACE AUTOMATIC CHRONOGRAPH 03.png', 3, 140),
(100, 'TISSOT TRADITION white 01.png', 1, 5),
(101, 'TISSOT TRADITION white 03.png', 3, 5),
(102, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 LADY blue 01.png', 1, 8),
(103, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 LADY blue 02.png', 2, 8),
(104, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 LADY blue 03.png', 3, 8),
(278, 'TISSOT SUPERSPORT CHRONO brown 01.png', 1, 364),
(279, 'TISSOT SUPERSPORT CHRONO brown 02.png', 2, 364),
(280, 'TISSOT SUPERSPORT CHRONO brown 03.png', 3, 364),
(281, 'TISSOT PR 100 SPORT GENT brown 01.png', 1, 365),
(282, 'TISSOT PR 100 SPORT GENT brown 02.png', 2, 365),
(283, 'TISSOT PR 100 SPORT GENT brown 03.png', 3, 365),
(284, 'TISSOT TRADITION CHRONOGRAPH black 01.png', 1, 366),
(285, 'TISSOT TRADITION CHRONOGRAPH black 02.png', 2, 366),
(286, 'TISSOT TRADITION CHRONOGRAPH black 03.png', 3, 366),
(287, 'TISSOT T-MY LADY AUTOMATIC 18K GOLD BEZEL 01.png', 1, 367),
(288, 'TISSOT T-MY LADY AUTOMATIC 18K GOLD BEZEL 02.png', 2, 367),
(289, 'TISSOT T-MY LADY AUTOMATIC 18K GOLD BEZEL 03.png', 3, 367);

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(10,0) UNSIGNED NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `weight` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `watertight` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `stock_quantity` smallint UNSIGNED NOT NULL,
  `case_glass` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `case_width` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `case_length` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `case_thickness` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `stones_mechanism` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `caliber_diametr_mechanism` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `id_mechanism` bigint UNSIGNED NOT NULL,
  `id_strap_color` bigint UNSIGNED NOT NULL,
  `id_strap_material` bigint UNSIGNED NOT NULL,
  `id_face_color` bigint UNSIGNED NOT NULL,
  `id_gender` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `description`, `weight`, `watertight`, `stock_quantity`, `case_glass`, `case_width`, `case_length`, `case_thickness`, `stones_mechanism`, `caliber_diametr_mechanism`, `id_mechanism`, `id_strap_color`, `id_strap_material`, `id_face_color`, `id_gender`) VALUES
(1, 'TISSOT CHRONO XL CLASSIC', '50000', 'Tissot Chrono XL — это великолепные часы для тех, кто ищет ультрамодный хронограф со спортивным дизайном, изготовленный по швейцарским технологиям. Этот спортивный кварцевый хронограф с корпусом 45 мм - один из самых крупных в коллекции Tissot.', ' 175', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 150, 'Устойчивое к появлению царапин сапфировое стекло', ' 45.00', ' 45.00', ' 11', 'Швейцарский кварцевый механизм', '29,8', 1, 1, 1, 3, 1),
(2, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 42 MM', '40000', 'Tissot Chemin des Tourelles — это совершенно особая модель, в которой сконцентрирована важная часть истории бренда Tissot. Свое название модель получила благодаря улице в Ле Локль, в Швейцарии, на которой в 1907 была построена фабрика Tissot, продолжающая свою работу по сей день. Современный дизайн и элегантный корпус отдают дань многолетнему мастерству бренда. Результат получился роскошным, но достаточно доступным благодаря оптимальному соотношению цены и качества, которым гордится компания Tissot.', ' 138', 'Водонепроницаемость до 5 бар (50 м / 165 футов)', 400, 'Устойчивое к появлению царапин выпуклое сапфировое стекло с антибликовым покрытием', '42.00', '42.00', '11.3', 'Швейцарский автоматический механизм', '25,6', 2, 1, 1, 5, 1),
(3, 'TISSOT TRADITION', '65000', 'Семейство часов Tissot Tradition - это ультрасовременные модели, в которых чувствуется легкий оттенок ностальгии, а новейшие технологии дополняет стильный винтажный дизайн. Высокие технологии превосходно сочетаются с классическими деталями и изящными элементами винтажного дизайна, такими, как гильошированный узор поверхности и легкий изгиб корпуса часов. Обладатели часов Tissot Tradition имеют возможность бесконечно наслаждаться их гармоничным внешним видом и безупречной точностью.', '120', 'Водонепроницаемость до 3 бар (30 м / 100 футов)', 840, 'Устойчивое к появлению царапин выпуклое сапфировое стекло', '42.00', '42.00', '7.5', 'Швейцарский кварцевый механизм', '25,6', 1, 3, 1, 2, 1),
(4, 'TISSOT PR 100 CHRONOGRAPH', '75000', 'Tissot PR 100 ― это классические часы, которые предназначены для повседневной носки и отлично смотрятся в любой ситуации. Модель отличается столь любимым поклонниками коллекции простым элегантным циферблатом и лаконичной эстетикой ― воплощением роскоши, высокого качества исполнения и традиционного стиля.', '115', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 550, 'Устойчивое к появлению царапин сапфировое стекло', '41.00', '41.00', '10.7', 'Швейцарский кварцевый механизм', '29,8', 3, 2, 1, 2, 1),
(5, 'TISSOT TRADITION', '43000', 'Семейство часов Tissot Tradition - это ультрасовременные модели, в которых чувствуется легкий оттенок ностальгии, а новейшие технологии дополняет стильный винтажный дизайн. Высокие технологии превосходно сочетаются с классическими деталями и изящными элементами винтажного дизайна, такими, как гильошированный узор поверхности и легкий изгиб корпуса часов. Обладатели часов Tissot Tradition имеют возможность бесконечно наслаждаться их гармоничным внешним видом и безупречной точностью.', '120', 'Водонепроницаемость до 3 бар (30 м / 100 футов)', 840, 'Устойчивое к появлению царапин выпуклое сапфировое стекло', '42.00', '42.00', '7.5', 'Швейцарский кварцевый механизм', '25,6', 3, 3, 1, 1, 1),
(6, 'TISSOT FLAMINGO', '57000', 'Линии часов Tissot Flamingo олицетворяют собой исключительную лаконичность. Этому элегантному ювелирному творению с гармонично простым и модным обликом суждено стать вечно актуальной классикой.', '62', 'Водонепроницаемость до 5 бар (50 м / 165 футов)', 460, 'Устойчивое к появлению царапин сапфировое стекло', '30.00', '30.00', '6.4', 'Швейцарский кварцевый механизм', '17,2', 1, 1, 1, 3, 2),
(7, 'TISSOT CHRONO XL CLASSIC', '50000', 'Часы Tissot Chrono XL отличаются большим корпусом диаметром 45 мм. Функция хронографа подчеркивает его урбанистический дух. Коллекция Tissot Chrono XL подойдет как для тех, кто предпочитает спортивный стиль на стальном браслете, так и винтажный стиль на кожаном ремешке. Какую бы модель вы ни выбрали, Tissot Chrono XL обязательно раскроет вашу индивидуальность.', ' 175', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 170, 'Устойчивое к появлению царапин сапфировое стекло', ' 45.00', ' 45.00', '11', ' Швейцарский кварцевый механизм', '29,8', 3, 3, 1, 5, 1),
(8, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80 LADY', '30000', 'Tissot Chemin des Tourelles — это совершенно особая модель, в которой сконцентрирована важная часть истории бренда Tissot. Свое название модель получила благодаря улице в Ле Локль, в Швейцарии, на которой в 1907 была построена фабрика Tissot, продолжающая свою работу по сей день. Современный дизайн и элегантный корпус отдают дань многолетнему мастерству бренда. Результат получился роскошным, но достаточно доступным благодаря оптимальному соотношению цены и качества, которым гордится компания Tissot.', '83', ' Водонепроницаемость до 5 бар (50 м / 165 футов)', 170, 'Устойчивое к появлению царапин выпуклое сапфировое стекло с двусторонним антибликовым покрытием', ' 32.00', ' 32.00', ' 10.7', 'Швейцарский автоматический механизм', '25,6', 3, 3, 1, 3, 2),
(10, 'TISSOT CHRONO XL', '40000', 'Tissot Chrono XL — это великолепные часы для тех, кто ищет ультрамодный хронограф со спортивным дизайном, изготовленный по швейцарским технологиям. Этот спортивный кварцевый хронограф с корпусом 45 мм - один из самых крупных в коллекции Tissot.', ' 79', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 780, 'Устойчивое к появлению царапин сапфировое стекло', ' 45.00', ' 45.00', ' 11', ' Швейцарский кварцевый механизм', ' 29,8', 1, 2, 2, 2, 1),
(11, 'TISSOT CHEMIN DES TOURELLES POWERMATIC 80', '72000', 'Tissot Chemin des Tourelles — это совершенно особая модель, в которой сконцентрирована важная часть истории бренда Tissot. Свое название модель получила благодаря улице в Ле Локль, в Швейцарии, на которой в 1907 была построена фабрика Tissot, продолжающая свою работу по сей день. Современный дизайн и элегантный корпус отдают дань многолетнему мастерству бренда. Результат получился роскошным, но достаточно доступным благодаря оптимальному соотношению цены и качества, которым гордится компания Tissot.', '79', 'Водонепроницаемость до 5 бар (50 м / 165 футов)', 120, 'Устойчивое к появлению царапин выпуклое сапфировое стекло с антибликовым покрытием', ' 42.00', ' 42.00', ' 10.9', ' Швейцарский автоматический механизм', ' 25,6', 3, 4, 2, 3, 1),
(50, 'TISSOT SEASTAR 1000 40MM', '100000', 'С первого взгляда и до повседневного использования модель Seastar 1000 40 мм воплощает в себе стиль, производительность и универсальность. Каждая модель представляет собой гармоничный союз элегантности и технологии, объединяющий швейцарское часовое ноу-хау и вечный дизайн. Этот универсальный размер корпуса предназначен для тех, кто ищет шикарные, со вкусом подобранные часы, которые можно использовать как днем, так и вечером, при этом обладая исключительными техническими характеристиками. Как и существующие модели 36 мм и 45,5 мм, эти часы получили свое название благодаря сертификату водонепроницаемости 1 000 футов, что эквивалентно 30 АТМ или 300 м. Они оснащены однонаправленными вращающимися безелями для надежного определения времени под водой. ', '134', 'Водонепроницаемость до 30 бар (300 м / 1000 футов)', 230, 'Устойчивое к появлению царапин сапфировое стекло с двусторонним антибликовым покрытием', '40.00', '40.00', '10', 'Швейцарский кварцевый механизм', '25,6', 1, 1, 1, 2, 1),
(60, 'TISSOT LOVELY', '35000', 'Эти очаровательные часы, несмотря на небольшой размер корпуса круглой формы, являются настоящим олицетворением класса, роскоши и женственности. Это действительно прелестные часы, обладающие неотразимым шармом и полностью соответствующие своему названию.', '33', 'Водонепроницаемость до 3 бар (30 м / 100 футов)', 830, 'Устойчивое к появлению царапин сапфировое стекло', '19.50', '19.50', '5', 'Швейцарский кварцевый механизм', '13 x 15.15', 1, 1, 1, 4, 2),
(77, 'TISSOT BALLADE POWERMATIC 80 SILICIUM', '26000', 'Компания Tissot обладает опытом производства высокоточных и сверхнадежных механических часов, которые обеспечили ей большое количество призов в международных состязаниях в области хронометрии. Время не претерпевает изменений, однако точность его измерения повышается с развитием новых технологий. Мы совершили переход от использования песочных часов до производства кремниевых спиралей балансового колеса, лежащих в основе часового механизма. Свойства кремния позволяют последней быть более устойчивой и стабильной, что повышает точность хода и продлевает срок службы часов. Именно такая пружина установлена во впечатляющий своими характеристиками  механизм Powermatic 80, который обеспечивает до 80 часов запас хода. ', ' 131', ' Водонепроницаемость до 5 бар (50 м / 165 футов)', 620, 'Устойчивое к появлению царапин сапфировое стекло', ' 41.00', ' 39.00', ' 9.6', 'Швейцарский автоматический механизм', ' 25,6', 2, 1, 1, 2, 1),
(80, 'TISSOT LE LOCLE AUTOMATIC LADY (29.00)', '28000', 'Есть подозрение, что наименование Le Locle является надежной составляющей успеха. Это не только имя городка в швейцарских горах Юра, родины компании Tissot, но и название невероятно популярного семейства автоматических часов, которые отличаются изысканной элегантностью и такими непременными деталями, как римские цифры и традиционная марка «Le Locle», с изысканным росчерком подтверждающая достоверность и качество классического шика.', '39', 'Водонепроницаемость до 3 бар (30 м / 100 футов)', 160, 'Устойчивое к появлению царапин сапфировое стекло', '29.00', '29.00', '9', 'Швейцарский автоматический механизм', '17,2', 2, 5, 2, 4, 2),
(90, 'TISSOT T-COMPLICATION MECHANICAL COSC', '72000', 'Мужские швейцарские механические часы из коллекции T-Complication позволят вам выразить вашу разборчивость в часовом искусстве.  Наручные часы в классическом исполнении станут стильным дополнением к образу солидного и делового мужчины. Чёрный циферблат с узором и отдельным счётчиком секунд гармонирует с ремешком из натуральной кожи ему в тон. Аксессуар измеряет время с абсолютной точностью, что подтверждено сертификатом COSC. Часы с ручным заводом оснащены калибром ETA 6498-2, что позволяет прикоснуться к традициям часовых мастеров. Прозрачная задняя крышка позволяет следить за движением частиц механизма, отдельную красоту придаёт отделка \"женевские волны\". Сапфировое стекло с антибликовой поверхностью. Водонепроницаемость при давлении 5 бар. Габариты: 43 x 43 x 11 мм.', '97', 'Водонепроницаемость до 5 бар (50 м / 165 футов)', 250, 'Устойчивое к появлению царапин сапфировое стекло с двусторонним антибликовым покрытием', '43.00', '43.00', '11', 'Швейцарский механизм', '36,6', 3, 2, 2, 2, 1),
(100, 'TISSOT PR 100 SPORT CHIC', '76000', 'Tissot PR 100 ― это классические часы, которые предназначены для повседневной носки и отлично смотрятся в любой ситуации. Модель отличается столь любимым поклонниками коллекции простым элегантным циферблатом и лаконичной эстетикой ― воплощением роскоши, высокого качества исполнения и традиционного стиля.', '112', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 570, 'Устойчивое к появлению царапин сапфировое стекло', '36.00', '36.00', '9', 'Швейцарский кварцевый механизм', '23.30', 1, 1, 1, 4, 2),
(110, 'TISSOT T-MY LADY AUTOMATIC', '82000', 'Женские швейцарские механические часы Tissot T-My Lady Automatic T132.007.11.046.00 станут роскошным украшением вашего образа. Наручные часы будут идеальным аксессуаром на торжественное мероприятие или бизнес-встречу. Корпус выполнен из нержавеющей стали 316L, мягкий блеск которого идеально гармонирует с серебристым стальным браслетом. Классический циферблат декорирован 8 бриллиантами в 0,016 карат, заменяющими индексы. Модель оснащена уникальным автоматическим механизмом ETA Powermatic 48.111, сохраняющим запас хода на 48 часов. Калибр украшен волновыми узорами, его безупречная отделка просматривается сквозь прозрачную заднюю крышку. Сапфировое стекло препятствует образованию царапин. На позиции 3 часов – апертура даты. Габариты: 29.3 x 29.3 x 10.6 мм. Производство и сборка: Швейцария.', '83', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 170, 'Устойчивое к появлению царапин выпуклое сапфировое стекло', '29.30', '29.30', '10.6', 'Швейцарский автоматический механизм', '17.2', 2, 3, 1, 1, 2),
(120, 'TISSOT PRX POWERMATIC 80', '45000', 'Часовой дом Tissot с гордостью представляет знаменитую модель PRX Automatic 80. Дизайн PRX Automatic 80 отражает современный интерес к винтажному стилю 70-х. Отправной точкой для новинки стала революционная для того времени модель часов Tissot, увидевшая свет в 1978 году. Часы оснащены надежным механизмом Powermatic 80 с автоподзаводом, обеспечивающим надежность и точность благодаря инновационной пружине Nivachron. С момента своего появления на публике современная интерпретация модели покоряет представителей сильной половины человечества вне зависимости от возраста. Можете не сомневаться: Tissot Powermatic 80 — Ваш новый выбор.', ' 138', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 120, 'Устойчивое к появлению царапин сапфировое стекло с антибликовым покрытием', '40.00', '39.50', '10.9', 'Швейцарский автоматический механизм', '25,6', 2, 1, 1, 3, 1),
(130, 'TISSOT SUPERSPORT CHRONO', '68000', 'Коллекция Tissot Supersport Chrono предлагает широкий спектр моделей, предоставляя каждому возможность выбрать часы, которые лучше всего подходят для запястья.Tissot Supersport Chrono имеет прямые линии и острые края, придающие корпусу 45,5 мм особую индивидуальность. Циферблат с массивными индексами, заполненными SuperLuminova® и асимметричными аппликациями, добавляет мощный 3D-эффект и обеспечивает читаемость в темных условиях.', '188', ' Водонепроницаемость до 10 бар (100 м / 330 футов)', 450, 'Устойчивое к появлению царапин сапфировое стекло', ' 45.50', ' 45.50', ' 11.9', 'Швейцарский кварцевый механизм', ' 29,8', 1, 2, 1, 2, 1),
(140, 'TISSOT T-RACE AUTOMATIC CHRONOGRAPH', '70000', 'Часы серии Tissot T-Race Chronograph посвящены одному из самых захватывающих и скоростных видов спорта в мире. В основу конструкции часов легли рама и детали мотоциклов, которые нашли отражение в таких элементах, как безель в виде тормозного диска, счетчики в стиле приборной доски и следы протекторов шин на циферблате.', '152', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 250, 'Устойчивое к появлению царапин сапфировое стекло с антибликовым покрытием', ' 45.00', '48.80', ' 16.6', ' Швейцарский автоматический хронограф', ' 30', 2, 4, 2, 3, 1),
(364, 'TISSOT SUPERSPORT CHRONO', '87000', 'Совершенно новая коллекция Tissot Supersport Chrono предлагает широкий спектр моделей, предоставляя каждому возможность выбрать часы, которые лучше всего подходят для запястья.Tissot Supersport Chrono имеет прямые линии и острые края с ярким дизайном, который придает корпусу 45,5 мм особую индивидуальность. Циферблат с массивными индексами, заполненными SuperLuminova® и асимметричными аппликациями, добавляет мощный 3D-эффект и обеспечивает читаемость в темных условиях.', ' 104', 'Водонепроницаемость до 10 бар (100 м / 330 футов)', 243, 'Устойчивое к появлению царапин сапфировое стекло', ' 45.50', ' 45.50', ' 11.9', 'Швейцарский кварцевый механизм', ' 29,8', 3, 5, 2, 4, 1),
(365, 'TISSOT PR 100 SPORT GENT', '13000', 'Tissot PR 100- спортивные, роскошные часы для повседневного образа. Они отличается простым и лаконичным дизайном, за который так любят коллекцию. Часы водонепроницаемы до давления 10 бар (100 м/330 футов), индексы на циферблате выполнены из люминесцентного материала, что придает этим часам элегантный и оригинальный вид.', ' 70', ' Водонепроницаемость до 10 бар (100 м / 330 футов)', 523, 'Устойчивое к появлению царапин сапфировое стекло', ' 42.00', ' 42.00', ' 9.4', ' Швейцарский кварцевый механизм', ' 25,6', 3, 5, 2, 1, 1),
(366, 'TISSOT TRADITION CHRONOGRAPH', '92000', 'Семейство часов Tissot Tradition - это ультрасовременные модели, в которых чувствуется легкий оттенок ностальгии, а новейшие технологии дополняет стильный винтажный дизайн. Высокие технологии превосходно сочетаются с классическими деталями и изящными элементами винтажного дизайна, такими, как гильошированный узор поверхности и легкий изгиб корпуса часов. Обладатели часов Tissot Tradition имеют возможность бесконечно наслаждаться их гармоничным внешним видом и безупречной точностью.', ' 67', ' Водонепроницаемость до 3 бар (30 м / 100 футов)', 635, 'Устойчивое к появлению царапин выпуклое сапфировое стекло', ' 42.00', ' 42.00', ' 11.1', ' Швейцарский кварцевый механизм', '29,8', 1, 2, 2, 2, 1),
(367, 'TISSOT T-MY LADY AUTOMATIC 18K GOLD BEZEL', '95000', 'Tissot T-My Lady — это не просто женские часы. Их концепция и дизайн позволяют адресовать их любой представительнице прекрасного пола: элегантной, утонченной, бизнес-леди — любой женщине, которая видит в часах аксессуар вневременного уровня. Миниатюрный и женственный диаметр модели делает ее идеальным компаньоном на каждый день.', ' 46', ' Водонепроницаемость до 5 бар (50 м / 165 футов)', 521, 'Устойчивое к появлению царапин сапфировое стекло', ' 29.00', ' 29.00', ' 10.4', ' Швейцарский автоматический механизм', ' 17.2', 2, 4, 2, 3, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `purchase_status`
--

CREATE TABLE `purchase_status` (
  `id` bigint UNSIGNED NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `purchase_status`
--

INSERT INTO `purchase_status` (`id`, `status`) VALUES
(1, 'Не выбран'),
(2, 'Куплен'),
(3, 'Отменён'),
(4, 'Возвращён');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `delivery_addres` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_number` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_date` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_secret` varchar(3) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image_user` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_status` bigint UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `phone_number`, `delivery_addres`, `card_number`, `card_date`, `card_secret`, `image_user`, `id_status`) VALUES
(238, 'гриша', 'd8578edf8458ce06fbc5bb76a58c5ca4', '', '', NULL, NULL, NULL, 'user.jpg', 1),
(239, 'admin', '21232f297a57a5a743894a0e4a801fc3', '+7(960)780-87-67', 'Дзержинск ул. Гайдара, дом 50, кв. 20', NULL, NULL, NULL, 'admin.jpg', 2),
(240, 'аня', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(241, 'Полина', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(242, 'Марина', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(243, 'катя', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(244, 'Даня', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, 'kurumi.jpg', 1),
(245, 'Саша', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(246, 'Михаил', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(247, 'Олег', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(248, 'Ксюша', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, 'ксюша.gif', 1),
(249, 'павлик', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, 'успешный успех 2.png', 1),
(250, 'виталик', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(251, 'Егор', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(252, 'Ирина', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(253, 'fvf', 'd8578edf8458ce06fbc5bb76a58c5ca4', NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `user_status`
--

CREATE TABLE `user_status` (
  `id` bigint UNSIGNED NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `user_status`
--

INSERT INTO `user_status` (`id`, `status`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Структура таблицы `watch_face_color`
--

CREATE TABLE `watch_face_color` (
  `id` bigint UNSIGNED NOT NULL,
  `color` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `watch_face_color`
--

INSERT INTO `watch_face_color` (`id`, `color`) VALUES
(1, 'Белый'),
(2, 'Чёрный'),
(3, 'Синий'),
(4, 'Серебристый'),
(5, 'Зелёный');

-- --------------------------------------------------------

--
-- Структура таблицы `watch_mechanism`
--

CREATE TABLE `watch_mechanism` (
  `id` bigint UNSIGNED NOT NULL,
  `mechanism` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `watch_mechanism`
--

INSERT INTO `watch_mechanism` (`id`, `mechanism`) VALUES
(1, 'Кварцевый'),
(2, 'Автоматический подзавод'),
(3, 'Механический с ручным подзаводом');

-- --------------------------------------------------------

--
-- Структура таблицы `watch_strap_color`
--

CREATE TABLE `watch_strap_color` (
  `id` bigint UNSIGNED NOT NULL,
  `color` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `watch_strap_color`
--

INSERT INTO `watch_strap_color` (`id`, `color`) VALUES
(1, 'Серый'),
(2, 'Чёрный'),
(3, 'Белый'),
(4, 'Синий'),
(5, 'Коричневый');

-- --------------------------------------------------------

--
-- Структура таблицы `watch_strap_material`
--

CREATE TABLE `watch_strap_material` (
  `id` bigint UNSIGNED NOT NULL,
  `material` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `watch_strap_material`
--

INSERT INTO `watch_strap_material` (`id`, `material`) VALUES
(1, 'Стальной'),
(2, 'Кожаный');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `basket`
--
ALTER TABLE `basket`
  ADD KEY `user_product_id_user_index` (`id_user`),
  ADD KEY `user_product_id_product_index` (`id_product`);

--
-- Индексы таблицы `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`,`id_product`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_purchase_status` (`id_purchase_status`);

--
-- Индексы таблицы `delivery_status`
--
ALTER TABLE `delivery_status`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`,`id_product`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_product` (`id_product`);

--
-- Индексы таблицы `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_case` (`id_mechanism`,`id_strap_material`,`id_face_color`,`id_gender`),
  ADD KEY `id_strap_color` (`id_strap_color`),
  ADD KEY `id_gender` (`id_gender`),
  ADD KEY `id_strap_material` (`id_strap_material`),
  ADD KEY `id_face_color` (`id_face_color`);

--
-- Индексы таблицы `purchase_status`
--
ALTER TABLE `purchase_status`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`);

--
-- Индексы таблицы `user_status`
--
ALTER TABLE `user_status`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `watch_face_color`
--
ALTER TABLE `watch_face_color`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `watch_mechanism`
--
ALTER TABLE `watch_mechanism`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `watch_strap_color`
--
ALTER TABLE `watch_strap_color`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `watch_strap_material`
--
ALTER TABLE `watch_strap_material`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17937398544804101;

--
-- AUTO_INCREMENT для таблицы `delivery_status`
--
ALTER TABLE `delivery_status`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `gender`
--
ALTER TABLE `gender`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `history`
--
ALTER TABLE `history`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT для таблицы `img`
--
ALTER TABLE `img`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=290;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=368;

--
-- AUTO_INCREMENT для таблицы `purchase_status`
--
ALTER TABLE `purchase_status`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=254;

--
-- AUTO_INCREMENT для таблицы `user_status`
--
ALTER TABLE `user_status`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `watch_face_color`
--
ALTER TABLE `watch_face_color`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `watch_mechanism`
--
ALTER TABLE `watch_mechanism`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `watch_strap_color`
--
ALTER TABLE `watch_strap_color`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `watch_strap_material`
--
ALTER TABLE `watch_strap_material`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `basket_ibfk_4` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `delivery_ibfk_4` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `delivery_ibfk_5` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `delivery_ibfk_6` FOREIGN KEY (`id_status`) REFERENCES `delivery_status` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `delivery_ibfk_7` FOREIGN KEY (`id_purchase_status`) REFERENCES `purchase_status` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `history_ibfk_3` FOREIGN KEY (`id_status`) REFERENCES `purchase_status` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `img`
--
ALTER TABLE `img`
  ADD CONSTRAINT `img_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_10` FOREIGN KEY (`id_face_color`) REFERENCES `watch_face_color` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `product_ibfk_6` FOREIGN KEY (`id_strap_color`) REFERENCES `watch_strap_color` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `product_ibfk_7` FOREIGN KEY (`id_gender`) REFERENCES `gender` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `product_ibfk_8` FOREIGN KEY (`id_mechanism`) REFERENCES `watch_mechanism` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `product_ibfk_9` FOREIGN KEY (`id_strap_material`) REFERENCES `watch_strap_material` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `user_status` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
