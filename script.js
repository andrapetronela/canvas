    let container = document.getElementById("container");

    
    
    document.addEventListener("mousemove", function(event) {
    	let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
    
        // get mouse position
    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	
        // begin drawing
    	ctx.beginPath();
    	ctx.strokeStyle = "rgba(221, 221, 221, 0.83)";
		ctx.arc(mouseX, mouseY, 8, 0, 2*Math.PI);
		ctx.stroke();
    });

    document.addEventListener("click", function(event) {
        let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
    
        // get mouse position
    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	
        // begin drawing
    	ctx.beginPath();
    	ctx.fillStyle = "#33dd95";
		ctx.arc(mouseX, mouseY, 10, 0, 2*Math.PI);
		ctx.fill();
    });

