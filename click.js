let imageSource = document.getElementById("panel");
let page = document.getElementsByTagName("BODY")
let currentScene = 1;

var drawScene1 = function() {
	imageSource.src = "1.png"
	currentScene = 1;
}

var drawScene2 = function() {
	imageSource.src = "2.png"
	currentScene = 2;
}

var drawScene3 = function() {
	imageSource.src = "3.png"
	currentScene = 3;
}

var drawScene4 = function() {
	imageSource.src = "4.png"
	currentScene = 4;
}

var drawScene5 = function() {
	imageSource.src = "5.png"
	currentScene = 5;
}

var drawScene6 = function() {
	imageSource.src = "6.png"
	currentScene = 6;
}

var drawScene7 = function() {
	imageSource.src = "7.png"
	currentScene = 7;
}

var drawScene8 = function() {
	imageSource.src = "8.png"
	currentScene = 8;
}

var drawScene9 = function() {
	imageSource.src = "9.png"
	currentScene = 9;
}

var drawScene10 = function() {
	imageSource.src = "10.png"
	currentScene = 10;
}

page[0].onclick = function() {
	if (currentScene === 1) {
		drawScene2();
		console.log("Load 2.png");
	} else if (currentScene === 2) {
		drawScene3();
		console.log("Load 3.png");
	} else if (currentScene === 3) {
		drawScene4();
		console.log("Load 4.png");
	} else if (currentScene === 4) {
		drawScene5();
		console.log("Load 5.png");
	}	else if (currentScene === 5) {
		drawScene6();
		console.log("Load 6.png");
	}	else if (currentScene === 6) {
		drawScene7();
		console.log("Load 7.png");
	} else if (currentScene === 7) {
		drawScene8();
		console.log("Load 8.png");
	} else if (currentScene === 8) {
		drawScene9();
		console.log("Load 9.png");
	} else if (currentScene === 9) {
		drawScene10();
		console.log("Load 10.png");
	} else if (currentScene === 10) {
		drawScene1();
		console.log("Load 1.png");
	}
}
