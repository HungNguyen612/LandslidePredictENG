
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d'); // Get the 2D drawing context
        let radius1 = 50
        let radius2 = 40
        // Draw a circle
        ctx.beginPath();
        ctx.arc(600, 200, radius1, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(600, 200, radius2, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
