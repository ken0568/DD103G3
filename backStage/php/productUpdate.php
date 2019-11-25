<?php
  $errMsg="";
  $prodNo = $_POST['prodNo'];
  $type = $_POST['type'];
  $prodName =$_POST['pname'];
  $info=$_POST['info'];
  $price=$_POST['price'];
// echo $prodNo,$type,$prodName,$info,$price;
  try{
    require_once("../../connectdd103g3.php");

    // UPDATE `product` SET  `prodType` = `:type`, `prodName` = ':prodName',  `prodText` = ':info', `price` = ':price' WHERE `product`.`prodNo` = `:prodNo`;

    // update `product` set (prodType,prodName,prodText,price)values(:type,:prodName,:info,:price) where prodNo=:prodNo

    $sql = "UPDATE `product` SET  `prodType` = :type, `prodName` = :prodName,  `prodText` =:info, `price` =:price WHERE `prodNo` =:prodNo;";
    $update = $pdo->prepare($sql);
    $update->bindValue(":prodNo",$_POST['prodNo']);
    $update->bindValue(":type",$_POST['type']);
    $update->bindValue(":prodName",$_POST['pname']);
    $update->bindValue(":info",$_POST['info']);
    $update->bindValue(":price",$_POST['price']);
    $update->execute();
    header("location:../product.html");
  }catch(PDOException $e){
    $errMsg .="錯誤原因: ".$e->getMessage()."<br>";
    $errMsg .="錯誤行號: ".$e->getLine()."<br>";
    echo $errMsg;
  }
?>