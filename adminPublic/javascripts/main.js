// function to open and close side menu bar

// document.addEventListener("DOMContentLoaded", () => {

// });
active.whileLoading(() => {
    active.renderComponent(() => {
        return (`
            <div class="app-loader qq">
                <div class="loader"></div>
            </div>
        `)
    }, {
        render: true,
        parent: document.body,
        name: "app-loader"
    })
}, () => {
});
active.ready(() => {
    active.removeComponent("app-loader");
    document.body.querySelector("container-app").style.display = "block";
    const sideBarController = {
        controller: document.querySelector("button-sidebar"),
        sidebar: document.querySelector("dashboard-sidebar"),
        main: document.querySelector("main"),
        open: (cb) => {
           sideBarController.sidebar.style.marginLeft = "0";
            if (window.innerWidth > 800) {
                   sideBarController.main.style.width = `calc(100% - ${getComputedStyle(sideBarController.sidebar).getPropertyValue("width")})`;
            }
            window.onresize = () => {
                if (window.innerWidth > 800) {
                    sideBarController.main.style.width = `calc(100% - ${getComputedStyle(sideBarController.sidebar).getPropertyValue("width")})`;
             }
             if (window.innerWidth <= 500) {
                sideBarController.main.style.left = "45.4%";
            }
            if (window.innerWidth <= 370) {
             sideBarController.main.style.left = "54%";
             }
            }
           sideBarController.main.style.left = "";
           if (window.innerWidth <= 500) {
               sideBarController.main.style.left = "45.4%"//`calc(100% - ${getComputedStyle(sideBarController.sidebar).getPropertyValue("width")})`
           }
           if (window.innerWidth <= 370) {
            sideBarController.main.style.left = "54%"//`calc(100% - ${getComputedStyle(sideBarController.sidebar).getPropertyValue("width")})`
            }
           document.querySelectorAll("canvas").forEach((canv) => canv.style.width = "100%");
           return cb();
        },
        close: (cb) => {
            sideBarController.sidebar.style.marginLeft = "-60%";
            sideBarController.main.style.width = "100%";
            window.onresize = () => {
            sideBarController.main.style.width = "100%";
            }
            sideBarController.main.style.left = "0";
            document.querySelectorAll("canvas").forEach((canv) => canv.style.width = "100%");
            return cb();
        },
        init: () => {
            var sideBarMarginLeftValue = Number.parseInt(getComputedStyle(sideBarController.sidebar).getPropertyValue("margin-left")) || Number.parseInt(sideBarController.sidebar.style.marginLeft) || 0;
            sideBarController.controller.addEvent("click", (e) => {
                if (sideBarMarginLeftValue >= 0) {
                    sideBarController.close(() => {
                        sideBarMarginLeftValue = Number.parseInt(sideBarController.sidebar.style.marginLeft);
                    });
                } else {
                    sideBarController.open(() => {
                        sideBarMarginLeftValue = Number.parseInt(sideBarController.sidebar.style.marginLeft);
                    });
                }
            })
        }
    }
    sideBarController.init();
});
