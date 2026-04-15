/*!
 * ${copyright}
 */
sap.ui.define([
  "sap/ui/core/webc/WebComponent",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
  "uxc/integration/thirdparty/ShellBarItem",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.ShellBarItem", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "tag": "ui5-shellbar-item-90cc6878",
  "interfaces": [],
  "properties": {
    "icon": {
      "type": "string",
      "mapping": "property"
    },
    "text": {
      "type": "string",
      "mapping": "property"
    },
    "count": {
      "type": "string",
      "mapping": "property"
    },
    "accessibilityAttributes": {
      "type": "object",
      "mapping": "property",
      "defaultValue": {}
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
  "aggregations": {},
  "associations": {},
  "events": {
    "click": {
      "parameters": {
        "targetRef": {
          "type": "HTMLElement"
        }
      }
    }
  },
  "getters": [],
  "methods": [],
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/ShellBarItem.designtime"
}
  });


  return WrapperClass;

});
