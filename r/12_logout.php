<?php
    session_start();
    $_SESSION['login']=null;
    header("Location: 11_login.php");