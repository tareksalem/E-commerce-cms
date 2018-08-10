active.ready(() => {
    var headerDropDowns = headerComponent.self.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(headerDropDowns, {
        coverTrigger: false,
        // container: headerComponent.searchBar
        closeOnClick: false
    });
});