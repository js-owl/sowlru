<?php
require_once ("01_database_connect.php");
require_once ("03_functions.php");
// получение и фильтрация данных из формы
if (!empty($_POST[product]) and !empty($_POST[price])){
	$product=clearData($_POST["product"]);
	$price=clearData($_POST["price"],"i");
	
	$query = "INSERT INTO `ashan_catalog` (`product`,`price`) 
	VALUES 	('$product','$price');";
	mysqli_query($db, $query);
	
	header("Location: 10_catalog_insert.php");
	exit;
}
?>
<!--  Шапка -->
<?php require_once ("04_header.php"); ?>
<div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<form action="10_catalog_insert.php" method="POST">
			<div class="form-group">
				<label for="author">Продукт</label>
				<input type="text" class="form-control" name="product" placeholder="Введите продукт">
				<label for="author">Цена</label>
				<input type="text" class="form-control" name="price" placeholder="Введите цену">
			</div>
			<button type="submit" class="button btn-sm btn-block">
				Отправить <span class="glyphicon glyphicon-send"></span>
			</button>					
		</form>
	</div>
</div>
<!--Футер -->
<?php require_once("05_footer.php"); ?> 

