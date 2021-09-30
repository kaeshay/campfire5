var slowCounter=0;
function slowDown(){
	element=document.getElementById("containment-wrapper");
	if(slowCounter==0){
		element.style.animation="blur 15s";
		element.style.animationTimingFunction="ease-in";
		element.style.animationFillMode="forwards";
		slowCounter++;
	} else if(slowCounter==1){
		console.log('hi');
		element.style.animation="none";
		// element.style.animationFillMode="backwards";
		slowCounter=0;
	}
}

var lightCounter=0;
function lightOff(){
	element=document.getElementById('containment-wrapper');
	toolbox=document.getElementById('toolbox');
	if(lightCounter==0){
		console.log("lights off");
		element.style.animation="invert 30s";
		element.style.animationTimingFunction="ease-in";
		element.style.animationFillMode="forwards";
		toolbox.style.animation="invert";
		toolbox.style.animationFillMode="forwards";
		lightCounter++;
	} else if(lightCounter==1){
		element.style.filter="invert(0)"
		toolbox.style.filter="invert(0)"
		element.style.animation="none";
		toolbox.style.animation="none";
		lightCounter=0;
	}
}
function enlarge(idString){
	element=document.getElementById(idString);
	element.style.width='200px';
	element.style.position='absolute';
	element.style.height='auto';
}
