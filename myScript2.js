
function changeImage () {
	var image = document.getElementById('myImage');

	if (image.src.match("alku")) {
		image.src = "syoksy.jpg";
	}else if 
		(image.src.match("syoksy")) {
		image.src = "lasku.jpg";
	} 
	else {
	image.src = "alku.jpg"; }
		
	}	