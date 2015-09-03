module.exports = [
    {
        id: "home",
        url: "/",
        controller: "@api.controllers.Home",
        action: "index"
    },
    {
        id: "configuration",
        url: "/configuration",
        controller: "@api.controllers.Configuration",
        action: "index"
    },
    {
        id: "kodi",
        url: "/kodi",
        controller: "@api.controllers.Configuration",
        action: "kodi"
    },
    {
        id: "kodi.enabled",
        url: "/kodi/enabled",
        controller: "@api.controllers.Configuration",
        action: "kodiEnabled"
    }
];

