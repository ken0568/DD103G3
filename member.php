<!DOCTYPE html>
<html>

<head>
	<meta name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>會員專區--鏟屎官</title>
	<link rel="icon" href="img/petKeepersIcon.ico" type="image/x-icon/" />
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/member.css">
	<link rel="stylesheet" href="css/fontStyle.css" />
	<link rel="stylesheet" href="css/header-footer.css" />
	<link rel="stylesheet" href="css/login.css">
	<script src="js/login.js"></script>
	<script src="js/jquery-2.2.4.min.js"></script>
	<script src="js\burger.js"></script>
</head>


<body>
<<<<<<< HEAD:member.html
  <!-- 登入 -->
  <div id="login" class="col-md-12" style="display: none;">
  	<!-- loginbox開始 -->
  	<div id="loginbox" class="loginbox col-md-5">
  		<h6>會員登入</h6>
  		<div class="loginpic">
  			<img src="img/logo-01.png" alt="">
  		</div>
  		<div class="login-input">
  			<div>
  				<span>帳號:</span>
  				<input type="text" id="memIdInput" maxlength="10">
  			</div>
  			<div>
  				<span>密碼:</span>
  				<input type="password" id="memPswInput" maxlength="10">
  			</div>
  			<input type="submit" value="送出" id="login-submit">
  			<span id="registeredbtn">還沒申請帳號?</span>
  		</div>
  		<span id="login-close">X</span>
  	</div><!-- loginbox結束 -->

  	<!-- registeredbox開始 -->
  	<form id="registeredbox" class="registeredbox col-md-5" style="display: none;">

  		<h6>會員註冊</h6>

  		<div class="login-input">
  			<div>
  				<span>帳號:</span>
  				<input type="text">
  			</div>
  			<div>
  				<span>密碼:</span>
  				<input type="password">
  			</div>
  			<div>
  				<span>姓名:</span>
  				<input type="text">
  			</div>
  			<div>
  				<span>暱稱:</span>
  				<input type="text">
  			</div>
  			<div>
  				<span>性別:</span>
  				<div class="registeredsex">
  					<input type="radio" name="sex" style="width: 20px;">男
  					<input type="radio" name="sex" style="width: 20px;">女
  				</div>
  			</div>
  			<div>
  				<span>信箱:</span>
  				<input type="text">
  			</div>
  			<div>
  				<span>手機:</span>
  				<input type="text">
  			</div>
  			<input type="submit" value="送出" id="login-submit">
  		</div>
  		<span id="registered-close">X</span>
  	</form><!-- registeredbox結束 -->

  </div><!-- 登入結束 -->
  <header>
  	<div class="index-logo">
  		<div class="logo">
  			<a href="home.html"><img src="./img/logo.png" alt="" /></a>
  		</div>
  	</div>
  	<div class="menu">
  		<ul class="menu-ul">
  			<li><a id="enterPethouse">寵物當家</a></li>
  			<li><a href="beAPetKeeper.html">成為飼主</a></li>
  			<li><a href="products.html">寵物商店</a></li>
  			<li><a href="activities.html">活動專區</a></li>
  			<div class="login">
  				<div class="login-status">
  					<a id="loginopenbtn">登入</a>
  					<b>|</b>
  					<a id="registeredopenbtn">註冊</a>
  				</div>
  			</div>
  		</ul>
  	</div>
  	<div class="burger">
  		<span class="bar1" id="bar"></span>
  		<span class="bar2" id="bar"></span>
  		<span class="bar3" id="bar"></span>
  	</div>
  </header>
=======

	<?php
	session_start();
		require_once('php/saru.php');

		// $sql="select * from `member` where memNo=4";
		$sql="select * from `member` where memNo={$_SESSION['memNo']}";

		$member = $pdo->query($sql);

		$member->bindColumn("memName", $memName);
		$member->bindColumn("memTel", $memTel);
		$member->bindColumn("sex", $sex);
		$member->bindColumn("petName", $petName);
		$member->bindColumn("memNick", $memNick);
		$member->bindColumn("email", $email);
		$member->bindColumn("coin", $coin);
		
	?>

	<!-- 登入 -->
	<div id="login" class="col-md-12" style="display: none;">
		<!-- loginbox開始 -->
		<form action="php/loginin.php" method="POST" id="loginbox" class="loginbox col-md-5" style="display: none;">
			<h6>會員登入</h6>
			<div class="loginpic">
				<img src="img/logo-01.png" alt="">
			</div>
			<div class="login-input">
				<div>
					<span>帳號:</span>
					<input type="text" name="loginId">
				</div>
				<div>
					<span>密碼:</span>
					<input type="password" name="loginPsw">
				</div>
				<input type="submit" value="送出" id="login-submit">
				<span id="registeredbtn">還沒申請帳號?</span>
			</div>
			<span id="login-close">X</span>
		</form><!-- loginbox結束 -->

		<!-- registeredbox開始 -->
		<form action="php/registered.php" method="GET" id="registeredbox" class="registeredbox col-md-5" style="display: none;">

			<h6>會員註冊</h6>

			<div class="login-input">
				<div>
					<span>帳號:</span>
					<input type="text" name="mid">
				</div>
				<div>
					<span>密碼:</span>
					<input type="password" name="mpsw">
				</div>
				<div>
					<span>姓名:</span>
					<input type="text" name="mname">
				</div>
				<div>
					<span>暱稱:</span>
					<input type="text" name="mnick">
				</div>
				<div>
					<span>性別:</span>
					<div class="registeredsex">
						<input type="radio" name="sex[]" value="0" style="width: 20px;">男
						<input type="radio" name="sex[]" value="1" style="width: 20px;">女
					</div>
				</div>
				<div>
					<span>信箱:</span>
					<input type="text" name="memail">
				</div>
				<div>
					<span>手機:</span>
					<input type="text" name="mphone">
				</div>
				<input type="submit" value="送出" id="registered-submit">
			</div>
			<span id="registered-close">X</span>
		</form><!-- registeredbox結束 -->

	</div><!-- 登入結束 -->


	<!-- header開始 -->
	<header>
		<div class="index-logo">
			<div class="logo">
				<a href="home.html"><img src="./img/logo.png" alt="" /></a>
			</div>
		</div>
		<div class="menu">
			<ul class="menu-ul">
				<li><a href="pethouse.html">寵物當家</a></li>
				<li><a href="beAPetKeeper.html">成為飼主</a></li>
				<li><a href="products.html">寵物商店</a></li>
				<li><a href="activities.html">活動專區</a></li>
				<div class="login">

					<div class="login-status">
						<a id="loginopenbtn">登入</a>
						<b>|</b>
						<a id="registeredopenbtn">註冊</a>
					</div>
				</div>
			</ul>
		</div>
		<div class="burger">
			<span class="bar1" id="bar"></span>
			<span class="bar2" id="bar"></span>
			<span class="bar3" id="bar"></span>
		</div>
	</header>
	<!-- header結束 -->


>>>>>>> saru:member.php

	<!-- footer開始 -->
	<div class="wrap">

		<!-- 會員開始 -->
		<div class="member-wrap">
			<div class="member">

				<div class="member-left col-12 col-md-3">
					<!-- 會員左邊 -->

					<div class="member-left-box">
						<div class="member-left-bighead">
							<img src="img/pet2.png" alt="">
						</div>
						<span>可不可紅茶</span>

						<div class="member-left-page">
							<span id="memberbtn1">個人資料</span>
							<span id="memberbtn2">購買紀錄</span>
							<span id="memberbtn3">活動紀錄</span>
						</div>
					</div>

				</div><!-- 左邊結束 -->


				<div class="member-right col-12 col-md-9">
					<!-- 會員右邊 -->

					<div class="member-right-box col-md-10">
						<h2 id="member-right-title">個人資料</h2>

						<!-- 個人資料 -->
						<table id="member1">
							
							<?php
								while($member->fetch(PDO::FETCH_ASSOC)){
									$sexturn="";
									if($sex==true){
										$sexturn="女";
									}else{
										$sexturn="男";
									}

									$petNameturn="";
									if($petName==null){
										$petNameturn="尚未遊玩";
									}else{
										$petNameturn=$petName;
									}
							?>

							<tr>
								<td>姓名:</td>
								<td><?=$memName?></td>
							</tr>
							<tr>
								<td>暱稱:</td>
								<td><?=$memNick?></td>
							</tr>
							<tr>
								<td>電話:</td>
								<td><?=$memTel?></td>
							</tr>
							<tr>
								<td>性別:</td>
								<td><?=$sexturn?></td>
							</tr>
							<tr>
								<td>寵物:</td>
								<td><?=$petNameturn?></td>
							</tr>
							<tr>
								<td>信箱:</td>
								<td><?=$email?></td>
							</tr>
							<tr>
								<td>愛心幣:</td>
								<td><?=$coin?></td>
							</tr>
							<tr>
								<td>愛心幣排名:</td>
								<td>103名</td>
							</tr>
							
							<?php
								}
							?>

						</table>
						<!-- <button id="reset">修改</button> -->


						<!-- 購買紀錄 -->
						<table id="member2" style="display: none">

							<thead>
								<tr>
									<td>商品名稱</td>
									<td>愛心幣</td>
									<td>購買時間</td>
								</tr>
							</thead>
							<tr>
								<td>商品1</td>
								<td>500</td>
								<td>2019/11/10-23:29</td>
							</tr>
							<tr>
								<td>商品1</td>
								<td>500</td>
								<td>2019/11/10-23:29</td>
							</tr>
							<tr>
								<td>商品1</td>
								<td>500</td>
								<td>2019/11/10-23:29</td>
							</tr>
						</table>

						<?php

						// session_start();
						// 	require_once('php/saru.php');

						// 	$sql="select * from `member` where memNo=4";
							$sql="select * from `participate` where memNo={$_SESSION['memNo']}";
							// $sql="select * from `activity` where actNo=$actNo";
							$meact = $pdo->query($sql);

							$meact->bindColumn("actNo", $actNo);
							$a=$actNo;

							$sql="select * from `activity` where actNo=1";
							$meact = $pdo->query($sql);
							$meact->bindColumn("actName", $actName);
							
						?>
					

						<!-- 活動紀錄 -->
						<table id="member3" style="display: none;">
							<?php
								while($meact->fetch(PDO::FETCH_ASSOC)){
							?>
							<thead>
								<td>活動名稱</td>
								<td>活動日期</td>
								<td>活動狀態</td>
							</thead>
							<tr>
								<td><?=$actName?></td>
								<td>2019/11/10</td>
								<td>取消報名</td>
							</tr>
							<tr>
								<td>名稱2</td>
								<td>2019/11/10</td>
								<td>已結束</td>
							</tr>
							<tr>
								<td>名稱3</td>
								<td>2019/11/10</td>
								<td>已結束</td>
							</tr>
							<?php
								}
							?>
						</table>
					</div>


				</div><!-- 右邊結束 -->
			</div>
		</div>
		<!-- 會員結束 -->

		<footer>
			<p>Copyright © 2019 PetKeepers</p>

		</footer>
	</div>
	<!-- footer結束 -->


	<script>
		// 個人資料
		function member1() {
			document.getElementById("member1").style.display = "";
			document.getElementById("member2").style.display = "none";
			document.getElementById("member3").style.display = "none";
			document.getElementById("member-right-title").innerText = "個人資料"
			document.getElementById("reset").style.display = "";
		};
		// 購買紀錄
		function member2() {
			document.getElementById("member1").style.display = "none";
			document.getElementById("member2").style.display = "";
			document.getElementById("member3").style.display = "none";
			document.getElementById("member-right-title").innerText = "購買紀錄"
			document.getElementById("reset").style.display = "none";
		};
		// 活動紀錄
		function member3() {
			document.getElementById("member1").style.display = "none";
			document.getElementById("member2").style.display = "none";
			document.getElementById("member3").style.display = "";
			document.getElementById("member-right-title").innerText = "活動紀錄"
			document.getElementById("reset").style.display = "none";
		};

		// (個人資料，購買紀錄，活動紀錄)按鈕
		function memberbtn() {
			document.getElementById("memberbtn1").onclick = member1;
			document.getElementById("memberbtn2").onclick = member2;
			document.getElementById("memberbtn3").onclick = member3;
		};

		// window.onload=memberbtn;
		// window.onload=loginclosebtn;
		// window.onload=registeredclosebtn;
		// window.onload=registeredbtn;

		window.onload = function () {
			memberbtn(); // (個人資料，購買紀錄，活動紀錄)按鈕
		};
	</script>
</body>


</html>