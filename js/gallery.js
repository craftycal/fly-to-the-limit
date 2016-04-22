// get all the links of the images
var allImages = document.querySelectorAll("#images img");

// console.log(allImages[0].);

var imageSoursces = [];

for (var i = 0; i < allImages.length; i++) {
	imageSoursces.push( allImages[i].parentNode.href);
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
prev.id = "prev";
next.id = "next";

prev.innerHTML = '<img id="img1" src="img/arrow_l.png">'; 
next.innerHTML = '<img id="img1" src="img/arrow_r.png">';

// add buttons to slider
slider.appendChild(prev);
slider.appendChild(next);

// show the firest image
slider.style.backgroundImage = "url("+ imageSoursces[0] +")";

// attach event to buttons, listen for clicks
prev.onclick = changePicture;
next.onclick = changePicture;

function changePicture() {

	// what image is in use
	var imageInUse = slider.style.backgroundImage;

	// extract image scr
	var bits = imageInUse.split('"');

	console.log(bits);

	//save the link inside a variable
	var url = bits[1];

	// find out what index is in use on image src
	var index = imageSoursces.indexOf( url );

	console.log(index);


	// if the next button is clicked
	if( this.id == "next"){
		index++

		//if index is beond last img
		if( index == imageSoursces.length) {
			index = 0;
		} 

	} else {
		index--;

		//if before the first image
		if( index == -1) {
			index = imageSoursces.length -1;
		}
	}

	// get the new url
	var newUrl = imageSoursces[index]

	// change picture in slider
	slider.style.backgroundImage = 'url('+ newUrl +')';

}


























