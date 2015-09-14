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

    // Miscellaneous
    {
        id: "hostname",
        url: "/hostname",
        controller: "@api.controllers.Configuration",
        action: "getHostname",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "hostname:update",
        url: "/hostname",
        controller: "@api.controllers.Configuration",
        action: "setHostname",
        policies: ["methodIsPut"]
    },
    {
        id: "locale",
        url: "/locale",
        controller: "@api.controllers.Configuration",
        action: "getLocale",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "locale:update",
        url: "/locale",
        controller: "@api.controllers.Configuration",
        action: "setLocale",
        policies: ["methodIsPut"]
    },
    {
        id: "keyboardlayout",
        url: "/keyboardlayout",
        controller: "@api.controllers.Configuration",
        action: "getKeyboardLayout",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "keyboardlayout:update",
        url: "/keyboardlayout",
        controller: "@api.controllers.Configuration",
        action: "setKeyboardLayout",
        policies: ["methodIsPut"]
    },
    {
        id: "timezone",
        url: "/timezone",
        controller: "@api.controllers.Configuration",
        action: "getTimezone",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "timezone:update",
        url: "/timezone",
        controller: "@api.controllers.Configuration",
        action: "setTimezone",
        policies: ["methodIsPut"]
    },
    {
        id: "updates.enabled",
        url: "/updates/enabled",
        controller: "@api.controllers.Configuration",
        action: "getUpdatesEnabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "updates.enabled:update",
        url: "/updates/enabled",
        controller: "@api.controllers.Configuration",
        action: "setUpdatesEnabled",
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
    },

    // Game systems
    {
        id: "systems",
        url: "/systems",
        controller: "@api.controllers.GameSystem",
        action: "getSystems",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "system.roms",
        url: "/systems/:id/roms",
        controller: "@api.controllers.GameSystem",
        action: "getRoms",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "system.roms:add",
        url: "/systems/:id/roms",
        controller: "@api.controllers.GameSystem",
        action: "addRom",
        policies: ["methodIsPost"]
    },
];

