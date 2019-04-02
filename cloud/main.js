var server = document.getElementById("server");
var method = document.getElementById("method");
var path = document.getElementById("path");
var body = document.getElementById("body");
var cookies = document.getElementById("cookies");
var submit = document.getElementById("submit");
var set = document.getElementById("set");
var del = document.getElementById("del");
var currentCookies = document.getElementById("currentCookies");
var statusCode = document.getElementById("status");
var responseMsg = document.getElementById("response");

submit.addEventListener("click", doSubmit);
set.addEventListener("click", setCookies);
del.addEventListener("click", delCookies);

function setCookies() {
	if (cookies.value.indexOf("=") < 1 || cookies.value.indexOf("=") > cookies.value.length) {
		return;
	}
	document.cookie = cookies.value + "; expires=Sun, 01 Jan 2050 00:00:00 UTC; path=/;" ;
	currentCookies.innerText = document.cookie;
}

function delCookies() {
	document.cookie = cookies.value.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
	currentCookies.innerText = document.cookie;
}

function doSubmit() {

	var xhr = new XMLHttpRequest();
	var url = server.value + path.value;
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4) {
			statusCode.value = xhr.status;
			responseMsg.innerText = xhr.responseText;
		}
	}
	xhr.open(method.value, url, true);
	xhr.withCredentials = true;
	xhr.send();
}