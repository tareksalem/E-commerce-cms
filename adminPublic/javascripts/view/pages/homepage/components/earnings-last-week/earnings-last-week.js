var earningsLastWeekComponent = active.renderComponent(() => {

    return (/*html*/ `
        <dashboard-component class="default-properties small-padding white-bg-color auto-height overflow-hidden">
            <div class="row default-padding off-white-bg-color">
                <h4 class="blue-grey-text">Your Earnings last week</h4>
            </div>
            <div class="container-canvas default-margin">
                <canvas expName="canvas"></canvas>
            </div>
            <div class="row">
                <a class="default-padding hoverable-underlined">show more</a>
            </div>
        </dashboard-component>
    `)
}, {
    parent: homePage.earningsLastWeekComponent,
    render: true,
    style: {
        ".container-canvas": {
            height: "280px"
        }
    }
}, () => {
    let earningsLastWeekCanvas = earningsLastWeekComponent.canvas.getContext("2d");
    let earningsLastWeekCharts = new Chart(earningsLastWeekCanvas, {
        type: "doughnut",
        data: {
            labels: ['sutterday', "sunday", "monday", 'tuesday', 'wendnesday', 'thursday', 'friday'],
            datasets: [{
                label: "$",
                data: [200, 1100, 300, 500, 2000, 600, 900],
                
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
                fontSize: 25,
                fontColor: "#64b5f6"
            },
            legend: {
                display: true
            },
            
        }
    });
});