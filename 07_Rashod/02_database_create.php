<?php
require_once "01_database_connect.php";

$query = "CREATE TABLE rashod_users (
		id_user INT NOT NULL AUTO_INCREMENT,
		email VARCHAR(80) NOT NULL,
		pass VARCHAR(255) NOT NULL,
		date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY(id_user),
		UNIQUE INDEX email_UNIQUE(email ASC)
	)";
mysqli_query($db, $query);

$query = "CREATE TABLE rashod_balance1 (
			id_balance INT NOT NULL AUTO_INCREMENT,
			prihod VARCHAR(40) NOT NULL,
			summa INT NOT NULL,
			ostatok INT NOT NULL,
			dt INT,
			PRIMARY KEY(id_balance)
		)";
mysqli_query($db, $query);

mysqli_close($db);
echo "База данных создана.";
?>