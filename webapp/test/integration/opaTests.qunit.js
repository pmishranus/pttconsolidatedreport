/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nus/edu/consolidatedreport/claimconsolidatereport/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});