const chartOne = document.querySelector(".chart");



function createChart(canvasElement) {
    new Chart(canvasElement, {
        type: 'pie',
        data: {
            labels: ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'],
            datasets: [{
                label: 'Temperatuur',
                data: [20, 18, 21, 18, 17, 19, 15],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

createChart(chartOne)