

function loginclose(){
	document.getElementById('login').style.display="none";
	document.getElementById("registeredbox").style.display="none";
	document.getElementById("loginbox").style.display="none";
}

// 登入燈箱關閉按鈕
function loginclosebtn(){
	document.getElementById("login-close").onclick=loginclose;
}
// 註冊燈箱關閉按鈕
function registeredclosebtn(){
	document.getElementById("registered-close").onclick=loginclose;
}
// 還沒註冊?
function registeredbtn(){
	document.getElementById("registeredbtn").onclick=registered;
}
// 登入
function loginopenbtn(){
	document.getElementById("loginopenbtn").onclick=loginopen;
}
// 登入燈箱打開
function loginopen(){
	document.getElementById("login").style.display="";
	document.getElementById("loginbox").style.display="";
	document.getElementById("registeredbox").style.display="none";
}

// 註冊燈箱打開
function registered(){
	document.getElementById("loginbox").style.display="none";
	document.getElementById("login").style.display="";
	document.getElementById("registeredbox").style.display="";
}
// 註冊
function registeredopenbtn(){
	document.getElementById("registeredopenbtn").onclick=registered;
}

