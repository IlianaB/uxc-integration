/*!
 * ${copyright}
 */
sap.ui.define([
  "sap/ui/core/webc/WebComponent",
  "uxc/integration/thirdparty/@ui5/webcomponents",
  "uxc/integration/thirdparty/Menu",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents.dist.Menu", {
    metadata:
{
  "namespace": "@ui5/webcomponents",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents",
  "tag": "ui5-menu-90cc6878",
  "interfaces": [],
  "properties": {
    "headerText": {
      "type": "string",
      "mapping": "property"
    },
    "open": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "horizontalAlign": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents.PopoverHorizontalAlign",
      "mapping": "property",
      "defaultValue": "Start"
    },
    "loading": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "loadingDelay": {
      "type": "float",
      "mapping": "property",
      "defaultValue": 1000
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
    "items": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents.IMenuItem",
      "multiple": true
    }
  },
  "associations": {
    "opener": {
      "type": "sap.ui.core.Control",
      "mapping": {
        "type": "property",
        "to": "opener"
      }
    }
  },
  "events": {
    "itemClick": {
      "parameters": {
        "item": {
          "type": "HTMLElement"
        },
        "text": {
          "type": "string"
        }
      }
    },
    "beforeOpen": {
      "parameters": {
        "item": {
          "type": "HTMLElement"
        }
      }
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
  "methods": [],
  "defaultAggregation": "items",
  "library": "@ui5/webcomponents.library",
  "designtime": "@ui5/webcomponents/designtime/Menu.designtime"
}
  });


  return WrapperClass;

});
