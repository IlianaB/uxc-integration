/*!
 * ${copyright}
 */
sap.ui.define([
  "sap/ui/core/webc/WebComponent",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
  "uxc/integration/thirdparty/IllustratedMessage",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.IllustratedMessage", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "tag": "ui5-illustrated-message-90cc6878",
  "interfaces": [],
  "properties": {
    "name": {
      "type": "string",
      "mapping": "property",
      "defaultValue": "BeforeSearch"
    },
    "design": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents-fiori.IllustrationMessageDesign",
      "mapping": "property",
      "defaultValue": "Auto"
    },
    "subtitleText": {
      "type": "string",
      "mapping": "property"
    },
    "titleText": {
      "type": "string",
      "mapping": "property"
    },
    "decorative": {
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
    "title": {
      "type": "sap.ui.core.Control",
      "multiple": true,
      "slot": "title"
    },
    "subtitle": {
      "type": "sap.ui.core.Control",
      "multiple": true,
      "slot": "subtitle"
    },
    "actions": {
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
  "events": {},
  "getters": [],
  "methods": [],
  "defaultAggregation": "actions",
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/IllustratedMessage.designtime"
}
  });


  return WrapperClass;

});
