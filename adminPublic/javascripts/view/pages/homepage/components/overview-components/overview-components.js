var overViewComponent = active.renderComponent(() => {

    return (`
    <component-grid-4 class="auto-height overflow-hidden">
    <users-count class="summary-component default-properties margin-bottom overflow-hidden">
        <dashboard-component class="default-properties default-padding white-bg-color full-height">
            <i class="material-icons">person_outline</i>
            <h5>520 user</h5>
        </dashboard-component>
    </users-count>
    <daily-views-count class="summary-component default-properties margin-bottom overflow-hidden">
        <dashboard-component class="default-properties default-padding white-bg-color full-height">
            <i class="material-icons">bar_chart</i>
            <h5>1000 page views today</h5>
        </dashboard-component>
    </daily-views-count>
<sold-orders-today-count class="summary-component default-properties margin-bottom overflow-hidden">
    <dashboard-component class="default-properties default-padding white-bg-color full-height">
        <i class="material-icons green-text">shopping_cart</i>
        <h5>sold orders today</h5>
    </dashboard-component>
</sold-orders-today-count>
<pending-orders-today-count class="summary-component default-properties margin-bottom overflow-hidden">
    <dashboard-component class="default-properties default-padding white-bg-color full-height">
        <i class="material-icons red-text">shopping_basket</i>
        <h5>100 pending orders today</h5>
    </dashboard-component>
</pending-orders-today-count>
<new-orders-today-count class="summary-component default-properties margin-bottom overflow-hidden">
    <dashboard-component class="default-properties default-padding white-bg-color full-height">
        <i class="material-icons grey-text">fiber_new</i>
        <h5>50 new orders today</h5>
    </dashboard-component>
</new-orders-today-count>
<all-products-count class="summary-component default-properties margin-bottom overflow-hidden">
    <dashboard-component class="default-properties default-padding white-bg-color full-height">
        <i class="material-icons orange-text">publish</i>
        <h5>500 published products</h5>
    </dashboard-component>
</all-products-count>
<published-adds class="summary-component default-properties margin-bottom overflow-hidden">
    <dashboard-component class="default-properties default-padding white-bg-color full-height">
        <i class="material-icons">add_to_queue</i>
        <h5>500 published products</h5>
    </dashboard-component>
</published-adds>
</component-grid-4>
    
    `)
}, {
    render: true,
    parent: homePage.overViewComponent
})