<?php
function GetSQLValueString($theValue, $theType) {
    switch ($theType) {
      case "string":
        $theValue = ($theValue != "") ? filter_var($theValue, FILTER_SANITIZE_MAGIC_QUOTES) : "";
        break;
      case "int":
        $theValue = ($theValue != "") ? filter_var($theValue, FILTER_SANITIZE_NUMBER_INT) : "";
        break;
    case "url":
        $theValue = ($theValue != "") ? filter_var($theValue, FILTER_VALIDATE_URL) : "";
        break;
    }
    return $theValue;
  }
// session_start();
// $_SESSION['memNo'] = 1;
if($_SERVER['REQUEST_METHOD'] == "POST"){
    //require_once("./connMysql.php");
    // // session_start();

    // //更新欄位
    // $sql = "UPDATE Member SET petName=?, petPic=?, petColor=?, coin=? WHERE memNo=?";
    
    // try {
    //     $stmt = $db->prepare($sql);
    //     // $stmt->bindParam(
    //     //     $_POST["petName"],
    //     //     $_POST["petPic"],
    //     //     $_POST["petColor"],
    //     //     1000,
    //     //     $_SESSION['memNo'],
    //     // );
    //     $stmt->execute();
    //     // echo"Execute successfully. <br>";
    // } catch (PDOException $e) {
    //     // echo 'Execute failed: ' . $e->getMessage();
    // }

    //查詢欄位
    // $sql = "Select petName, petPic, petColor, coin FROM Member WHERE memNo = '{$_SESSION["memNo"]}'";
    
    // try {
    //     $stmt = $db->query($sql);
    //     $data = $stmt->fetch();
    //     // echo"Execute successfully. <br>";
    // } catch (PDOException $e) {
    //     // echo 'Execute failed: ' . $e->getMessage();
    // }

    $data = [
        'petName' => $_POST["petName"],
        'petPic' => $_POST["petPic"],
    ];

    header('Content-Type: application/json');
    echo json_encode($data);
}