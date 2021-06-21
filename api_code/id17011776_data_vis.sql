-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Giu 16, 2021 alle 14:09
-- Versione del server: 10.3.16-MariaDB
-- Versione PHP: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id17011776_data_vis`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `categories`
--

CREATE TABLE `categories` (
  `CategoryID` int(11) NOT NULL,
  `category_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dump dei dati per la tabella `categories`
--

INSERT INTO `categories` (`CategoryID`, `category_name`) VALUES
(1, 'langage front'),
(2, 'langage back'),
(3, 'langage front back'),
(4, 'framework front'),
(5, 'framework back'),
(6, 'serveur '),
(7, 'BDD'),
(8, 'outil');

-- --------------------------------------------------------

--
-- Struttura della tabella `category_id`
--

CREATE TABLE `category_id` (
  `CategoryID` int(11) NOT NULL,
  `TechnoID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dump dei dati per la tabella `category_id`
--

INSERT INTO `category_id` (`CategoryID`, `TechnoID`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(4, 14),
(4, 15),
(4, 16),
(4, 17),
(4, 18),
(4, 19),
(4, 20),
(5, 21),
(5, 22),
(5, 23),
(5, 24),
(5, 25),
(5, 26),
(6, 27),
(6, 28),
(6, 29),
(7, 30),
(7, 31),
(7, 32),
(7, 33),
(7, 34),
(8, 35),
(8, 36),
(8, 37),
(8, 38),
(8, 39),
(8, 40),
(8, 41);

-- --------------------------------------------------------

--
-- Struttura della tabella `contenu`
--

CREATE TABLE `contenu` (
  `contenuID` int(11) NOT NULL,
  `codeBrut` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dump dei dati per la tabella `contenu`
--

INSERT INTO `contenu` (`contenuID`, `codeBrut`) VALUES
(1, '<div class=\"infosScroll\" id=\"y2004\">\r\n        <section id=\"section24M\">\r\n            <h1 class=\"line\" class=\"titre24M\">24 millions</h1>\r\n            <p class=\"text24M\">Nombre de serveurs web en <em>2000</em>, contre <em>10 000</em> en 1993</p>\r\n        </section>\r\n        <section id=\"sectionPie\">\r\n            <img id=\"fichePie\" src=\"./view/ressources/fichePie.svg\" alt=\"\">\r\n            <img id=\"piechart\" src=\"./view/ressources/Piechart.svg\" alt=\"\">\r\n            <img id=\"piechartresp\" src=\"./view/ressources/PiechartResponsive.svg\" alt=\"\">\r\n            <span id=\"detail1\">Apache serveur HTTP le plus populaire depuis 1996</span>\r\n            <img id=\"Franke\" src=\"./view/ressources/Franke.svg\" alt=\"\">\r\n        </section>\r\n\r\n        <section id=\"section74\">\r\n            <h1 class=\"titre74\">74 000%</h1>\r\n            <p class=\"text74\">C\'est le taux d\'augmentation du nombre de site web en 5 ans : <em>23 000</em> en 1995 à <em>17 000 0000</em> en 2000.\r\n            </p>\r\n        </section>\r\n        <section id=\"flexrect\">\r\n            <img id=\"diagramme\" src=\"view/ressources/diagramme.svg\" alt=\"\">\r\n            <p class=\"diagtext\">Les languages propres au web font parti du top des languages de programmation.</p>\r\n        </section>\r\n        <section class=\"sectionlien\">\r\n            <a class=\"return\" href=\"#mon_app\">Revenir au quadrant</a>\r\n        </section>\r\n    </div>'),
(2, '<div class=\"infosScroll2\" id=y2012>\r\n        <section class=\"section63\">\r\n            <h1 class=\"line\" class=\"titre63\">-63%</h1>\r\n            <p class=\"text63\">C’est le pourcentage de croissance de     php entre 2004 et 2012.\r\n                Cette décroissance est explicable par le <em>lancement de 4 des principaux\r\n                frameworks back-end</em>, entrainant une perte de popularité pour le php\r\n                natif.</p>\r\n        </section>\r\n        <section class=\"sectionCourbe\">\r\n            <img id=\"graph2012resp\" src=\"./view/ressources/graph2012resp.svg\" alt=\"\">\r\n\r\n            <img id=\"graph2012\" src=\"./view/ressources/graph2012.png\" alt=\"\">\r\n\r\n        </section>\r\n\r\n        <section class=\"section7M\">\r\n            <h1 class=\"titre7M\">7 millions</h1>\r\n            <p class=\"text7M\">C’est le cumul des points de popularité de Wordpress et Joomla! pour l’année\r\n                2012. Wordpress atteint à lui seul la 4ème place des technos les plus populaires\r\n                derrière SQL, Adobe flash et Java.</p>\r\n        </section>\r\n        <section class=\"section69\">\r\n            <h1 class=\"titre69\">-69%</h1>\r\n            <p class=\"text69\">C’est le taux de croissance subit par IIS (Internet Information Services) qui\r\n                le met en premère place des technos suceptibles de mourir.</p>\r\n        </section>\r\n        <section class=\"sectionlien2\">\r\n            <a class=\"return2\" href=\"#mon_app\">Revenir au quadrant</a>\r\n        </section>\r\n    </div>'),
(3, '<div class=\"infosScroll3\" id=y2017>\r\n        <section class=\"section2017_1\">\r\n            <img id=\"graph2017_1Resp\" src=\"./view/ressources/graph2017_1Resp.svg\" alt=\"\">\r\n            <img id=\"graph2017_1\" src=\"./view/ressources/graph2017_1.svg\" alt=\"\">\r\n        </section>\r\n        <section class=\"section119\">\r\n            <h1 class=\"line\" class=\"titre119\">1.19 milliards</h1>\r\n            <p class=\"text119\">C’est le nombre estimé de personnes utilisant un téléphone pour aller sur facebook.\r\n                Ce chiffre explique la montée en puissance du langage de programmation Kotlin créé\r\n                pour les mobiles utilisant Android, son concurrent direct. IOs, lui, passera petit à petit \r\n                d’Objective-C à Swift(permet une réelle intégration avec Objective-C, C, C++ et\r\n                C#).</p>\r\n        </section>\r\n        <section class=\"section2017_2\">\r\n            <img id=\"graph2017_2Resp\" src=\"./view/ressources/graph2017_2Resp.svg\" alt=\"\">\r\n            <img id=\"graph2017_2\" src=\"./view/ressources/graph2017_2.svg\" alt=\"\">\r\n        </section>\r\n        <section class=\"section44\">\r\n            <h1 class=\"titre44\">+44%</h1>\r\n            <p class=\"text44\">C’est l’évolution de l’intérêt de Nginx entre 2012 et 2017, dépassant IIS et concurrençant \r\n                directement le géant Apache.</p>\r\n        </section>\r\n        <section class=\"section2017_3\">\r\n            <img id=\"graph2017_3Resp\" src=\"./view/ressources/graph2017_3Resp.svg\" alt=\"\">\r\n            <img id=\"graph2017_3\" src=\"./view/ressources/graph2017_3.svg\" alt=\"\">\r\n        </section>\r\n        <section class=\"sectionlien3\">\r\n            <a class=\"return3\" href=\"#mon_app\">Revenir au quadrant</a>\r\n        </section>\r\n    </div>\r\n'),
(4, '<div class=\"infosScroll4\" id=\"y2020\">\r\n        <section class=\"section79\">\r\n            <h1 class=\"line\" class=\"titre79\">79%</h1>\r\n            <p class=\"text79\">C\'est la part des 193 pays membres de l\'ONU qui possèdent au moins 1 portail gouvernemental \r\n                d\'open data en 2020. Cette part était de seulement 47% en 2018. Soit une progression de 32% en\r\n                2 ans\r\n        </section>\r\n        <section class=\"section344\">\r\n            <h1 class=\"titre344\">+344%</h1>\r\n            <p class=\"text344\"> C\'est la croissance d\'utilisation de Python dédié au machine learning entre 2013 et 2016.\r\n                Cette croissance n’a cessé d’augmenter jusqu’en 2020 ou Python est devenu le langage \r\n                de programmation le plus utilisé, dépassant l’anciennement indétronable Java.</p>\r\n        </section>\r\n        <section class=\"section2020\">\r\n            <img id=\"graph2020Resp\" src=\"./view/ressources/graph2020Resp.svg\" alt=\"\">\r\n            <img id=\"graph2020\" src=\"./view/ressources/graph2020.svg\" alt=\"\">\r\n        </section>\r\n        <section class=\"section31Md\">\r\n            <h1 class=\"titre31Md\">31 000 000 000 $</h1>\r\n            <p class=\"text31Md\">C’est la valeur estimée du marché du machine learning en 2024, laissant deviner\r\n                une continuité voir une augmentation de la domination de Python sur le marché\r\n                de l’intelligence artificielle et du monde du développement.</p>\r\n        </section>\r\n        <section class=\"section2012\">\r\n            <h1 class=\"titre2012\">31 décembre 2012</h1>\r\n            <p class=\"text2012\">C’est la date de la mort de Flash, techno mise à mal depuis l’annonce de l’iphone et n’ayant \r\n                pas évolué depuis, contrairement aux autres technos dédiée à l’animation et à l’affichage, \r\n                telles que HTML5, WebGL et WebAssembly.</p>\r\n        </section>\r\n        <section class=\"sectionlien4\">\r\n            <a class=\"return4\" href=\"#mon_app\">Revenir au quadrant</a>\r\n        </section>\r\n    </div>');

-- --------------------------------------------------------

--
-- Struttura della tabella `contenu_id`
--

CREATE TABLE `contenu_id` (
  `contenuID` int(5) NOT NULL,
  `yearID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dump dei dati per la tabella `contenu_id`
--

INSERT INTO `contenu_id` (`contenuID`, `yearID`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `contenu_years`
--

CREATE TABLE `contenu_years` (
  `yearID` int(5) NOT NULL,
  `Anne` varchar(5) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dump dei dati per la tabella `contenu_years`
--

INSERT INTO `contenu_years` (`yearID`, `Anne`) VALUES
(1, '2004'),
(2, '2012'),
(3, '2017'),
(4, '2020');

-- --------------------------------------------------------

--
-- Struttura della tabella `technologies`
--

CREATE TABLE `technologies` (
  `TechnoID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `technologies`
--

INSERT INTO `technologies` (`TechnoID`, `Name`) VALUES
(1, 'CSS'),
(2, 'C'),
(3, 'C ++'),
(4, 'Python'),
(5, 'PHP'),
(6, 'Java'),
(7, 'Ruby'),
(8, 'SQL'),
(9, 'C#'),
(10, 'JavaScript'),
(11, 'TypeScript'),
(12, 'Objetive-c'),
(13, 'Kotlin'),
(14, 'React.js'),
(15, 'React Native'),
(16, 'Angular JS'),
(17, 'Angular'),
(18, 'Vue.js'),
(19, 'Bootstrap'),
(20, 'Tailwind'),
(21, 'Laravel'),
(22, 'Symfony'),
(23, 'Rails'),
(24, 'Django'),
(25, 'CakePHP'),
(26, '.NET'),
(27, 'Apache'),
(28, 'Nginx'),
(29, 'IIS'),
(30, 'MySQL'),
(31, 'MongoDB'),
(32, 'SQL server'),
(33, 'PostgreSQL'),
(34, 'Oracle Database'),
(35, 'Adobe Flash'),
(36, 'Wordpress'),
(37, 'Shopify'),
(38, 'Joomla'),
(39, 'Node.js'),
(40, 'Low code / no code'),
(41, 'Git');

-- --------------------------------------------------------

--
-- Struttura della tabella `valeur`
--

CREATE TABLE `valeur` (
  `ValeurID` int(11) NOT NULL,
  `reference_year` int(255) NOT NULL,
  `users_number_year_reference` int(255) NOT NULL,
  `totale_users_year_2004` int(255) NOT NULL,
  `croissance_decroissance_2004` int(20) NOT NULL,
  `totale_users_year_2012` int(255) NOT NULL,
  `croissance_decroissance_2012` int(11) NOT NULL,
  `totale_users_year_2017` int(255) NOT NULL,
  `croissance_decroissance_2017` int(20) NOT NULL,
  `totale_users_year_2020` int(20) NOT NULL,
  `croissance_decroissance_2020` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `valeur`
--

INSERT INTO `valeur` (`ValeurID`, `reference_year`, `users_number_year_reference`, `totale_users_year_2004`, `croissance_decroissance_2004`, `totale_users_year_2012`, `croissance_decroissance_2012`, `totale_users_year_2017`, `croissance_decroissance_2017`, `totale_users_year_2020`, `croissance_decroissance_2020`) VALUES
(1, 2005, 5000000, 3580000, 72, 2330000, -25, 2040000, -6, 1660000, -8),
(2, 2004, 11500000, 8770000, 76, 3740000, -43, 2730000, -9, 1900000, -7),
(3, 2004, 6500000, 5250000, 81, 900000, -67, 780000, -2, 540000, -4),
(4, 2020, 10000000, 3780000, 37, 2580000, -12, 6380000, 38, 8080000, 16),
(5, 2004, 25640000, 20130000, 79, 4040000, -63, 2950000, -4, 1800000, -5),
(6, 2004, 5000000, 45510000, 83, 10730000, -64, 7010000, -7, 4260000, 5),
(7, 2004, 3500000, 691250, 20, 1250000, 16, 1330000, 2, 831250, -15),
(8, 2004, 21300000, 16600000, 78, 5900000, -50, 5000000, -5, 3890000, -7),
(9, 2004, 8300000, 6245750, 75, 3200000, -37, 3700000, 6, 2490000, -15),
(10, 2004, 20500000, 15680000, 77, 4150000, -56, 4400000, 1, 4300000, 0),
(11, 2019, 600000, 0, 0, 0, 0, 324000, 54, 472500, 25),
(12, 2010, 900000, 355500, 40, 585000, 26, 292500, -33, 76500, -24),
(13, 2020, 400000, 0, 0, 0, 0, 128000, 32, 283000, 39),
(14, 2019, 2200000, 0, 0, 0, 0, 990000, 45, 715000, -13),
(15, 2019, 600000, 0, 0, 0, 0, 333000, 56, 435000, 17),
(16, 2016, 1100000, 0, 0, 0, 0, 726000, -34, 198000, -48),
(17, 2019, 1800000, 0, 0, 0, 0, 1494000, 83, 1404000, -5),
(18, 2019, 800000, 0, 0, 0, 0, 600000, 75, 528000, -9),
(19, 2017, 2100000, 0, 0, 0, 0, 1785000, 85, 1176000, -29),
(20, 2021, 100000, 0, 0, 0, 0, 0, 0, 71000, 71),
(21, 2019, 1000000, 0, 0, 0, 0, 790000, 79, 810000, 2),
(22, 2017, 600000, 0, 0, 336000, 56, 534000, 33, 366000, -28),
(23, 2007, 3500000, 0, 0, 1855000, -47, 1715000, -4, 980000, -21),
(24, 2020, 600000, 0, 0, 330000, 55, 480000, 25, 456000, -4),
(25, 2010, 700000, 0, 0, 469000, -33, 224000, -35, 77000, -21),
(26, 2004, 11200000, 7420000, 66, 1484000, -53, 1148000, -3, 825000, -4),
(27, 2004, 6800000, 13800000, 80, 1040000, -65, 782000, -4, 650000, -2),
(28, 2017, 1000000, 0, 0, 317500, 32, 752500, 44, 690000, -6),
(29, 2004, 4300000, 3700000, 86, 731000, -69, 387000, -8, 0, 0),
(30, 2004, 11700000, 9623250, 82, 2018250, -65, 1404000, -5, 877500, -5),
(31, 2019, 700000, 0, 0, 185500, 27, 542500, 51, 593250, 7),
(32, 2004, 7800000, 6786000, 87, 2964000, 49, 2106000, -11, 1480000, -8),
(33, 2004, 2400000, 2112000, 88, 624000, -62, 840000, 9, 790000, -2),
(34, 2004, 5400000, 4428000, 82, 1650000, -52, 1230000, -8, 850000, -7),
(35, 2011, 15000000, 9600000, 64, 10950000, 9, 2400000, -57, 0, 0),
(36, 2014, 6200000, 0, 0, 4588000, 74, 4774000, 3, 3470000, -21),
(37, 2019, 500000, 0, 0, 10000, 2, 10000, 0, 35000, 5),
(38, 2010, 4400000, 0, 0, 2420000, 55, 440000, -45, 176000, -6),
(39, 2018, 1500000, 0, 0, 270000, 18, 1245000, 65, 990000, -17),
(40, 2021, 400000, 0, 0, 0, 0, 0, 0, 272000, 68),
(41, 2019, 2500000, 0, 0, 981250, 40, 2050000, 43, 1850000, -8);

-- --------------------------------------------------------

--
-- Struttura della tabella `valeur_id`
--

CREATE TABLE `valeur_id` (
  `ValeurID` int(11) NOT NULL,
  `TechnoID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `valeur_id`
--

INSERT INTO `valeur_id` (`ValeurID`, `TechnoID`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24),
(25, 25),
(26, 26),
(27, 27),
(28, 28),
(29, 29),
(30, 30),
(31, 31),
(32, 32),
(33, 33),
(34, 34),
(35, 35),
(36, 36),
(37, 37),
(38, 38),
(39, 39),
(40, 40),
(41, 41);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indici per le tabelle `category_id`
--
ALTER TABLE `category_id`
  ADD KEY `CategoryID` (`CategoryID`),
  ADD KEY `TechnoID` (`TechnoID`);

--
-- Indici per le tabelle `contenu`
--
ALTER TABLE `contenu`
  ADD PRIMARY KEY (`contenuID`);

--
-- Indici per le tabelle `contenu_id`
--
ALTER TABLE `contenu_id`
  ADD PRIMARY KEY (`contenuID`),
  ADD KEY `yearID` (`yearID`);

--
-- Indici per le tabelle `contenu_years`
--
ALTER TABLE `contenu_years`
  ADD PRIMARY KEY (`yearID`);

--
-- Indici per le tabelle `technologies`
--
ALTER TABLE `technologies`
  ADD PRIMARY KEY (`TechnoID`);

--
-- Indici per le tabelle `valeur`
--
ALTER TABLE `valeur`
  ADD PRIMARY KEY (`ValeurID`);

--
-- Indici per le tabelle `valeur_id`
--
ALTER TABLE `valeur_id`
  ADD PRIMARY KEY (`ValeurID`),
  ADD KEY `TechnoID` (`TechnoID`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `category_id`
--
ALTER TABLE `category_id`
  ADD CONSTRAINT `category_id_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `categories` (`CategoryID`),
  ADD CONSTRAINT `category_id_ibfk_2` FOREIGN KEY (`TechnoID`) REFERENCES `technologies` (`TechnoID`);

--
-- Limiti per la tabella `contenu_id`
--
ALTER TABLE `contenu_id`
  ADD CONSTRAINT `contenu_id_ibfk_1` FOREIGN KEY (`yearID`) REFERENCES `contenu_years` (`yearID`);

--
-- Limiti per la tabella `valeur`
--
ALTER TABLE `valeur`
  ADD CONSTRAINT `valeur_ibfk_1` FOREIGN KEY (`ValeurID`) REFERENCES `valeur_id` (`ValeurID`);

--
-- Limiti per la tabella `valeur_id`
--
ALTER TABLE `valeur_id`
  ADD CONSTRAINT `valeur_id_ibfk_1` FOREIGN KEY (`TechnoID`) REFERENCES `technologies` (`TechnoID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
