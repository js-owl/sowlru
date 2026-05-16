<?php
// session_start();
require_once ("03_functions.php");
require_once ("04_header.php");

$query = "SELECT `id_basket`,`product`,`price`,`goodsid`,`quantity`
FROM `ashan_catalog`,`ashan_basket`
WHERE `id_catalog`=`goodsid`;";

// echo $query;
$goods=select_query2array($query);
// var_dump($goods);
?>
<div class='row'>
	<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
		<?php if($count){ ?>
		<p>Вернутся в <a href='11_catalog_select.php'>каталог.</a></p>
		<?php }else{ ?>
		<p>Корзина пуста. Вернитесь в 
			<a href='11_catalog_select.php'>каталог.</a>
		</p>
		<?php } ?>
	</div>
</div>
<div class='row'>
	<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
		<table class='table table-striped'>
			<thead>
				<tr>
					<th>Продукт</th>
					<th>Цена</th>
					<th>Кол.</th><th></th>
				</tr>
			</thead>
			<tbody>
				<?php foreach($goods as $item){ ?>
				<tr class='table_row'>
					<td><?php echo($item['product']); ?></td>
					<td><?= $item['price']; ?></td>
					<td><?= $item['quantity']; ?></td>
					<td>
						<a href='22_basket_del.php?id=<?= $item['id_basket']; ?>''>
							<span class="glyphicon glyphicon-trash"></span>
						</a>
					</td>
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
		<p class="text-right">Всего продуктов на сумму: <?= $sum; ?> руб.</p>
	</div>
</div>
<!--Футер -->
<?php require_once("05_footer.php"); ?>  