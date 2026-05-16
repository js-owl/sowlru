<?php
require_once "01_database_connect.php";

$query = "CREATE TABLE ashan_catalog (
			id_catalog INT(11) NOT NULL AUTO_INCREMENT,
			product VARCHAR(50) NOT NULL DEFAULT '',
			price INT(11) NOT NULL DEFAULT 0,
			PRIMARY KEY(id_catalog)
		)";
mysqli_query($db, $query);
$query = "CREATE TABLE ashan_basket (
			id_basket INT(11) NOT NULL AUTO_INCREMENT,
			goodsid INT(11) NOT NULL DEFAULT 0,
			quantity INT(4) NOT NULL DEFAULT 0,
			datetime INT(11) NOT NULL DEFAULT 0,
			PRIMARY KEY(id_basket)
		)";
mysqli_query($db, $query);
// $query = "CREATE TABLE orders (
// 			id_orders INT(11) NOT NULL AUTO_INCREMENT,
// 			author VARCHAR(50) NOT NULL DEFAULT '',
// 			title VARCHAR(50) NOT NULL DEFAULT '',
// 			pubyear INT(4) NOT NULL DEFAULT 0,
// 			price INT(11) NOT NULL DEFAULT 0,
// 			customer VARCHAR(32) NOT NULL DEFAULT '',
// 			quantity INT(4) NOT NULL DEFAULT 0,
// 			datetime INT(11) NOT NULL DEFAULT 0,
// 			PRIMARY KEY(id_orders)
// 		)";
// mysqli_query($db, $query);
mysqli_close($db);
echo "Database created.";
?>