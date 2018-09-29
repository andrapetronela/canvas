    let container = document.getElementById("container");

    
    
    document.addEventListener("mousemove", function(event) {
    	let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");
        
        
        
        
        
        
        // background
    	ctx.fillStyle = "#63a89e";
    	ctx.fillRect(0, 0, canvas.width, canvas.height);

    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	ctx.fillStyle = "#333";
    	let text = ctx.fillText("Hi", mouseX, mouseY);

    	ctx.beginPath();
    	ctx.fillStyle = "#d36025";
		ctx.arc(mouseX,mouseY, 20, 0, 2*Math.PI);
        
        
		ctx.stroke();
        
        ctx.fillStyle = "#d36";
        ctx.beginPath();
        ctx.arc(canvas.width / 2 - 300, canvas.height / 2 - 400, 70, 0, 2 * Math.PI);
        ctx.arc(canvas.width / 2 - 250, canvas.height / 2 - 400, 70, 0, 2 * Math.PI);
        ctx.fill();
        
        fill(48, 130, 31);
        rect(176, 103, 12, 32);
        
    	container.textContent = text;
    });
