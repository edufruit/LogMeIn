
function init() {
document.addEventListener("deviceready", deviceReady, true);
//delete init;
}

	function checkPreAuth() {

		alert('Checking if credentials already saved...');
	
	
		if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) 
		{
			
			$("#username").val(window.localStorage["username"]);
			
			$("#password").val(window.localStorage["password"]);
			
			handleLogin();
		
		}

	}
	

	function handleLogin() 
	{
			
		alert('handling your login');
		 
		//disable the button so we can't resubmit while we wait
		
		$("#submitButton").attr("disabled","disabled");
		
		var u = $("#username").val();
		
		var p = $("#password").val();
		
		console.log("click");


		if(u != '' && p!= '') 
		{
		
			alert('Authenticating Your Credentials...');
					
					$.ajax({
		type: 'POST',
		data: 'username='+u+'&password='+p,
		url: 'http://www.edufruit.com/app_customerdetails.php',
		success: function(data){
			
			console.log(data);
			
			alert('Your comment was successfully added');
			
						$.mobile.pageContainer.pagecontainer('change', "some.html", {
										
									  transition: 'flow',
									  
									  reload    : true
									  
									});					
		},
		error: function(){
			console.log(data);
			alert('There was an error adding your comment');
		}
	});
		
		/*
			$.post("http://www.edufruit.com/app_customerdetails.php?method=login&returnformat=json", {username:u,password:p}, function(res) {
			 
			 
			if(res.result == true) 
			{
									//store
									window.localStorage["username"] = u;
									
									window.localStorage["password"] = p;
									
									window.localStorage["customername"] = res.customername;
									
									alert('reply='+res.customername);
									
									//$.mobile.changePage("some.html");
									
									$.mobile.pageContainer.pagecontainer('change', "some.html", {
										
									  transition: 'flow',
									  
									  reload    : true
									  
									});
									
									//$("body").pagecontainer("change", "some.html", {  }); 
									
									
									
			} 
			else 
			{
				
				alert('Sorry');
				
				navigator.notification.alert("Your login failed", function() {});
				
			}
			
			$("#submitButton").removeAttr("disabled");

			},"json");
				
				*/

		} 
		else 
		{
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
