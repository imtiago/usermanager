sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("usermanager.controller.users", {
      formatter: formatter,

      onInit: () => {},

      onFilterUsers: function (oEvent) {
        // build filter array
        var userFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
          userFilter.push(
            new Filter("firstName", FilterOperator.Contains, sQuery)
          );
        }
        // filter binding
        var oList = this.byId("userList");
        var oBinding = oList.getBinding("items");
        oBinding.filter(userFilter);
      },

      onPress: function (oEvent) {
        var oItem = oEvent.getSource();

        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("detail", {
          userPath: window.encodeURIComponent(
            oItem.getBindingContext("user").getPath().substr(1)
          ),
        });
      },
    });
  }
);
