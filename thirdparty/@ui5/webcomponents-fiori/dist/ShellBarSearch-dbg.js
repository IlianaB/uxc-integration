/*!
 * ${copyright}
 */
sap.ui.define([
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori/dist/Search",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
  "uxc/integration/thirdparty/ShellBarSearch",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.ShellBarSearch", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "tag": "ui5-shellbar-search-90cc6878",
  "interfaces": [],
  "properties": {
    "loading": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "noTypeahead": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "open": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "showClearIcon": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "value": {
      "type": "string",
      "mapping": "property",
      "defaultValue": ""
    },
    "placeholder": {
      "type": "string",
      "mapping": "property"
    },
    "accessibleName": {
      "type": "string",
      "mapping": "property"
    },
    "accessibleDescription": {
      "type": "string",
      "mapping": "property"
    }
  },
  "aggregations": {
    "items": {
      "type": "sap.ui.core.Control",
      "multiple": true
    },
    "action": {
      "type": "sap.ui.core.Control",
      "multiple": true,
      "slot": "action"
    },
    "illustration": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.IllustratedMessage",
      "multiple": true,
      "slot": "illustration"
    },
    "messageArea": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.SearchMessageArea",
      "multiple": true,
      "slot": "messageArea"
    },
    "scopes": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents-fiori.ISearchScope",
      "multiple": true,
      "slot": "scopes"
    }
  },
  "associations": {},
  "events": {
    "open": {
      "parameters": {}
    },
    "close": {
      "parameters": {}
    },
    "input": {
      "parameters": {}
    },
    "scopeChange": {
      "parameters": {
        "scope": {
          "type": "HTMLElement"
        }
      }
    },
    "search": {
      "parameters": {}
    }
  },
  "getters": [],
  "methods": [],
  "defaultAggregation": "items",
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/ShellBarSearch.designtime"
}
  });


  return WrapperClass;

});
