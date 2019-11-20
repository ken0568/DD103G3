<?php
  $errMsg="";
  try{
    require_once("home-connect.php");
    $sql = "select * from `member`";
    $members = $pdo->query($sql);
    $arr=[];

    while($memberRow=$members->fetch(PDO::FETCH_ASSOC)){
      //有上架的商品才放入陣列 prodStatus==0
      if($memberRow["status"] == 1){
        array_push($arr,$memberRow);
      }
    };
    echo json_encode($arr);

  }catch(PDOException $e){
    $errMsg .="錯誤原因: ".$e->getMessage()."<br>";
    $errMsg .="錯誤行號: ".$e->getLine()."<br>";
  }
?>