// get all the links of the images
var allImages = document.querySelectorAll("#images img")

var imageSoursces = [];

for (var i = 0; i < allImages.length; i++) {
	imageSoursces.push( allImages[i].src);
}

// delete all images on page
var galleryContainer = document.querySelector("#gallery");

galleryContainer.innerHTML = "";

// create container slider
var slider = document.createElement("div");

// attach id to slider
slider.id = "slider";

// add slider the browser 
galleryContainer.appendChild( slider);

// create buttons
var next = document.createElement("button");
var prev = document.createElement("button");

// add button id's
next.id = "next";
prev.id = "prev";

next.innerHTML = "next";
prev.innerHTML = "prev"; 

// add buttons to slider
slider.appendChild(next);
slider.appendChild(prev);

// show the firest image
slider.style.backgroundImage = "url("+ imageSoursces[0] +")";

// attach event to buttons, listen for clicks
next.onclick = changePicture;
prev.onclick = changePicture;

function changePicture() {

	// what image is in use
	var imageInUse = slider.style.backgroundImage;

	// extract image scr
	var bits = imageInUse.split('"');

	console.log(bits);
}


























