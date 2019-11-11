<?php 
// $dsn = "mysql:dbname=dd103g3;host=140.115.236.71;charset=utf8";
$dsn = "mysql:dbname=test;host=127.0.0.1;charset=utf8";
// $user = "dd103g";
// $password = "dd103g";
$user = "root";
$password = "root";

try {
    $db = new PDO($dsn, $user, $password);
    $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );//Error Handling
    // print("Connection succsess! <br>");
} catch (PDOException $e) {
    // echo 'Connection failed: ' . $e->getMessage();
}