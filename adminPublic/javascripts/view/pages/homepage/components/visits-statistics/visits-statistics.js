var visitsStatisticsGlobal = {};
if (visitsStatisticsGlobal.MakeVisitsCharts == undefined){
    class MakeVisitsCharts{
        constructor(canvas, type, bgColor, labels, data) {
            this.canvas = canvas;
            this.type = type;
            this.bgColor = bgColor;
            this.labels = labels;
            this.data = data;
            this.chart = new Chart(this.canvas, {
                type: this.type,
                data: {
                    labels: this.labels,
                    datasets: [{
                        label: "visits",
                        data: this.data,
                        backgroundColor: [
                            this.bgColor
                        ],
                    }]
                },
                options: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                }
            })
        }
        rebuildChart() {
            this.chart = new Chart(this.canvas, {
                type: this.type,
                data: {
                    labels: this.labels,
                    datasets: [{
                        label: "visits",
                        data: this.data,
                        backgroundColor: [
                            this.bgColor
                        ],
                    }]
                },
                options: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        titleFontSize: 15,
                        bodyFontSize: 15,
                        backgroundColor: "#393b48"
                    }
                }
            })
        }
        updateChart(canvas, type, bgColor, labels, data) {
            this.canvas = canvas;
            this.type = type;
            this.labels = labels;
            this.bgColor = bgColor;
            this.data = data;
            this.chart.destroy();
            this.rebuildChart();
        }
    }
    visitsStatisticsGlobal.MakeVisitsCharts = MakeVisitsCharts;
}

var chartClass;
var visitsStaticsComponent = active.renderComponent(() => {
    return (`
    <dashboard-component class="overflow-hidden default-properties small-padding white-bg-color full-height">
        <div class="default-padding">
            <h5>Web site visits</h5>
        </div>
        <!-- select box to choose the type of statisitcs -->
        <div class="row">
            <div class="input-field col s5 m4 l4 xl4 float-right-important">
            <h6>choose the type of statistics</h6>
                <select expName="selectStatistics" class="browser-default small-padding">
                <option value="default" disapled>chose the type of statistics</option>
                    <option value="day">this day</option>
                    <option value="week">this week</option>
                    <option value="month">this month</option>
                    <option value="year">this year</option>
                </select>
            </div>
        </div>
        <component-statistics expName="componentStatistics" class="default-properties overflow-hidden">
            <canvas expName="visitsStatisticsCanvas"></canvas>
        </component-statistics>
        <div class="row">
            <a class="default-padding hoverable-underlined">show more</a>
        </div>
    </dashboard-component>
    `)
}, {
    style: {
        option: {
            backgroundColor: "#d4d4d4",
            color: "white"
        }
    },
    parent: homePage.visitsStatisticsComponent,
    render: true,
    whileLoading: (parent) => {
        parent.appendElements(/*html*/ `
        <div class="app-loader me">

            <div class="loader"></div>
        </div>
    `)
    },
    onload: (parent) => {
        parent.querySelector(".app-loader").removeThis();
    },
    methods: {
        "selectStatistics": {
            focus: (e) => {
                e.target.addEvent("change", () => {
                    let value = e.target.value;
                    if (value === "day") {
                        chartClass.updateChart(visitsStaticsComponent.visitsStatisticsCanvas, "line", "#9881cf", ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"], [5, 10, 4, 8, 9, 6, 11, 9, 4, 10, 20, 21, 22, 23, 24, 25, 29, 30, 40, 20, 21, 200, 24, 245])
                        return e.target.blur();
                    } else if (value === "week") {
                        chartClass.updateChart(visitsStaticsComponent.visitsStatisticsCanvas, "line", "#64b5f6", ['sutterday', "sunday", "monday", 'tuesday', 'wendnesday', 'thursday', 'friday'], [5, 10, 4, 8, 9, 6, 11])
                        return e.target.blur();
                    } else if (value === "month") {
                        var days = 30;
                        var daysArr = [];
                        for (let i = 0; i <= days; i++) {
                            daysArr[i] = i;
                        }
                        chartClass.updateChart(visitsStaticsComponent.visitsStatisticsCanvas, "line", "#81C784", daysArr, [500, 100, 400, 800, 900, 600, 1100, 900, 400, 1000, 2000, 2001, 2200, 2300, 2400, 250, 2900, 3000, 4000, 2000, 210, 200, 2400, 2450, 2000, 1000, 1500, 5000, 2999, 4000, 100])
                        return e.target.blur();
                    } else if (value === "year") {
                        chartClass.updateChart(visitsStaticsComponent.visitsStatisticsCanvas, "line", "#009688", ['January', "February", "March", 'April', 'May', 'June', 'July', 'August', 'Septamber', 'October', 'November', 'December'], [400, 500, 300, 1000, 1100, 1116, 1112, 1090, 1200, 2000, 1800, 1400])
                        return e.target.blur();
                    }
                })
            }
        }
    }
}, (component) => {
    if(component.selectStatistics.value === "default") {
        component.selectStatistics.value = "week";
        chartClass = new visitsStatisticsGlobal.MakeVisitsCharts(component.visitsStatisticsCanvas, 'line', "#f16192", ['sutterday', "sunday", "monday", 'tuesday', 'wendnesday', 'thursday', 'friday'], [5, 10, 4, 8, 9, 6, 11]);
    }
})
