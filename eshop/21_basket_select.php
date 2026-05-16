<?php
	session_start();
	require_once ("03_functions.php");
	require_once ("04_header.php");

	$query = "SELECT `id_busket`,`author`,`title`,`pubyear`,`price`,`goodsid`,`quantity`
		FROM `catalog`,`basket`
		WHERE `customer`='".session_id()."' AND `id_catalog`=`goodsid`;";
	$goods=select_query2array($query);
?>
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<?php if($count){ ?>
				<p>Вернутся в <a href="11_catalog_select.php">каталог.</a></p>
		<?php }else{ ?>
				<p>Корзина пуста. Вернитесь в 
					<a href="11_catalog_select.php">каталог.</a>
				</p>
		<?php } ?>
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
						<th>Цена</th>
						<th>Кол.</th><th></th>
					</tr>
				</thead>
				<tbody>
					<?php  foreach($goods as $item){ ?>
					<tr class="table_row">
						<td><?= $item['author']; ?></td>
						<td><?= $item['title']; ?></td>
						<td><?= $item['pubyear']; ?></td>
						<td><?= $item['price']; ?></td>
						<td><?= $item['quantity']; ?></td>
						<td><a href="22_basket_del.php?id=<?= $item['id_busket']; ?>">
							<span class="glyphicon glyphicon-trash"></span>
						</a></td>
					</tr>
					<?php 
						$i++;
						$sum += $item['price']*$item['quantity'];
						} 
					?>
				</tbody>
			</table>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<p class="text-right">Всего товаров на сумму: <?= $sum; ?> руб.</p>
		</div>
	</div>
	<div class="row text-center">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<button type="button" class="button btn-sm" onClick="location.href='30_orders_insert.php'">
				Оформить заказ
			</button>
		</div>
	</div>
<!--Футер -->
<?php require_once("05_footer.php"); ?> 

