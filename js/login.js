

function loginclose(){
	document.getElementById('login').style.display="none";
}

function registered(){
	document.getElementById("loginbox").style.display="none";
	document.getElementById("registeredbox").style.display="";
}

function registeredbtn(){
	document.getElementById("registeredbtn").onclick=registered;
}

function loginclosebtn(){
	document.getElementById("login-close").onclick=loginclose;
}

function registeredclosebtn(){
	document.getElementById("registered-close").onclick=loginclose;
}



