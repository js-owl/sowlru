<?php header("Content-Type:text/html; charset=UTF-8");
	  $name = htmlspecialchars($_POST["name"]);
	  $phone = htmlspecialchars($_POST["phone"]);
	
	mail('aklimovskikh@yandex.ru', 'Call me', "Please call to $name with phone $phone");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Частный монтессори детский сад в Мытищах - Совенок</title>
	<link rel="stylesheet" href="css\style.css">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-80184128-1', 'auto');
	  ga('send', 'pageview');
	</script>
</head>
<body>
	<div class="top-line"></div>
	<div class="wrapper">
		<div class="header">
			<div class="logo">
				<a href="index.html"><img src="images/logo.png" alt="Logotype"></a>
			</div>
			<p class="adress">141008, г.Мытищи, ул. Колпакова, д.24 | тел. 8(905)775-06-27 | www.sowl.ru</p>
		</div>
		<div class="menu-box">		
			<div class="menu">
				<ul>
					<li><a class="active" href="index.html">Главная</a></li>
					<li><a href="#">О нас</a></li>
					<li><a href="#">Расписание</a></li>
					<li><a href="#">Услуги</a></li>
					<li><a href="#">Контакты</a></li>				
				</ul>
			</div>
		</div>
		<div class="call">
			Ваш запрос отправлен. Спасибо! <br>
			<a href="index.html">Вернуться на главную</a>
		</div>
	</div>
	<div id="footer">
		<div id="footer-content"
			<ul>
				<li><a class="active" href="index.html">Главная</a></li>
				<li><a href="#">О нас</a></li>
				<li><a href="#">Расписание</a></li>
				<li><a href="#">Услуги</a></li>
				<li><a href="#">Контакты</a></li>
			</ul>
			<p>&copy; 2016, частный монтессори детский сад "Совенок". Все права защищены</p>
			<div id="logo_footer">
			</div>
		</div>
	</div>
</body>
</html>