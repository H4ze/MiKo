sap.ui.jsview("demo_first.First", {

	/** Specifies the Controller belonging to this View.
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo_first.First
	*/
	getControllerName : function() {
		return "demo_first.First";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* @memberOf demo_first.First
	*/
	createContent : function(oController) {
		var oLayout, oLabel1, oLabel2, oText, oTextL, oTxtFlF, oTxtFlL, oButton;

		//define the layout
		oLayout = new sap.ui.commons.layout.MatrixLayout(
			{
				id : "matrix1",
				layoutFixed : false
			}
		);

		oLabel1 = new sap.ui.commons.Label("l1");
		oLabel1.setText("First Name");

		//ad UI elements to the layout
		oText = new sap.ui.commons.TextField(
			{
				id:"idTxtFieldF",
				label:"FisrtName",
				value:"{/firstName}"
			}
		);

		oLayout.createRow(oLabel1,oText);
		oLabel2 = new sap.ui.commons.Label("l2");
		oLabel2.setText("Last Name");

		oTextL = new sap.ui.commons.TextField(
			{
				id:"idTxtfieldL",
				label:"LastName",
				value:"{/lastName}"
			}
		);

		oLayout.createRow(oLabel2,oTextL);
		oTxtFlF = sap.ui.getCore().byId("idTxtFieldF");
		oTxtFlF.setModel(oModel);
		oTxtFlL = sap.ui.getCore().byId("idTxtfieldL");
		oTxtFlL.setModel(oModel);

		oButton = new sap.ui.commons.Button(
			{
				text: "Next",
				press: function () {
					//instantiate target view
					var oViewDest = sap.ui.view({id:"idRes2", viewName:"demo_first.Result", type:sap.ui.core.mvc.ViewType.JS});
					sap.ui.getCore().byId("MainShell").removeAllWorksetItems();
					sap.ui.getCore().byId("MainShell").setContent(sap.ui.getCore().byId("idRes1"),true);
				}
			}
		);

		oLayout.createRow(oButton);

		this.addContent(oLayout);
	}
});
