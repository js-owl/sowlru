<?php
	session_start();
	require_once ("03_functions.php");
	function getOrders(){
		if(!file_exists(ORDERS_LOG)){
			return false;
		}
		$allOrders = array();
		$orders = file(ORDERS_LOG);
		foreach($orders as $order){
			//list()-присваивает списку переменных значения за одну операцию, работает только с массивами.
			// explode()- возвращает массив строк, полученных разбиением строки string с использованием separator
			$tmp_var=explode("|", $order);
			list($name,$email,$phone,$address,$customer,$datetime) = $tmp_var;
			$orderInfo = array();
			$orderInfo["name"] = $name;
			$orderInfo["email"] = $email;
			$orderInfo["phone"] = $phone;
			$orderInfo["address"] = $address;
			$orderInfo["datetime"] = $datetime*1;

			$query = "SELECT * FROM `orders` WHERE `customer`='$customer' AND `datetime`='".$orderInfo["datetime"]."';";
			$orderInfo["goods"]=select_query2array($query);
			$allOrders[] = $orderInfo;
		}
		return $allOrders;
	}
	$orders=getOrders();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=500, user-scalable=yes">
	<title>Поступившие заказы:</title>
	<link rel="stylesheet" href="css/style_bem.css">
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
</head>
<body>
	<div class="wrapper">
		<div class="header">
			<div class="header__logo">
				<a href="index.php"><img src="images/logo.png" alt="частный детский сад Мытищи Совенок"></a>
			</div>
			<div class="header__right">	
				<p class="header__contacts">г.Мытищи, ул.Колпакова, д.24</p>
				<a class="header__phone" href="tel:+79057750627">тел. 8(905)775-06-27</a>
			</div>
		</div>
		<h1>Поступившие заказы:</h1>
		<?php foreach($orders as $order){ ?>
		<div class="content">
			<p class="text">Заказчик: <?= $order["name"]; ?></p>
			<p class="text">Email: <?= $order["email"]; ?></p>
			<p class="text">Телефон: <?= $order["phone"]; ?></p>
			<p class="text">Адрес доставки: <?= $order["address"]; ?></p>
			<p class="text">Дата размещения заказа: <?= date("d.m  H:i", $order["datetime"]); ?></p>
			<p class="text text_bold">Купленные товары:</p>
			<table class='center'>
				<tr class="row">
					<td class="cell cell_50 "><p class="text text_bold">#</p></td>
					<td class="cell"><p class="text text_bold">Автор</p></td>
					<td class="cell"><p class="text text_bold">Название</p></td>
					<td class="cell cell_50"><p class="text text_bold">Год</p></td>
					<td class="cell cell_50"><p class="text text_bold">Цена</p></td>
					<td class="cell cell_50 "><p class="text text_bold">Кол.</p></td>
				</tr>
				<?php  
					$i=1; $sum=0;
					foreach($order["goods"] as $item){ 
				?>
				<tr class="row">
					<td class="cell cell_50 "><p class="text"><?= $i; ?></p></td>
					<td class="cell"><p class="text"><?= $item['author']; ?></p></td>
					<td class="cell"><p class="text"><?= $item['title']; ?></p></td>
					<td class="cell cell_50"><p class="text"><?= $item['pubyear']; ?></p></td>
					<td class="cell cell_50"><p class="text"><?= $item['price']; ?></p></td>
					<td class="cell cell_50"><p class="text"><?= $item['quantity']; ?></p></td>
				</tr>
				<?php 
					$i++;
					$sum += $item['price']*$item['quantity'];
					} 
				?>
			</table>
		</div>
		<div class="content">
			<p class="text text_right">Всего товаров на сумму: <?= $sum; ?> руб.</p>
		</div>
		<?php } ?>
	</div>
	<div class="footer">
		<div class="footer__wrap">
			<p class="text">&copy; частный Mонтессори детский сад "Совенок".</p>
			<p class="text">Все права защищены. 2016-2026</p>
			<img class="footer__logo" src="images/logo_footer.png" alt="">
		</div>
	</div>
</body>
</html>
