
var addProductModalStyle = `
	<style>
		.custom-modal-container{
			position:fixed;
			height:100%;
			width:100%;
			top:0;
			bottom:0;
			right:0;
			left:0;
			z-index: 100000;
			background:rgba(0, 0, 0, .70);
			overflow-y: scroll;
			display:block;
			opacity: 1;
		}
		body{
			overflow:hidden;
		}
		.add-product-form{
			background:white;
			padding:20px;
			width:80%;
			margin:auto;
			display:block;
			position:relative;
			top:100px;
			border-radius:5px;
			height:auto;
			margin-bottom:100px;
			animation-delay: .5s;
		}
		.close-modal{
			font-size: 20px;
			cursor:pointer;
			transition: all .4s;
		}
		.close-modal:hover{
			color:black;
		}
	</style>
	`;
var addProductModal = active.renderComponent(() => {
	return (`
			<div class="custom-modal-container animated fadeIn">
				${addProductModalStyle}
				<div class="add-product-form animated zoomIn">
				<div class="row">
					<i class="float-right main-font-color small-padding close-modal" expName="removeModal">×</i>
				</div>
					<div class="row">
					    <form class="col s12">
						    <div class="row">
						        <div class="input-field col s6">
						          <input id="productName" type="text" name="productName">
						          <label for="productName">product name</label>
						        </div>
						      	<div class="input-field col s6">
						          <input id="productSubTitle" type="text" name="productSubTitle">
						          <label for="productSubTitle">product subtitle</label>
						        </div>
						        <div class="input-field col s6">
						          <textarea id="productDescription" name="productDescription" class="materialize-textarea"></textarea>
						          <label for="productDescription">product description</label>
						        </div>
						    </div>
					     </form>
			     	</div>
				</div>
			}
			</div>
		`)
}, {
	render: true,
	parent: document.body,
	name: "addProductModal",
	methods: {
		removeModal: {
			click: () => {
				addProductModal.self.fadeOut(700, () => {
					active.removeComponent("addProductModal");
				})
			}
		}
	}
});
