document.getElementById('containment-wrapper').onclick = function clickEvent(e) {
	var rect = e.currentTarget.getBoundingClientRect();
	var xPos = 0;
	var yPos = 0;;
	const thing = document.querySelectorAll('.avatar,.car,.wide-avatar,.pack-avatar,.pack-wide-avatar,.pack-vehicle,.vehicle,.building,.item,.monster');
		for (var i = 0; i < thing.length; i++) {

			    thing[i].addEventListener('dblclick', function(e) { 
			    	if (e.altKey) {
			    		this.style.position="fixed";
			    		this.style.top="50vh";
			    		this.style.left="50vw";
			    		this.style.zIndex="99";

			    	} else if (e.shiftKey) {
			    		this.style.position="absolute";
			    		xPos = e.clientX - rect.left; //x position within the element.
						yPos = e.clientY - rect.top;  //y position within the element.
			    		console.log("ShiftLeft: " + xPos + " ; ShiftTop : " + yPos + ".");
			    		this.style.top=yPos+'px';
			    		this.style.left=xPos+'px';
			    	}
				})
			}
		document.getElementById('lizzyStamp').addEventListener('dblclick', function(e) {
			img = document.createElement('img'); 
			img.src="assets/aziz/lizzy.png";
			img.classList.add('avatar','draggable');
			img.style.position="absolute";
			xPos = e.clientX - rect.left; //x position within the element.
			yPos = e.clientY - rect.top;  //y position within the element.
			console.log("ShiftLeft: " + xPos + " ; ShiftTop : " + yPos + ".");
			img.style.top=yPos+'px';
			img.style.left=xPos+'px';

			document.getElementById('containment-wrapper').appendChild(img);
		})
	}
