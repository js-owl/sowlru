<?php
require_once ("01_database_connect.php");

if (!empty($_POST[email]) and !empty($_POST[pass])){
	$email=clearData($_POST[email],"sf");
	$pass=clearData($_POST[pass],"sf");
    $pass=md5($pass);
	$query_users = "INSERT INTO `rashod_users` (`email`,`pass`) VALUES 	('$email','$pass');";
	mysqli_query($db, $query_users);
	header("Location: index.php");
	exit;
}
?>

<!--  Шапка -->
<?php require_once ("04_header.php"); ?>
<div class="row">
	<div class="col-sm-12 col-xs-12">
		<form action="10_registration.php" method="POST">
			<div class="form-group">
				<label for="inputEmail">Email</label>
				<input type="email" class="form-control" id="inputEmail" name="email" value="aklimovskikh@yandex.ru" required autofocus>

				<label for="inputPassword">Password</label>
				<input type="password" class="form-control" id="inputPassword" name="pass" placeholder="Введите пароль" required>
			</div>
			<button type="submit" class="button btn-sm btn-block">
				Войти
			</button>					
		</form>
	</div>
</div>
<!--Футер -->
<?php require_once("05_footer.php"); ?> 