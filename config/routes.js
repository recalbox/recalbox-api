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

    // AUDIO
    {
        id: "audio",
        url: "/audio",
        controller: "@api.controllers.Audio",
        action: "getAudio",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "audio.device",
        url: "/audio/device",
        controller: "@api.controllers.Audio",
        action: "getAudioDevice",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "audio.device:update",
        url: "/audio/device",
        controller: "@api.controllers.Audio",
        action: "setAudioDevice",
        policies: ["methodIsPut"]
    },
    {
        id: "audio.volume",
        url: "/audio/volume",
        controller: "@api.controllers.Audio",
        action: "getAudioVolume",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "audio.volume:update",
        url: "/audio/volume",
        controller: "@api.controllers.Audio",
        action: "setAudioVolume",
        policies: ["methodIsPut"]
    },
    {
        id: "audio.bgmusic",
        url: "/audio/bgmusic",
        controller: "@api.controllers.Audio",
        action: "getAudioBackgroundMusic",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "audio.bgmusic:update",
        url: "/audio/bgmusic",
        controller: "@api.controllers.Audio",
        action: "setAudioBackgroundMusic",
        policies: ["methodIsPut"]
    },

    // Controllers
    {
        id: "controllers.ps3",
        url: "/controllers/ps3",
        controller: "@api.controllers.Controller",
        action: "getControllerPs3",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.ps3.enabled",
        url: "/controllers/ps3/enabled",
        controller: "@api.controllers.Controller",
        action: "getControllerPs3Enabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.ps3.enabled:update",
        url: "/controllers/ps3/enabled",
        controller: "@api.controllers.Controller",
        action: "setControllerPs3Enabled",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.ps3.driver",
        url: "/controllers/ps3/driver",
        controller: "@api.controllers.Controller",
        action: "getControllerPs3Driver",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.ps3.driver:update",
        url: "/controllers/ps3/driver",
        controller: "@api.controllers.Controller",
        action: "setControllerPs3Driver",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.xboxdrv",
        url: "/controllers/xboxdrv",
        controller: "@api.controllers.Controller",
        action: "getControllerXboxdrv",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.xboxdrv.enabled",
        url: "/controllers/xboxdrv/enabled",
        controller: "@api.controllers.Controller",
        action: "getControllerXboxdrvEnabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.xboxdrv.enabled:update",
        url: "/controllers/xboxdrv/enabled",
        controller: "@api.controllers.Controller",
        action: "setControllerXboxdrvEnabled",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.xboxdrv.nbcontrols",
        url: "/controllers/xboxdrv/nbcontrols",
        controller: "@api.controllers.Controller",
        action: "getControllerXboxdrvNbControls",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.xboxdrv.nbcontrols:update",
        url: "/controllers/xboxdrv/nbcontrols",
        controller: "@api.controllers.Controller",
        action: "setControllerXboxdrvNbControls",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.gpio",
        url: "/controllers/gpio",
        controller: "@api.controllers.Controller",
        action: "getControllerGpio",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.gpio.enabled",
        url: "/controllers/gpio/enabled",
        controller: "@api.controllers.Controller",
        action: "getControllerGpioEnabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.gpio.enabled:update",
        url: "/controllers/gpio/enabled",
        controller: "@api.controllers.Controller",
        action: "setControllerGpioEnabled",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.gpio.args",
        url: "/controllers/gpio/args",
        controller: "@api.controllers.Controller",
        action: "getControllerGpioArgs",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.gpio.args:update",
        url: "/controllers/gpio/args",
        controller: "@api.controllers.Controller",
        action: "setControllerGpioArgs",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.db9",
        url: "/controllers/db9",
        controller: "@api.controllers.Controller",
        action: "getControllerDb9",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.db9.enabled",
        url: "/controllers/db9/enabled",
        controller: "@api.controllers.Controller",
        action: "getControllerDb9Enabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.db9.enabled:update",
        url: "/controllers/db9/enabled",
        controller: "@api.controllers.Controller",
        action: "setControllerDb9Enabled",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.db9.args",
        url: "/controllers/db9/args",
        controller: "@api.controllers.Controller",
        action: "getControllerDb9Args",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.db9.args:update",
        url: "/controllers/db9/args",
        controller: "@api.controllers.Controller",
        action: "setControllerDb9Args",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.gamecon",
        url: "/controllers/gamecon",
        controller: "@api.controllers.Controller",
        action: "getControllerGamecon",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.gamecon.enabled",
        url: "/controllers/gamecon/enabled",
        controller: "@api.controllers.Controller",
        action: "getControllerGameconEnabled",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.gamecon.enabled:update",
        url: "/controllers/gamecon/enabled",
        controller: "@api.controllers.Controller",
        action: "setControllerGameconEnabled",
        policies: ["methodIsPut"]
    },
    {
        id: "controllers.gamecon.args",
        url: "/controllers/gamecon/args",
        controller: "@api.controllers.Controller",
        action: "getControllerGameconArgs",
        policies: ["methodIsGetOrHead"]
    },
    {
        id: "controllers.gamecon.args:update",
        url: "/controllers/gamecon/args",
        controller: "@api.controllers.Controller",
        action: "setControllerGameconArgs",
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

