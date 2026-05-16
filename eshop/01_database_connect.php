<?php
require_once "00_config.php";

$db=mysqli_connect(DB_HOST, DB_LOGIN, DB_PASS, DB_NAME) or die ('Connection error');

$query4count = "SELECT * FROM `basket` WHERE `customer`='".session_id()."';";
$res=mysqli_query($db, $query4count);
$count = mysqli_num_rows($res);