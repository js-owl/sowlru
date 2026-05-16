<?php
session_start();
	require_once ("01_database_connect.php");
	require_once ("03_functions.php");

$customer = session_id(); // получение идентификатора customer
$goodsid=clearData($_GET["id"], "i"); // получение идентификатора товара
$quantity = 1; // количество товара
$datetime = time(); // время

$query = "INSERT INTO `basket` (`customer`,`goodsid`,`quantity`,`datetime`) 
                        VALUES 	('$customer','$goodsid','$quantity','$datetime');";
mysqli_query($db, $query);

header("Location: 11_catalog_select.php"); // переадресация обратно