var ctx = document.getElementById('donutChart').getContext('2d');
var donutChart = new Chart(ctx, 
     {
          type: 'doughnut',
          data: {
            labels: ['Female', 'Male'],
            datasets: [{
              data: [35 + 40],
              backgroundColor: [
               'red',
           ],
            }],
          },
          options: {
            plugins: {
              datalabels: {
                display: true,
                
                borderRadius: 3,
                font: {
                  color: 'red',
                  weight: 'bold',
                }
              },
              doughnutlabel: {
                labels: [{
                  text: '100',
                  font: {
                    size: 20,
                    weight: 'bold'
                  }
                }, {
                  text: 'total'
                }]
              }
            }
          }
        }
);