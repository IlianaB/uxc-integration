export default {
	name: "QUnit test suite for the UI5 Application: uxc.integration",
	defaults: {
		page: "ui5://test-resources/uxc/integration/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "uxc/integration/",
			never: "test-resources/uxc/integration/"
		},
		loader: {
			paths: {
				"uxc/integration": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for uxc.integration"
		},
		"integration/opaTests": {
			title: "Integration tests for uxc.integration"
		}
	}
};
