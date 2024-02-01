// Data for the diagram
const data = {
    labels: ['2014', '2022-06', '2022-08', '2022-06', '2022-06', '2023-02', '2023-03', '2023-03'],
    datasets: [
        {
        label: 'Усиновлення дітей із Криму',
        data: [1000, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        type: 'bar',
        },
        {
        label: 'Усиновлення дітей із Донбасу',
        data: [0, 108, 400, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        type: 'bar',
        },
        {
        label: 'Загальна кількість вивезених дітей',
        data: [0, 307423, 300000, 738000, 6000, 0, 16000, 380],
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
        type: 'line',
        yAxisID: 'y-axis-2',
        },
    ],
};

// Options for the diagram
const options = {
    scales: {
        x: { stacked: true },
        y: { stacked: true },
        yAxes: [
        {
            type: 'linear', // Common axis for bar
            display: true,
            position: 'left',
            id: 'y-axis-1',
        },
        {
            type: 'linear', // Line axle
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
            drawOnChartArea: false, // Disabling the grid for the line axis
            },
        },
        ],
    },
};

// Create a chart
const ctx = document.getElementById('deportation').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
});
