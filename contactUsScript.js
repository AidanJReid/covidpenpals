//function to validate form input
function formValidator(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	
	if (name == ""){
		alert("Please provide your name."); 
	}
	if (email == ""){
		alert("Please provide your email address.");
	}
	if (subject == ""){
		alert("Please provide a subject.");
	}
	if (message == ""){
		alert("Please provide a messsage.");
	}
	return false;
}
//function to allow user to hide the preset subject options and show a plain text input field so that they can specify their subject
document.getElementById("subject").onchange = function() {otherSubject()};
function otherSubject(){
	var given = document.getElementById("subject").value;
	if (given === "Other (please specify)."){
		document.getElementById("other").style.display = "block";
		document.getElementById("subject").style.display = "none";	
	}
}