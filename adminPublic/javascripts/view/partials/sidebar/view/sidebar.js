// import {active} from "../../../../src/behind";
var active = window.active;
const sideBarComponent = active.renderComponent((data) => {
    return (`
            <container-sidebar class="main-bg-color">
            <style>
                @import url("/javascripts/view/partials/sidebar/css/sidebar.css");
            </style>
            <!-- component of profile info -->
            <profile-info class="default-properties">
            </profile-info>
            <!-- end component of profile info -->
            <!-- component for links -->
            <links-component class="default-properties">
            </links-component>
            <!-- end component for links -->
            </container-sidebar>
    `)
}, {
    render: true,
    parent: "dashboard-sidebar",
    data: {
        message: "hello in sidebar",
    },
    scripts: ['/javascripts/view/partials/sidebar/components/profileinfo/view/profileinfo.js', "/javascripts/view/partials/sidebar/components/sidebar-links/view/sidebar-links.js"]
});

// export {sideBarComponent};