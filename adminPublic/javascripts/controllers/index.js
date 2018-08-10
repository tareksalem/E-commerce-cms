// import {active} from "../src/behind";
const renderHomePage = (req, res) => {
    return active.filterContent("dashboard-pages", {
        element: "page-container",
        fadeOut: 700
    }, () => {
        active.render(true, "/javascripts/view/pages/homepage/view/homeDashboard.js", "dashboard-pages", "homePage");
    });
}

const renderOrdersPage = (req, res) => {
    return active.filterContent("dashboard-pages", {
        element: "page-container",
        fadeOut: 700
    }, () => {
        active.render(true, "/javascripts/view/pages/ordersPage/view/ordersPage.js", "dashboard-pages", "ordersPage")
    })
}

//  render main products page
const renderMainProductsPage = (req, res) => {
    active.filterContent("dashboard-pages", {
        element: "page-container",
        fadeOut: 700
    }, () => {
        active.render(true, "/javascripts/view/pages/productsPage/view/productsPage.js", "dashboard-pages", "mainProductsPage")
    })
}

export {renderHomePage, renderOrdersPage, renderMainProductsPage}