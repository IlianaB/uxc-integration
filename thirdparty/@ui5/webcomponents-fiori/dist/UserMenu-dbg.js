/*!
 * ${copyright}
 */
sap.ui.define([
  "sap/ui/core/webc/WebComponent",
  "uxc/integration/thirdparty/@ui5/webcomponents-fiori",
  "uxc/integration/thirdparty/UserMenu",
], function(
  WebComponentBaseClass,
) {
  "use strict";


  const WrapperClass = WebComponentBaseClass.extend("uxc.integration.thirdparty.@ui5.webcomponents-fiori.dist.UserMenu", {
    metadata:
{
  "namespace": "@ui5/webcomponents-fiori",
  "qualifiedNamespace": "uxc.integration.thirdparty.@ui5.webcomponents-fiori",
  "tag": "ui5-user-menu-90cc6878",
  "interfaces": [],
  "properties": {
    "open": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "showManageAccount": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "showOtherAccounts": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "showEditAccounts": {
      "type": "boolean",
      "mapping": "property",
      "defaultValue": false
    },
    "showEditButton": {
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
    "menuItems": {
      "type": "sap.ui.core.Control",
      "multiple": true
    },
    "accounts": {
      "type": "sap.ui.core.Control",
      "multiple": true,
      "slot": "accounts"
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
    "avatarClick": {
      "parameters": {}
    },
    "manageAccountClick": {
      "parameters": {}
    },
    "editAccountsClick": {
      "parameters": {}
    },
    "changeAccount": {
      "parameters": {
        "prevSelectedAccount": {
          "type": "any"
        },
        "selectedAccount": {
          "type": "any"
        }
      }
    },
    "itemClick": {
      "parameters": {
        "item": {
          "type": "any"
        }
      }
    },
    "open": {
      "parameters": {}
    },
    "close": {
      "parameters": {}
    },
    "signOutClick": {
      "parameters": {}
    }
  },
  "getters": [],
  "methods": [],
  "defaultAggregation": "menuItems",
  "library": "@ui5/webcomponents-fiori.library",
  "designtime": "@ui5/webcomponents-fiori/designtime/UserMenu.designtime"
}
  });


  return WrapperClass;

});
