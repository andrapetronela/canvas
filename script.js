    let container = document.getElementById("container");
    let middleX = window.innerWidth / 2;
    let middleY = window.innerHeight / 2;
    
    
    document.addEventListener("mousemove", function(event) {
    	let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
    
        // get mouse position
    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	
        // circle
        // begin drawing
//    	ctx.beginPath();
//    	ctx.strokeStyle = "rgba(221, 221, 221, 0.83)";
//		let circle = ctx.arc(mouseX, mouseY, 18, 0, 2*Math.PI);
//		ctx.stroke();
        
        // line
        
        ctx.strokeStyle = `rgba(${mouseY}, ${mouseY} , 0, 0.64)`;
        ctx.beginPath();
        ctx.moveTo(mouseX,mouseY);
        ctx.lineTo(middleX, middleY);
        ctx.stroke();
     
    });

    document.addEventListener("click", function(event) {
        let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
    
        // get mouse position
    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	
        // circle
        // begin drawing
    	ctx.beginPath();
    	ctx.fillStyle = `rgba(${mouseY}, ${mouseY} , 0, 0.64)`;
		ctx.arc(mouseX, mouseY, 5, 0, 2*Math.PI);
		ctx.fill();
        
        
        
    });

