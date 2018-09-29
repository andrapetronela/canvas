    let container = document.getElementById("container");

    
    
    document.addEventListener("mousemove", function(event) {
    	let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
    
        // get mouse position
    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	
        // begin drawing
    	ctx.beginPath();
    	ctx.fillStyle = "#ddd";
		ctx.arc(mouseX, mouseY, 15, 0, 2*Math.PI);
		ctx.fill();
        
    });
