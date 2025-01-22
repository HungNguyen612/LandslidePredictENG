
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d'); // Get the 2D drawing context

        // Draw a filled rectangle
        ctx.fillStyle = 'blue'; // Set fill color
        ctx.fillRect(50, 50, 150, 100); // x, y, width, height

        // Draw a circle
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke(); // Outline the cir
