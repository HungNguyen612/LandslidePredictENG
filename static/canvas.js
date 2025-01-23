
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d'); // Get the 2D drawing context
        const width = canvas.width
        const data = {
  labels: ['Password Guessing', 'SSH', 'Brute Force', 'Valid Accounts', 'System Binary Proxy', 'Account Access'],
  datasets: [{
    label: 'Attack Techniques',
    data: [30, 15, 25, 10, 10, 10], // Percentages or counts for each label
    backgroundColor: [
      '#1f77b4', // Blue
      '#ff7f0e', // Orange
      '#2ca02c', // Green
      '#d62728', // Red
      '#9467bd', // Purple
      '#8c564b'  // Brown
    ],
    hoverOffset: 4 // Adds spacing when hovering
  }]
};      const options = {
  responsive: true, // Make the chart responsive
  plugins: {
    title: {
      display: true,
      text: 'MITRE ATT&CK Techniques', // Title of the chart
      font: {
        size: 18
      }
    }
  }
};

        let radius1 = 100
        let radius2 = 90
        let space = width/7
        let x = space
        let y = 200
        function graph(){
        new Chart(ctx, {
        type: 'doughnut', // Specify chart type as "doughnut"
        data: data,
        options: options
        });
        }  
        graph()
        /*function circle() {
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
        */
        
        
        
