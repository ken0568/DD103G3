<?php
$prodType=$_POST['type'];
$prodName=$_POST['name'];
$prodPic=$_POST['img'];
$prodText=$_POST['info'];
$price=$_POST['price'];
$errMsg="";
  try{
    require_once("../../connectdd103g3.php");
    $sql = "insert into `product` 
    (prodStatus,prodType,prodName,prodPic,prodText,price) value 
    (:prodStatus,:prodType,:prodName,:prodPic,:prodText,:price);";
    $addProd = $pdo->prepare($sql);
    $addProd->bindValue(":prodStatus",0);
    $addProd->bindValue(":prodType",$prodType);
    $addProd->bindValue(":prodName",$prodName);
    $addProd->bindValue(":prodPic",$prodPic);
    $addProd->bindValue(":prodText",$prodText);
    $addProd->bindValue(":price",$price);
    $addProd->execute();


  }catch(PDOException $e){
    $errMsg .="錯誤原因: ".$e->getMessage()."<br>";
    $errMsg .="錯誤行號: ".$e->getLine()."<br>";
    echo $errMsg;
  }
?>