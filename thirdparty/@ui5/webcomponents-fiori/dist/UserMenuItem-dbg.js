/*!
 * ${copyright}
 */
sap.ui.define([
  "uxc/integration/thirdparty/@ui5/webcomponents/dist/MenuItem",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
  "uxc/integration/thirdparty/UserMenuItem",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.UserMenuItem", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "tag": "ui5-user-menu-item-90cc6878",
  "interfaces": [],
  "properties": {},
  "aggregations": {
    "items": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.UserMenuItem",
      "multiple": true
    }
  },
  "associations": {},
  "events": {},
  "getters": [],
  "methods": [],
  "defaultAggregation": "items",
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/UserMenuItem.designtime"
}
  });


  return WrapperClass;

});
