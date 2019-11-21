function id(id){
	return document.getElementById(id);
}

/** 註冊燈箱 **/
// 註冊燈箱關閉按鈕(click事件->關閉登入/註冊燈箱)
function registeredclosebtn(){
	id("registered-close").onclick=loginclose;
}

// 註冊(click事件->註冊燈箱打開||登出)
function registeredopenbtn() {
	id("registeredopenbtn").onclick = registered;
}

// 註冊燈箱打開||登出
function registered(){
	if (id("registeredopenbtn").innerText == "註冊"){
		/** 尚未登入 **/
		//打開註冊燈箱
		id("loginbox").style.display = "none";
		id("login").style.display = "";
		id("registeredbox").style.display = "";
	}else{
		/** 登出 **/
		if (document.title == "會員專區--鏟屎官" || document.title == "寵物當家--鏟屎官") {
			location.href = "./home.html";
		} else {
			window.location.reload(); //重新刷新頁面
		};
		//將登出的字改成註冊
		//將會員暱稱改成登入
		id("registeredopenbtn").innerText = "註冊";
		id("loginopenbtn").innerText = "登入";
		//--------------------回Server端清除session資料
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
			if (xhr.status == 200) {
				console.log("已清除資料了");
			} else {
				alert(xhr.status);
			}
		}
		xhr.open("get", `./php/share_ajaxLogout.php`, true);
		xhr.send(null); //AJAX串接資料End
	}
}

/** 登入燈箱 **/
// 登入(click事件->開啟登入燈箱||跳轉到會員頁面)
function loginopenbtn() {
	id("loginopenbtn").onclick = loginopen;
}

// 還沒註冊?(click事件->註冊燈箱打開)
function registeredbtn() {
	id("registeredbtn").onclick = registered;
}

// 登入燈箱關閉按鈕(click事件->關閉登入/註冊燈箱)
function loginclosebtn() {
	id("login-close").onclick = loginclose;
}

// 送出表單按鈕(click事件->送出登入表單)
function sendLoginBtn(){
	id("login-submit").onclick = sendLoginForm;
}

// 開啟登入燈箱||跳轉到會員頁面
function loginopen() {
	if (id('loginopenbtn').innerText == "登入"){
		/** 尚未登入 **/
		//打開登入燈箱
		id("login").style.display = "";
		id("loginbox").style.display = "";
		id("registeredbox").style.display = "none";
	}else{
		/** 會員登入 **/
		//跳轉到會員頁面
		location.href = "./member.php";
	}
} // 開啟登入燈箱End

//送出登入表單-->帳密認證
function sendLoginForm(){
	var memId= id("memIdInput").value;
	var memPsw= id("memPswInput").value;
	//--------------------回Server端檢查帳密是否正確
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		if (xhr.status == 200) {
			if (xhr.responseText == "AccountError") {
				/** 帳密錯誤 **/
				alert("帳密錯誤，請重新輸入。");
			} else if (xhr.responseText == "suspended"){
				/** 被停權 **/
				alert("您似乎被停權了，如有問題請洽詢鏟屎官聯絡電話或信箱。");
			}else{
				/** 帳密正確 **/
				//將登入改成會員名稱
				//將註冊改成登出
				//將登入面板上資料全清空
				//關閉燈箱
				var loginMember = JSON.parse(xhr.responseText);
				id("loginopenbtn").innerText = loginMember.memNick;//放入會員暱稱
				id("registeredopenbtn").innerText = "登出";
				id("memIdInput").value = "";
				id("memPswInput").value = "";
				loginclose();
				window.location.reload();//重新刷新頁面
			}
		} else {
			alert(xhr.status);
		}
	};
	xhr.open("get", `./php/share_ajaxlogin.php?memId=${memId}&memPsw=${memPsw}`, true);
	xhr.send(null); //AJAX串接資料End
}

// 關閉登入/註冊燈箱
function loginclose() {
	id('login').style.display = "none";
	id("registeredbox").style.display = "none";
	id("loginbox").style.display = "none";
}

//檢查是否已登入
function isLoginIn(){
	//--------------------回Server端檢查是否已登入
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if (xhr.status == 200){
			var loginMemberSession = JSON.parse(xhr.responseText);
			if(loginMemberSession.memId){
				/** 已登入 **/
				id("loginopenbtn").innerText = loginMemberSession.memNick; //放入會員暱稱
				id("registeredopenbtn").innerText = "登出";
			}
		} else {
			alert(xhr.status);
		}
	}
	xhr.open("get", `./php/share_getLoginInfo.php`, true);
	xhr.send(null); //AJAX串接資料End
}

//寵物家進入判斷
function enterPethouse(){	
	id('enterPethouse').addEventListener('click',function(){
		if(id('loginopenbtn').innerText == "登入"){
			/** 尚未登入 **/
			loginopen(); // 開啟登入燈箱
		}else{
			/** 登入 **/
			location.href = "./pethouse.html";
		}
	});
}

window.addEventListener("load",function(){
	/** 登入燈箱 **/
	loginopenbtn(); //開啟登入燈箱
	loginclosebtn(); // 關閉登入燈箱按鈕
	sendLoginBtn(); // 送出表單按鈕

	/** 註冊燈箱 **/
	registeredopenbtn(); //header開啟註冊燈箱
	registeredclosebtn(); // 關閉註冊燈箱按鈕
	registeredbtn(); // 開啟註冊燈箱按鈕

	/** 寵物家進入判斷 **/
	enterPethouse();

	/** 檢查是否已登入 **/
	isLoginIn();
},true);

