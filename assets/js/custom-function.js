$(document).ready(function(){
	
	$(".fa-ellipsis-v").click(function(){

		$("#wrapper #sidebar").toggleClass("menu-height");
	});
});
function preloader(){

	$(window).on("load", function(){

		$("#preloader").css({
			"visibility":"hidden",
			"opacity":"0",
			"transition":"0.5s"
		});
	});
}
var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function loginValidate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "Charis" && password == "Char123"){
		alert ("Login successfully");
		window.location = "index2.html"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}

// Below function Executes on click of contact's submit button.
function contactValidate(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	if (name != null || email != null || message != null){
		alert ("Message Saved! Name: "+name+" Email: "+email+" Message: "+message);
		window.location = "index2.html"; // Redirecting to other page.
		return false;
	}else{
		alert ("You have not inputted either a name, email, or message");
	}

}

// Below function Executes on click of logout button.
function logout() {
	window.localStorage.clear();
	alert ("Logout successfully");
  	window.location.reload(true);
  	window.location.replace('index.html');
}