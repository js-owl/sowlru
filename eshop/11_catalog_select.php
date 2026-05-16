<?php
	session_start();
	require_once ("03_functions.php");
 	require_once ("04_header.php");

	$query = "SELECT * FROM `catalog`;";
	$goods=select_query2array($query);
?>
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<p>Товаров в <a href="21_basket_select.php">корзине: </a><?= $count; ?></p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Автор</th>
							<th>Название</th>
							<th>Год</th>
							<th>Цена</th><th></th>
						</tr>
					</thead>
					<tbody>
						<?php  foreach($goods as $item){ ?>
						<tr class="table_row">
							<td><?= $item['author']; ?></td>
							<td><?= $item['title']; ?></td>
							<td><?= $item['pubyear']; ?></td>
							<td><?= $item['price']; ?></td>
							<td><a href="20_basket_insert.php?id=<?= $item['id_catalog']; ?>">
								<span class="glyphicon glyphicon-shopping-cart"></span>
							</a></td>
						</tr>
						<?php } ?>
					</tbody>
				</table>
			</div>
		</div>
<!--Футер -->
<?php require_once("05_footer.php"); ?> 

