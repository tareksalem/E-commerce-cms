var weeklyStatisticsSellingComponent = active.renderComponent(() => {
    return ( /*html*/ `
    <dashboard-component class="default-properties small-padding white-bg-color auto-height overflow-hidden">
        <div class="row">
            <h5 class="default-padding blue-grey-text">sold orders last week</h5>
        </div>
        <div class="row container-canvas">
            <canvas expName="staticsCanvas"></canvas>
        </div>
        <div class="row">
            <a class="default-padding hoverable-underlined">show more</a>
        </div>
    </dashboard-component>
    `)
}, {
    render: true,
    name: "weeklyStatisticsSellingComponent",
    parent: homePage.weeklyStatistics,
    scripts: ["/javascripts/view/pages/homepage/components/weekly-statistics/js/index.js"],
    style: {
        canvas: {
            width: "100%",
            height: "100%"
        },
        ".container-canvas": {
            height: "400px"
        }
    },
    whileLoading: (parent) => {
        parent.appendElements( /*html*/ `
            <div class="app-loader rr">
                
                <div class="loader"></div>
            </div>
        `)
    },
    onload: (parent) => {
        parent.querySelector(".app-loader").removeThis()

    },
})