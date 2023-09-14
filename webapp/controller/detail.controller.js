sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, formatter, UIComponent, History) {
    "use strict";

    return Controller.extend("usermanager.controller.detail", {
      formatter: formatter,

      onInit: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter
          .getRoute("detail")
          .attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function (oEvent) {
        this.getView().bindElement({
          path:
            "/" +
            window.decodeURIComponent(
              oEvent.getParameter("arguments").userPath
            ),
          model: "user",
        });
      },
      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = UIComponent.getRouterFor(this);
          oRouter.navTo("/", {}, true);
        }
      },

      onEdit: function (oEvent) {
        var oItem = oEvent.getSource();

        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("edit", {
          userPath: window.encodeURIComponent(
            oItem.getBindingContext("user").getPath().substr(1)
          ),
        });
      },
    });
  }
);
