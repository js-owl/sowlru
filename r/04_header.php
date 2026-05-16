<?php
    $this_pages=basename($_SERVER['PHP_SELF']);
// Список для навигации
    $pages = array (
        "Регистрация"=>"10_registration.php",
        "Вход"=>"11_login.php",
        "Баланс сада"=>"20_balance_insert.php",
    );
// Список для оглавления
    switch($this_pages){
		case "10_registration.php":   	$title="Регистрация";				break;
        case "11_login.php":   			$title="Вход";						break;
        case "20_balance_insert.php":   $title="Баланс сада";				break;
        return $title;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?= $title; ?></title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
</head>
<body>
	<div class="container">
<!--  Шапка -->
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
				<a href="index.php">
					<img src="images/logo.png" class="img-responsive" alt="частный детский сад Мытищи Совенок">
				</a>
			</div>
			<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
				<address class="address"><strong>г.Мытищи, ул.Колпакова, д.24</strong></address>
				<p class="phone"><a href="tel:+79057750627"><span class="glyphicon glyphicon-phone"></span>8(905)775-06-27</a></p>
			</div>
		</div>
<!-- Навигация -->
		<div class="row">
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="index.php">SOWL.RU/RASHOD</a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
                        <?php
                            foreach($pages as $k=>$v){
                                echo "<li ";
                                if ($this_pages==$v) echo "class='active'";
                                echo "><a href='".$v."'>".$k."</a></li>";
                            }
                        ?>
						</ul>
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</nav>
		</div>
<!-- Title -->
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h1><?= $title; ?></h1>
			</div>
		</div>