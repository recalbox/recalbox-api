var packageSettings = require(__dirname + "/../package");

module.exports = {
    "api":
    {
    },

    "console":
    {
        "title": "Recalbox API " + packageSettings.version
    },

    "server": {
        "port": 7521,
        "middlewares": [
        ]
    }
};
