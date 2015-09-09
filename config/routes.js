module.exports = [
    // The homepage
    {
        id: "home",
        url: "/",
        controller: "@api.controllers.Home",
        action: "index"
    },

    // The main configuration
    {
        id: "configuration",
        url: "/configuration",
        controller: "@api.controllers.Configuration",
        action: "getConfiguration",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "configuration:update",
        url: "/configuration",
        controller: "@api.controllers.Configuration",
        action: "setConfiguration",
        policies: ["methodIsPut"]
    },

    // Kodi
    {
        id: "kodi",
        url: "/kodi",
        controller: "@api.controllers.Kodi",
        action: "getKodi"
    },
    {
        id: "kodi.enabled",
        url: "/kodi/enabled",
        controller: "@api.controllers.Kodi",
        action: "getKodiEnabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "kodi.enabled:update",
        url: "/kodi/enabled",
        controller: "@api.controllers.Kodi",
        action: "setKodiEnabled",
        policies: ["methodIsPut"]
    },
    {
        id: "kodi.atstartup",
        url: "/kodi/atstartup",
        controller: "@api.controllers.Kodi",
        action: "getKodiAtstartup",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "kodi.atstartup:update",
        url: "/kodi/atstartup",
        controller: "@api.controllers.Kodi",
        action: "setKodiAtstartup",
        policies: ["methodIsPut"]
    },
    {
        id: "kodi.xbutton",
        url: "/kodi/xbutton",
        controller: "@api.controllers.Kodi",
        action: "getKodiXbutton",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "kodi.xbutton:update",
        url: "/kodi/xbutton",
        controller: "@api.controllers.Kodi",
        action: "setKodiXbutton",
        policies: ["methodIsPut"]
    },

    // WIFI
    {
        id: "wifi",
        url: "/wifi",
        controller: "@api.controllers.Wifi",
        action: "getWifi"
    },
    {
        id: "wifi.enabled",
        url: "/wifi/enabled",
        controller: "@api.controllers.Wifi",
        action: "getWifiEnabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "wifi.enabled:update",
        url: "/wifi/enabled",
        controller: "@api.controllers.Wifi",
        action: "setWifiEnabled",
        policies: ["methodIsPut"]
    },
    {
        id: "wifi.ssid",
        url: "/wifi/ssid",
        controller: "@api.controllers.Wifi",
        action: "getWifiSsid",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "wifi.ssid:update",
        url: "/wifi/ssid",
        controller: "@api.controllers.Wifi",
        action: "setWifiSsid",
        policies: ["methodIsPut"]
    },
    {
        id: "wifi.key",
        url: "/wifi/key",
        controller: "@api.controllers.Wifi",
        action: "getWifiKey",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "wifi.key:update",
        url: "/wifi/key",
        controller: "@api.controllers.Wifi",
        action: "setWifiKey",
        policies: ["methodIsPut"]
    },

    // BIOS
    {
        id: "bios",
        url: "/bios",
        controller: "@api.controllers.Bios",
        action: "listBios",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "bios:add",
        url: "/bios",
        controller: "@api.controllers.Bios",
        action: "addBios",
        policies: ["methodIsPost"]
    }
];

