// import {active} from "../../../../src/behind";
var active = window.active;
const headerComponent = active.renderComponent((data) => {
    return (`
        <container-header class="main-bg-color">
            <!-- import header css style -->
            <style>
                @import url("/javascripts/view/partials/header/css/header.css");
            </style>
            <header-options class="second-bg-color default-properties">
                <site-name class="default-properties full-height display-inline-block width-auto">
                <p>Freska store</p>
                </site-name>
                <controller-sidebar class="default-properties display-inline-block full-height width-auto float-right">
                    <button-sidebar class="default-properties display-inline-block full-height width-auto">
                    <p class="grey-text text-lighten-2">__</p>
                    <p class="grey-text text-lighten-2">___</p>
                    <p class="grey-text text-lighten-2">__</p>
                    </button-sidebar>
                </controller-sidebar>
            </header-options>
            <header-tools>
                <setting-search class="">
                    <search-btn>
                        <i class="material-icons dropdown-trigger" data-target="search-dropdown">search</i>
                        <ul id='search-dropdown' class='dropdown-content white-bg-color'>
                            <li class="row default-margin">
                                <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col s11 m11 l11 xl11">
                                        <input id="search" type="search" class="validate">
                                        <label for="search">search here</label>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </search-btn>
                    <setting-btn>
                        <i class="material-icons dropdown-trigger" data-target="setting-dropwdown">settings</i>
                        <ul id="setting-dropwdown" class="dropdown-content grey lighten-5">
                            <li><a class="grey-text default-padding">setting one</a></li>
                            <li><a class="grey-text default-padding">setting two</a></li>
                            <li><a class="grey-text default-padding">setting three</a></li>
                            <li><a class="grey-text default-padding">setting four</a></li>
                        </ul>
                    </search-btn>
                </setting-search>
                <admin-alerts>
                    <chat-btn>
                        <i class="white-text alerts-count dropdown-trigger" data-target="chats-dropwdown">1</i>
                        <i class="material-icons dropdown-trigger" data-target="chats-dropwdown">chat</i>
                        <ul id="chats-dropwdown" class="dropdown-content grey lighten-5">
                            <li><a class="grey-text default-padding">setting one</a></li>
                            <li><a class="grey-text default-padding">setting two</a></li>
                            <li><a class="grey-text default-padding">setting three</a></li>
                            <li><a class="grey-text default-padding">setting four</a></li>
                        </ul>
                    </chat-btn>
                    <notifications-btn>
                        <i class="white-text alerts-count dropdown-trigger" data-target="notifications-dropdown">1</i>
                        <i class="material-icons dropdown-trigger" data-target="notifications-dropdown">notifications</i>
                        <ul id="notifications-dropdown" class="dropdown-content grey lighten-5">
                            <li><a class="grey-text default-padding ">setting one</a></li>
                            <li><a class="grey-text default-padding">setting two</a></li>
                            <li><a class="grey-text default-padding">setting three</a></li>
                            <li><a class="grey-text default-padding">setting four</a></li>
                        </ul>
                    </notifications-btn>
                </admin-alerts>
            </header-tools>
        </container-header>
    `)
}, {
    parent: "dashboard-header",
    name: "headerComponent",
    render: true,
    data: {
        message: "header"
    },
    scripts: ["/javascripts/view/partials/header/js/index.js"]
});

// export {headerComponent};