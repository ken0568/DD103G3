<?php
  session_start();
  $errMsg="";
  $actNo = $_SESSION['actNo'];
  $memNo = $_SESSION['memNo'];

  try{
    require_once("share_connectDatabase.php");

    $sql = "insert into participate (memNo, actNo) value (:memNo, :actNo);";
    $addAct = $pdo->prepare($sql);
    $addAct->bindValue(":memNo",$memNo);
    $addAct->bindValue(":actNo",$actNo);
    $addAct->execute();

  }catch(PDOException $e){
    $errMsg .="錯誤原因: ".$e->getMessage()."<br>";
    $errMsg .="錯誤行號: ".$e->getLine()."<br>";
  }
?>