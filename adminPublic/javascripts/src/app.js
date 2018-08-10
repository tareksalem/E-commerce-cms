import {active, Router} from "./behind";
window.active = active;
import {adminRouters} from "../routers/admin";


active.loadStaticComponents(() => {
    active.render(false, "/javascripts/view/partials/sidebar/view/sidebar.js", "dashboard-sidebar");
    active.render(false, "/javascripts/view/partials/header/view/header.js", "dashboard-header");
});


// execute admin routers
adminRouters();
