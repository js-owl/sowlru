<?php
	require_once ("01_database_connect.php");
	require_once ("03_functions.php");
// получение и фильтрация данных из формы
if (!empty($_POST[author]) and !empty($_POST[title]) and 
	!empty($_POST[pubyear]) and !empty($_POST[price])){
	$author=clearData($_POST["author"]);
	$title=clearData($_POST["title"]);
	$pubyear=clearData($_POST["pubyear"],"i");
	$price=clearData($_POST["price"],"i");
	
	$query = "INSERT INTO `catalog` (`author`,`title`,`pubyear`,`price`) 
							VALUES 	('$author','$title','$pubyear','$price');";
	mysqli_query($db, $query);
	
	header("Location: 10_catalog_insert.php");
	exit;
}
 	require_once ("04_header.php");
?>
<div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<form action="10_catalog_insert.php" method="POST">
			<div class="form-group">
				<label for="author">Автор</label>
				<input type="text" class="form-control" name="author" placeholder="Введите автора книги">
				<label for="author">Название</label>
				<input type="text" class="form-control" name="title" placeholder="Введите название книги">
				<label for="author">Год издания</label>
				<input type="text" class="form-control" name="pubyear" placeholder="Введите год издания">
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

