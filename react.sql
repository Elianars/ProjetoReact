-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Dez-2020 às 17:33
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `react`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `idcategoria` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`idcategoria`, `nome`) VALUES
(1, 'geladeira'),
(2, 'fogao'),
(3, 'microondas'),
(4, 'lavadora'),
(5, 'lavalouca');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(1, 'Ana Maria', 'Amei essa loja!', '2020-12-04 00:49:07'),
(2, 'José', 'Muito bom', '2020-12-04 12:42:44');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedido` int(11) NOT NULL,
  `nomecliente` varchar(100) NOT NULL,
  `endereco` varchar(200) NOT NULL,
  `telefone` varchar(200) NOT NULL,
  `nomeproduto` varchar(255) NOT NULL,
  `valorunitario` float NOT NULL,
  `quantidade` varchar(50) NOT NULL,
  `valortotal` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idprodutos` int(11) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `imagem` varchar(250) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `precofinal` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idprodutos`, `idcategoria`, `descricao`, `imagem`, `preco`, `precofinal`) VALUES
(1, 1, 'Geladeira Frost Free Brastemp Side Inverse 540 lit', 'img/img/Geladeira Frost Free Brastemp Side Inverse 540 litros.jpg', '6389.00', '5019.00'),
(2, 1, 'Geladeira Frost Free Consul Prata 340 litros', 'img/img/Geladeira Frost Free Consul Prata 340 litros.jpg', '2199.00', '2069.00'),
(3, 1, 'Geladeira Frost Free Brastemp Branca 375 litros', 'img/img/Geladeira Frost Free Brastemp Branca 375 litros.jpg', '2068.00', '1910.00'),
(4, 2, 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 'img/img/Fogão 4 Bocas Consul Inox com Mesa de Vidro.jpg', '3599.00', '2799.00'),
(5, 2, 'Fogão de Piso 4 Bocas Atlas Monaco com Acedimento ', 'img/img/Fogão de Piso 4 Bocas Atlas Monaco com Acedimento Automático.jpeg', '600.00', '519.00'),
(6, 3, 'Forno de Microondas Eletrolux 20L Branco', 'img/img/Forno de Microondas Eletrolux 20L Branco.jpg', '459.00', '436.00'),
(7, 3, 'Micro-ondas Consul 32 Litros Inox 220v.jpg', 'img/img/Micro-ondas Consul 32 Litros Inox 220v.jpg', '589.00', '409.00'),
(8, 3, 'Microondas 25L Espelhado Philco 220v', 'img/img/Microondas 25L Espelhado Philco 220v.jpg', '508.00', '464.00'),
(11, 4, 'Lavadora de Roupas Brastemp 11 kg com Turbo Perfor', 'img/img/Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca.jpg', '1699.00', '1214.00'),
(12, 4, 'Lavadora de Roupas Philco Inverter 12KG', 'img/img/Lavadora de Roupas Philco Inverter 12KG.jpg', '2399.00', '2179.00'),
(13, 5, 'Lava-Louças Electrolux Inox com 10 Serviços, 06 Pr', 'img/img/Lava-Louças Electrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch.jpg', '3599.00', '2799.00'),
(14, 5, 'Lava Louça Compacta 8 Serviços Branca 127V Brastem', 'img/img/Lava Louça Compacta 8 Serviços Branca 127V Brastemp.jpg', '1970.00', '1730.00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idcategoria`) USING BTREE;

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedido`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idprodutos`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idprodutos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
