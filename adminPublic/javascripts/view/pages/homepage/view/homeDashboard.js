var active = window.active;
var homePage = active.renderComponent((data) => {
    return ( /*html*/ `
        <page-container class="default-properties overflow-hidden animated slideInRight">
            <latest-activities-component class="center-align default-properties margin-bottom overflow-hidden">
                <dashboard-component class="default-properties small-padding white-bg-color full-height overflow-hidden">
                <h5 class="small-padding grey-color">latest activites</h5>
                <ul class="list-latest-activities small-padding">
                    <li class="small-padding"><a href="#" class="hoverable-underlined">new users in web site</a></li>
                    <li class="small-padding"><a href="#" class="hoverable-underlined">new users in web site</a></li>
                </ul>
                </dashboard-component>
            </latest-activities-component>
            <visits-statistics-component expName="visitsStatisticsComponent" class="default-properties overflow-hidden margin-bottom">
            </visits-statistics-component>
            <component-overview expName="overViewComponent" class="default-properties overflow-hidden auto-auto-height">
            </component-overview>
            <component-grids-2 class="default-properties overflow-hidden">
                <selling-weekly-statistics-component class="default-properties margin-bottom overflow-hidden display-inline-block auto-height" expName="weeklyStatistics">
                </selling-weekly-statistics-component>
                <lifetime-earnings-component class="default-properties margin-bottom overflow-hidden display-inline-block auto-height" expName="lifetimeEarningsComponent">
                </lifetime-earnings-component>
                <earnings-last-week-component expName="earningsLastWeekComponent" class="default-properties margin-bottom overflow-hidden display-inline-block auto-height">
                </earnings-last-week-component>
                <best-sales-component expName="bestSalesComponent" class="default-properties margin-bottom overflow-hidden display-inline-block auto-height">
                </best-sales-component>
            </component-grids-2>
        </page-container>
    `)
}, {
    parent: "dashboard-pages",
    render: true,
    data: {
        message: "hello in dashboard"
    },
    whileLoading: (parent) => {
        parent.appendElements( /*html*/ `
        <div class="app-loader ww">
            
            <div class="loader"></div>
        </div>
    `)
    },
    onload: (parent) => {
        parent.querySelector(".app-loader").removeThis();
    },
    scripts: ["/javascripts/view/pages/homepage/components/weekly-statistics/weekly-statistics.js", "/javascripts/view/pages/homepage/components/visits-statistics/visits-statistics.js", "/javascripts/view/pages/homepage/components/overview-components/overview-components.js", "/javascripts/view/pages/homepage/components/lifetime-earnings-component/lifetime-earnings-component.js", "/javascripts/view/pages/homepage/components/earnings-last-week/earnings-last-week.js", "/javascripts/view/pages/homepage/components/best-sales-component/best-sales-component.js"]
});