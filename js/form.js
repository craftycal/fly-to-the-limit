
// find the form
var bookingForm = document.queryselector("#booking");

// referances to input filds
var name = document.queryselector("#name");
var number = document.queryselector("#number");
var email = document.queryselector("#email");
var aircraft = document.queryselector("#aircraft");
var passengers = document.queryselector("#passengers");
var departing = document.queryselector("#departing");
var time = document.queryselector("#time");
var length = document.queryselector("#length");
var address = document.queryselector("#address");
var city = document.queryselector("#city");
var country = document.queryselector("#country");

// messages
var nameMessage = document.queryselector("#name-message");
var numberMessage = document.queryselector("#number-message");
var emailMessage = document.queryselector("#email-message");
var aircraftMessage = document.queryselector("#aircraft-message");
var passengersMessage = document.queryselector("#passengers-message");
var departingMessage = document.queryselector("#departing-message");
var timeMessage = document.queryselector("#time-message");
var lengthMessage = document.queryselector("#length-message");
var addressMessage = document.queryselector("#address-message");
var cityMessage = document.queryselector("#city-message");
var countryMessage = document.queryselector("#country-message");

// patterns 
var namePattern = new RegExp("^[a-zA-Z .'-]{1,100");
var numberPattern = new RegExp("^[0-9 -]{7,20");
var emailPattern = new RegExp("^[a-zA-Z@ .'-]{1,100");
var addressPattern = new RegExp("^[a-zA-Z .'-]{4,250");
var cityPattern = new RegExp("^[a-zA-Z .'-]{1,150");
var countryPattern = new RegExp("^[a-zA-Z .'-]{,60");

// on form submit
bookingForm.onsubmit = function(event){

// count errors
var totalErrors = 0;	

// name
if(namePattern.test(nameInput.value)){
	nameMessage.innerHTML = "";
} else {
	nameMessage.innerHTML = "*";
	totalErrors ++
}

// number
if(numberPattern.test(nameInput.value)){
	numberMessage.innerHTML = "";
} else {
	numberMessage.innerHTML = "*";
	totalErrors ++
}


// email
if(emailPattern.test(nameInput.value)){
	emailMessage.innerHTML = "";
} else {
	emailMessage.innerHTML = "*";
	totalErrors ++
}


// address
if(addressPattern.test(nameInput.value)){
	addressMessage.innerHTML = "";
} else {
	addressMessage.innerHTML = "*";
	totalErrors ++
}


// country
if(countryPattern.test(nameInput.value)){
	countryMessage.innerHTML = "";
} else {
	countryMessage.innerHTML = "*";
	totalErrors ++
}

// stop form from submitting if there is a error
if (totalErrors > 0) {
	event.preventDefault();
}

}












