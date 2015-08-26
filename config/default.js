var packageSettings = require(__dirname + "/../package");
var routes = require("./routes");

module.exports = {
    api:
    {
    },

    // Command line configuration
    console:
    {
        title: "Recalbox API " + packageSettings.version
    },

    // Server configuration
    server: {
        port: 8002,
        middlewares: [
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
