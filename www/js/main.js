
function init() {
document.addEventListener("deviceready", deviceReady, true);
//delete init;
}

	function checkPreAuth() {
alert(2);
		var form = $("#loginForm");
		
		if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) 
		{
			$("#username", form).val(window.localStorage["username"]);
			$("#password", form).val(window.localStorage["password"]);
			handleLogin();
		}

	}

function handleLogin() {
	alert('handling your login');
	
var form = $("#loginForm");
//disable the button so we can't resubmit while we wait
$("#submitButton",form).attr("disabled","disabled");
var u = $("#username", form).val();
var p = $("#password", form).val();
console.log("click");
if(u != '' && p!= '') {
$.post("http://www.edufruit.com/app_customerdetails.php?method=login&returnformat=json", {username:u,password:p}, function(res) {
//if(res == true) {
if(res.result == true) {
//store
window.localStorage["username"] = u;
window.localStorage["password"] = p;
window.localStorage["customername"] = res.customername;
$.mobile.changePage("some.html");
} else {
navigator.notification.alert("Your login failed", function() {});
}
$("#submitButton").removeAttr("disabled");
},"json");
} else {
//Thanks Igor!
navigator.notification.alert("You must enter a username and password", function() {});
$("#submitButton").removeAttr("disabled");
}
return false;
}

function deviceReady() {

	alert('in device ready function');
//$("#loginForm").on("submit",handleLogin);

//$("#loginForm").click(function(){ handleLogin(); });
}
