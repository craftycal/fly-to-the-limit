

function validateForm(){
	var isValid = true;
	var errorMessage = document.createElement("span");
	errorMessage.innerHTML = "error";
	var formID = ["firstname", "number", "email", "departing", "time", "address", "city", "country"];
	for (var i = 0; i < formID.length; i++) {

	if (document.getElementById(formID[i]).value == "") {
		isValid = false;
		document.getElementById(formID[i]).parentNode.insertBefore(errorMessage, document.getElementById(formID[i]));
	} }	
	return isValid;
}

