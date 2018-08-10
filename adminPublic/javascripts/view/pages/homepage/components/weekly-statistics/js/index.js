var staticsCanvas = weeklyStatisticsSellingComponent.staticsCanvas.getContext("2d");
var weeklyStaticsSellingChart = new Chart(staticsCanvas, {
    type: "bar",
    data: {
        labels: ['sutterday', "sunday", "monday", 'tuesday', 'wendnesday', 'thursday', 'friday'],
        datasets: [{
            label: "orders",
            data: [3, 4, 5, 4, 5, 6, 7],
            backgroundColor: [
                '#64b5f6',
                '#f16192',
                '#81c784',
                '#cecece',
                '#bb8de8',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 159, 70, 0.4)'
            ],
        }]
    },
    options: {
        title: {
            display: false,
            text: "sold orders last week",
            fontSize: 25,
            fontColor: "#64b5f6"
        },
        legend: {
            display: false
        }
    }
});
