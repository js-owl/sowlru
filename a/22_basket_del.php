<?php
require_once ("01_database_connect.php");
require_once ("03_functions.php");

$id=clearData($_GET["id"], "i"); // получение идентификатора товара

$query = "DELETE FROM `ashan_basket` WHERE `id_basket`=$id;";
mysqli_query($db, $query);

header("Location: 21_basket_select.php"); // переадресация обратно