<?php 
// $dsn = "mysql:dbname=dd103g3;host=140.115.236.71;charset=utf8";
$dsn = "mysql:dbname=dd103g31117;host=localhost;charset=utf8";
// $user = "dd103g3";
// $password = "dd103g3";

// 高測試
$user = "root";
$password = "henry830122";

try {
    $db = new PDO($dsn, $user, $password);
    $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );//Error Handling
} catch (PDOException $e) {
    exit();
}
?>