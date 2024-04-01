<?php
	session_start();
	require_once ("01_database_connect.php");
	require_once ("03_functions.php");

if(!isset($_SESSION['login'])){
	header("Location: 11_login.php");
	exit;
}

//--------------- получение из формы статьи расхода и суммы -------------------------------//
if (!empty($_POST[prihod]) and !empty($_POST[summa])){
	$prihod=clearData($_POST[prihod],"sf");
	$summa=clearData($_POST[summa], "i");
	
//------------------------------------- вычисление остатка ---------------------------------//	
	$query = "SELECT `ostatok` FROM `rashod_balance1` ORDER BY `id_balance` 
		DESC LIMIT 1;";
	$ostatoks=querySelect2array($query);
	$ostatok_last=$ostatoks[0]['ostatok'];
	$ostatok = $ostatok_last+$summa;
//--------------------------------- занесение полей в базу данных ----------------------------//
	$dt=time();
	$query = "INSERT INTO `rashod_balance1` (`dt`,`prihod`,`summa`,`ostatok`) 
							VALUES 	('$dt','$prihod','$summa','$ostatok');";
	mysqli_query($db, $query) or die(mysqli_error($db));
	header("Location: index.php");
	exit;
}
//---------------------------------------- удаление записи по id -------------------------------//
if(isset($_GET[del])){
	$query = "DELETE FROM `rashod_balance1` ORDER BY `id_balance` DESC LIMIT 1;";
	mysqli_query($db, $query);
	header("Location: 20_balance_insert.php");
	exit;
}

$query = "SELECT * FROM `rashod_balance1` ORDER BY `id_balance` DESC;";
$balances=mysqli_query($db, $query);
mysqli_close($db);
?>
<!--  Шапка -->
<?php require_once ("04_header.php"); ?>

<div class="row">
	<div class="col-sm-4 col-xs-4">
		<p>
		<a href="20_balance_insert.php?del=1">
			<span class="glyphicon glyphicon-trash"></span>
		</a> Удалить</p>
	</div>
	<div class="col-sm-4 col-xs-4  text-center">
		<p>Записей: <?= mysqli_num_rows($balances); ?></p>
	</div>
	<div class="col-sm-4 col-xs-4 text-right">
		<p>Выйти
		<a href="12_logout.php">
			<span class="glyphicon glyphicon-log-out"></span>
		</a></p>
	</div>
</div>

<div class="row">
	<div class="col-sm-12 col-xs-12">
		<form action="20_balance_insert.php" method="POST">
			<div class="form-group">
				<label for="prihod">Статья</label>
				<input type="text" class="form-control" id="prihod" name="prihod" placeholder="Статья прихода/расхода" required autofocus>
				<label for="summa">Сумма</label>
				<input type="text" class="form-control" id="summa" name="summa" placeholder="Введите сумму">
			</div>
			<button type="submit" class="button btn-sm btn-block">
				Отправить <span class="glyphicon glyphicon-send"></span>
			</button>					
		</form>
	</div>
</div>

<div class="row">
	<div class="col-sm-12 col-xs-12">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>дата</th>
					<th>статья прихода</th>
					<th class="text-right">сум.</th>
					<th class="text-right">остат.</th>
				</tr>
			</thead>
			<tbody>
				<?php while($row = mysqli_fetch_assoc($balances)){	?>
				<tr class="table_row">
					<td><?= date("d.m  H:i", $row['dt']); ?></td>
					<td><?= $row['prihod']; ?></td>
					<td class="text-right"><?= $row['summa']; ?></td>
					<td class="text-right"><?= $row['ostatok']; ?></td>
				</tr>
				<?php } ?>
			</tbody>
		</table>
	</div>
</div>
<!--Футер -->
<?php require_once("05_footer.php"); ?> 

