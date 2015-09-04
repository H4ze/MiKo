sap.ui.jsview("demo_first.Result", {

	/** Specifies the Controller belonging to this View.
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo_first.Result
	*/
	getControllerName : function() {
		return "demo_first.Result";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* @memberOf demo_first.Result
	*/
	createContent : function(oController) {
		var oMatrix, oButton;

		oMatrix = new sap.ui.commons.layout.MatrixLayout(
			{
				layoutFixed: false,
				widths: ["10%", "90%"],
				columns: 2
			}
		);

		oMatrix.createRow(
			new sap.ui.commons.Label({text: "Welcome!" , design : sap.ui.commons.LabelDesign.Bold}),
			new sap.ui.commons.Label({text: "{/firstName}"})
		);

		oButton = new sap.ui.commons.Button(
			{
				text: "Back",
				press : function() {
					sap.ui.localResources("demo_first");
					var oViewSrc = sap.ui.view(
						{
							id: "idFirst1",
							viewName: "demo_first.First",
							type: sap.ui.core.mvc.ViewType.JS
						}
					);
					sap.ui.getCore().byId("MainShell").removeAllWorksetItems();
					sap.ui.getCore().byId("MainShell").setContent(sap.ui.getCore().byId("idFirst1"),true);
				}
			}
		);

		oMatrix.createRow(oButton);

		this.addContent(oMatrix);
	}
});
