/*global QUnit*/

sap.ui.define([
	"usermanager/controller/users.controller"
], function (Controller) {
	"use strict";

	QUnit.module("users Controller");

	QUnit.test("I should test the users controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
