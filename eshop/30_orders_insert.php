<?php
	session_start();
	require_once ("01_database_connect.php");
	require_once ("03_functions.php");

	// получение и фильтрация данных из формы
if (!empty($_POST[name]) and !empty($_POST[email]) and 
	!empty($_POST[phone]) and !empty($_POST[address])){
	$name=clearData($_POST["name"],      "sf");
	$email=clearData($_POST["email"],    "sf");
	$phone=clearData($_POST["phone"],    "sf");
	$address=clearData($_POST["address"],"sf");
	$customer=session_id();
	$datetime=time();
	
	// составляем строку для вставки в ORDERS_LOG
	$order = "$name|$email|$phone|$address|$customer|$datetime\n";
	
	// сохранение строки в конец (при FILE_APPEND) файла
	file_put_contents(ORDERS_LOG, $order, FILE_APPEND);

	// пересылка купленных товаров в массив
	$query = "SELECT `id_busket`,`author`,`title`,`pubyear`,`price`,`goodsid`,`quantity`
		FROM `catalog`,`basket`
		WHERE `customer`='".session_id()."' AND `id_catalog`=`goodsid`;";
	$goods=select_query2array($query);
	
	// вставка ранее вытащенных товаров из массива в таблицу БД "Orders"
	foreach($goods as $item){
		$query = "INSERT INTO `orders` 
			(`author`,`title`,`pubyear`,`price`,`customer`,`quantity`,`datetime`) 
        VALUES 	
			('{$item["author"]}','{$item["title"]}','{$item["pubyear"]}','{$item["price"]}',
			'$customer','{$item["quantity"]}',$datetime);";
		mysqli_query($db, $query);
	}
	// очистка корзины
	$query = "DELETE FROM `basket` WHERE `customer`='".session_id()."';";
	mysqli_query($db, $query);

	header("Location: 31_orders_confirm.php");
	exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<!--	<meta charset="UTF-8"> -->
	<meta name="viewport" content="width=500, user-scalable=yes">
	<title>Оформите заказ</title>
	<link rel="stylesheet" href="css/style_bem.css">
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
</head>
<body>
<!--	<div class="top-line"></div> -->
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
		<h1>Оформите заказ</h1>
		<div class="content content_center">
			<form action='30_orders_insert.php' method="POST">
				<h2>Заказчик</h2>
				<input class="form" type="text" name="name" value="Климовских А.В."><br>
				<h2>Email заказчика</h2>
				<input class="form" type="text" name="email" value="aklimovskikh@yandex.ru"><br><br>
				<h2>Телефон</h2>
				<input class="form" type="text" name="phone" value="8-964-504-55-76"><br><br>
				<h2>Адрес доставки</h2>
				<input class="form" type="text" name="address" value="г.Мытищи, Олимпийский пр-т, д.9 к.1 кв.50"><br><br>
				<input class="button" type="submit" value="Заказать">
			</form>
		</div>
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

