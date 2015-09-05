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
        policies: ["methodIsGet"]
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
        policies: ["methodIsGet"]
    },
    {
        id: "kodi.enabled:update",
        url: "/kodi/enabled",
        controller: "@api.controllers.Kodi",
        action: "setKodiEnabled",
        policies: ["methodIsPut"]
    },

    // BIOS
    {
        id: "bios",
        url: "/bios",
        controller: "@api.controllers.Bios",
        action: "listBios",
        policies: ["methodIsGet"]
    }
];

