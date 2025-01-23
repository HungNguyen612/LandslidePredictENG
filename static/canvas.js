const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
let data = {
    labels: ['','' ],
    datasets: [{
      label: 'Rainfall',
      data: [90,10], // Percentages or counts for each label
      backgroundColor: [
        '#1f77b4', // Blue
        '#d62728', // Red
    

      ],
      hoverOffset: 4 // Adds spacing when hovering
    }]
  };
  const options = {
    responsive: true, // Make the chart responsive
    plugins: {
      title: {
        display: true,
        text: 'Rainfall', // Title of the chart
        font: {
          size: 30

        }
      }
    }
  };
function graph(){
    new Chart(ctx, {
        type: 'doughnut', // Specify chart type as "doughnut"
        data: data,
        options: options
        });
}
graph()
