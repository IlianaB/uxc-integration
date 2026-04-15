/*!
 * ${copyright}
 */
sap.ui.define([
  "sap/ui/core/webc/WebComponent",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
  "uxc/integration/thirdparty/NotificationList",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.NotificationList", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "tag": "ui5-notification-list-90cc6878",
  "interfaces": [],
  "properties": {
    "noDataText": {
      "type": "string",
      "mapping": "property"
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
      "type": "sap.ui.core.Control",
      "multiple": true
    }
  },
  "associations": {},
  "events": {
    "itemClick": {
      "parameters": {
        "item": {
          "type": "HTMLElement"
        }
      }
    },
    "itemClose": {
      "parameters": {
        "item": {
          "type": "HTMLElement"
        }
      }
    },
    "itemToggle": {
      "parameters": {
        "item": {
          "type": "HTMLElement"
        }
      }
    }
  },
  "getters": [],
  "methods": [],
  "defaultAggregation": "items",
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/NotificationList.designtime"
}
  });


  return WrapperClass;

});
