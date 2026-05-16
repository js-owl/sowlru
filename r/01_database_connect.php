<?php
require_once "00_config.php";

$db=mysqli_connect(DB_HOST, DB_LOGIN, DB_PASS, DB_NAME) or die ('Connection error');