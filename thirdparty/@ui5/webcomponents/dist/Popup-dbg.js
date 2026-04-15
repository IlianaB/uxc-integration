/*!
 * ${copyright}
 */
sap.ui.define([
  "sap/ui/core/webc/WebComponent",
  "uxc/integration/thirdparty/@ui5/webcomponents",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents.dist.Popup", {
    metadata:
{
  "namespace": "@ui5/webcomponents",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents",
  "interfaces": [],
  "properties": {
    "initialFocus": {
      "type": "string",
      "mapping": "property"
    },
    "preventFocusRestore": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "accessibleName": {
      "type": "string",
      "mapping": "property"
    },
    "accessibleRole": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents.PopupAccessibleRole",
      "mapping": "property",
      "defaultValue": "Dialog"
    },
    "preventInitialFocus": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "open": {
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
    "content": {
      "type": "sap.ui.core.Control",
      "multiple": true
    }
  },
  "associations": {
    "ariaLabelledBy": {
      "type": "sap.ui.core.Control",
      "multiple": true,
      "mapping": {
        "type": "property",
        "to": "accessibleNameRef",
        "formatter": "_getAriaLabelledByForRendering"
      }
    }
  },
  "events": {
    "beforeOpen": {
      "parameters": {}
    },
    "open": {
      "parameters": {}
    },
    "beforeClose": {
      "parameters": {
        "escPressed": {
          "type": "boolean"
        }
      }
    },
    "close": {
      "parameters": {}
    }
  },
  "getters": [],
  "methods": [
    "applyFocus"
  ],
  "defaultAggregation": "content",
  "library": "@ui5/webcomponents.library",
  "designtime": "@ui5/webcomponents/designtime/Popup.designtime"
}
  });


  return WrapperClass;

});
