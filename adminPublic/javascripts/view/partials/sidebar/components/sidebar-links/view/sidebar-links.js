const sidebarLinks = active.renderComponent((data) => {
    return (/*html*/`
        <component-container class="default-properties">
        <style>
            @import url("/javascripts/view/partials/sidebar/components/sidebar-links/css/index.css");
        </style>
        <ul expName="ulLinks" class="ul-links">
            ${data ? active.loopComponent(data.links, (link) => {
                return (`
                    <li router="${link.path}" class="waves-effect waves-light full-width"><a router="${link.path}">${link.icon ? link.icon : ""} ${link.name}</a></li>

                `)
            }) : ""}
            <!-- <li router="/" class="waves-effect waves-light full-width"><a router="/"><i class="material-icons">explore</i> overview</a></li>
            <li router="/statistics" class="waves-effect waves-light full-width"><a router="/statistics"><i class="material-icons">assessment</i> Statistics</a></li>
            <li router="/orders" class="waves-effect waves-light full-width"><a router="/orders"><i class="material-icons">shopping_cart</i> orders</a></li>
            <li router="/orders/new-orders" class="waves-effect waves-light full-width"><a router="/orders/new-orders"><i class="material-icons">call_missed_outgoing</i> new orders</a></li>
            <li router="orders/completed-orders" class="waves-effect waves-light full-width"><a><i class="material-icons">check_circle</i> completed orders</a router="orders/completed-orders"></li>
            <li router="orders/pending-orders" class="waves-effect waves-light full-width"><a><i class="material-icons">donut_large</i> pending orders</a router="orders/pending-orders"></li> -->
        </ul>
        </component-container>
    `)
}, {
    render: true,
    parent: sideBarComponent.self.querySelector("links-component"),
    data: {
        links: languageSettings.links
    },
    style: {
        ".icon-svg": {
            height: "22px",
            width: "22px"
        }
    }
}, (component) => {
    let ulLinks = component.ulLinks.querySelectorAll("li");
    ulLinks.addEvent("click", (e, element) => {
        ulLinks.forEach((link) => {
            link.classList.remove("link-active");
        })
        element.classList.add("link-active");
    });
    var matchedLink = Array.from(component.ulLinks.querySelectorAll("li")).find((link) =>
    {
        if (link.getAttribute("router") === location.pathname) {
            return link;
        }
    });
    if (matchedLink) {
        matchedLink.classList.add("link-active")
    }
});
