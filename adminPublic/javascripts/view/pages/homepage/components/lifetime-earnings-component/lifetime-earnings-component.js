var lifeTimeEarningsComponent = active.renderComponent(() => {
    return (/*html*/ `
        <dashboard-component class="default-properties small-padding white-bg-color full-height overflow-hidden">
            <div class="row main-bg-color center-align">
            <div class="col s12 m12 l12 xl12"></div>
                <h4 class="green-text text-lighten-3 default-padding">Life Time Earnings $$</h4>
                <strong class="display-inline-block white-text default-padding">5000$</strong>
            </div>
            <div class="default-properties overflow-hidden canvas-container">
                <canvas expName="canvas">
                </canvas>
            </div>
            <div class="row">
                <a class="default-padding hoverable-underlined">show more</a>
            </div>
        </dashboard-component>
    `)
}, {
    parent: homePage.lifetimeEarningsComponent,
    render: true,
    style: {
        "h4": {
            fontSize: "24px",
            margin: 0,
        },
        ".canvas-container": {
            height: "300px"
        },
        canvas: {
            height: "100%",
            width: "100%"
        }
    }
}, (component) => {
    let lifetimeEarningsCanvas = lifeTimeEarningsComponent.canvas.getContext("2d");
    let lifetimeEarningCharts = new Chart(lifetimeEarningsCanvas, {
        type: "line",
        data: {
            // labels: ['sutterday', "sunday", "monday", 'tuesday', 'wendnesday', 'thursday', 'friday'],
            datasets: [{
                label: "orders",
                data: [200, 1100, 300, 500, 2000, 600],
                borderColor: "green",
                borderWidth: 1,
                backgroundClor: "white"
            }]
        },
        options: {
            title: {
                display: false,
                text: "sold orders last week",
                fontSize: 15,
                fontColor: "#64b5f6"
            },
            legend: {
                display: false
            },
        }
    });
})