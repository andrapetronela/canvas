    let container = document.getElementById("container");
    
    document.addEventListener("mousemove", function(event) {
    	let canvas = document.getElementById("canvas");
    	let ctx = canvas.getContext("2d");

    	ctx.fillStyle = "#63a89e";
    	ctx.fillRect(0, 0, canvas.width, canvas.height);

    	let mouseX = event.clientX;
    	let mouseY = event.clientY;
    	ctx.fillStyle = "#333";
    	let rect = ctx.fillText("Hi", mouseX, mouseY);

    	ctx.beginPath();
    	ctx.fillStyle = "#d36025";
		ctx.arc(mouseX,mouseY,20,0,2*Math.PI);
		ctx.stroke();
    	container.textContent = rect;
    })


