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