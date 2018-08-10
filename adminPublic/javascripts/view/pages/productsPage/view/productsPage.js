var mainProductsPage = active.renderComponent((data) => {
    return (/*html*/`
        <page-container class="default-properties auto-height" id="productspages">
            <style>
                @import url("/javascripts/view/pages/productsPage/css/productsPage.css");
            </style>
            <products-filters class="default-properties auto-height">
                <dashboard-component class="default-properties white-bg-color auto-height">
                    <h5 class="panels-text-color full-width panels-bg-color no-margin default-padding">All products</h5>
                    <div class="row grey lighten-4 no-margin default-margin-top default-padding">
                        <div class="col s12 m5 l4 xl4">
                            <div class="default-margin default-pdding display-block max-width margin-auto default-margin-bottom">
                                <p class="default-label small-padding blue-text">search products here</p>
                                <input type="search" expName="searchProductsInput" class="browser-default small-padding default-input">
                            </div>
                        </div>
                        <div class="col s12 m5 l4 xl4">
                            <div class="default-margin default-padding display-block max-width margin-auto default-margin-bottom small-margin-top">
                                <!-- Dropdown Trigger -->
                                <a class='dropdown-trigger btn panels-bg-color-important waves-effect waves-light' data-target='choicesDropdown'>filter products</a>
                                  <!-- Dropdown Structure -->
                                  <ul id='choicesDropdown' class='dropdown-content dropdown' style="top:200px">
                                    <li><a><img src="/images/icons/success.svg"/> published products</a></li>
                                    <li><a href="#!"><img src="/images/icons/sketch.svg"/> draft products</a></li>
                                  </ul>
                            </div>
                        </div>
                         <div class="col s12 m5 l4 xl4">
                            <div class="full-width default-padding default-margin">
                                <button expName="addProductBtn" class="browser-default button-add default-shadow waves-effect waves-light grey-text">add new product</button>
                            </div>
                        </div>
                    </div>
                </dashboard-component>
            </products-filters>
            <products-list class="default-properties auto-height default-margin-top" expName="productsListComponent">
            </products-list>
            <add-product-modal></add-product-modal>
        </page-container>
    `)
}, {
    parent: "dashboard-pages",
    render: true,
    scripts: [
    "/javascripts/view/pages/productsPage/components/productsList/productsListComponent.js",
    // "/javascripts/view/pages/productsPage/components/"
    ],
    name: "mainProductsPage",
    methods: {
        addProductBtn: {
            click: (e, el) => {
                active.render(false, "/javascripts/view/pages/productsPage/components/addProductModal/addProductModal.js", mainProductsPage.self.querySelector("add-product-modal"))
            }
        }
    },
    onload: (parent) => {
       active.ready(() => {
         var productsPageDropDownTriggers = mainProductsPage.self.querySelectorAll('.dropdown-trigger');
            var productsPageInstances = M.Dropdown.init(productsPageDropDownTriggers, {
                coverTrigger: false,
                // container: headerComponent.searchBar
                closeOnClick: false,
            });
       })
    },
    style: {
        ".dropdown": {
            position: "fixed",
            top: "191px",
            "width": "200px"
        },
        ".dropdown-content li a": {
            color: "var(--main-bg-color)"
        },
        ".dropdown-content li": {
            paddingTop: "10px",
            paddingBottom: "10px"
        },
        ".dropdown-content li a img": {
            width:"18px",
            height: "18px",
            position: "relative",
            top: "5px"
        }
    }
})