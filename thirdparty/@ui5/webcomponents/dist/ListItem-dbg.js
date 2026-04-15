/*!
 * ${copyright}
 */
sap.ui.define([
  "uxc/integration/thirdparty/@ui5/webcomponents/dist/ListItemBase",
  "uxc/integration/thirdparty/@ui5/webcomponents",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents.dist.ListItem", {
    metadata:
{
  "namespace": "@ui5/webcomponents",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents",
  "interfaces": [],
  "properties": {
    "type": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents.ListItemType",
      "mapping": "property",
      "defaultValue": "Active"
    },
    "accessibilityAttributes": {
      "type": "object",
      "mapping": "property",
      "defaultValue": {}
    },
    "navigated": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "tooltip": {
      "type": "string",
      "mapping": "property"
    },
    "highlight": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents.Highlight",
      "mapping": "property",
      "defaultValue": "None"
    },
    "selected": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "text": {
      "type": "string",
      "mapping": "textContent"
    },
    "width": {
      "type": "sap.ui.core.CSSSize",
      "mapping": "style"
    },
    "height": {
      "type": "sap.ui.core.CSSSize",
      "mapping": "style"
    }
  },
  "aggregations": {
    "deleteButton": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents.IButton",
      "multiple": true,
      "slot": "deleteButton"
    }
  },
  "associations": {},
  "events": {
    "detailClick": {
      "parameters": {}
    }
  },
  "getters": [],
  "methods": [],
  "library": "@ui5/webcomponents.library",
  "designtime": "@ui5/webcomponents/designtime/ListItem.designtime"
}
  });


  return WrapperClass;

});
