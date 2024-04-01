<?php
require_once "01_database_connect.php";
//фильтрация данных
function clearData($data, $type="s"){
	global $db;
	switch($type){
		case "sf": return trim(strip_tags($data));
		case "s": return mysqli_real_escape_string($db, trim(strip_tags($data)));
		case "i": return(int)$data;
	}
}
//принимает SELECT данные и возвращает массив
function querySelect2array($query){
	global $db;
	$result=mysqli_query($db, $query);
	$arr=array();
	while($row=mysqli_fetch_assoc($result)){
		$arr[]=$row;
	}
	return $arr;
}