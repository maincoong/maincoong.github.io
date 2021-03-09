let imageSource = document.getElementById("panel");
let page = document.getElementsByTagName("BODY")

// change panel # when you add images to folder
let panels = 10;
let currentScene = 0;

//changes src of image to reflect currentScene #
//cycles through images which are named 1.png, 2.png, 3.png, etc

function drawScene() {
	imageSource.src = currentScene + ".png";
	currentScene++;
}


page[0].onclick = function() {
	if (currentScene === 0) {
		currentScene = 1;
	}
		drawScene();
		if (currentScene > panels) {
			currentScene = 1;
			drawScene();
		}
	}



