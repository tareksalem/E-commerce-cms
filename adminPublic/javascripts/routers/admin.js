import {active, Router} from "../src/behind";
window.Router = Router;
import {renderHomePage, renderOrdersPage, renderMainProductsPage} from "../controllers/index";
const adminRouters = () => {
    Router.getRoute({
        url: "/",
        handler: (req, res) => {
            renderHomePage(req, res);
        }
    });
    Router.getRoute({
        url: "/orders",
        handler: (req, res) => {
            renderOrdersPage(req, res);
        }
    })
    Router.getRoute({
        url: "/products",
        handler: (req, res) => {
            renderMainProductsPage(req, res)
        }
    })
}
export {adminRouters};