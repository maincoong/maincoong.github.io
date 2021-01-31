const savedComments = document.getElementsByClassName("comments");
let mainbox = document.getElementById("mainbox");
let buttons = document.getElementsByClassName('btn');
let numericGrades = document.getElementsByClassName("total");

let promptExploration = document.getElementById("promptExploration");
let terminology = document.getElementById("terminology");
let engagementGrade = document.getElementById("engagement");
let letterGrade = document.getElementById("letterGrade");
let total = document.getElementById("total");

for (var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function() { 
    	if (this.id === "btn_grade") {
    		 
 
	 //let gradePoints = new Grade();
	 //gradePoints.calc();
if (promptExploration.innerHTML >= 95 && promptExploration.innerHTML <= 100){
mainbox.innerHTML += "<br/>" + "<br />" + "Prompt Exploration:  A+"; 
		} if (promptExploration.innerHTML >= 90 && promptExploration.innerHTML <= 94){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  A";
		} if (promptExploration.innerHTML >= 85 && promptExploration.innerHTML <= 89){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  A-";
		} if (promptExploration.innerHTML >= 80 && promptExploration.innerHTML <= 84){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  B+";
		} if (promptExploration.innerHTML >= 75 && promptExploration.innerHTML <= 79){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  B";
		} if (promptExploration.innerHTML >= 70 && promptExploration.innerHTML <= 74){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  B-";
		} if (promptExploration.innerHTML >= 65 && promptExploration.innerHTML <= 69){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  C+";
		} if (promptExploration.innerHTML >= 60 && promptExploration.innerHTML <= 64){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  C";
		} if (promptExploration.innerHTML >= 55 && promptExploration.innerHTML <= 59){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  C-";
		} if (promptExploration.innerHTML >= 50 && promptExploration.innerHTML <= 54){
mainbox.innerHTML +="<br/>" + "<br/>" + "Prompt Exploration:  D";
		} 
		
if (terminology.innerHTML >= 95 && terminology.innerHTML <= 100){
mainbox.innerHTML += "<br />" + "Terminology: A+"; 
		} if (terminology.innerHTML >= 90 && terminology.innerHTML <= 94){
mainbox.innerHTML +="<br/>" + "Terminology: A";
		} if (terminology.innerHTML >= 85 && terminology.innerHTML <= 89){
mainbox.innerHTML +="<br/>" + "Terminology: A-";
		} if (terminology.innerHTML >= 80 && terminology.innerHTML <= 84){
mainbox.innerHTML +="<br/>" + "Terminology: B+";
		} if (terminology.innerHTML >= 75 && terminology.innerHTML <= 79){
mainbox.innerHTML +="<br/>" + "Terminology: B";
		} if (terminology.innerHTML >= 70 && terminology.innerHTML <= 74){
mainbox.innerHTML +="<br/>" + "Terminology: B-";
		} if (terminology.innerHTML >= 65 && terminology.innerHTML <= 69){
mainbox.innerHTML +="<br/>" + "Terminology: C+";
		} if (terminology.innerHTML >= 60 && terminology.innerHTML <= 64){
mainbox.innerHTML +="<br/>" + "Terminology: C";
		} if (terminology.innerHTML >= 55 && terminology.innerHTML <= 59){
mainbox.innerHTML +="<br/>" + "Terminology: C-";
		} if (terminology.innerHTML >= 50 && terminology.innerHTML <= 54){
mainbox.innerHTML +="<br/>" + "Terminology: D";
		} 
		


		if (engagementGrade.innerHTML >= 95 && engagementGrade.innerHTML <= 100){
			mainbox.innerHTML += "<br />" + "Peer Engagement: A+"; 
		} if (engagementGrade.innerHTML >= 90 && engagementGrade.innerHTML <= 94){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: A";
		} if (engagementGrade.innerHTML >= 85 && engagementGrade.innerHTML <= 89){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: A-";
		} if (engagementGrade.innerHTML >= 80 && engagementGrade.innerHTML <= 84){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: B+";
		} if (engagementGrade.innerHTML >= 75 && engagementGrade.innerHTML <= 79){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: B";
		} if (engagementGrade.innerHTML >= 70 && engagementGrade.innerHTML <= 74){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: B-";
		} if (engagementGrade.innerHTML >= 65 && engagementGrade.innerHTML <= 69){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: C+";
		} if (engagementGrade.innerHTML >= 60 && engagementGrade.innerHTML <= 64){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: C";
		} if (engagementGrade.innerHTML >= 55 && engagementGrade.innerHTML <= 59){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: C-";
		} if (engagementGrade.innerHTML >= 50 && engagementGrade.innerHTML <= 54){
			mainbox.innerHTML += "<br/>" + "Peer Engagement: D";
		} 

		let	a = Number(promptExploration.innerHTML);
		let b = Number(terminology.innerHTML);
		let	c = Number(engagementGrade.innerHTML);

		document.getElementById("total").innerHTML = Number((((a + b + c) / 300) * 30));
		console.log((Number(total.innerHTML) * 100) / 30);

		let percentGrade = (Number(total.innerHTML) * 100) / 30;
		
		if (percentGrade >= 95 && percentGrade <= 100){
			letterGrade.innerHTML += "A+"; 
		} if (percentGrade >= 90 && percentGrade <= 94){
			letterGrade.innerHTML += "A";
		} if (percentGrade >= 85 && percentGrade <= 89){
			letterGrade.innerHTML += "A-";
		} if (percentGrade >= 80 && percentGrade <= 84){
			letterGrade.innerHTML += "B+";
		} if (percentGrade >= 75 && percentGrade <= 79){
			letterGrade.innerHTML += "B";
		} if (percentGrade >= 70 && percentGrade <= 74){
			letterGrade.innerHTML += "B-";
		} if (percentGrade >= 65 && percentGrade <= 69){
			letterGrade.innerHTML += "C+";
		} if (percentGrade >= 60 && percentGrade <= 64){
			letterGrade.innerHTML += "C";
		} if (percentGrade >= 55 && percentGrade <= 59){
			letterGrade.innerHTML += "C-";
		} if (percentGrade >= 50 && percentGrade <= 54){
			letterGrade.innerHTML += "D";
		} 		



    	}
if (this.id === "btn_copy") {
	console.log("Copied");
  var textarea = document.createElement('textarea')
  textarea.id = 'temp_element'
  // Optional step to make less noise on the page, if any!
  textarea.style.height = 0
  // Now append it to your page somewhere, I chose <body>
  document.body.appendChild(textarea)
  // Give our textarea a value of whatever inside the div of id=containerid
  textarea.value = mainbox.innerText;
  // Now copy whatever inside the textarea to clipboard
  var selector = document.querySelector('#temp_element')
  selector.select()
  document.execCommand('copy')
  // Remove the textarea
  document.body.removeChild(textarea)

  mainbox.style.backgroundColor="#f6f3f0";
}
	
if (this.id === "btn_reset") {
    		console.log("reset");
    		console.clear();
    		mainbox.innerHTML = "";
    		promptExploration.innerHTML = "";
    		terminology.innerHTML = "";
    		engagementGrade.innerHTML = "";
    		total.innerHTML = "";
    		letterGrade.innerHTML = "";
    		mainbox.style.backgroundColor="#c6ff83";
    	}

	}
}




function CallUp () {
	this.call = function(num) {
		savedComments[num] = savedComments[num];
		savedComments[num].onclick = function() { 
			console.log("clicked")
		 mainbox.innerHTML += (" " + savedComments[num].innerText);
		}
	}
}

let c0 = new CallUp();
c0.call(0);

let c1 = new CallUp();
c1.call(1);

let c2 = new CallUp();
c2.call(2);

let c3 = new CallUp();
c3.call(3);

let c4 = new CallUp();
c4.call(4);

let c5 = new CallUp();
c5.call(5);

let c6 = new CallUp();
c6.call(6);

let c7 = new CallUp();
c7.call(7);

let c8 = new CallUp();
c8.call(8);

let c9 = new CallUp();
c9.call(9);

let c10 = new CallUp();
c10.call(10);

let c11 = new CallUp();
c11.call(11);

let c12 = new CallUp();
c12.call(12);

let c13 = new CallUp();
c13.call(13);

let c14 = new CallUp();
c14.call(14);

let c15 = new CallUp();
c15.call(15);

let c16 = new CallUp();
c16.call(16);

let c17 = new CallUp();
c17.call(17);

let c18 = new CallUp();
c18.call(18);

let c19 = new CallUp();
c18.call(19);

let c20 = new CallUp();
c18.call(20);

let c21 = new CallUp();
c18.call(21);

let c22 = new CallUp();
c18.call(22);

let c23 = new CallUp();
c18.call(23);

let c24 = new CallUp();
c18.call(24);



