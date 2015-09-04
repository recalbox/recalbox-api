var packageSettings = require(__dirname + "/../package");
var routes = require("./routes");

module.exports = {
    api:
    {
        mainConfigurationFilePath: "/recalbox/share/system/recalbox.conf"
    },

    // Command line configuration
    console:
    {
        title: "Recalbox API " + packageSettings.version
    },

    // Server configuration
    server: {
        port: 1337,
        middlewares: [
            // Response formatter
            // @todo Create a project for that
            "@api.formatMiddleware",

            // The router to handle URIs
            "@router.middleware"
        ]
    },

    // Configuration of the router bundle
    router: {
        // The routes
        routes: routes
    }

};
