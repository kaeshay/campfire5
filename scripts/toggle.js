var soundCounter=0;
function playSound(idString){
	var sound=document.getElementById(idString);
	if (soundCounter==0){
		sound.play();
		soundCounter++;
	} else if (soundCounter==1){
		sound.pause();
		soundCounter=0;
	}
}

var transformCounter=0;
function transformClass(makerString, classString){
	element=document.getElementsByClassName(classString)[0];
	// for (var i=0;i<classString.length;i++){
		if(transformCounter==0){
			element.src="assets/"+makerString+"/"+classString+"2.png";
			transformCounter++;
		} else if(transformCounter==1){
			element.src="assets/"+makerString+"/"+classString+"1.png";
			transformCounter=0;
		}
	// }
}
var transformIdCounter=0;
function transformId(makerString, idString){
	element=document.getElementById(idString);
	// for (var i=0;i<classString.length;i++){
		if(transformIdCounter==0){
			element.src="assets/"+makerString+"/"+idString+"2.png";
			transformIdCounter++;
		} else if(transformIdCounter==1){
			element.src="assets/"+makerString+"/"+idString+"1.png";
			transformIdCounter=0;
		}
	// }
}
var showCounter = 0;
function showInventory(idString){
	element = document.getElementById(idString);
	if(showCounter==0){
		element.style.display='block';
		showCounter++;
	} else if (showCounter==1){
		element.style.display='none';
		showCounter=0;
	}
}

var optimusCounter=0
function transformOptimus(){
	element=document.getElementsByClassName("optimus")[0];
	if(optimusCounter==0){
		element.src="assets/eitan/optimus2.png";
		optimusCounter++;
	} else if(optimusCounter==1){
		element.src="assets/eitan/optimus3.png";
		optimusCounter++;
	} else if(optimusCounter==2){
		element.src="assets/eitan/optimus4.png";
		optimusCounter++;
	} else if(optimusCounter==3){
		element.src="assets/eitan/optimus5.png";
		optimusCounter++;
	} else if(optimusCounter==4){
		element.src="assets/eitan/optimus1.png";
		optimusCounter=0;
	}
}

var spideyCounter=0
function transformSpidey(){
	element=document.getElementsByClassName("spidey")[0];
	if(spideyCounter==0){
		element.src="assets/aziz/spidey2.png";
		spideyCounter++;
	} else if(spideyCounter==1){
		element.src="assets/aziz/spidey3.png";
		spideyCounter++;
	} else if(spideyCounter==2){
		element.src="assets/aziz/spidey4.png";
		spideyCounter++;
	} else if(spideyCounter==3){
		element.src="assets/aziz/spidey5.png";
		spideyCounter++;
	} else if(spideyCounter==4){
		element.src="assets/aziz/spidey6.png";
		spideyCounter++;
	} else if(spideyCounter==5){
		element.src="assets/aziz/spidey7.png";
		spideyCounter++;
	} else if(spideyCounter==6){
		element.src="assets/aziz/spidey8.png";
		spideyCounter++;
	} else if(spideyCounter==7){
		element.src="assets/aziz/spidey9.png";
		spideyCounter++;
	} else if(spideyCounter==8){
		element.src="assets/aziz/spidey10.png";
		spideyCounter++;
	} else if(spideyCounter==9){
		element.src="assets/aziz/spidey1.png";
		spideyCounter=0;
	} 
}
var treasureCounter=0;
function transformTreasure(){
	treasure=document.getElementsByClassName('treasure')[0];
	money=document.getElementById('treasureMoney');
	if(treasureCounter==0){
		treasure.src="assets/aziz/treasure2.png";
		money.style.display='block';
		treasureCounter++;
	} else if(treasureCounter==1){
		treasure.src="assets/aziz/treasure1.png";
		money.style.display='none';
		treasureCounter=0;
	} 
}