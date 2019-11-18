<?php
$target_dir = $_SERVER['DOCUMENT_ROOT']."/DD103G3/backStage/img/";
$target_file = $target_dir . basename($_FILES["img"]["name"]);

$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["img"]["tmp_name"]);
    if($check === false) {
        throw new Exception("檔案不是圖片");
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    unlink($target_file);
    // throw new Exception("檔案名稱相同");
}
// Check file size
if ($_FILES["img"]["size"] > 500000) {
    throw new Exception("檔案太大");
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    throw new Exception("檔案格式僅限JPG, JPEG, PNG & GIF");
}
// Check if $uploadOk is set to 0 by an error
if (!move_uploaded_file($_FILES["img"]["tmp_name"], $target_file)) {
    throw new Exception("檔案上傳失敗");
}