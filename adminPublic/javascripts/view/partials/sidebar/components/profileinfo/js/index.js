
// initialize the dropdowns of profile info component
active.ready(() => {
    var dropwDowns = profileInfoComponent.self.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(dropwDowns, {
        coverTrigger: false
    });
    var tooltipps = document.querySelectorAll('.tooltipped');
    var toolTipsInstances = M.Tooltip.init(tooltipps);
    // try {
    //     console.log(document.body.querySelectorAll("select"))
    //     var selects = document.body.querySelectorAll('select');
    //     var selectsInstance = M.FormSelect.init(selects);
    // } catch (e) {
    //     console.log(e);
    // }
})


