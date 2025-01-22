
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d'); // Get the 2D drawing context
        const width = canvas.width
        let radius1 = 100
        let radius2 = 90
        let space = width/7
        let x = space
        let y = 200
        
        function circle() {
        // Draw a circle
        ctx.beginPath();
        ctx.arc(x, y, radius1, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, radius2, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
        }
        circle()
        x += space
        circle()
        x += space
        circle()
        x += space
        circle()
        x += space
        circle()
        x += space
        circle()
        x += space
        circle()
        x += space
        
