const profileInfoComponent = active.renderComponent((data) => {
    return (`
        <component-container class="default-properties">
            <h5 class="center-align default-margin grey-text text-lighten-3 default-padding">Hey, Tarek</h5>
            <!-- button for dropdown user info -->
            <container-user-dropdown class="row">
                <container-profile-img class="col s8 m7 l5 xl5">
                    <img class="responsive-image" src="/images/admin-img.png"/>
                </container-profile-img>
                <dropdown class="col s12 m8 l6 xl6">
                    <a class="dropdown-trigger button-dropdown waves-effect waves-light btn-large transparent" data-target="dropdown1"><i class="material-icons right">more_vert</i></a>
                    <ul id='dropdown1' class='dropdown-content white-bg-color'>
                        <li><a class="" href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li class="divider" tabindex="-1"></li>
                        <li><a href="#!">three</a></li>
                        <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                        <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                    </ul>
                </dropdown>
            </container-user-dropdown>
            <admin-fast-tools class="default-properties">
                <div class="row">
                    <div class="col s6 m6 l4 xl4 default-margin"><i class="waves-effect blue lighten-2 waves-light material-icons tooltipped" data-position="top" data-tooltip="waiting orders">donut_large</i></div>
                    <div class="col s6 m6 l4 xl4 default-margin"><i class="tooltipped waves-effect green lighten-2 waves-light material-icons" data-tooltip="completed orders" data-position="top">done</i></div>
                    <div class="col s6 m6 l4 xl4 default-margin"><i class="waves-effect f16192 waves-light material-icons tooltipped" data-position="top" data-tooltip="new orders">call_missed_outgoing</i></div>
                </div>
            </admin-fast-tools>
        </component-container>
    `)
}, {
    name: "profileInfoComponent",
    render: true,
    parent: sideBarComponent.self.querySelector("profile-info"),
    scripts: ["/javascripts/view/partials/sidebar/components/profileinfo/js/index.js"]
    // get: {
    //     fetch: true,
    //     url: ""
    // }
});