var productsListComponent = active.renderComponent(() => {
	return (`
			<dashboard-component class="default-properties white-bg-color auto-height">
			</dashboard-component>
		`)
}, {
	render: true,
	parent: mainProductsPage.productsListComponent,
	scripts: ["/javascripts/view/pages/productsPage/components/productsList/js/index.js"],
	name: "productsListComponent"
})