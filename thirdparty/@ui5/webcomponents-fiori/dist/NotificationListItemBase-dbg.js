/*!
 * ${copyright}
 */
sap.ui.define([
  "uxc/integration/thirdparty/@ui5/webcomponents/dist/ListItemBase",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.NotificationListItemBase", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "interfaces": [],
  "properties": {
    "titleText": {
      "type": "string",
      "mapping": "property"
    },
    "read": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
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
    }
  },
  "aggregations": {},
  "associations": {},
  "events": {},
  "getters": [],
  "methods": [],
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/NotificationListItemBase.designtime"
}
  });


  return WrapperClass;

});
