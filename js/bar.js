var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets: [{
            label: 'Present',
            data: [40, 30, 35, 25, 30, 25],
            backgroundColor: [
                '#B3CCF2',
            ],
            borderRadius:70,
            barThickness: 6,
        },
        {
            label: 'Absent',
            data: [12, 23, 10, 15, 20, 18],
            backgroundColor: [
                '#E0BCF8',
            ],
            borderRadius:70,
            barThickness: 6,
        },
        {
            barPercentage: 0.4,
            label: 'On leave',
            data: [6, 19, 20, 25, 10, 11],
            backgroundColor: [
                '#F7DDB5',
            ],
            borderRadius:70,
            barThickness: 6,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            xAxes: [{
                barPercentage: 0.7,
                categoryPercentage: 1.0,
            }]
        },
        plugins: {
            title: {
                display: true,
                text: 'ATTENDANCE',
                align: 'start',
                color: '#707070',
                font: {
                    size: 16,
                    family: 'Lato',
                    weight: 'bold',
                },
                
                padding:{
                    bottom: 0,
                    top: 15,
                },
            },
            subtitle: {
                display: true,
                text: 'Last 6 month',
                color: '#707070',
                align: 'start',
                font: {
                    size: 14,
                    family: 'tahoma',
                    weight: 'normal',
                },

            },
            legend: {
                align: 'end',
            }
        }
    }

});