/*!
 * ${copyright}
 */
sap.ui.define([
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori/dist/NotificationListItemBase",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
  "uxc/integration/thirdparty/NotificationListGroupItem",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.NotificationListGroupItem", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "tag": "ui5-li-notification-group-90cc6878",
  "interfaces": [],
  "properties": {
    "collapsed": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "growing": {
      "type": "uxc.integration.thirdparty.@ui5.webcomponents.NotificationListGrowingMode",
      "mapping": "property",
      "defaultValue": "None"
    },
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
  "aggregations": {
    "items": {
      "type": "sap.ui.core.Control",
      "multiple": true
    }
  },
  "associations": {},
  "events": {
    "toggle": {
      "parameters": {}
    },
    "loadMore": {
      "parameters": {}
    }
  },
  "getters": [],
  "methods": [],
  "defaultAggregation": "items",
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/NotificationListGroupItem.designtime"
}
  });


  return WrapperClass;

});
