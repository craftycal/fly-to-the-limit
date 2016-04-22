var formContainer = document.querySelector("#form-box");

galleryContainer.innerHTML = "";


// find the form
var bookingForm = document.querySelector("#booking");

// referances to input filds
var nameInput = document.querySelector("#name");
var numberInput = document.querySelector("#number");
var emailInput = document.querySelector("#email");
var aircraftInput = document.querySelector("#aircraft");
var passengersInput = document.querySelector("#passengers");
var departingInput = document.querySelector("#departing");
var timeInput = document.querySelector("#time");
var lengthInput = document.querySelector("#length");
var addressInput = document.querySelector("#address");
var cityInput = document.querySelector("#city");
var countryInput = document.querySelector("#country");

// messages
var nameMessage = document.querySelector("#name-message");
var numberMessage = document.querySelector("#number-message");
var emailMessage = document.querySelector("#email-message");
var aircraftMessage = document.querySelector("#aircraft-message");
var passengersMessage = document.querySelector("#passengers-message");
var departingMessage = document.querySelector("#departing-message");
var timeMessage = document.querySelector("#time-message");
var lengthMessage = document.querySelector("#length-message");
var addressMessage = document.querySelector("#address-message");
var cityMessage = document.querySelector("#city-message");
var countryMessage = document.querySelector("#country-message");

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
	nameMessage.innerHTML = " ";
} else {
	nameMessage.innerHTML = "* name invalid";
	totalErrors ++;
}

// number
if(numberPattern.test(nameInput.value)){
	numberMessage.innerHTML = " ";
} else {
	numberMessage.innerHTML = "*";
	totalErrors ++;
}


// email
if(emailPattern.test(nameInput.value)){
	emailMessage.innerHTML = " ";
} else {
	emailMessage.innerHTML = "*";
	totalErrors ++;
}


// address
if(addressPattern.test(nameInput.value)){
	addressMessage.innerHTML = " ";
} else {
	addressMessage.innerHTML = "*";
	totalErrors ++;
}


// country
if(countryPattern.test(nameInput.value)){
	countryMessage.innerHTML = " ";
} else {
	countryMessage.innerHTML = "*";
	totalErrors ++;
}

// stop form from submitting if there is a error
if (totalErrors > 0) {
	event.preventDefault();
}

}












